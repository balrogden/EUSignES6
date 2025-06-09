export var EUFS = {
  ops_table: null,
  linkedFileNodes: [],
  mount_path: "/eufs_mount",
  initialized: false,
  mount: function (mount) {
    return EUFS.createNode(null, "/eufs_mount", 16384 | 511, 0);
  },
  createNode: function (parent, name, mode, dev) {
    if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
      throw new FS.ErrnoError(ERRNO_CODES.EPERM);
    }
    if (!EUFS.ops_table) {
      EUFS.ops_table = {
        dir: {
          node: {
            getattr: EUFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
            lookup: EUFS.node_ops.lookup,
            mknod: EUFS.node_ops.mknod,
            rename: MEMFS.node_ops.rename,
            unlink: MEMFS.node_ops.unlink,
            rmdir: MEMFS.node_ops.rmdir,
            readdir: MEMFS.node_ops.readdir,
            symlink: MEMFS.node_ops.symlink,
          },
          stream: { llseek: MEMFS.stream_ops.llseek },
        },
        file: {
          node: {
            getattr: EUFS.node_ops.getattr,
            setattr: MEMFS.node_ops.setattr,
          },
          stream: {
            llseek: EUFS.stream_ops.llseek,
            read: EUFS.stream_ops.read,
            write: EUFS.stream_ops.write,
            allocate: EUFS.stream_ops.allocate,
            mmap: EUFS.stream_ops.mmap,
          },
        },
        link: MEMFS.ops_table.link,
        chrdev: MEMFS.ops_table.chrdev,
      };
    }
    var node = FS.createNode(parent, name, mode, dev);
    if (FS.isDir(node.mode)) {
      node.node_ops = EUFS.ops_table.dir.node;
      node.stream_ops = EUFS.ops_table.dir.stream;
      node.contents = {};
    } else if (FS.isFile(node.mode)) {
      var filePath = FS.getPath(node);
      var fileNode = EUFS.linkedFileNodes[filePath];
      if (fileNode === undefined || fileNode == null) {
        throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
      }
      node.node_ops = EUFS.ops_table.file.node;
      node.stream_ops = EUFS.ops_table.file.stream;
      node.contents = new Uint8Array(0);
      node.usedBytes = 0;
      node.file = fileNode.file;
      node.simulateWritting = fileNode.simulateWritting;
      fileNode.node = node;
    } else if (FS.isLink(node.mode)) {
      node.node_ops = EUFS.ops_table.link.node;
      node.stream_ops = EUFS.ops_table.link.stream;
    } else if (FS.isChrdev(node.mode)) {
      node.node_ops = EUFS.ops_table.chrdev.node;
      node.stream_ops = EUFS.ops_table.chrdev.stream;
    }
    node.timestamp = Date.now();
    if (parent) {
      parent.contents[name] = node;
    }
    return node;
  },
  sliceFile: function (file, start, end) {
    var blob;
    if (file.slice) {
      blob = file.slice(start, end);
    } else if (file.webkitSlice) {
      blob = file.webkitSlice(start, end);
    } else if (file.mozSlice) {
      blob = file.mozSlice(start, end);
    }
    return blob;
  },
  node_ops: {
    getattr: function (node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.file.size;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.timestamp);
      attr.mtime = new Date(node.timestamp);
      attr.ctime = new Date(node.timestamp);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    },
    setattr: function (node, attr) {
      if (attr.mode !== undefined) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== undefined) {
        node.timestamp = attr.timestamp;
      }
    },
    lookup: function (parent, name) {
      throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
    },
    mknod: function (parent, name, mode, dev) {
      return EUFS.createNode(parent, name, mode, dev);
    },
  },
  stream_ops: {
    read: function (stream, buffer, offset, length, position) {
      if (!length) return 0;
      var file = stream.node.file;
      if (position >= file.size) return 0;
      var fileReader = new FileReaderSync();
      var size = Math.min(file.size - position, length);
      var blob = EUFS.sliceFile(file, position, position + size);
      var arrayBuffer = fileReader.readAsArrayBuffer(blob);
      var array = new Uint8Array(arrayBuffer);
      if (size > 8 && array.subarray) {
        buffer.set(array, offset);
      } else {
        for (var i = 0; i < size; i++) buffer[offset + i] = array[i];
      }
      return size;
    },
    write: function (stream, buffer, offset, length, position, canOwn) {
      if (!length) return 0;
      var node = stream.node;
      node.timestamp = Date.now();
      if (node.usedBytes === 0 && position === 0) {
        if (!node.simulateWritting) {
          node.contentsABuf = new ArrayBuffer(length);
          node.contents = new Uint8Array(node.contentsABuf);
          node.contents.set(buffer.subarray(offset, offset + length), 0);
        }
        node.usedBytes = length;
      } else if (position + length <= node.usedBytes) {
        if (!node.simulateWritting) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
        }
      } else {
        var fileSize = position + length;
        if (!node.simulateWritting) {
          if (fileSize > node.contentsABuf.byteLength) {
            var fileBufferSize;
            var fileBuffer = null;
            fileBufferSize =
              fileSize < 50 * 1024 * 1024
                ? fileSize * 2
                : fileSize + 10 * 1024 * 1024;
            while (1) {
              try {
                fileBuffer = new ArrayBuffer(fileBufferSize);
              } catch (e) {
                fileBuffer = null;
              }
              if (fileBuffer != null) break;
              fileBufferSize -= fileSize / 2;
              if (fileBufferSize < fileSize) return -1;
            }
            node.contentsABuf = fileBuffer;
            var contents = new Uint8Array(fileBuffer);
            contents.set(node.contents, 0);
            node.contents = contents;
            fileBuffer = null;
            contents = null;
          }
          node.contents.set(buffer.subarray(offset, offset + length), position);
        }
        node.usedBytes = fileSize;
      }
      return length;
    },
    llseek: function (stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      }
      return position;
    },
    allocate: function (stream, offset, length) {
      throw FS.genericErrors[ERRNO_CODES.ENOENT];
    },
    mmap: function (stream, buffer, offset, length, position, prot, flags) {
      throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
    },
  },
  readFileAsUint8Array: function (file) {
    var filePath = EUFS.getFilePath(file);
    var fileNode = EUFS.linkedFileNodes[filePath];
    if (!fileNode) return null;
    if (
      fileNode.node.usedBytes == 0 ||
      !fileNode.node.contents ||
      fileNode.simulateWritting
    ) {
      return new Uint8Array(0);
    }
    return new Uint8Array(
      fileNode.node.contentsABuf,
      0,
      fileNode.node.usedBytes
    );
  },
  getFilePath: function (file) {
    var fileName = typeof file == "string" ? file : file.name;
    if (fileName.normalize) fileName = fileName.normalize();
    return EUFS.mount_path + "/" + fileName;
  },
  link: function (file, simulateWritting) {
    try {
      var filePath = EUFS.getFilePath(file);
      if (EUFS.linkedFileNodes[filePath]) return false;
      if (typeof file == "string") file = { name: file, size: 0 };
      EUFS.linkedFileNodes[filePath] = {
        file: file,
        node: null,
        simulateWritting: !!simulateWritting,
      };
      var fd = FS.open(filePath, "w");
      FS.close(fd);
      return true;
    } catch (e) {}
    return false;
  },
  unlink: function (file) {
    try {
      var filePath = EUFS.getFilePath(file);
      var fileNode = EUFS.linkedFileNodes[filePath];
      if (fileNode) {
        fileNode.node.contentsABuf = null;
        fileNode.node.contents = null;
        fileNode = null;
        delete EUFS.linkedFileNodes[filePath];
        FS.unlink(filePath);
      }
    } catch (e) {}
  },
  staticInit: function () {
    try {
      if (EUFS.initialized) return true;
      FS.mkdir(EUFS.mount_path);
      FS.mount(EUFS, null, EUFS.mount_path);
      EUFS.initialized = true;
      return true;
    } catch (e) {
      return false;
    }
  },
};
