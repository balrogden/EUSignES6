import { EUFS } from "./euscp_eufs.js"
export {
  EU_DEFAULT_LANG,
  EU_MAX_DATA_SIZE_MB,
  EU_ONE_MB,
  EU_LIBRARY_STACK_MB,
  EU_LIBRARY_MEMORY_MB,
  EU_ERROR_NONE,
  EU_ERROR_UNKNOWN,
  EU_ERROR_JS_READ_FILE,
  EU_ERRORS_STRINGS,
  EU_WARNING_END_OF_ENUM,
  EU_SYSTEMTIME_SIZE,
  EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER,
  EU_CERT_KEY_TYPE_DSTU4145,
  EU_CERT_KEY_TYPE_RSA,
  EU_CERT_KEY_TYPE_ECDSA,
  EU_ERROR_CERT_NOT_FOUND,
  EU_ERROR_NOT_SUPPORTED,
  EU_SUBJECT_TYPE_END_USER,
  EU_KEY_USAGE_DIGITAL_SIGNATURE,
  UA_OID_EXT_KEY_USAGE_STAMP,
  EndUserFileStoreSettings,
  EndUserCertificate,
  setEUSignCPModuleInitialized,
  EUSignCP,
  Module,
 XMLHTTPProxyService,
 XMLHTTPDirectAccess,
 XMLHTTPDirectAccessAddresses,
 CP1251PointerToUTF8,
};

//=============================================================================
if (typeof navigator == "undefined") {
  navigator = {
    userAgent: "",
  };
}

if (!Uint8Array.prototype.slice) {
  Uint8Array.prototype.slice = Uint8Array.prototype.subarray;
}

//=============================================================================

var EU_ONE_MB = 1024 * 1024;
var EU_MAX_DATA_SIZE_MB =
  typeof EU_MAX_DATA_SIZE_MB != "undefined"
    ? EU_MAX_DATA_SIZE_MB
    : isMobileBrowser()
    ? 2
    : 5;
var EU_LIBRARY_STACK_MB = 5;
var EU_LIBRARY_MEMORY_MB = 5;

var EU_MAX_P7S_CONTAINER_SIZE = 100 * EU_ONE_MB;
var EU_MAX_P7E_CONTAINER_SIZE = 100 * EU_ONE_MB;

//-----------------------------------------------------------------------------

var EU_DEFAULT_LANG = 0;
var EU_UA_LANG = 1;
var EU_RU_LANG = 2;
var EU_EN_LANG = 3;

//-----------------------------------------------------------------------------

var EU_SUBJECT_TYPE_UNDIFFERENCED = 0;
var EU_SUBJECT_TYPE_CA = 1;
var EU_SUBJECT_TYPE_CA_SERVER = 2;
var EU_SUBJECT_TYPE_RA_ADMINISTRATOR = 3;
var EU_SUBJECT_TYPE_END_USER = 4;

var EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0;
var EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1;
var EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2;
var EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3;

//-----------------------------------------------------------------------------

var EU_CERT_KEY_TYPE_UNKNOWN = 0x00;
var EU_CERT_KEY_TYPE_DSTU4145 = 0x01;
var EU_CERT_KEY_TYPE_RSA = 0x02;
var EU_CERT_KEY_TYPE_ECDSA = 0x04;

//-----------------------------------------------------------------------------

var EU_KEY_USAGE_UNKNOWN = 0x0000;
var EU_KEY_USAGE_DIGITAL_SIGNATURE = 0x0001;
var EU_KEY_USAGE_KEY_AGREEMENT = 0x0010;

//-----------------------------------------------------------------------------

var EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1;
var EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2;

//-----------------------------------------------------------------------------

var EU_RECIPIENT_INFO_TYPE_ISSUER_SERIAL = 1;
var EU_RECIPIENT_INFO_TYPE_KEY_ID = 2;

//-----------------------------------------------------------------------------

var EU_CTX_HASH_ALGO_UNKNOWN = 0;
var EU_CTX_HASH_ALGO_GOST34311 = 1;
var EU_CTX_HASH_ALGO_SHA160 = 2;
var EU_CTX_HASH_ALGO_SHA224 = 3;
var EU_CTX_HASH_ALGO_SHA256 = 4;

//-----------------------------------------------------------------------------

var EU_CTX_SIGN_UNKNOWN = 0;
var EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1;
var EU_CTX_SIGN_RSA_WITH_SHA = 2;
var EU_CTX_SIGN_ECDSA_WITH_SHA = 3;

//-----------------------------------------------------------------------------

var EU_CCS_TYPE_REVOKE = 1;
var EU_CCS_TYPE_HOLD = 2;

//-----------------------------------------------------------------------------

var EU_REVOCATION_REASON_UNKNOWN = 0;
var EU_REVOCATION_REASON_KEY_COMPROMISE = 1;
var EU_REVOCATION_REASON_NEW_ISSUED = 2;

//-----------------------------------------------------------------------------

var EU_ERROR_NONE = 0x0000;
var EU_ERROR_UNKNOWN = 0xffff;
var EU_ERROR_NOT_SUPPORTED = 0xfffe;

var EU_ERROR_NOT_INITIALIZED = 0x0001;
var EU_ERROR_BAD_PARAMETER = 0x0002;
var EU_ERROR_LIBRARY_LOAD = 0x0003;
var EU_ERROR_READ_SETTINGS = 0x0004;
var EU_ERROR_TRANSMIT_REQUEST = 0x0005;
var EU_ERROR_MEMORY_ALLOCATION = 0x0006;
var EU_WARNING_END_OF_ENUM = 0x0007;
var EU_ERROR_PROXY_NOT_AUTHORIZED = 0x0008;
var EU_ERROR_NO_GUI_DIALOGS = 0x0009;
var EU_ERROR_DOWNLOAD_FILE = 0x000a;
var EU_ERROR_WRITE_SETTINGS = 0x000b;
var EU_ERROR_CANCELED_BY_GUI = 0x000c;
var EU_ERROR_OFFLINE_MODE = 0x000d;

var EU_ERROR_KEY_MEDIAS_FAILED = 0x0011;
var EU_ERROR_KEY_MEDIAS_ACCESS_FAILED = 0x0012;
var EU_ERROR_KEY_MEDIAS_READ_FAILED = 0x0013;
var EU_ERROR_KEY_MEDIAS_WRITE_FAILED = 0x0014;
var EU_WARNING_KEY_MEDIAS_READ_ONLY = 0x0015;
var EU_ERROR_KEY_MEDIAS_DELETE = 0x0016;
var EU_ERROR_KEY_MEDIAS_CLEAR = 0x0017;
var EU_ERROR_BAD_PRIVATE_KEY = 0x0018;

var EU_ERROR_PKI_FORMATS_FAILED = 0x0021;
var EU_ERROR_CSP_FAILED = 0x0022;
var EU_ERROR_BAD_SIGNATURE = 0x0023;
var EU_ERROR_AUTH_FAILED = 0x0024;
var EU_ERROR_NOT_RECEIVER = 0x0025;

var EU_ERROR_STORAGE_FAILED = 0x0031;
var EU_ERROR_BAD_CERT = 0x0032;
var EU_ERROR_CERT_NOT_FOUND = 0x0033;
var EU_ERROR_INVALID_CERT_TIME = 0x0034;
var EU_ERROR_CERT_IN_CRL = 0x0035;
var EU_ERROR_BAD_CRL = 0x0036;
var EU_ERROR_NO_VALID_CRLS = 0x0037;

var EU_ERROR_GET_TIME_STAMP = 0x0041;
var EU_ERROR_BAD_TSP_RESPONSE = 0x0042;
var EU_ERROR_TSP_SERVER_CERT_NOT_FOUND = 0x0043;
var EU_ERROR_TSP_SERVER_CERT_INVALID = 0x0044;

var EU_ERROR_GET_OCSP_STATUS = 0x0051;
var EU_ERROR_BAD_OCSP_RESPONSE = 0x0052;
var EU_ERROR_CERT_BAD_BY_OCSP = 0x0053;
var EU_ERROR_OCSP_SERVER_CERT_NOT_FOUND = 0x0054;
var EU_ERROR_OCSP_SERVER_CERT_INVALID = 0x0055;

var EU_ERROR_LDAP_ERROR = 0x0061;

var EU_ERROR_JS_ERRORS = 0x10000;
var EU_ERROR_JS_BROWSER_NOT_SUPPORTED = 0x10001;
var EU_ERROR_JS_LIBRARY_NOT_INITIALIZED = 0x10002;
var EU_ERROR_JS_LIBRARY_LOAD = 0x10003;
var EU_ERROR_JS_LIBRARY_ERROR = 0x10004;

var EU_ERROR_JS_OPEN_FILE = 0x10010;
var EU_ERROR_JS_READ_FILE = 0x10011;
var EU_ERROR_JS_WRITE_FILE = 0x10012;

//=============================================================================

var EU_SYSTEMTIME_SIZE = 16;

var EU_CERT_OWNER_INFO_SIZE = 72;
var EU_SIGN_INFO_SIZE = 96;
var EU_SENDER_INFO_SIZE = 96;
var EU_CRL_INFO_SIZE = 48;
var EU_CERT_INFO_SIZE = 228;
var EU_CRL_DETAILED_INFO_SIZE = 60;
var EU_TIME_INFO_SIZE = 8 + EU_SYSTEMTIME_SIZE;

var EU_KEY_MEDIA_SIZE = 73;
var EU_USER_INFO_SIZE = 1554;
var EU_SYSTEMTIME_SIZE = 16;

var EU_PASS_MAX_LENGTH = 65;
var EU_PATH_MAX_LENGTH = 257;

var EU_COMMON_NAME_MAX_LENGTH = 65;
var EU_LOCALITY_MAX_LENGTH = 129;
var EU_STATE_MAX_LENGTH = 129;
var EU_ORGANIZATION_MAX_LENGTH = 65;
var EU_ORG_UNIT_MAX_LENGTH = 65;
var EU_TITLE_MAX_LENGTH = 65;
var EU_STREET_MAX_LENGTH = 129;
var EU_PHONE_MAX_LENGTH = 33;
var EU_SURNAME_MAX_LENGTH = 41;
var EU_GIVENNAME_MAX_LENGTH = 33;
var EU_EMAIL_MAX_LENGTH = 129;
var EU_ADDRESS_MAX_LENGTH = 257;
var EU_EDRPOU_MAX_LENGTH = 11;
var EU_DRFO_MAX_LENGTH = 11;
var EU_NBU_MAX_LENGTH = 7;
var EU_SPFM_MAX_LENGTH = 7;
var EU_O_CODE_MAX_LENGTH = 33;
var EU_OU_CODE_MAX_LENGTH = 33;
var EU_USER_CODE_MAX_LENGTH = 33;
var EU_UPN_MAX_LENGTH = 257;
var EU_COUNTRY_MAX_LENGTH = 3;
var EU_UNZR_MAX_LENGTH = 15;
var EU_INFORMATION_MAX_LENGTH = 513;
var EU_PASS_PHRASE_MAX_LENGTH = 129;

var EU_KEYS_TYPE_NONE = 0;
var EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOST = 1;
var EU_KEYS_TYPE_RSA_WITH_SHA = 2;

var EU_KEYS_LENGTH_DS_UA_191 = 1;
var EU_KEYS_LENGTH_DS_UA_257 = 2;
var EU_KEYS_LENGTH_DS_UA_307 = 3;

var EU_KEYS_LENGTH_KEP_UA_257 = 1;
var EU_KEYS_LENGTH_KEP_UA_431 = 2;
var EU_KEYS_LENGTH_KEP_UA_571 = 3;

var EU_KEYS_LENGTH_DS_RSA_1024 = 1;
var EU_KEYS_LENGTH_DS_RSA_2048 = 2;
var EU_KEYS_LENGTH_DS_RSA_3072 = 3;
var EU_KEYS_LENGTH_DS_RSA_4096 = 4;

var EU_CONTENT_ENC_ALGO_TDES_CBC = 4;
var EU_CONTENT_ENC_ALGO_AES_256_CBC = 7;

var EU_HEADER_CA_TYPE = "UA1";
var EU_HEADER_PART_TYPE_SIGNED = 1;
var EU_HEADER_PART_TYPE_ENCRYPTED = 2;
var EU_HEADER_PART_TYPE_STAMPED = 3;
var EU_HEADER_PART_TYPE_CERTCRYPT = 4;

var EU_HEADER_MAX_CA_TYPE_SIZE = 3;

var EU_KEY_ID_ACCOUNTANT = 1;
var EU_KEY_ID_DIRECTOR = 2;
var EU_KEY_ID_STAMP = 3;

var EU_SIGN_TYPE_UNKNOWN = 0;
var EU_SIGN_TYPE_CADES_BES = 1;
var EU_SIGN_TYPE_CADES_T = 4;
var EU_SIGN_TYPE_CADES_C = 8;
var EU_SIGN_TYPE_CADES_X_LONG = 16;
var EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128;

var EU_KEYS_REQUEST_TYPE_UA_DS = 1;
var EU_KEYS_REQUEST_TYPE_UA_KEP = 2;
var EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3;

//=============================================================================

var EU_RESOLVE_OIDS_PARAMETER = "ResolveOIDs";
var EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER = "MakePKeyPFXContainer";
var EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER =
  "SignIncludeContentTimeStamp";
var EU_SIGN_TYPE_PARAMETER = "SignType";
var EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER = "SignIncludeCACertificates";
var EU_FORCE_USE_TSP_FROM_SETTINGS_PARAMETER = "ForceUseTSPFromSettings";

var UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";

var EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER = "CheckPrivateKey";
var EU_RESOLVE_OIDS_CONTEXT_PARAMETER = "ResolveOIDs";
var EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER = "ExportableContext";

//=============================================================================

var CP1251Table = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  20: 20,
  21: 21,
  22: 22,
  23: 23,
  24: 24,
  25: 25,
  26: 26,
  27: 27,
  28: 28,
  29: 29,
  30: 30,
  31: 31,
  32: 32,
  33: 33,
  34: 34,
  35: 35,
  36: 36,
  37: 37,
  38: 38,
  39: 39,
  40: 40,
  41: 41,
  42: 42,
  43: 43,
  44: 44,
  45: 45,
  46: 46,
  47: 47,
  48: 48,
  49: 49,
  50: 50,
  51: 51,
  52: 52,
  53: 53,
  54: 54,
  55: 55,
  56: 56,
  57: 57,
  58: 58,
  59: 59,
  60: 60,
  61: 61,
  62: 62,
  63: 63,
  64: 64,
  65: 65,
  66: 66,
  67: 67,
  68: 68,
  69: 69,
  70: 70,
  71: 71,
  72: 72,
  73: 73,
  74: 74,
  75: 75,
  76: 76,
  77: 77,
  78: 78,
  79: 79,
  80: 80,
  81: 81,
  82: 82,
  83: 83,
  84: 84,
  85: 85,
  86: 86,
  87: 87,
  88: 88,
  89: 89,
  90: 90,
  91: 91,
  92: 92,
  93: 93,
  94: 94,
  95: 95,
  96: 96,
  97: 97,
  98: 98,
  99: 99,
  100: 100,
  101: 101,
  102: 102,
  103: 103,
  104: 104,
  105: 105,
  106: 106,
  107: 107,
  108: 108,
  109: 109,
  110: 110,
  111: 111,
  112: 112,
  113: 113,
  114: 114,
  115: 115,
  116: 116,
  117: 117,
  118: 118,
  119: 119,
  120: 120,
  121: 121,
  122: 122,
  123: 123,
  124: 124,
  125: 125,
  126: 126,
  127: 127,
  1027: 129,
  8225: 135,
  1046: 198,
  8222: 132,
  1047: 199,
  1168: 165,
  1048: 200,
  1113: 154,
  1049: 201,
  1045: 197,
  1050: 202,
  1028: 170,
  160: 160,
  1040: 192,
  1051: 203,
  164: 164,
  166: 166,
  167: 167,
  169: 169,
  171: 171,
  172: 172,
  173: 173,
  174: 174,
  1053: 205,
  176: 176,
  177: 177,
  1114: 156,
  181: 181,
  182: 182,
  183: 183,
  8221: 148,
  187: 187,
  1029: 189,
  1056: 208,
  1057: 209,
  1058: 210,
  8364: 136,
  1112: 188,
  1115: 158,
  1059: 211,
  1060: 212,
  1030: 178,
  1061: 213,
  1062: 214,
  1063: 215,
  1116: 157,
  1064: 216,
  1065: 217,
  1031: 175,
  1066: 218,
  1067: 219,
  1068: 220,
  1069: 221,
  1070: 222,
  1032: 163,
  8226: 149,
  1071: 223,
  1072: 224,
  8482: 153,
  1073: 225,
  8240: 137,
  1118: 162,
  1074: 226,
  1110: 179,
  8230: 133,
  1075: 227,
  1033: 138,
  1076: 228,
  1077: 229,
  8211: 150,
  1078: 230,
  1119: 159,
  1079: 231,
  1042: 194,
  1080: 232,
  1034: 140,
  1025: 168,
  1081: 233,
  1082: 234,
  8212: 151,
  1083: 235,
  1169: 180,
  1084: 236,
  1052: 204,
  1085: 237,
  1035: 142,
  1086: 238,
  1087: 239,
  1088: 240,
  1089: 241,
  1090: 242,
  1036: 141,
  1041: 193,
  1091: 243,
  1092: 244,
  8224: 134,
  1093: 245,
  8470: 185,
  1094: 246,
  1054: 206,
  1095: 247,
  1096: 248,
  8249: 139,
  1097: 249,
  1098: 250,
  1044: 196,
  1099: 251,
  1111: 191,
  1055: 207,
  1100: 252,
  1038: 161,
  8220: 147,
  1101: 253,
  8250: 155,
  1102: 254,
  8216: 145,
  1103: 255,
  1043: 195,
  1105: 184,
  1039: 143,
  1026: 128,
  1106: 144,
  8218: 130,
  1107: 131,
  8217: 146,
  1108: 186,
  1109: 190,
};

var UTF8Table = unescape(
  "%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F" +
    "%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F" +
    "%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407" +
    "%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457"
);

//=============================================================================

var EU_ERRORS_STRINGS = [];
var EU_ERRORS_STRINGS_UA = [];
var EU_ERRORS_STRINGS_RU = [];
var EU_ERRORS_STRINGS_EN = [];

EU_ERRORS_STRINGS_UA[EU_ERROR_JS_LIBRARY_LOAD] =
  "Виникла помилка при завантаженні криптографічної бібліотеки";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_BROWSER_NOT_SUPPORTED] =
  "Браузер не підтримується";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_LIBRARY_NOT_INITIALIZED] =
  "Криптографічна бібліотека не ініціалізована";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_LIBRARY_ERROR] =
  "Виникла помилка при взаємодії з криптографічною бібліотекою. Будь ласка, перезавантажте веб-сторінку";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_OPEN_FILE] =
  "Виникла помилка при відкритті файлу";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_READ_FILE] =
  "Виникла помилка при зчитуванні файлу";
EU_ERRORS_STRINGS_UA[EU_ERROR_JS_WRITE_FILE] =
  "Виникла помилка при записі файлу";

EU_ERRORS_STRINGS_RU[EU_ERROR_JS_LIBRARY_LOAD] =
  "Возникла ошибка при загрузке криптографической библиотеки";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_BROWSER_NOT_SUPPORTED] =
  "Браузер не поддерживается";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_LIBRARY_NOT_INITIALIZED] =
  "Криптографическая библиотека не инициализирована";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_LIBRARY_ERROR] =
  "Возникла ошибка при взаимодействии с криптографической библиотекой. Пожалуйста, перезагрузите веб-страницу";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_OPEN_FILE] =
  "Возникла ошибка при открытии файла";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_READ_FILE] =
  "Возникла ошибка при чтении файла";
EU_ERRORS_STRINGS_RU[EU_ERROR_JS_WRITE_FILE] =
  "Возникла ошибка при записи файла";

EU_ERRORS_STRINGS_EN[EU_ERROR_JS_LIBRARY_LOAD] =
  "Error at cryptographic library load";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_BROWSER_NOT_SUPPORTED] =
  "Browser is not supported";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_LIBRARY_NOT_INITIALIZED] =
  "Cryptographic library not initialized";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_LIBRARY_ERROR] =
  "Error at comunication with cryptographic library. Please, reload web page";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_OPEN_FILE] = "Error at open file";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_READ_FILE] = "Error at read file";
EU_ERRORS_STRINGS_EN[EU_ERROR_JS_WRITE_FILE] = "Error at write file";

EU_ERRORS_STRINGS[EU_DEFAULT_LANG] = EU_ERRORS_STRINGS_UA;
EU_ERRORS_STRINGS[EU_UA_LANG] = EU_ERRORS_STRINGS_UA;
EU_ERRORS_STRINGS[EU_RU_LANG] = EU_ERRORS_STRINGS_RU;
EU_ERRORS_STRINGS[EU_EN_LANG] = EU_ERRORS_STRINGS_EN;

//=============================================================================

/*eu_wait = function(first){ 
    return new (function(){ 
        var self = this;
        var callback = function(){
            var args;
            if(self.deferred.length) {
                args = [].slice.call(arguments); 
                args.unshift(callback); 
                self.deferred[0].apply(self, args); 
                self.deferred.shift(); 
            }
        };
        this.deferred = [];
        this.eu_wait = function(run){
            this.deferred.push(run); 
            return self; 
        };
        first(callback);
    });
};*/

//=============================================================================

function isMobileBrowser() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

//=============================================================================

function StringToCString(s) {
  var strLen = s.length;
  var arr = new Uint8Array(strLen + 1);
  for (var i = 0; i < strLen; i++) arr[i] = s.charCodeAt(i);
  arr[strLen] = 0;
  return arr;
}

function StringToArray(s) {
  var utf8 = unescape(encodeURIComponent(s));

  var arr = [];
  for (var i = 0; i < utf8.length; i++) {
    arr.push(utf8.charCodeAt(i));
  }
  return arr;
}

function ArrayToString(arr) {
  var ret = [];

  var length = arr.length;
  if (length > 0 && arr[length - 1] == 0) {
    length -= 1;
  }

  for (var i = 0; i < length; i++) {
    var chr = arr[i];
    if (chr > 0xff) {
      chr &= 0xff;
    }

    ret.push(String.fromCharCode(chr));
  }

  return decodeURIComponent(escape(ret.join("")));
}

function UTF8ToCP1251Array(s) {
  var L = [];
  if (s.normalize) s = s.normalize();

  for (var i = 0; i < s.length; i++) {
    var ord = s.charCodeAt(i);
    if (!(ord in CP1251Table))
      throw "Character " + s.charAt(i) + " isn't supported by win1251!";
    L.push(CP1251Table[ord]);
  }

  L.push(0);

  return L;
}

function CP1251PointerToUTF8(ptr) {
  var t;
  var i = 0;
  var ret = "";

  if (ptr == 0) return "";

  var code2char = function (code) {
    if (code >= 0xc0 && code <= 0xff)
      return String.fromCharCode(code - 0xc0 + 0x0410);
    if (code >= 0x80 && code <= 0xbf) return UTF8Table.charAt(code - 0x80);
    return String.fromCharCode(code);
  };

  while (1) {
    t = Module.HEAPU8[(ptr + i) | 0];
    if (t == 0) break;
    ret += code2char(t);
    i++;
  }

  return ret;
}

function StringToUTF16LEArray(str, zero) {
  var L = [];
  var c;

  if (str.normalize) str = str.normalize();

  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    L.push(c & 0xff);
    L.push((c & 0xff00) >> 8);
  }

  if (zero) {
    L.push(0);
    L.push(0);
  }

  return L;
}

function UTF16LEArrayToString(arr) {
  var i = 0;
  var ret = "";
  var length;

  if (arr.length % 2 != 0) return null;

  length = arr.length;
  if (length > 0 && arr[length - 2] == 0 && arr[length - 1] == 0) {
    length -= 2;
  }

  while (i < length) {
    ret += String.fromCharCode(arr[i] | (arr[i + 1] << 8));
    i += 2;
  }

  return ret;
}

//=============================================================================

var StringEncoder = function (charset, javaCompliant) {
  charset = charset.toUpperCase();

  this.charset = charset;
  this.javaCompliant = javaCompliant;

  if (!StringEncoder.isSupported(charset))
    throw Error("String charset not supported");

  if (charset == "UTF-16LE") {
    this.encode = function (str) {
      return StringToUTF16LEArray(str, !javaCompliant);
    };
    this.decode = UTF16LEArrayToString;
  } else if (charset == "UTF-8") {
    if (javaCompliant) this.encode = StringToArray;
    else {
      this.encode = function (str) {
        var arr = StringToArray(str);
        arr.push(0);
        return arr;
      };
    }
    this.decode = ArrayToString;
  }
};

StringEncoder.isSupported = function (charset) {
  if (charset != "UTF-16LE" && charset != "UTF-8") {
    return false;
  }

  return true;
};

//=============================================================================

function SetClassID(className, classVersion, classPtr) {
  classPtr["Vendor"] = "JSC IIT";
  classPtr["ClassVersion"] = classVersion;
  classPtr["ClassName"] = className;
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function intArrayFromStrings(strArr) {
  if (strArr.length == 0) return [0, 0];

  var resArray = [];
  for (var i = 0; i < strArr.length; i++) {
    var cp1251Arr = UTF8ToCP1251Array(strArr[i]);
    resArray = resArray.concat(cp1251Arr);
  }

  resArray.push(0);

  return resArray;
}

function SystemTimeToDate(time) {
  function getWord() {
    var wordVal = Module.getValue(time, "i16");
    time += 2;
    return wordVal;
  }

  var year = getWord();
  var month = getWord() - 1;
  var dayOfWeek = getWord();
  var day = getWord();
  var hour = getWord();
  var minute = getWord();
  var second = getWord();
  var milliseconds = getWord();

  return new Date(year, month, day, hour, minute, second, milliseconds);
}

function DateToSystemTime(date, pTimePtr) {
  function setWord(value) {
    Module.setValue(pTimePtr, value | 0, "i16");
    pTimePtr += 2;
  }

  setWord(date.getFullYear());
  setWord(date.getMonth() + 1);
  setWord(date.getDay());
  setWord(date.getDate());
  setWord(date.getHours());
  setWord(date.getMinutes());
  setWord(date.getSeconds());
  setWord(date.getMilliseconds());
}

function IsStructureFilled(classPtr, structPtr, variables) {
  return Module.getValue(structPtr, "i32") == EU_TRUE ? true : false;
}

function ClassInitializeMethods(classConstructor, variables, hasSetters) {
  for (var key in variables) {
    var funcName = key.capitalize();

    var getName = variables[key] != "boolean" ? "Get" + funcName : funcName;
    var getBody = new Function("return this." + key + ";");
    classConstructor.prototype[getName] = getBody;

    if (hasSetters) {
      var setName = variables[key] != "boolean" ? "Set" + funcName : funcName;
      var setBody = new Function("value", "this." + key + " = value;");
      classConstructor.prototype[setName] = setBody;
    }
  }
}

function ClassSetDefaultValues(classPtr, variables) {
  for (var key in variables) {
    if (variables[key] == "string") {
      classPtr[key] = "";
    } else if (
      variables[key] == "word" ||
      variables[key] == "int" ||
      variables[key] == "long"
    ) {
      classPtr[key] = 0;
    } else if (variables[key] == "boolean") {
      classPtr[key] = false;
    } else {
      classPtr[key] = null;
    }
  }
}

function StructureToClass(classPtr, structPtr, variables) {
  try {
    for (var key in variables) {
      if (variables[key] == "string") {
        classPtr[key] = CP1251PointerToUTF8(Module.getValue(structPtr, "i8*"));
        structPtr += EU_PTR_SIZE;
      } else if (variables[key] == "word") {
        classPtr[key] = Module.getValue(structPtr, "i16") | 0;
        structPtr += 2;
      } else if (variables[key] == "int") {
        classPtr[key] = Module.getValue(structPtr, "i32") | 0;
        structPtr += 4;
      } else if (variables[key] == "long") {
        classPtr[key] = Module.getValue(structPtr, "i32") | 0;
        structPtr += 4;
      } else if (variables[key] == "boolean") {
        classPtr[key] =
          Module.getValue(structPtr, "i32") == EU_TRUE ? true : false;
        structPtr += 4;
      } else if (variables[key] == "time") {
        classPtr[key] = SystemTimeToDate(structPtr);
        structPtr += EU_SYSTEMTIME_SIZE;
      } else if (variables[key] == "ownerInfo") {
        classPtr[key] = new EndUserOwnerInfo(structPtr);
        structPtr += EU_CERT_OWNER_INFO_SIZE;
      } else if (variables[key] == "timeInfo") {
        var timeInfo = new EndUserTimeInfo(null);
        timeInfo.version = 1;
        timeInfo.isTimeAvail =
          Module.getValue(structPtr, "i32") == EU_TRUE ? true : false;
        timeInfo.isTimeStamp =
          Module.getValue(structPtr + 4, "i32") == EU_TRUE ? true : false;
        timeInfo.time = timeInfo.isTimeAvail
          ? SystemTimeToDate(structPtr + 8)
          : null;

        classPtr[key] = timeInfo;
        structPtr += EU_TIME_INFO_SIZE;
      } else {
        console.error("Invalid type: " + variables[key] + "for key: " + key);
      }
    }
  } catch (e) {
    console.error(
      "Error: function: %s class: %s ex: %s",
      "StructureToClass",
      classPtr.className,
      e.toString()
    );
    classPtr.isFilled = false;
  }
}

//=============================================================================

function ObjectToTransferableObject(classPtr, obj, variables) {
  try {
    for (var key in variables) {
      if (classPtr[key] && classPtr[key].GetTransferableObject)
        obj[key] = classPtr[key].GetTransferableObject();
      else obj[key] = classPtr[key];
    }

    return obj;
  } catch (e) {
    return null;
  }
}

//-----------------------------------------------------------------------------

function TransferableObjectToClass(classPtr, obj, variables) {
  try {
    for (var key in variables) {
      if (variables[key] == "time") {
        classPtr[key] = new Date(obj[key]);
      } else if (variables[key] == "ownerInfo") {
        classPtr[key] = new EndUserOwnerInfo(null);
        classPtr[key].SetTransferableObject(obj[key]);
      } else if (variables[key] == "timeInfo") {
        classPtr[key] = new EndUserTimeInfo(null);
        classPtr[key].SetTransferableObject(obj[key]);
      } else if (variables[key] == "EndUserCertificateInfoEx") {
        classPtr[key] = new EndUserCertificateInfoEx(null);
        classPtr[key].SetTransferableObject(obj[key]);
      } else {
        classPtr[key] = obj[key];
      }
    }
  } catch (e) {
    classPtr.isFilled = false;
  }
}

//-----------------------------------------------------------------------------

function EndUserInitFromTransferableObject(obj, objConstructor) {
  var newObj = new objConstructor();
  newObj.SetTransferableObject(obj);
  return newObj;
}

//=============================================================================

var EndUserFileFields = {
  file: "File",
  data: "array",
};

//-----------------------------------------------------------------------------

var EndUserFile = function () {
  SetClassID("EndUserFile", "1.0.1", this);
};

ClassInitializeMethods(EndUserFile, EndUserFileFields, false);

//-----------------------------------------------------------------------------

EndUserFile.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserFileFields);
};

//-----------------------------------------------------------------------------

EndUserFile.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserFileFields);
};

//=============================================================================

var EndUserOwnerInfoFields = {
  isFilled: "boolean",
  issuer: "string",
  issuerCN: "string",
  serial: "string",
  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",
};

//-----------------------------------------------------------------------------

var EndUserOwnerInfo = function (pInfo) {
  SetClassID("EndUserOwnerInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserOwnerInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserOwnerInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserOwnerInfoFields);
  }
};

ClassInitializeMethods(EndUserOwnerInfo, EndUserOwnerInfoFields, false);

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserOwnerInfoFields);
};

//-----------------------------------------------------------------------------

EndUserOwnerInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserOwnerInfoFields);
};

//=============================================================================

var EndUserTimeInfoFields = {
  version: "long",
  isTimeAvail: "boolean",
  isTimeStamp: "boolean",
  time: "time",
  isSignTimeStampAvail: "boolean",
  signTimeStamp: "time",
};

//-----------------------------------------------------------------------------

var EndUserTimeInfo = function (pInfo) {
  SetClassID("EndUserTimeInfo", "1.0.2", this);

  if (typeof pInfo != "undefined" && pInfo != null) {
    StructureToClass(this, pInfo, EndUserTimeInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserTimeInfoFields);
  }
};

ClassInitializeMethods(EndUserTimeInfo, EndUserTimeInfoFields, false);

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserTimeInfoFields);
};

//-----------------------------------------------------------------------------

EndUserTimeInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserTimeInfoFields);
};

//=============================================================================

var EndUserSignInfoFields = {
  ownerInfo: "ownerInfo",
  timeInfo: "timeInfo",
};

//-----------------------------------------------------------------------------

var EndUserSignInfo = function (pInfo, data, timeInfo) {
  SetClassID("EndUserSignInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserSignInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserSignInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserSignInfoFields);
  }

  this.data = data;
  if (timeInfo) this.timeInfo = timeInfo;
};

ClassInitializeMethods(EndUserSignInfo, EndUserSignInfoFields, false);

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSignInfoFields);
  TransferableObjectToClass(this, obj, { data: "array" });
};

//-----------------------------------------------------------------------------

EndUserSignInfo.prototype.GetTransferableObject = function () {
  var obj = ObjectToTransferableObject(this, {}, EndUserSignInfoFields);
  return ObjectToTransferableObject(this, obj, { data: "array" });
};

//=============================================================================

var EndUserSenderInfoFields = {
  ownerInfo: "ownerInfo",
  timeInfo: "timeInfo",
};

//-----------------------------------------------------------------------------

var EndUserSenderInfo = function (pInfo, data) {
  SetClassID("EndUserSenderInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserSenderInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserSenderInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserSenderInfoFields);
  }

  this.data = data;
};

ClassInitializeMethods(EndUserSenderInfo, EndUserSenderInfoFields, false);

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.GetData = function () {
  return this.data;
};

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSenderInfoFields);
  TransferableObjectToClass(this, obj, { data: "array" });
};

//-----------------------------------------------------------------------------

EndUserSenderInfo.prototype.GetTransferableObject = function () {
  var obj = ObjectToTransferableObject(this, {}, EndUserSenderInfoFields);
  return ObjectToTransferableObject(this, obj, { data: "array" });
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfoFields = {
  isFilled: "boolean",

  version: "long",

  issuer: "string",
  issuerCN: "string",
  serial: "string",

  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",

  subjNBUCode: "string",
  subjSPFMCode: "string",
  subjOCode: "string",
  subjOUCode: "string",
  subjUserCode: "string",

  certBeginTime: "time",
  certEndTime: "time",
  isPrivKeyTimesAvail: "boolean",
  privKeyBeginTime: "time",
  privKeyEndTime: "time",

  publicKeyBits: "long",
  publicKey: "string",
  publicKeyID: "string",

  isECDHPublicKeyAvail: "boolean",
  ECDHPublicKeyBits: "long",
  ECDHPublicKey: "string",
  ECDHPublicKeyID: "string",

  issuerPublicKeyID: "string",

  keyUsage: "string",
  extKeyUsages: "string",
  policies: "string",

  crlDistribPoint1: "string",
  crlDistribPoint2: "string",

  isPowerCert: "boolean",

  isSubjTypeAvail: "boolean",
  isSubjCA: "boolean",
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfo = function (pInfo) {
  SetClassID("EndUserCertificateInfo", "1.0.1", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserCertificateInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserCertificateInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserCertificateInfoFields);
  }
};

ClassInitializeMethods(
  EndUserCertificateInfo,
  EndUserCertificateInfoFields,
  false
);

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCertificateInfoFields);
};

//-----------------------------------------------------------------------------

EndUserCertificateInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCertificateInfoFields);
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfoExFields = {
  isFilled: "boolean",

  version: "long",

  issuer: "string",
  issuerCN: "string",
  serial: "string",

  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",

  subjNBUCode: "string",
  subjSPFMCode: "string",
  subjOCode: "string",
  subjOUCode: "string",
  subjUserCode: "string",

  certBeginTime: "time",
  certEndTime: "time",
  isPrivKeyTimesAvail: "boolean",
  privKeyBeginTime: "time",
  privKeyEndTime: "time",

  publicKeyBits: "long",
  publicKey: "string",
  publicKeyID: "string",

  issuerPublicKeyID: "string",

  keyUsage: "string",
  extKeyUsages: "string",
  policies: "string",

  crlDistribPoint1: "string",
  crlDistribPoint2: "string",

  isPowerCert: "boolean",

  isSubjTypeAvail: "boolean",
  isSubjCA: "boolean",
  chainLength: "int",

  UPN: "string",

  publicKeyType: "long",
  keyUsageType: "long",

  RSAModul: "string",
  RSAExponent: "string",

  OCSPAccessInfo: "string",
  issuerAccessInfo: "string",
  TSPAccessInfo: "string",

  isLimitValueAvailable: "boolean",
  limitValue: "long",
  limitValueCurrency: "string",

  subjType: "long",
  subjSubType: "long",

  subjUNZR: "string",

  subjCountry: "string",

  fingerprint: "string",

  isQSCD: "boolean",

  subjUserID: "string",
};

//-----------------------------------------------------------------------------

var EndUserCertificateInfoEx = function (pInfo) {
  SetClassID("EndUserCertificateInfoEx", "1.0.8", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserCertificateInfoExFields)
  ) {
    StructureToClass(this, pInfo, EndUserCertificateInfoExFields);
  } else {
    ClassSetDefaultValues(this, EndUserCertificateInfoExFields);
  }
};

ClassInitializeMethods(
  EndUserCertificateInfoEx,
  EndUserCertificateInfoExFields,
  false
);

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCertificateInfoExFields);
};

//-----------------------------------------------------------------------------

EndUserCertificateInfoEx.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCertificateInfoExFields);
};

//-----------------------------------------------------------------------------

var EndUserRequestInfoFields = {
  isFilled: "boolean",

  version: "long",

  isSimple: "boolean",

  subject: "string",
  subjCN: "string",
  subjOrg: "string",
  subjOrgUnit: "string",
  subjTitle: "string",
  subjState: "string",
  subjLocality: "string",
  subjFullName: "string",
  subjAddress: "string",
  subjPhone: "string",
  subjEMail: "string",
  subjDNS: "string",
  subjEDRPOUCode: "string",
  subjDRFOCode: "string",
  subjNBUCode: "string",
  subjSPFMCode: "string",
  subjOCode: "string",
  subjOUCode: "string",
  subjUserCode: "string",

  isCertTimesAvail: "boolean",
  certBeginTime: "time",
  certEndTime: "time",
  isPrivKeyTimesAvail: "boolean",
  privKeyBeginTime: "time",
  privKeyEndTime: "time",

  publicKeyType: "long",

  publicKeyBits: "long",
  publicKey: "string",
  RSAModul: "string",
  RSAExponent: "string",
  publicKeyID: "string",

  extKeyUsages: "string",

  crlDistribPoint1: "string",
  crlDistribPoint2: "string",

  isSubjTypeAvail: "boolean",
  subjType: "long",
  subjSubType: "long",

  isSelfSigned: "boolean",
  signIssuer: "string",
  signSerial: "string",

  subjUNZR: "string",

  subjCountry: "string",

  isQSCD: "boolean",
};

//-----------------------------------------------------------------------------

var EndUserRequestInfo = function (pInfo) {
  SetClassID("EndUserRequestInfoFields", "1.0.4", this);

  if (
    typeof pInfo != "undefined" &&
    pInfo != null &&
    IsStructureFilled(this, pInfo, EndUserRequestInfoFields)
  ) {
    StructureToClass(this, pInfo, EndUserRequestInfoFields);
  } else {
    ClassSetDefaultValues(this, EndUserRequestInfoFields);
  }
};

ClassInitializeMethods(EndUserRequestInfo, EndUserRequestInfoFields, false);

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserRequestInfoFields);
};

//-----------------------------------------------------------------------------

EndUserRequestInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserRequestInfoFields);
};

//-----------------------------------------------------------------------------

class EndUserFileStoreSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserFileStoreSettings",
  //         this.path = "",
  //         this.checkCRLs = false,
  //         this.autoRefresh = false,
  //         this.ownCRLsOnly = false,
  //         this.fullAndDeltaCRLs = false,
  //         this.autoDownloadCRLs = false,
  //         this.saveLoadedCerts = false,
  //         this.expireTime = 3600
  //     }
  constructor(
    path,
    checkCRLs,
    autoRefresh,
    ownCRLsOnly,
    fullAndDeltaCRLs,
    autoDownloadCRLs,
    saveLoadedCerts,
    expireTime
  ) {
    this.path = path;
    this.checkCRLs = checkCRLs;
    this.autoRefresh = autoRefresh;
    this.ownCRLsOnly = ownCRLsOnly;
    this.fullAndDeltaCRLs = fullAndDeltaCRLs;
    this.autoDownloadCRLs = autoDownloadCRLs;
    this.saveLoadedCerts = saveLoadedCerts;
    this.expireTime = expireTime;
  }
  GetPath() {
    return this.path;
  }
  SetPath(path) {
    this.path = path;
  }
  GetCheckCRLs() {
    return this.checkCRLs;
  }
  SetCheckCRLs(checkCRLs) {
    this.checkCRLs = checkCRLs;
  }
  GetAutoRefresh() {
    return this.autoRefresh;
  }
  SetAutoRefresh(autoRefresh) {
    this.autoRefresh = autoRefresh;
  }
  GetOwnCRLsOnly() {
    return this.ownCRLsOnly;
  }
  SetOwnCRLsOnly(ownCRLsOnly) {
    this.ownCRLsOnly = ownCRLsOnly;
  }
  GetFullAndDeltaCRLs() {
    return this.fullAndDeltaCRLs;
  }
  SetFullAndDeltaCRLs(fullAndDeltaCRLs) {
    this.fullAndDeltaCRLs = fullAndDeltaCRLs;
  }
  GetAutoDownloadCRLs() {
    return this.autoDownloadCRLs;
  }
  SetAutoDownloadCRLs(autoDownloadCRLs) {
    this.autoDownloadCRLs = autoDownloadCRLs;
  }
  GetSaveLoadedCerts() {
    return this.saveLoadedCerts;
  }
  SetSaveLoadedCerts(saveLoadedCerts) {
    this.saveLoadedCerts = saveLoadedCerts;
  }
  GetExpireTime() {
    return this.expireTime;
  }
  SetExpireTime(expireTime) {
    this.expireTime = expireTime;
  }
}

//-----------------------------------------------------------------------------

class EndUserProxySettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserProxySettings",
  //         this.useProxy = false,
  //         this.anonymous = true,
  //         this.address = "",
  //         this.port = "3128",
  //         this.user = "",
  //         this.password = "",
  //         this.savePassword = false
  //     }
  constructor(
    useProxy,
    anonymous,
    address,
    port,
    user,
    password,
    savePassword
  ) {
    this.useProxy = useProxy;
    this.anonymous = anonymous;
    this.address = address;
    this.port = port;
    this.user = user;
    this.password = password;
    this.savePassword = savePassword;
  }
  GetUseProxy() {
    return this.useProxy;
  }
  SetUseProxy(useProxy) {
    this.useProxy = useProxy;
  }
  GetAnonymous() {
    return this.anonymous;
  }
  SetAnonymous(anonymous) {
    this.anonymous = anonymous;
  }
  GetAddress() {
    return this.address;
  }
  SetAddress(address) {
    this.address = address;
  }
  GetPort() {
    return this.port;
  }
  SetPort(port) {
    this.port = port;
  }
  GetUser() {
    return this.user;
  }
  SetUser(user) {
    this.user = user;
  }
  GetPassword() {
    return this.password;
  }
  SetPassword(password) {
    this.password = password;
  }
  GetSavePassword() {
    return this.savePassword;
  }
  SetSavePassword(savePassword) {
    this.savePassword = savePassword;
  }
}

//-----------------------------------------------------------------------------

class EndUserTSPSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserTSPSettings",
  //         this.getStamps = false,
  //         this.address = "",
  //         this.port = "80"
  //     }
  constructor(getStamps, address, port) {
    this.getStamps = getStamps;
    this.address = address;
    this.port = port;
  }
  GetGetStamps() {
    return this.getStamps;
  }
  SetGetStamps(getStamps) {
    this.getStamps = getStamps;
  }
  GetAddress() {
    return this.address;
  }
  SetAddress(address) {
    this.address = address;
  }
  GetPort() {
    return this.port;
  }
  SetPort(port) {
    this.port = port;
  }
}

//-----------------------------------------------------------------------------

class EndUserOCSPSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserOCSPSettings",
  //         this.useOCSP = false,
  //         this.beforeStore = false,
  //         this.address = "",
  //         this.port = "80"
  //     }
  constructor(useOCSP, beforeStore, address, port) {
    this.useOCSP = useOCSP;
    this.beforeStore = beforeStore;
    this.address = address;
    this.port = port;
  }
  GetUseOCSP() {
    return this.useOCSP;
  }
  SetUseOCSP(useOCSP) {
    this.useOCSP = useOCSP;
  }
  GetBeforeStore() {
    return this.beforeStore;
  }
  SetBeforeStore(beforeStore) {
    this.beforeStore = beforeStore;
  }
  GetAddress() {
    return this.address;
  }
  SetAddress(address) {
    this.address = address;
  }
  GetPort() {
    return this.port;
  }
  SetPort(port) {
    this.port = port;
  }
}

//-----------------------------------------------------------------------------

class EndUserCMPSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserCMPSettings",
  //         this.useCMP = false,
  //         this.address = "",
  //         this.port = "80",
  //         this.commonName = ""
  //     }
  constructor(useCMP, address, port, commonName) {
    this.useCMP = useCMP;
    this.address = address;
    this.port = port;
    this.commonName = commonName;
  }
  GetUseCMP() {
    return this.useCMP;
  }
  SetUseCMP(useCMP) {
    this.useCMP = useCMP;
  }
  GetAddress() {
    return this.address;
  }
  SetAddress(address) {
    this.address = address;
  }
  GetPort() {
    return this.port;
  }
  SetPort(port) {
    this.port = port;
  }
  GetCommonName() {
    return this.commonName;
  }
  SetCommonName(commonName) {
    this.commonName = commonName;
  }
}

//-----------------------------------------------------------------------------
class EndUserLDAPSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserLDAPSettings",
  //         this.useLDAP = false,
  //         this.address = "",
  //         this.port = "80",
  //         this.anonymous = true,
  //         this.user = "",
  //         this.password = ""
  //     }
  constructor(useLDAP, address, port, anonymous, user, password) {
    this.useLDAP = useLDAP;
    this.address = address;
    this.port = port;
    this.anonymous = anonymous;
    this.user = user;
    this.password = password;
  }
  GetUseLDAP() {
    return this.useLDAP;
  }
  SetUseLDAP(useLDAP) {
    this.useLDAP = useLDAP;
  }
  GetAddress() {
    return this.address;
  }
  SetAddress(address) {
    this.address = address;
  }
  GetPort() {
    return this.port;
  }
  SetPort(port) {
    this.port = port;
  }
  GetAnonymous() {
    return this.anonymous;
  }
  SetAnonymous(anonymous) {
    this.anonymous = anonymous;
  }
  GetUser() {
    return this.user;
  }
  SetUser(user) {
    this.user = user;
  }
  GetPassword() {
    return this.password;
  }
  SetPassword(password) {
    this.password = password;
  }
}

//-----------------------------------------------------------------------------

class EndUserModeSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserModeSettings",
  //         this.offlineMode = false
  //     }
  constructor(offlineMode) {
    this.offlineMode = offlineMode;
  }
  GetOfflineMode() {
    return this.offlineMode;
  }
  SetOfflineMode(offlineMode) {
    this.offlineMode = offlineMode;
  }
}

//-----------------------------------------------------------------------------

class EndUserOCSPAccessInfoModeSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserOCSPAccessInfoModeSettings",
  //         this.enabled = false
  //     }
  constructor(enabled) {
    this.enabled = enabled;
  }
  GetEnabled() {
    return this.enabled;
  }
  SetEnabled(enabled) {
    this.enabled = enabled;
  }
}

//-----------------------------------------------------------------------------

class EndUserOCSPAccessInfoSettings {
  //   constructor(){
  // //        "Vendor": "JSC IIT",
  // //        "ClassVersion": "1.0.0",
  // //        "ClassName": "EndUserOCSPAccessInfoSettings",
  //         this.issuerCN = "",
  //         this.address = "",
  //         this.port = ""
  //     }
  constructor(issuerCN, address, port) {
    this.issuerCN = issuerCN;
    this.address = address;
    this.port = port;
  }
  GetIssuerCN() {
    return this.issuerCN;
  }
  SetIssuerCN(issuerCN) {
    this.issuerCN = issuerCN;
  }
  GetAddress() {
    return this.address;
  }
  SetAddress(address) {
    this.address = address;
  }
  GetPort() {
    return this.port;
  }
  SetPort(port) {
    this.port = port;
  }
}

//=============================================================================

var EndUserInfoFields = {
  version: "long",
  commonName: "string",
  locality: "string",
  state: "string",
  organization: "string",
  orgUnit: "string",
  title: "string",
  street: "string",
  phone: "string",
  surname: "string",
  givenname: "string",
  EMail: "string",
  DNS: "string",
  EDRPOUCode: "string",
  DRFOCode: "string",
  NBUCode: "string",
  SPFMCode: "string",
  OCode: "string",
  OUCode: "string",
  userCode: "string",
  UPN: "string",
  UNZR: "string",
  country: "string",
};

//-----------------------------------------------------------------------------

var _EndUserInfo = function () {
  SetClassID("EndUserParams", "1.0.3", this);

  ClassSetDefaultValues(this, EndUserInfoFields);

  this.version = 3;
};

ClassInitializeMethods(_EndUserInfo, EndUserInfoFields, true);

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserInfoFields);
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserInfoFields);
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.GetOrganiztion = function () {
  return this.organization;
};

//-----------------------------------------------------------------------------

_EndUserInfo.prototype.SetOrganiztion = function (organization) {
  this.organization = organization;
};

//-----------------------------------------------------------------------------

function EndUserInfo() {
  return new _EndUserInfo();
}

//=============================================================================

var EndUserParamsFields = {
  SN: "int",
  commonName: "string",
  locality: "string",
  state: "string",
  organization: "string",
  orgUnit: "string",
  title: "string",
  street: "string",
  phone: "string",
  surname: "string",
  givenname: "string",
  EMail: "string",
  DNS: "string",
  EDRPOUCode: "string",
  DRFOCode: "string",
  NBUCode: "string",
  SPFMCode: "string",
  information: "string",
  passPhrase: "string",
  isPublishCertificate: "boolean",
  RAAdminSN: "int",
};

//-----------------------------------------------------------------------------

var EndUserParams = function (pParams) {
  SetClassID("EndUserParams", "1.0.1", this);

  ClassSetDefaultValues(this, EndUserParamsFields);

  if (typeof pParams != "undefined" && pParams != null) {
    var pCurPtr = pParams | 0;

    var GetInt = function () {
      var val = Module.getValue(pCurPtr, "i32") | 0;
      pCurPtr += 4;
      return val;
    };
    var GetBoolean = function () {
      var val = Module.getValue(pCurPtr, "i32") == EU_TRUE ? true : false;
      pCurPtr += 4;
      return val;
    };

    var GetString = function (maxLength) {
      var val = CP1251PointerToUTF8(pCurPtr);
      pCurPtr += maxLength;
      return val;
    };

    this.SN = GetInt();
    this.commonName = GetString(EU_COMMON_NAME_MAX_LENGTH);
    this.locality = GetString(EU_LOCALITY_MAX_LENGTH);
    this.state = GetString(EU_STATE_MAX_LENGTH);
    this.organization = GetString(EU_ORGANIZATION_MAX_LENGTH);
    this.orgUnit = GetString(EU_ORG_UNIT_MAX_LENGTH);
    this.title = GetString(EU_TITLE_MAX_LENGTH);
    this.street = GetString(EU_STREET_MAX_LENGTH);
    this.phone = GetString(EU_PHONE_MAX_LENGTH);
    this.surname = GetString(EU_SURNAME_MAX_LENGTH);
    this.givenname = GetString(EU_GIVENNAME_MAX_LENGTH);
    this.EMail = GetString(EU_EMAIL_MAX_LENGTH);
    this.DNS = GetString(EU_ADDRESS_MAX_LENGTH);
    this.EDRPOUCode = GetString(EU_EDRPOU_MAX_LENGTH);
    this.DRFOCode = GetString(EU_DRFO_MAX_LENGTH);
    this.NBUCode = GetString(EU_NBU_MAX_LENGTH);
    this.SPFMCode = GetString(EU_SPFM_MAX_LENGTH);
    this.information = GetString(EU_INFORMATION_MAX_LENGTH);
    this.passPhrase = GetString(EU_PASS_PHRASE_MAX_LENGTH);
    this.publishCertificate = GetBoolean();
    this.RAAdminSN = GetInt();
  }
};

ClassInitializeMethods(EndUserParams, EndUserParamsFields, true);

//-----------------------------------------------------------------------------

EndUserParams.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserParamsFields);
};

//-----------------------------------------------------------------------------

EndUserParams.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserParamsFields);
};

//-----------------------------------------------------------------------------

class EndUserPrivateKey {
  //   constructor(){
  //         // "Vendor": "JSC IIT",
  //         // "ClassVersion": "1.0.0",
  //         // "ClassName": "EndUserPrivateKey",
  //         this.privateKey = null,
  //         this.privateKeyName = "Key-6.dat",
  //         this.privateKeyInfo = null,
  //         this.privateKeyInfoName = "Key-11.dat",
  //         this.uaRequest = null,
  //         this.uaRequestName = "",
  //         this.uaKEPRequest = null,
  //         this.uaKEPRequestName = "",
  //         this.internationalRequest = null,
  //         this.internationalRequestName = ""
  //     }
  constructor(
    privateKey,
    privateKeyInfo,
    uaRequest,
    uaRequestName,
    uaKEPRequest,
    uaKEPRequestName,
    internationalRequest,
    internationalRequestName
  ) {
    this.privateKey = privateKey;
    this.privateKeyInfo = privateKeyInfo;
    this.uaRequest = uaRequest;
    this.uaRequestName = uaRequestName;
    this.uaKEPRequest = uaKEPRequest;
    this.uaKEPRequestName = uaKEPRequestName;
    this.internationalRequest = internationalRequest;
    this.internationalRequestName = internationalRequestName;
  }
  GetPrivateKey() {
    return this.privateKey;
  }
  GetPrivateKeyName() {
    return this.privateKeyName;
  }
  GetPrivateKeyInfo() {
    return this.privateKeyInfo;
  }
  GetPrivateKeyInfoName() {
    return this.privateKeyInfoName;
  }
  GetUARequest() {
    return this.uaRequest;
  }
  GetUARequestName() {
    return this.uaRequestName;
  }
  GetUAKEPRequest() {
    return this.uaKEPRequest;
  }
  GetUAKEPRequestName() {
    return this.uaKEPRequestName;
  }
  GetInternationalRequest() {
    return this.internationalRequest;
  }
  GetInternationalRequestName() {
    return this.internationalRequestName;
  }
}

//=============================================================================

var EndUserContextFields = {
  context: "long",
};

//-----------------------------------------------------------------------------

var EndUserContext = function (context) {
  SetClassID("EndUserContext", "1.0.1", this);

  this.context = context;
};

ClassInitializeMethods(EndUserContext, EndUserContextFields, false);

//-----------------------------------------------------------------------------

EndUserContext.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserContextFields);
};

//-----------------------------------------------------------------------------

EndUserContext.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserContextFields);
};

//=============================================================================

var EndUserPrivateKeyContextFields = {
  context: "long",
  ownerInfo: "ownerInfo",
};

//-----------------------------------------------------------------------------

var EndUserPrivateKeyContext = function (context, ownerInfo) {
  SetClassID("EndUserPrivateKeyContext", "1.0.1", this);

  this.context = context;
  this.ownerInfo = ownerInfo;
};

ClassInitializeMethods(
  EndUserPrivateKeyContext,
  EndUserPrivateKeyContextFields,
  false
);

//-----------------------------------------------------------------------------

EndUserPrivateKeyContext.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserPrivateKeyContextFields);
};

//-----------------------------------------------------------------------------

EndUserPrivateKeyContext.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserPrivateKeyContextFields);
};

//=============================================================================

class EndUserPrivateKeyInfo {
  //   constructor(){
  //         // "Vendor": "JSC IIT",
  //         // "ClassVersion": "1.0.0",
  //         // "ClassName": "EndUserPrivateKeyInfo",
  //         this.keyType = 0,
  //         this.keyUsage = 0,
  //         this.keyIDs = [],
  //         this.isTrustedKeyIDs = false
  //     }
  constructor(keyType, keyUsage, keyIDs) {
    this.keyType = keyType;
    this.keyUsage = keyUsage;
    this.keyIDs = keyIDs;
    this.isTrustedKeyIDs = keyIDs.length == 1;
  }
  GetKeyType() {
    return this.keyType;
  }
  GetKeyUsage() {
    return this.keyUsage;
  }
  GetKeyIDs() {
    return this.keyIDs;
  }
  GetIsTrustedKeyIDs() {
    return this.isTrustedKeyIDs;
  }
}

//-----------------------------------------------------------------------------

class EndUserHashContext {
  //   constructor(){
  //         // "Vendor": "JSC IIT",
  //         // "ClassVersion": "1.0.0",
  //         // "ClassName": "EndUserHashContext",
  //         this.context = 0
  //     }
  constructor(context) {
    this.context = context;
  }
  GetContext() {
    return this.context;
  }
}

//-----------------------------------------------------------------------------

var EndUserCertificateFields = {
  infoEx: "EndUserCertificateInfoEx",
  data: "array",
};

//-----------------------------------------------------------------------------

var EndUserCertificate = function (infoEx, data) {
  SetClassID("EndUserCertificate", "1.0.1", this);

  this.infoEx = infoEx;
  this.data = data;
};

ClassInitializeMethods(EndUserCertificate, EndUserCertificateFields, false);

//-----------------------------------------------------------------------------

EndUserCertificate.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCertificateFields);
};

//-----------------------------------------------------------------------------

EndUserCertificate.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCertificateFields);
};

//-----------------------------------------------------------------------------

class EndUserSenderInfoEx {
  //   constructor(){
  //         // "Vendor": "JSC IIT",
  //         // "ClassVersion": "1.0.0",
  //         // "ClassName": "EndUserSenderInfoEx",
  //         this.isDynamicKey = 0,
  //         this.certInfoEx = 0,
  //         this.certificate = 0
  //     }
  constructor(isDynamicKey, certInfoEx, certificate) {
    this.isDynamicKey = isDynamicKey;
    this.certInfoEx = certInfoEx;
    this.certificate = certificate;
  }
  GetIsDynamic() {
    return this.isDynamicKey;
  }
  GetCertInfoEx() {
    return this.certInfoEx;
  }
  GetCertificate() {
    return this.certificate;
  }
}

//-----------------------------------------------------------------------------

class EndUserRecipientInfo {
  //   constructor(){
  //         // "Vendor": "JSC IIT",
  //         // "ClassVersion": "1.0.0",
  //         // "ClassName": "EndUserRecipientInfo",
  //         this.infoType = 0,
  //         this.issuer = 0,
  //         this.serial = 0,
  //         this.publicKeyID = 0
  //     }
  constructor(infoType, issuer, serial, publicKeyID) {
    this.infoType = infoType;
    this.issuer = issuer;
    this.serial = serial;
    this.publicKeyID = publicKeyID;
  }
  GetInfoType() {
    return this.infoType;
  }
  GetIssuer() {
    return this.issuer;
  }
  GetSerial() {
    return this.serial;
  }
  GetPublicKeyID() {
    return this.publicKeyID;
  }
}

//=============================================================================

var EndUserSessionFields = {
  handle: "long",
  data: "array",
};

//-----------------------------------------------------------------------------

var EndUserSession = function (handle, data) {
  SetClassID("EndUserSession", "1.0.1", this);

  this.handle = handle;
  this.data = data;
};

ClassInitializeMethods(EndUserSession, EndUserSessionFields, true);

//-----------------------------------------------------------------------------

EndUserSession.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSessionFields);
};

//-----------------------------------------------------------------------------

EndUserSession.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserSessionFields);
};

//=============================================================================

var EndUserTransportHeaderFields = {
  receiptNumber: "long",
  cryptoData: "array",
};

//-----------------------------------------------------------------------------

var EndUserTransportHeader = function (receiptNumber, cryptoData) {
  SetClassID("EndUserTransportHeader", "1.0.1", this);

  this.receiptNumber = receiptNumber;
  this.cryptoData = cryptoData;
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.GetReceiptNumber = function () {
  return this.receiptNumber;
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.GetCryptoData = function () {
  return this.cryptoData;
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserTransportHeader);
};

//-----------------------------------------------------------------------------

EndUserTransportHeader.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserTransportHeader);
};

//=============================================================================

var EndUserCryptoHeaderFields = {
  CAType: "string",
  headerType: "long",
  headerSize: "long",
  cryptoData: "array",
};

//-----------------------------------------------------------------------------

var EndUserCryptoHeader = function (
  caType,
  headerType,
  headerSize,
  cryptoData
) {
  SetClassID("EndUserCryptoHeader", "1.0.1", this);

  this.CAType = caType;
  this.headerType = headerType;
  this.headerSize = headerSize;
  this.cryptoData = cryptoData;
};

ClassInitializeMethods(EndUserCryptoHeader, EndUserCryptoHeaderFields, false);

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserCryptoHeaderFields);
};

//-----------------------------------------------------------------------------

EndUserCryptoHeader.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserCryptoHeaderFields);
};

//=============================================================================

var EndUserJKSPrivateKeyFields = {
  privateKey: "array",
  certificates: "array",
};

//-----------------------------------------------------------------------------

var EndUserJKSPrivateKey = function (privateKey, certificates) {
  SetClassID("EndUserJKSPrivateKey", "1.0.1", this);

  this.privateKey = privateKey;
  this.certificates = certificates;
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetPrivateKey = function () {
  return this.privateKey;
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetCertificatesCount = function () {
  return this.certificates.length;
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetCertificate = function (index) {
  if (index < 0 || index >= this.certificates.length) return null;

  return this.certificates[index];
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserJKSPrivateKeyFields);
};

//-----------------------------------------------------------------------------

EndUserJKSPrivateKey.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserJKSPrivateKeyFields);
};

//=============================================================================

var EndUserSSSignHashResultFields = {
  version: "long",
  error: "long",
  hash: "string",
  signature: "string",
  statusCode: "long",
  status: "string",
};

//-----------------------------------------------------------------------------

var EndUserSSSignHashResult = function (pInfo) {
  SetClassID("EndUserSSSignHashResult", "1.0.1", this);

  SetClassID("EndUserCertificateInfoEx", "1.0.8", this);

  if (typeof pInfo != "undefined" && pInfo != null) {
    StructureToClass(this, pInfo, EndUserSSSignHashResultFields);
  } else {
    ClassSetDefaultValues(this, EndUserSSSignHashResultFields);
  }
};

ClassInitializeMethods(
  EndUserSSSignHashResult,
  EndUserSSSignHashResultFields,
  false
);

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.SetTransferableObject = function (obj) {
  TransferableObjectToClass(this, obj, EndUserSSSignHashResultFields);
};

//-----------------------------------------------------------------------------

EndUserSSSignHashResult.prototype.GetTransferableObject = function () {
  return ObjectToTransferableObject(this, {}, EndUserSSSignHashResultFields);
};

//=============================================================================
var EU_PTR_SIZE = 4;
var EU_INT_SIZE = 4;
var EU_DWORD_SIZE = 4;
var EU_BOOL_SIZE = 4;

var EU_TRUE = 1;
var EU_FALSE = 0;

//=============================================================================

var XMLHTTPProxyService = "";
var XMLHTTPDirectAccess = false;
var XMLHTTPDirectAccessAddresses = [];

//=============================================================================

function EUSignCPException(errorCode, message, messageEx) {
  this.errorCode = errorCode;
  this.message = message;
  this.messageEx = messageEx || "";

  this.toString = function () {
    return this.message + "(" + errorCode + ")";
  };

  this.GetErrorCode = function () {
    return this.errorCode;
  };

  this.GetMessage = function () {
    return this.message;
  };

  this.toStringEx = function () {
    return (
      this.toString() + (this.messageEx != "" ? ". " + this.messageEx : "")
    );
  };

  this.GetMessageEx = function () {
    return this.messageEx;
  };
}

//=============================================================================

function EUPointerConstructor(size, isArray, moduleFreeFunc, context) {
  this.ptr = Module._malloc(size);
  Module.setValue(this.ptr, 0);

  this.isArray = isArray;
  if (isArray) {
    this.lengthPtr = Module._malloc(EU_PTR_SIZE);
    Module.setValue(this.lengthPtr, 0);
  } else {
    this.lengthPtr = 0;
  }

  this.moduleFreeFunc = moduleFreeFunc;
  this.context = context;

  this.toPtr = function () {
    var pPtr = 0;
    try {
      pPtr = Module.getValue(this.ptr, "i8*");
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return pPtr;
  };
  this.toNumber = function () {
    var number = null;
    try {
      number = Module.getValue(this.ptr, "i32");
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return number;
  };
  this.toBoolean = function () {
    return this.toNumber() != EU_FALSE;
  };
  this.toString = function (checkEmpty) {
    var string = null;
    try {
      var strPtr = this.toPtr();
      if (strPtr | 0) {
        string = CP1251PointerToUTF8(strPtr);
        if (context != null) Module._EUCtxFreeMemory(context | 0, strPtr);
        else Module._EUFreeMemory(strPtr);
      }

      if (checkEmpty) {
        if (string == "") throw "Decoded string is empty";
      }
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return string;
  };
  this.toStringArray = function () {
    var strings = null;
    try {
      var strPtr = this.toPtr();
      if (strPtr | 0) {
        strings = [];
        while (1) {
          var str = CP1251PointerToUTF8(strPtr);
          strings.push(str);
          if (Module.HEAPU8[(strPtr + str.length + 1) | 0] == 0) break;
          strPtr = (strPtr + str.length + 1) | 0;
        }

        if (context != null) Module._EUCtxFreeMemory(context | 0, strPtr);
        else Module._EUFreeMemory(strPtr);
      }
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return strings;
  };
  this.toArray = function () {
    var array = null;
    try {
      var arrPtr = Module.getValue(this.ptr, "i8*");
      var arrLength = Module.getValue(this.lengthPtr, "i32");
      var arrBuffer = new ArrayBuffer(arrLength);

      array = new Uint8Array(arrBuffer);
      array.set(new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLength));

      if (context != null) Module._EUCtxFreeMemory(context | 0, arrPtr | 0);
      else Module._EUFreeMemory(arrPtr | 0);
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return array;
  };
  this.toArrayOfByteArrays = function (count) {
    if (count == 0) return [];

    var array = [];
    try {
      var arraysPtr = Module.getValue(this.ptr, "i32*");
      var arraysLengthsPtr = Module.getValue(this.lengthPtr, "i32");

      for (var i = 0; i < count; i++) {
        var pCurPtr = (arraysPtr + i * EU_PTR_SIZE) | 0;
        var arrPtr = Module.getValue(pCurPtr, "i8*");
        var arrLength = Module.getValue(
          arraysLengthsPtr + i * EU_INT_SIZE,
          "i32*"
        );

        var arrBuffer = new ArrayBuffer(arrLength);

        var tmpArr = new Uint8Array(arrBuffer);
        tmpArr.set(new Uint8Array(Module.HEAPU8.buffer, arrPtr, arrLength));
        array.push(tmpArr);
      }

      Module._EUFreeCertificatesArray(count, arraysPtr, arraysLengthsPtr);
    } catch (e) {
      this.raiseError(e);
    }

    this.free();

    return array;
  };
  this.free = function () {
    try {
      if (this.moduleFreeFunc != null) this.moduleFreeFunc(this);

      if (this.ptr != 0) Module._free(this.ptr);
      if (this.lengthPtr != 0) Module._free(this.lengthPtr);
    } catch (e) {}

    this.ptr = 0;
    this.lengthPtr = 0;
    this.moduleFreeFunc = null;
  };
  this.raiseError = function (msg) {
    var error = EU_ERROR_JS_LIBRARY_ERROR;
    var message = EU_ERRORS_STRINGS[Module.errorLangCode][error];

    this.free();

    throw new EUSignCPException(error, message, msg);
  };
}

function EUPointer(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(EU_PTR_SIZE, false, null, context);
}

function EUPointerBool() {
  return new EUPointerConstructor(EU_BOOL_SIZE, false, null, null);
}

function EUPointerInt() {
  return new EUPointerConstructor(EU_INT_SIZE, false, null, null);
}

function EUPointerDWORD() {
  return new EUPointerConstructor(EU_DWORD_SIZE, false, null, null);
}

function EUPointerArray(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(EU_PTR_SIZE, true, null, context);
}

function EUPointerStaticArray(array) {
  var arrayLength = array.length;
  var pPtr = new EUPointerConstructor(arrayLength, false, null, null);

  try {
    Module.writeArrayToMemory(array, pPtr.ptr | 0);
    pPtr.toArray = function () {
      var array = null;
      try {
        var arrBuffer = new ArrayBuffer(arrayLength);
        array = new Uint8Array(arrBuffer);
        array.set(new Uint8Array(Module.HEAPU8.buffer, this.ptr, arrayLength));
      } catch (e) {}

      this.free();

      return array;
    };
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerCertOwnerInfo(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(
    EU_CERT_OWNER_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) {
        if (context != null) {
          Module._EUCtxFreeCertOwnerInfo(context | 0, pPtr.ptr);
        } else Module._EUFreeCertOwnerInfo(pPtr.ptr);
      }
    },
    context
  );
}

function EUPointerSignerInfo(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(
    EU_SIGN_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) {
        if (context != null) {
          Module._EUCtxFreeSignInfo(context | 0, pPtr.ptr);
        } else Module._EUFreeSignInfo(pPtr.ptr);
      }
    },
    context
  );
}

function EUPointerSenderInfo(context) {
  if (context === undefined) context = null;

  return new EUPointerConstructor(
    EU_SENDER_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) {
        if (context != null) {
          Module._EUCtxFreeSenderInfo(context | 0, pPtr.ptr);
        } else Module._EUFreeSenderInfo(pPtr.ptr);
      }
    },
    context
  );
}

function EUPointerCertificateInfo() {
  return new EUPointerConstructor(
    EU_CERT_INFO_SIZE,
    false,
    function (pPtr) {
      if ((pPtr.ptr | 0) != 0) Module._EUFreeCertificateInfo(pPtr.ptr);
    },
    null
  );
}

function EUPointerKeyMedia(typeIndex, devIndex, password) {
  var pPtr = new EUPointerConstructor(EU_KEY_MEDIA_SIZE, false, null, null);

  try {
    var pCurPtr = pPtr.ptr | 0;

    Module.setValue(pCurPtr, typeIndex | 0, "i32");
    pCurPtr += EU_INT_SIZE;
    Module.setValue(pCurPtr, devIndex | 0, "i32");
    pCurPtr += EU_INT_SIZE;

    var strArr = UTF8ToCP1251Array(password);
    if (strArr.length > EU_PASS_MAX_LENGTH)
      throw { message: "Invalid parameter" };
    Module.writeArrayToMemory(strArr, pCurPtr);
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerEndUserInfo(euInfo) {
  var pPtr = new EUPointerConstructor(EU_USER_INFO_SIZE, false, null, null);

  try {
    var pCurPtr = pPtr.ptr | 0;

    var SetString = function (str, strMaxLength) {
      var strArr = UTF8ToCP1251Array(str);
      if (strArr.length > strMaxLength) {
        throw { message: "Invalid parameter" };
      }

      Module.writeArrayToMemory(strArr, pCurPtr);
      pCurPtr += strMaxLength;
    };

    Module.setValue(pCurPtr, euInfo.GetVersion() | 0, "i32");
    pCurPtr += EU_INT_SIZE;

    SetString(euInfo.GetCommonName(), EU_COMMON_NAME_MAX_LENGTH);
    SetString(euInfo.GetLocality(), EU_LOCALITY_MAX_LENGTH);
    SetString(euInfo.GetState(), EU_STATE_MAX_LENGTH);
    SetString(euInfo.GetOrganization(), EU_ORGANIZATION_MAX_LENGTH);
    SetString(euInfo.GetOrgUnit(), EU_ORG_UNIT_MAX_LENGTH);
    SetString(euInfo.GetTitle(), EU_TITLE_MAX_LENGTH);
    SetString(euInfo.GetStreet(), EU_STREET_MAX_LENGTH);
    SetString(euInfo.GetPhone(), EU_PHONE_MAX_LENGTH);
    SetString(euInfo.GetSurname(), EU_SURNAME_MAX_LENGTH);
    SetString(euInfo.GetGivenname(), EU_GIVENNAME_MAX_LENGTH);
    SetString(euInfo.GetEMail(), EU_EMAIL_MAX_LENGTH);
    SetString(euInfo.GetDNS(), EU_ADDRESS_MAX_LENGTH);
    SetString(euInfo.GetEDRPOUCode(), EU_EDRPOU_MAX_LENGTH);
    SetString(euInfo.GetDRFOCode(), EU_DRFO_MAX_LENGTH);
    SetString(euInfo.GetNBUCode(), EU_NBU_MAX_LENGTH);
    SetString(euInfo.GetSPFMCode(), EU_SPFM_MAX_LENGTH);
    SetString(euInfo.GetOCode(), EU_O_CODE_MAX_LENGTH);
    SetString(euInfo.GetOUCode(), EU_OU_CODE_MAX_LENGTH);
    SetString(euInfo.GetUserCode(), EU_USER_CODE_MAX_LENGTH);
    SetString(euInfo.GetUPN(), EU_UPN_MAX_LENGTH);
    SetString(euInfo.GetUNZR(), EU_UNZR_MAX_LENGTH);
    SetString(euInfo.GetCountry(), EU_COUNTRY_MAX_LENGTH);
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerMemory(size) {
  return new EUPointerConstructor(size, false, null, null);
}

function EUArrayFromArrayOfArray(array) {
  this.count = array.length;
  this.arraysPtr = 0;
  this.arraysLengthPtr = 0;

  try {
    this.arraysPtr = Module._malloc(EU_PTR_SIZE * array.length);
    this.arraysLengthPtr = Module._malloc(EU_INT_SIZE * array.length);

    for (var i = 0; i < array.length; i++) {
      Module.setValue((this.arraysPtr + i * EU_PTR_SIZE) | 0, 0);
    }

    for (var i = 0; i < array.length; i++) {
      var pCurPtr = (this.arraysPtr + i * EU_PTR_SIZE) | 0;

      var buffer = _malloc(array[i].length);
      Module.writeArrayToMemory(array[i], buffer);

      Module.setValue(pCurPtr, buffer, "i32*");
      Module.setValue(
        this.arraysLengthPtr + i * EU_INT_SIZE,
        array[i].length,
        "i32"
      );
    }
  } catch (e) {
    this.free();
  }

  this.free = function () {
    if (this.arraysPtr == 0) return;

    try {
      for (var i = 0; i < this.count; i++) {
        var pCurPtr = Module.getValue(
          (this.arraysPtr + i * EU_PTR_SIZE) | 0,
          "i32*"
        );
        if (pCurPtr != 0) Module._free(pCurPtr);
      }

      Module._free(this.arraysPtr);
      Module._free(this.arraysLengthPtr);
    } catch (e) {}

    this.count = 0;
    this.arraysPtr = 0;
    this.arraysLengthPtr = 0;
  };
}

function EUPointerIntArray(array) {
  var pPtr = new EUPointerConstructor(
    EU_INT_SIZE * array.length,
    false,
    null,
    null
  );

  try {
    var pCurPtr = pPtr.ptr | 0;

    for (var i = 0; i < array.length; i++) {
      Module.setValue(pCurPtr, array[i] | 0, "i32");
      pCurPtr += EU_INT_SIZE;
    }
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function EUPointerSystemtime(date) {
  var pPtr = new EUPointerConstructor(EU_SYSTEMTIME_SIZE, false, null, null);

  try {
    DateToSystemTime(date, pPtr.ptr | 0);
  } catch (e) {
    pPtr.raiseError(e);
    return null;
  }

  return pPtr;
}

function IntFromBool(boolValue) {
  return boolValue == true ? 1 : 0;
}

function ParseServersArray(serversArray) {
  var servers = {
    addresses: [],
    ports: [],
  };

  var length = serversArray.length;
  for (var i = 0; i < length; i++) {
    var res = serversArray[i].split(":");
    if (res.length == 2) {
      servers.addresses.push(res[0]);
      servers.ports.push(res[1]);
    } else {
      servers.addresses.push(serversArray[i]);
      servers.ports.push("80");
    }
  }

  return servers;
}

function IsFileSyncSupported() {
  try {
    return !!FileReaderSync;
  } catch (e) {
    return false;
  }
}

function IsFileASyncSupported() {
  try {
    return !!FileReader;
  } catch (e) {
    return false;
  }
}

function MakeUID(length) {
  var uid = "";
  var uid_chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    uid += uid_chars.charAt(Math.floor(Math.random() * uid_chars.length));
  }

  return uid;
}

//=============================================================================

var EU_MODULE_INITIALIZE_ON_LOAD = 
	((typeof EU_MODULE_INITIALIZE_ON_LOAD) != 'undefined') ? 
		EU_MODULE_INITIALIZE_ON_LOAD : true;

//-----------------------------------------------------------------------------
var EUSignCPModuleInitialized;
var IsEUSignCPModuleInitialized = false;
function setEUSignCPModuleInitialized(_val) {
  EUSignCPModuleInitialized = _val;
  try {
    if (
      IsEUSignCPModuleInitialized &&
      typeof EUSignCPModuleInitialized == "function"
    )
      EUSignCPModuleInitialized(IsEUSignCPModuleInitialized);
  } catch (e) {}
}

function EUSignCPModuleInitialize() {
  Module.setStatus.last = null;
  Module["setStatus"]("(ініціалізація...)");
  setTimeout(function () {
    IsEUSignCPModuleInitialized = false;
    try {
      var error = Module._EUInitialize();
      if (error != EU_ERROR_NONE) Module.setStatus("(не ініціалізовано)");
      else {
        Module.setStatus("(ініціалізовано)");
        IsEUSignCPModuleInitialized = true;
      }
    } catch (e) {
      Module.setStatus("(не ініціалізовано)");
    }

    try {
      if (typeof EUSignCPModuleInitialized == "function")
        EUSignCPModuleInitialized(IsEUSignCPModuleInitialized);
    } catch (e) {}
  }, 100);
}

//=============================================================================

var Module = {
  preRun: [],
  postRun: [
        		function() {
        			setTimeout(function() {
        				try {
        					if (typeof(EUSignCPModuleLoaded) == "function")
        						EUSignCPModuleLoaded();
        						
        					if (EU_MODULE_INITIALIZE_ON_LOAD)
        						EUSignCPModuleInitialize();
        				} catch (e) {
        				}
        			}, 100);
        		}
  ],
  print: (function () {
    return function (text) {
      text = Array.prototype.slice.call(arguments).join(" ");
    };
  })(),
  printErr: function (text) {
    text = Array.prototype.slice.call(arguments).join(" ");
    if (0) {
      dump(text + "\n");
    } else {
    }
  },
  setStatus: function (text) {
    if (text == "") return;

    try {
      if (!Module.setStatus.last)
        Module.setStatus.last = { time: Date.now(), text: "" };

      if (text === Module.setStatus.text) return;

      var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
      var now = Date.now();
      if (m && now - Date.now() < 30) return;

      var statusElement = document.getElementById("status");
      var progressElement = document.getElementById("progress");
      if (!statusElement || !progressElement) return;

      if (m) {
        text = m[1];
        progressElement.value = parseInt(m[2]) * 100;
        progressElement.max = parseInt(m[4]) * 100;
        progressElement.hidden = false;
        statusElement.hidden = false;
      } else {
        progressElement.value = 0;
        progressElement.max = 100;
        progressElement.hidden = true;
      }

      statusElement.innerHTML = text;
    } catch (e) {}
  },
  totalDependencies: 0,
  monitorRunDependencies: function (left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(
      left
        ? "Підготовка... (" +
            (this.totalDependencies - left) +
            "/" +
            this.totalDependencies +
            ")"
        : "Всі завантаження завершено."
    );
  },
  errorLangCode: EU_DEFAULT_LANG,
  MAX_DATA_SIZE: EU_MAX_DATA_SIZE_MB * EU_ONE_MB,
  LIBRARY_STACK: EU_LIBRARY_STACK_MB * EU_ONE_MB,
  LIBRARY_MEMORY: EU_LIBRARY_MEMORY_MB * EU_ONE_MB,
  TOTAL_STACK: (EU_MAX_DATA_SIZE_MB + EU_LIBRARY_STACK_MB) * EU_ONE_MB,
  TOTAL_MEMORY:
    (EU_LIBRARY_STACK_MB + EU_LIBRARY_MEMORY_MB + EU_MAX_DATA_SIZE_MB * 8) *
    EU_ONE_MB,
};

//=============================================================================

class EUSignCP {
  constructor() {
    (this.Vendor = "JSC IIT"),
      (this.ClassVersion = "1.3.56"),
      (this.ClassName = "EUSignCP"),
      (this.BaseLibraryVersion = "1.3.1.106"),
      (this.errorLangCode = EU_DEFAULT_LANG),
      (this.privKeyOwnerInfo = null),
      (this.isFileSyncAPISupported = false),
      (this.isFileASyncAPISupported = false),
      (this.stringEncoder = new StringEncoder("UTF-8", false));
  }
  //-----------------------------------------------------------------------------
  _GetFileSignTimeInfoSync(signIndex, signedFile) {
    if (!EUFS.link(signedFile)) {
      this.RaiseError(EU_ERROR_JS_READ_FILE);
    }

    var pTimeInfoPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUGetFileSignTimeInfo",
        "number",
        ["number", "array", "number"],
        [
          signIndex,
          UTF8ToCP1251Array(EUFS.getFilePath(signedFile)),
          pTimeInfoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pTimeInfoPtr.free();
      EUFS.unlink(signedFile);

      this.RaiseError(error);
    }

    EUFS.unlink(signedFile);

    var timeInfoPtr, timeInfo;

    timeInfoPtr = pTimeInfoPtr.toPtr();
    timeInfo = new EndUserTimeInfo(timeInfoPtr);
    Module._EUFreeTimeInfo(timeInfoPtr);

    return timeInfo;
  }
  //-----------------------------------------------------------------------------
  GetErrorDescription(errorCode, langCode) {
    try {
      if ((errorCode & EU_ERROR_JS_ERRORS) == EU_ERROR_JS_ERRORS) {
        if (arguments.length == 2) {
          return EU_ERRORS_STRINGS[langCode][errorCode];
        } else {
          return EU_ERRORS_STRINGS[this.errorLangCode][errorCode];
        }
      }

      var strPtr = 0;

      if (arguments.length == 2) {
        strPtr = Module._EUGetErrorLangDesc(errorCode, langCode);
      } else {
        strPtr = Module._EUGetErrorLangDesc(errorCode, this.errorLangCode);
      }

      return CP1251PointerToUTF8(strPtr);
    } catch (e) {
      return null;
    }
  }
  MakeError(errorCode) {
    var errorMsg = this.GetErrorDescription(errorCode);
    if (errorMsg == null) errorMsg = "";

    return new EUSignCPException(errorCode, errorMsg, "");
  }
  RaiseError(errorCode) {
    throw this.MakeError(errorCode);
  }
  //-----------------------------------------------------------------------------
  GetVersion() {
    return this.ClassVersion + "(" + this.BaseLibraryVersion + ")";
  }
  //-----------------------------------------------------------------------------
  Initialize() {
    var error;

    try {
      this.isFileSyncAPISupported = IsFileSyncSupported() & EUFS.staticInit();
      this.isFileASyncAPISupported = IsFileASyncSupported();

      error = Module._EUInitialize();
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);

    return EU_ERROR_NONE;
  }
  Finalize() {
    var error;

    try {
      Module._EUFinalize();
      error = EU_ERROR_NONE;
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    this.privKeyOwnerInfo = null;

    if (error != EU_ERROR_NONE) this.RaiseError(error);

    return EU_ERROR_NONE;
  }
  IsInitialized() {
    var isInitialized;

    try {
      isInitialized = Module._EUIsInitialized() != EU_FALSE;
    } catch (e) {
      isInitialized = false;
    }

    return isInitialized;
  }
  SetErrorMessageLanguage(langCode) {
    if (typeof langCode == "string") {
      langCode = langCode.toLocaleLowerCase();
      switch (langCode) {
        case "en":
          langCode = EU_EN_LANG;
          break;
        case "ru":
          langCode = EU_RU_LANG;
          break;

        case "uk":
        case "ua":
        default:
          langCode = EU_UA_LANG;
          break;
      }
    }
    this.errorLangCode = langCode;
    Module.errorLanguage = langCode;
  }
  GetErrorDesc(errorCode, langCode) {
    var errorDesc = this.GetErrorDescription(errorCode, langCode);

    if (errorDesc == null) this.RaiseError(EU_ERROR_JS_LIBRARY_LOAD);

    return errorDesc;
  }
  //-----------------------------------------------------------------------------
  CheckMaxDataSize(data) {
    if (data.length > Module.MAX_DATA_SIZE)
      this.RaiseError(EU_ERROR_BAD_PARAMETER);
  }
  Base64Encode(data) {
    this.CheckMaxDataSize(data);

    var strPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUBASE64Encode",
        "number",
        ["array", "number", "number"],
        [data, data.length, strPtr.ptr]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      strPtr.free();
      this.RaiseError(error);
    }

    return strPtr.toString();
  }
  Base64Decode(data) {
    this.CheckMaxDataSize(data);

    var arrPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUBASE64Decode",
        "number",
        ["array", "number", "number"],
        [StringToCString(data), arrPtr.ptr, arrPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      arrPtr.free();
      this.RaiseError(error);
    }

    return arrPtr.toArray();
  }
  SetJavaStringCompliant(compliant) {
    this.stringEncoder = new StringEncoder(
      this.stringEncoder.charset,
      compliant
    );
  }
  SetCharset(charset) {
    try {
      var encoder = new StringEncoder(
        charset,
        this.stringEncoder.javaCompliant
      );
      this.stringEncoder = encoder;
    } catch (e) {
      this.RaiseError(EU_ERROR_BAD_PARAMETER);
    }
  }
  GetCharset() {
    if (this.stringEncoder == null) this.RaiseError(EU_ERROR_BAD_PARAMETER);

    return this.stringEncoder.charset;
  }
  StringToArray(data) {
    try {
      return this.stringEncoder.encode(data);
    } catch (e) {
      this.RaiseError(EU_ERROR_BAD_PARAMETER);
    }
  }
  ArrayToString(data) {
    try {
      return this.stringEncoder.decode(data);
    } catch (e) {
      this.RaiseError(EU_ERROR_BAD_PARAMETER);
    }
  }
  ReadFile(file, onSuccess, onError) {
    var useASyncAPI = arguments.length == 3;

    if (file == null) {
      if (useASyncAPI) {
        onError(this.MakeError(EU_ERROR_BAD_PARAMETER));
        return;
      }

      this.RaiseError(EU_ERROR_BAD_PARAMETER);
      return;
    }

    if (!this.isFileSyncAPISupported && !this.isFileASyncAPISupported) {
      if (useASyncAPI) {
        onError(this.MakeError(EU_ERROR_NOT_SUPPORTED));
        return;
      }

      this.RaiseError(EU_ERROR_NOT_SUPPORTED);
      return;
    }

    if (useASyncAPI) {
      var pThis = this;
      var _onSuccess = function (evt) {
        if (evt.target.readyState != FileReader.DONE) return;

        try {
          var loadedFile = new EndUserFile();

          loadedFile.SetTransferableObject({
            file: file,
            data: new Uint8Array(evt.target.result),
          });

          onSuccess(loadedFile);
        } catch (e) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        }
      };

      var _onError = function (e) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
      };

      var fileReader = new FileReader();
      fileReader.onloadend = _onSuccess;
      fileReader.onerror = _onError;
      fileReader.readAsArrayBuffer(file);
      return;
    }

    try {
      var fileReader = new FileReaderSync();
      var fileData = fileReader.readAsArrayBuffer(file);
      var loadedFile = new EndUserFile();

      loadedFile.SetTransferableObject({
        file: file,
        data: new Uint8Array(fileData),
      });

      return loadedFile;
    } catch (e) {
      this.RaiseError(EU_ERROR_JS_READ_FILE);
    }
  }
  ReadFiles(files, onSuccess, onError) {
    var useASyncAPI = arguments.length == 3;

    if (files.length <= 0) {
      if (useASyncAPI) {
        onError(this.MakeError(EU_ERROR_BAD_PARAMETER));
        return;
      }

      this.RaiseError(EU_ERROR_BAD_PARAMETER);
      return;
    }

    if (useASyncAPI) {
      var curIndex = 0;
      var processedFiles = [];

      var pThis = this;
      var _onSuccess = function (readedFile) {
        processedFiles.push(readedFile);
        curIndex++;

        if (curIndex < files.length) {
          pThis.ReadFile(files[curIndex], _onSuccess, onError);
          return;
        }

        onSuccess(processedFiles);
      };

      pThis.ReadFile(files[curIndex], _onSuccess, onError);
      return;
    }

    var processedFiles = [];
    for (var i = 0; i < files.length; i++) {
      processedFiles.push(this.ReadFile(files[i]));
    }

    return processedFiles;
  }
  LoadDataFromServer(path, onSuccess, onError, asByteArray) {
    var pThis = this;
    try {
      var httpRequest;
      var url;

      if (XMLHttpRequest) httpRequest = new XMLHttpRequest();
      else httpRequest = new ActiveXObject("Microsoft.XMLHTTP");

      httpRequest.onload = function () {
        if (httpRequest.readyState != 4) return;

        if (httpRequest.status == 200) {
          if (asByteArray) {
            onSuccess(new Uint8Array(this.response));
          } else {
            onSuccess(httpRequest.responseText);
          }
        } else {
          onError(pThis.MakeError(EU_ERROR_DOWNLOAD_FILE));
        }
      };

      httpRequest.onerror = function () {
        onError(pThis.MakeError(EU_ERROR_DOWNLOAD_FILE));
      };

      if (path.indexOf("http://") != 0 && path.indexOf("https://") != 0) {
        if (!location.origin) {
          location.origin =
            location.protocol +
            "//" +
            location.hostname +
            (location.port ? ":" + location.port : "");
        }

        url = location.origin + path;
      } else {
        url = path;
      }

      httpRequest.open("GET", url, true);
      if (asByteArray) httpRequest.responseType = "arraybuffer";
      httpRequest.send();
    } catch (e) {
      onError(pThis.MakeError(EU_ERROR_DOWNLOAD_FILE));
    }
  }
  //-----------------------------------------------------------------------------
  DoesNeedSetSettings() {
    try {
      return Module._EUDoesNeedSetSettings() != EU_FALSE;
    } catch (e) {
      this.RaiseError(EU_ERROR_UNKNOWN);
    }
  }
  SetXMLHTTPProxyService(proxyServicePath) {
    XMLHTTPProxyService = proxyServicePath;
  }
  SetXMLHTTPDirectAccess(directAccess) {
    XMLHTTPDirectAccess = directAccess;
  }
  AddXMLHTTPDirectAccessAddress(address) {
    XMLHTTPDirectAccessAddresses.push(address);
  }
  InitializeMandatorySettings() {
    var fs = this.CreateFileStoreSettings();
    this.SetFileStoreSettings(fs);

    var proxy = this.CreateProxySettings();
    this.SetProxySettings(proxy);

    var tsp = this.CreateTSPSettings();
    this.SetTSPSettings(tsp);

    var ocsp = this.CreateOCSPSettings();
    this.SetOCSPSettings(ocsp);

    var ldap = this.CreateLDAPSettings();
    this.SetLDAPSettings(ldap);
  }
  CreateFileStoreSettings() {
    return new EndUserFileStoreSettings(
      "/certificates",
      false,
      false,
      false,
      false,
      false,
      false,
      3600
    );
  }
  SetFileStoreSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetFileStoreSettings",
        "number",
        [
          "array",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          UTF8ToCP1251Array(settings.path),
          IntFromBool(settings.checkCRLs),
          IntFromBool(settings.autoRefresh),
          IntFromBool(settings.ownCRLsOnly),
          IntFromBool(settings.fullAndDeltaCRLs),
          IntFromBool(settings.autoDownloadCRLs),
          IntFromBool(settings.saveLoadedCerts),
          settings.expireTime,
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateProxySettings() {
    return new EndUserProxySettings(false, true, "", "3128", "", "", false);
  }
  SetProxySettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetProxySettings",
        "number",
        ["number", "number", "array", "array", "array", "array", "number"],
        [
          IntFromBool(settings.useProxy),
          IntFromBool(settings.anonymous),
          StringToCString(settings.address),
          StringToCString(settings.port),
          StringToCString(settings.user),
          StringToCString(settings.password),
          IntFromBool(settings.savePassword),
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateTSPSettings() {
    return new EndUserTSPSettings(false, "", "80");
  }
  SetTSPSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetTSPSettings",
        "number",
        ["number", "array", "array"],
        [
          IntFromBool(settings.getStamps),
          StringToCString(settings.address),
          StringToCString(settings.port),
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateOCSPSettings() {
    return new EndUserOCSPSettings(false, false, "", "80");
  }
  SetOCSPSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetOCSPSettings",
        "number",
        ["number", "number", "array", "array"],
        [
          IntFromBool(settings.useOCSP),
          IntFromBool(settings.beforeStore),
          StringToCString(settings.address),
          StringToCString(settings.port),
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateCMPSettings() {
    return new EndUserCMPSettings(false, "", "80", "");
  }
  SetCMPSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetCMPSettings",
        "number",
        ["number", "array", "array", "array"],
        [
          IntFromBool(settings.useCMP),
          StringToCString(settings.address),
          StringToCString(settings.port),
          UTF8ToCP1251Array(settings.commonName),
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateLDAPSettings() {
    return new EndUserLDAPSettings(false, "", "80", true, "", "");
  }
  SetLDAPSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetLDAPSettings",
        "number",
        ["number", "array", "array", "number", "array", "array"],
        [
          IntFromBool(settings.useLDAP),
          StringToCString(settings.address),
          StringToCString(settings.port),
          IntFromBool(settings.anonymous),
          StringToCString(settings.user),
          StringToCString(settings.password),
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateModeSettings() {
    return new EndUserModeSettings(false);
  }
  SetModeSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetModeSettings",
        "number",
        ["number"],
        [IntFromBool(settings.offlineMode)]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateOCSPAccessInfoModeSettings() {
    return new EndUserOCSPAccessInfoModeSettings(false);
  }
  SetOCSPAccessInfoModeSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetOCSPAccessInfoModeSettings",
        "number",
        ["number"],
        [IntFromBool(settings.enabled)]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CreateOCSPAccessInfoSettings() {
    return new EndUserOCSPAccessInfoSettings("", "", "");
  }
  SetOCSPAccessInfoSettings(settings) {
    var error;

    try {
      error = Module.ccall(
        "EUSetOCSPAccessInfoSettings",
        "number",
        ["array", "array", "array"],
        [
          UTF8ToCP1251Array(settings.issuerCN),
          StringToCString(settings.address),
          StringToCString(settings.port),
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  SetRuntimeParameter(name, value) {
    var error;
    if (typeof value != "boolean" && typeof value != "number") {
      this.RaiseError(EU_ERROR_BAD_PARAMETER);
    }

    if (typeof value == "boolean") value = IntFromBool(value);

    var intPtr = EUPointerInt();

    try {
      Module.setValue(intPtr.ptr, value | 0, "i32");

      error = Module.ccall(
        "EUSetRuntimeParameter",
        "number",
        ["array", "number", "number"],
        [UTF8ToCP1251Array(name), intPtr.ptr, EU_INT_SIZE]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
      intPtr.free();
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }

    intPtr.free();
  }
  SetOCSPResponseExpireTime(expireTime) {
    var error;

    try {
      error = Module.ccall(
        "EUSetOCSPResponseExpireTime",
        "number",
        ["number"],
        [expireTime]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  //-----------------------------------------------------------------------------
  SaveCertificate(certificate) {
    var error;

    this.CheckMaxDataSize(certificate);

    try {
      error = Module.ccall(
        "EUSaveCertificate",
        "number",
        ["array", "number"],
        [certificate, certificate.length]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  SaveCertificates(certificates) {
    var error;

    this.CheckMaxDataSize(certificates);

    try {
      error = Module.ccall(
        "EUSaveCertificates",
        "number",
        ["array", "number"],
        [certificates, certificates.length]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  SaveCertificatesEx(certificates, trustedStore) {
    var error;

    this.CheckMaxDataSize(certificates);
    if (trustedStore) this.CheckMaxDataSize(trustedStore);

    try {
      error = Module.ccall(
        "EUSaveCertificatesEx",
        "number",
        ["array", "number", trustedStore ? "array" : "number", "number"],
        [
          certificates,
          certificates.length,
          trustedStore ? trustedStore : 0,
          trustedStore ? trustedStore.length : 0,
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  SaveCRL(isFullCRL, crl) {
    var error;

    this.CheckMaxDataSize(crl);

    try {
      error = Module.ccall(
        "EUSaveCRL",
        "number",
        ["number", "array", "number"],
        [IntFromBool(isFullCRL), crl, crl.length]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  GetCertificate(issuer, serial, asBase64String) {
    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUGetCertificate",
        "number",
        ["array", "array", "number", "number", "number"],
        [
          UTF8ToCP1251Array(issuer),
          UTF8ToCP1251Array(serial),
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  GetCertificates() {
    var pPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUGetCertificates",
        "number",
        ["number", "number"],
        [pPtr.ptr, pPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e)
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toArray();
  }
  GetCertificatesByKeyInfo(keyInfo, cmpServers) {
    this.CheckMaxDataSize(keyInfo);

    var pPtr = EUPointerArray();
    var error;

    var servers = ParseServersArray(cmpServers);
    var addressesArray = intArrayFromStrings(servers.addresses);
    var portsArray = intArrayFromStrings(servers.ports);

    try {
      error = Module.ccall(
        "EUGetCertificatesByKeyInfo",
        "number",
        ["array", "number", "array", "array", "number", "number"],
        [
          keyInfo,
          keyInfo.length,
          addressesArray,
          portsArray,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toArray();
  }
  ParseCertificate(certificate) {
    this.CheckMaxDataSize(certificate);

    var infoPtr = EUPointerCertificateInfo();
    var error;

    try {
      error = Module.ccall(
        "EUParseCertificate",
        "number",
        ["array", "number", "number"],
        [certificate, certificate.length, infoPtr.ptr]
      );
    } catch (e) {
console.error(e);
      error = EU_ERROR_UNKNOWN;
}

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    var info = new EndUserCertificateInfo(infoPtr.ptr);
    infoPtr.free();

    return info;
  }
  ParseCertificateEx(certificate) {
    this.CheckMaxDataSize(certificate);

    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUParseCertificateEx",
        "number",
        ["array", "number", "number"],
        [certificate, certificate.length, pPtr.ptr]
      );
    } catch (e) {
console.error(e);
      error = EU_ERROR_UNKNOWN;
}

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    var infoPtr = pPtr.toPtr();
    var info = new EndUserCertificateInfoEx(infoPtr);
    Module._EUFreeCertificateInfoEx(infoPtr);

    return info;
  }
  GetCRInfo(request) {
    this.CheckMaxDataSize(request);

    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUGetCRInfo",
        "number",
        ["array", "number", "number"],
        [request, request.length, pPtr.ptr]
      );
    } catch (e) {
console.error(e);
      error = EU_ERROR_UNKNOWN;
}

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    var infoPtr = pPtr.toPtr();
    var info = new EndUserRequestInfo(infoPtr);
    Module._EUFreeCRInfo(infoPtr);

    return info;
  }
  CheckCertificate(certificate) {
    this.CheckMaxDataSize(certificate);

    var infoPtr = EUPointerCertificateInfo();
    var error;

    try {
      error = Module.ccall(
        "EUCheckCertificate",
        "number",
        ["array", "number"],
        [certificate, certificate.length]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    return true;
  }
  EnumCertificatesEx(
    subjectType,
    subjectSubType,
    certKeyType,
    keyUsage,
    index
  ) {
    var pCertInfoExPtr = EUPointer();
    var certArrPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUEnumCertificatesEx",
        "number",
        [
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          subjectType,
          subjectSubType,
          certKeyType,
          keyUsage,
          index,
          pCertInfoExPtr.ptr,
          certArrPtr.ptr,
          certArrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pCertInfoExPtr.free();
      certArrPtr.free();

      if (error == EU_WARNING_END_OF_ENUM) return null;

      this.RaiseError(error);
    }

    var certInfoExPtr, certInfoEx;

    certInfoExPtr = pCertInfoExPtr.toPtr();
    certInfoEx = new EndUserCertificateInfoEx(certInfoExPtr);
    Module._EUFreeCertificateInfoEx(certInfoExPtr);

    return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
  }
  //-----------------------------------------------------------------------------
  IsPrivateKeyReaded() {
    var error = EU_ERROR_NONE;
    var isReaded;

    try {
      isReaded = Module._EUIsPrivateKeyReaded() != EU_FALSE;
      error = EU_ERROR_NONE;
    } catch (e) {
      error = EU_ERROR_UNKNOWN;
      isReaded = false;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }

    return isReaded;
  }
  ReadPrivateKeyBinary(privateKey, password) {
    this.CheckMaxDataSize(privateKey);

    var infoPtr = EUPointerCertOwnerInfo();
    var error;

    try {
      error = Module.ccall(
        "EUReadPrivateKeyBinary",
        "number",
        ["array", "number", "array", "number"],
        [
          privateKey,
          privateKey.length,
          UTF8ToCP1251Array(password),
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    this.privKeyOwnerInfo = new EndUserOwnerInfo(infoPtr.ptr);
    infoPtr.free();

    return this.privKeyOwnerInfo;
  }
  ResetPrivateKey() {
    try {
      Module.ccall("EUResetPrivateKey", "", [], []);
    } catch (e) {}

    this.privKeyOwnerInfo = null;
  }
  GetPrivateKeyOwnerInfo() {
    var error = EU_ERROR_NONE;
    try {
      if (Module._EUIsPrivateKeyReaded() == EU_FALSE) {
        this.privKeyOwnerInfo = null;
        error = EU_ERROR_UNKNOWN;
      }
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }

    return this.privKeyOwnerInfo;
  }
  GetKeyInfoBinary(privateKey, password) {
    this.CheckMaxDataSize(privateKey);

    var arrPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUGetKeyInfoBinary",
        "number",
        ["array", "number", "array", "number", "number"],
        [
          privateKey,
          privateKey.length,
          UTF8ToCP1251Array(password),
          arrPtr.ptr,
          arrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      arrPtr.free();
      this.RaiseError(error);
    }

    return arrPtr.toArray();
  }
  EnumOwnCertificates(index) {
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUEnumOwnCertificates",
        "number",
        ["number", "number"],
        [index, pPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();

      if (error == EU_WARNING_END_OF_ENUM) return null;

      this.RaiseError(error);
    }

    var infoPtr = pPtr.toPtr();
    var info = new EndUserCertificateInfoEx(infoPtr);
    Module._EUFreeCertificateInfoEx(infoPtr);

    return info;
  }
  GeneratePrivateKey(
    password,
    uaKeysType,
    uaDSKeysSpec,
    useDSKeyAsKEP,
    uaKEPKeysSpec,
    internationalKeysType,
    internationalKeysSpec,
    userInfo,
    extKeyUsages
  ) {
    var error;

    var kmPtr = EUPointerKeyMedia(0, 0, password);
    if (kmPtr == null) this.RaiseError(EU_ERROR_BAD_PARAMETER);

    var userInfoPtr = null;
    if (userInfo != null) {
      userInfoPtr = EUPointerEndUserInfo(userInfo);
      if (userInfoPtr == null) {
        kmPtr.free();
        this.RaiseError(EU_ERROR_BAD_PARAMETER);
      }
    }

    var pkPtr = EUPointerArray();
    var pkInfoPtr = EUPointerArray();

    var uaReqPtr = null,
      uaReqNamePtr = null,
      uaKEPReqPtr = null,
      uaKEPReqNamePtr = null;
    if (uaKeysType != EU_KEYS_TYPE_NONE) {
      uaReqPtr = EUPointerArray();
      uaReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);

      if (!useDSKeyAsKEP) {
        uaKEPReqPtr = EUPointerArray();
        uaKEPReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
      }
    }

    var intReqPtr = null,
      intReqNamePtr = null;
    if (internationalKeysType != EU_KEYS_TYPE_NONE) {
      intReqPtr = EUPointerArray();
      intReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
    }

    var _free = function () {
      kmPtr.free();
      pkPtr.free();
      pkInfoPtr.free();
      if (userInfoPtr != null) userInfoPtr.free();
      if (uaReqPtr != null) uaReqPtr.free();
      if (uaReqNamePtr != null) uaReqNamePtr.free();
      if (uaKEPReqPtr != null) uaKEPReqPtr.free();
      if (uaKEPReqNamePtr != null) uaKEPReqNamePtr.free();
      if (intReqPtr != null) intReqPtr.free();
      if (intReqNamePtr != null) intReqNamePtr.free();
    };

    try {
      error = Module.ccall(
        "EUGeneratePrivateKeyEx",
        "number",
        [
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          extKeyUsages != null ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          kmPtr.ptr,
          EU_FALSE,
          uaKeysType,
          uaDSKeysSpec,
          uaKEPKeysSpec,
          null,
          internationalKeysType,
          internationalKeysSpec,
          null,
          userInfo != null ? userInfoPtr.ptr : null,
          extKeyUsages != null ? UTF8ToCP1251Array(extKeyUsages) : null,
          pkPtr.ptr,
          pkPtr.lengthPtr,
          pkInfoPtr.ptr,
          pkInfoPtr.lengthPtr,
          uaReqPtr != null ? uaReqPtr.ptr : null,
          uaReqPtr != null ? uaReqPtr.lengthPtr : null,
          uaReqNamePtr != null ? uaReqNamePtr.ptr : null,
          uaKEPReqPtr != null ? uaKEPReqPtr.ptr : null,
          uaKEPReqPtr != null ? uaKEPReqPtr.lengthPtr : null,
          uaKEPReqNamePtr != null ? uaKEPReqNamePtr.ptr : null,
          intReqPtr != null ? intReqPtr.ptr : null,
          intReqPtr != null ? intReqPtr.lengthPtr : null,
          intReqNamePtr != null ? intReqNamePtr.ptr : null,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      _free();
      this.RaiseError(error);
    }

    var _toString = function (strPtr) {
      var str = CP1251PointerToUTF8(strPtr);
      var lastInd = str.lastIndexOf("/");
      if (lastInd < 0) return str;

      return str.substring(lastInd + 1, str.length);
    };

    var euPrivateKey = EndUserPrivateKey(
      pkPtr.toArray(),
      pkInfoPtr.toArray(),
      uaReqPtr != null ? uaReqPtr.toArray() : null,
      uaReqNamePtr != null ? _toString(uaReqNamePtr.ptr) : null,
      uaKEPReqPtr != null ? uaKEPReqPtr.toArray() : null,
      uaKEPReqNamePtr != null ? _toString(uaKEPReqNamePtr.ptr) : null,
      intReqPtr != null ? intReqPtr.toArray() : null,
      intReqNamePtr != null ? _toString(intReqNamePtr.ptr) : null
    );

    _free();

    return euPrivateKey;
  }
  MakeNewCertificate(
    privateKey,
    password,
    uaKeysType,
    uaDSKeysSpec,
    useDSKeyAsKEP,
    uaKEPKeysSpec,
    internationalKeysType,
    internationalKeysSpec,
    newPrivateKeyPassword
  ) {
    this.CheckMaxDataSize(privateKey);

    var pkPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUMakeNewCertificate",
        "number",
        [
          "number",
          "array",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "array",
          "number",
          "number",
        ],
        [
          null,
          privateKey,
          privateKey.length,
          UTF8ToCP1251Array(password),
          uaKeysType,
          uaDSKeysSpec,
          IntFromBool(useDSKeyAsKEP),
          uaKEPKeysSpec,
          null,
          internationalKeysType,
          internationalKeysSpec,
          null,
          null,
          UTF8ToCP1251Array(newPrivateKeyPassword),
          pkPtr.ptr,
          pkPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pkPtr.free();
      this.RaiseError(error);
    }

    return pkPtr.toArray();
  }
  ChangeSoftwarePrivateKeyPassword(privateKey, oldPassword, newPassword) {
    this.CheckMaxDataSize(privateKey);

    var arrPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUChangeSoftwarePrivateKeyPassword",
        "number",
        ["array", "number", "array", "array", "number", "number"],
        [
          privateKey,
          privateKey.length,
          UTF8ToCP1251Array(oldPassword),
          UTF8ToCP1251Array(newPassword),
          arrPtr.ptr,
          arrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      arrPtr.free();
      this.RaiseError(error);
    }

    return arrPtr.toArray();
  }
  EnumJKSPrivateKeys(container, index) {
    this.CheckMaxDataSize(container);

    var keyAliasPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUEnumJKSPrivateKeys",
        "number",
        ["array", "number", "number", "number"],
        [container, container.length, index, keyAliasPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      keyAliasPtr.free();
      this.RaiseError(error);
    }

    return keyAliasPtr.toString();
  }
  GetJKSPrivateKey(container, keyAlias) {
    this.CheckMaxDataSize(container);

    var keyPtr = EUPointerArray();
    var certsCountPtr = EUPointerDWORD();
    var certsPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUGetJKSPrivateKey",
        "number",
        [
          "array",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          container,
          container.length,
          UTF8ToCP1251Array(keyAlias),
          keyPtr.ptr,
          keyPtr.lengthPtr,
          certsCountPtr.ptr,
          certsPtr.ptr,
          certsPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      keyPtr.free();
      certsCountPtr.free();
      certsPtr.free();
      this.RaiseError(error);
    }

    var count = certsCountPtr.toNumber();

    return new EndUserJKSPrivateKey(
      keyPtr.toArray(),
      certsPtr.toArrayOfByteArrays(count)
    );
  }
  ChangeOwnCertificatesStatus(requestType, revocationReason) {
    var error;

    try {
      error = Module.ccall(
        "EUChangeOwnCertificatesStatus",
        "number",
        ["number", "number"],
        [requestType, revocationReason]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }
  }
  CtxReadPrivateKeyBinary(context, privateKey, password) {
    this.CheckMaxDataSize(privateKey);

    var pkCtxPtr = EUPointer();
    var infoPtr = EUPointerCertOwnerInfo(context.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxReadPrivateKeyBinary",
        "number",
        ["number", "array", "number", "array", "number", "number"],
        [
          context.GetContext(),
          privateKey,
          privateKey.length,
          UTF8ToCP1251Array(password),
          pkCtxPtr.ptr,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pkCtxPtr.free();
      infoPtr.free();
      this.RaiseError(error);
    }

    var privateKeyContext = new EndUserPrivateKeyContext(
      pkCtxPtr.toPtr(),
      new EndUserOwnerInfo(infoPtr.ptr)
    );
    infoPtr.free();

    return privateKeyContext;
  }
  CtxFreePrivateKey(privateKeyContext) {
    try {
      Module._EUCtxFreePrivateKey(privateKeyContext.GetContext() | 0);
    } catch (e) {}
  }
  CtxGetOwnCertificate(privateKeyContext, certKeyType, keyUsage) {
    var pkCtx = privateKeyContext.GetContext();
    var pCertInfoExPtr = EUPointer();
    var certArrPtr = EUPointerArray(pkCtx);
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetOwnCertificate",
        "number",
        ["number", "number", "number", "number", "number", "number"],
        [
          pkCtx,
          certKeyType,
          keyUsage,
          pCertInfoExPtr.ptr,
          certArrPtr.ptr,
          certArrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pCertInfoExPtr.free();
      certArrPtr.free();

      this.RaiseError(error);
    }

    var certInfoExPtr, certInfoEx;

    certInfoExPtr = pCertInfoExPtr.toPtr();
    certInfoEx = new EndUserCertificateInfoEx(certInfoExPtr);
    Module._EUCtxFreeCertificateInfoEx(pkCtx | 0, certInfoExPtr);

    return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
  }
  CtxEnumOwnCertificates(privateKeyContext, index) {
    var pkCtx = privateKeyContext.GetContext();
    var pCertInfoExPtr = EUPointer();
    var certArrPtr = EUPointerArray(pkCtx);
    var error;

    try {
      error = Module.ccall(
        "EUCtxEnumOwnCertificates",
        "number",
        ["number", "number", "number", "number", "number"],
        [pkCtx, index, pCertInfoExPtr.ptr, certArrPtr.ptr, certArrPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pCertInfoExPtr.free();
      certArrPtr.free();

      if (error == EU_WARNING_END_OF_ENUM) return null;

      this.RaiseError(error);
    }

    var certInfoExPtr, certInfoEx;

    certInfoExPtr = pCertInfoExPtr.toPtr();
    certInfoEx = new EndUserCertificateInfoEx(certInfoExPtr);
    Module._EUCtxFreeCertificateInfoEx(pkCtx | 0, certInfoExPtr);

    return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
  }
  CtxEnumPrivateKeyInfo(privateKeyContext, index) {
    var dwordKeyTypePtr = EUPointerDWORD();
    var dwordKeyUsagePtr = EUPointerDWORD();
    var dwordKeyIDsCountPtr = EUPointerDWORD();
    var keyIDsPtr = EUPointer(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxEnumPrivateKeyInfo",
        "number",
        ["number", "number", "number", "number", "number", "number"],
        [
          privateKeyContext.GetContext() | 0,
          index,
          dwordKeyTypePtr.ptr,
          dwordKeyUsagePtr.ptr,
          dwordKeyIDsCountPtr.ptr,
          keyIDsPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      dwordKeyTypePtr.free();
      dwordKeyUsagePtr.free();
      dwordKeyIDsCountPtr.free();
      keyIDsPtr.free();

      if (error == EU_WARNING_END_OF_ENUM) return null;

      this.RaiseError(error);
    }

    var keyType = dwordKeyTypePtr.toNumber();
    var keyUsage = dwordKeyUsagePtr.toNumber();
    var keyIDsCount = dwordKeyIDsCountPtr.toNumber();
    var keyIDs = keyIDsPtr.toStringArray();
    if (keyIDsCount != keyIDs.length) this.RaiseError(EU_ERROR_BAD_PARAMETER);

    return EndUserPrivateKeyInfo(keyType, keyUsage, keyIDs);
  }
  CtxExportPrivateKeyContainer(
    privateKeyContext,
    password,
    keyID,
    asBase64String
  ) {
    var pPtr = EUPointerArray(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxExportPrivateKeyContainer",
        "number",
        ["number", "array", "array", "number", "number"],
        [
          privateKeyContext.GetContext(),
          UTF8ToCP1251Array(password),
          UTF8ToCP1251Array(keyID),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxExportPrivateKeyPFXContainer(
    privateKeyContext,
    password,
    exportCerts,
    trustedKeyIDs,
    keyIDs,
    asBase64String
  ) {
    var pPtr = EUPointerArray(privateKeyContext.GetContext());
    var error;

    var trustedKeyIDsArray = [];
    for (var i = 0; i < trustedKeyIDs.length; i++) {
      trustedKeyIDsArray.push(IntFromBool(exportCerts));
    }

    try {
      var trustedKeyIDsPtr = EUPointerIntArray(trustedKeyIDsArray);
      error = Module.ccall(
        "EUCtxExportPrivateKeyPFXContainer",
        "number",
        [
          "number",
          "array",
          "number",
          "number",
          "number",
          "array",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          UTF8ToCP1251Array(password),
          IntFromBool(exportCerts),
          keyIDs.length,
          trustedKeyIDsPtr.ptr,
          intArrayFromStrings(keyIDs),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxGetCertificateFromPrivateKey(privateKeyContext, keyID) {
    var pCertInfoExPtr = EUPointer();
    var certArrPtr = EUPointerArray(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetCertificateFromPrivateKey",
        "number",
        ["number", "array", "number", "number", "number"],
        [
          privateKeyContext.GetContext(),
          UTF8ToCP1251Array(keyID),
          pCertInfoExPtr.ptr,
          certArrPtr.ptr,
          certArrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pCertInfoExPtr.free();
      certArrPtr.free();

      this.RaiseError(error);
    }

    var certInfoExPtr, certInfoEx;

    certInfoExPtr = pCertInfoExPtr.toPtr();
    certInfoEx = new EndUserCertificateInfoEx(certInfoExPtr);
    Module._EUCtxFreeCertificateInfoEx(
      privateKeyContext.GetContext() | 0,
      certInfoExPtr
    );

    return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
  }
  CtxChangeOwnCertificatesStatus(
    privateKeyContext,
    requestType,
    revocationReason
  ) {
    var error;

    try {
      error = Module.ccall(
        "EUCtxChangeOwnCertificatesStatus",
        "number",
        ["number", "number", "number"],
        [privateKeyContext.GetContext(), requestType, revocationReason]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }
  }
  CtxGetOwnEUserParams(privateKeyContext) {
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetOwnEUserParams",
        "number",
        ["number", "number"],
        [privateKeyContext.GetContext(), pPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    var paramsPtr = pPtr.toPtr();
    var info = new EndUserParams(paramsPtr);

    Module._EUCtxFreeEUserParams(privateKeyContext.GetContext() | 0, paramsPtr);

    return info;
  }
  CtxModifyOwnEUserParams(privateKeyContext, phone, email) {
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUCtxModifyOwnEUserParams",
        "number",
        ["number", "array", "array"],
        [
          privateKeyContext.GetContext(),
          UTF8ToCP1251Array(phone),
          UTF8ToCP1251Array(email),
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }
  }
  CtxMakeDeviceCertificate(
    privateKeyContext,
    deviceName,
    uaRequest,
    uaKEPRequest,
    internationalRequest,
    ecdsaRequest,
    cmpAddress,
    cmpPort
  ) {
    var pkCtx = privateKeyContext.GetContext();
    var uaCertPtr = null,
      uaKEPCertPtr = null,
      intCertPtr = null,
      ecdsaCertPtr = null;

    if (uaRequest != null) uaCertPtr = EUPointerArray(pkCtx);
    if (uaKEPRequest != null) uaKEPCertPtr = EUPointerArray(pkCtx);
    if (internationalRequest != null) intCertPtr = EUPointerArray(pkCtx);
    if (ecdsaRequest != null) ecdsaCertPtr = EUPointerArray(pkCtx);

    try {
      error = Module.ccall(
        "EUCtxMakeDeviceCertificate",
        "number",
        [
          "number",
          "array",
          uaRequest != null ? "array" : "number",
          "number",
          uaKEPRequest != null ? "array" : "number",
          "number",
          internationalRequest != null ? "array" : "number",
          "number",
          ecdsaRequest != null ? "array" : "number",
          "number",
          cmpAddress != null ? "array" : "number",
          cmpPort != null ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          pkCtx,
          UTF8ToCP1251Array(deviceName),
          uaRequest != null ? uaRequest : 0,
          uaRequest != null ? uaRequest.length : 0,
          uaKEPRequest != null ? uaKEPRequest : 0,
          uaKEPRequest != null ? uaKEPRequest.length : 0,
          internationalRequest != null ? internationalRequest : 0,
          internationalRequest != null ? internationalRequest.length : 0,
          ecdsaRequest != null ? ecdsaRequest : 0,
          ecdsaRequest != null ? ecdsaRequest.length : 0,
          cmpAddress != null ? UTF8ToCP1251Array(cmpAddress) : 0,
          cmpPort != null ? UTF8ToCP1251Array(cmpPort) : 0,
          uaCertPtr != null ? uaCertPtr.ptr : 0,
          uaCertPtr != null ? uaCertPtr.lengthPtr : 0,
          uaKEPCertPtr != null ? uaKEPCertPtr.ptr : 0,
          uaKEPCertPtr != null ? uaKEPCertPtr.lengthPtr : 0,
          intCertPtr != null ? intCertPtr.ptr : 0,
          intCertPtr != null ? intCertPtr.lengthPtr : 0,
          ecdsaCertPtr != null ? ecdsaCertPtr.ptr : 0,
          ecdsaCertPtr != null ? ecdsaCertPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      if (uaCertPtr != null) uaCertPtr.free();
      if (uaKEPCertPtr != null) uaKEPCertPtr.free();
      if (intCertPtr != null) intCertPtr.free();
      if (ecdsaCertPtr != null) ecdsaCertPtr.free();
      this.RaiseError(error);
    }

    var certificates = [];
    if (uaCertPtr != null) certificates.push(uaCertPtr.toArray());
    if (uaKEPCertPtr != null) certificates.push(uaKEPCertPtr.toArray());
    if (intCertPtr != null) certificates.push(intCertPtr.toArray());
    if (ecdsaCertPtr != null) certificates.push(ecdsaCertPtr.toArray());

    return certificates;
  }
  //-----------------------------------------------------------------------------
  HashData(data, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUHashData",
        "number",
        ["array", "number", "number", "number", "number"],
        [
          data,
          data.length,
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  CtxHashData(context, hashAlgo, certificate, data, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    if (certificate != null) this.CheckMaxDataSize(certificate);

    var hashContext = null;

    try {
      var hash = null;
      var chunkMaxSize = EU_MAX_DATA_SIZE_MB;
      var offset = 0;

      hashContext = this.CtxHashDataBegin(context, hashAlgo, certificate);

      while (true) {
        var chunkSize = data.length - offset;
        if (chunkSize > chunkMaxSize) chunkSize = chunkMaxSize;

        var chunk = data.slice(offset, offset + chunkSize);
        this.CtxHashDataContinue(hashContext, chunk);
        offset += chunkSize;
        if (offset < data.length) continue;
        break;
      }

      hash = this.CtxHashDataEnd(hashContext, asBase64String);

      this.CtxFreeHash(hashContext);
      hashContext = null;

      return hash;
    } catch (e) {
      if (hashContext != null) this.CtxFreeHash(hashContext);
      throw e;
    }
  }
  CtxHashDataBegin(context, hashAlgo, certificate) {
    if (certificate != null) this.CheckMaxDataSize(certificate);

    var hashCtxPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUCtxHashDataBegin",
        "number",
        [
          "number",
          "number",
          certificate != null ? "array" : "number",
          "number",
          "number",
        ],
        [
          context.GetContext(),
          hashAlgo,
          certificate != null ? certificate : 0,
          certificate != null ? certificate.length : 0,
          hashCtxPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      hashCtxPtr.free();
      this.RaiseError(error);
    }

    return EndUserHashContext(hashCtxPtr.toPtr());
  }
  CtxHashDataContinue(hashContext, data) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var error;

    try {
      error = Module.ccall(
        "EUCtxHashDataContinue",
        "number",
        ["number", "array", "number"],
        [hashContext.GetContext(), data, data.length]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }
  }
  CtxHashDataEnd(hashContext, asBase64String) {
    var pPtr = EUPointerArray(hashContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxHashDataEnd",
        "number",
        ["number", "number", "number"],
        [hashContext.GetContext(), pPtr.ptr, pPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxFreeHash(hashContext) {
    try {
      Module._EUCtxFreeHash(hashContext.GetContext() | 0);
    } catch (e) {}
  }
  CtxHashFile(
    context,
    hashAlgo,
    certificate,
    file,
    onSuccess,
    onError,
    asBase64String
  ) {
    var pThis = this;

    if (certificate != null) pThis.CheckMaxDataSize(certificate);

    if (pThis.isFileSyncAPISupported) {
      if (!EUFS.link(file)) {
        setTimeout(function () {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        }, 1);
        return;
      }

      var pPtr = EUPointerArray(context.GetContext());
      var error;

      try {
        error = Module.ccall(
          "EUCtxHashFile",
          "number",
          [
            "number",
            "number",
            certificate != null ? "array" : "number",
            "number",
            "array",
            "number",
            "number",
          ],
          [
            context.GetContext(),
            hashAlgo,
            certificate != null ? certificate : 0,
            certificate != null ? certificate.length : 0,
            UTF8ToCP1251Array(EUFS.getFilePath(file)),
            pPtr.ptr,
            pPtr.lengthPtr,
          ]
        );
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(file);
        pPtr.free();

        setTimeout(function () {
          onError(pThis.MakeError(error));
        }, 1);
        return;
      }

      EUFS.unlink(file);

      try {
        var data = asBase64String
          ? pThis.Base64Encode(pPtr.toArray())
          : pPtr.toArray();
        setTimeout(function () {
          onSuccess(data);
        }, 1);
      } catch (e) {
        setTimeout(function () {
          onError(e);
        }, 1);
      }
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var data = pThis.CtxHashData(
            context,
            hashAlgo,
            certificate,
            fileReaded.data,
            asBase64String
          );

          onSuccess(data);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(file, _onSuccess, onError);
    }
  }
  //-----------------------------------------------------------------------------
  CheckDataStruct(data) {
    this.CheckMaxDataSize(data);

    if (typeof data == "string") data = this.Base64Decode(data);

    var error;

    try {
      error = Module.ccall(
        "EUCheckDataStruct",
        "number",
        ["array", "number"],
        [data, data.length]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);
  }
  CheckFileStruct(file, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      if (!EUFS.link(file)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var error;

      try {
        error = Module.ccall(
          "EUCheckFileStruct",
          "number",
          ["array"],
          [UTF8ToCP1251Array(EUFS.getFilePath(file))]
        );
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(file);

        onError(pThis.MakeError(error));
        return;
      }

      EUFS.unlink(file);

      onSuccess();
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          pThis.CheckDataStruct(fileReaded.data);
          onSuccess();
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(file, _onSuccess, onError);
    }
  }
  GetSignType(signIndex, sign) {
    this.CheckMaxDataSize(sign);

    var isSignStr = typeof sign == "string";
    var intPtr = EUPointerDWORD();
    var error;

    try {
      error = Module.ccall(
        "EUGetSignType",
        "number",
        [
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
        ],
        [
          signIndex,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          intPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      intPtr.free();

      this.RaiseError(error);
    }

    return intPtr.toNumber();
  }
  IsDataInSignedDataAvailable(sign) {
    this.CheckMaxDataSize(sign);

    var isSignStr = typeof sign == "string";
    var intPtr = EUPointerInt();
    var error;

    try {
      error = Module.ccall(
        "EUIsDataInSignedDataAvailable",
        "number",
        [
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
        ],
        [
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          intPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      intPtr.free();
      this.RaiseError(error);
    }

    return intPtr.toBoolean();
  }
  GetDataFromSignedData(signedData) {
    this.CheckMaxDataSize(signedData);

    var isSignStr = typeof signedData == "string";
    var arrPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUGetDataFromSignedData",
        "number",
        [
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
          "number",
        ],
        [
          isSignStr ? StringToCString(signedData) : 0,
          !isSignStr ? signedData : 0,
          !isSignStr ? signedData.length : 0,
          arrPtr.ptr,
          arrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      arrPtr.free();
      this.RaiseError(error);
    }

    return arrPtr.toArray();
  }
  GetSignTimeInfo(signIndex, sign) {
    this.CheckMaxDataSize(sign);

    var isSignStr = typeof sign == "string";
    var pTimeInfoPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUGetSignTimeInfo",
        "number",
        [
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
        ],
        [
          signIndex,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          pTimeInfoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pTimeInfoPtr.free();

      this.RaiseError(error);
    }

    var timeInfoPtr, timeInfo;

    timeInfoPtr = pTimeInfoPtr.toPtr();
    timeInfo = new EndUserTimeInfo(timeInfoPtr);
    Module._EUFreeTimeInfo(timeInfoPtr);

    return timeInfo;
  }
  GetFileSignTimeInfo(signIndex, signedFile, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      try {
        var timeInfo = pThis._GetFileSignTimeInfoSync(signIndex, signedFile);
        onSuccess(timeInfo);
        return;
      } catch (e) {
        onError(e);
        return;
      }
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var signTimeInfo = pThis.GetSignTimeInfo(signIndex, fileReaded.data);
          onSuccess(signTimeInfo);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(signedFile, _onSuccess, onError);
    }
  }
  SignData(data, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSignData",
        "number",
        ["array", "number", "number", "number", "number"],
        [
          data,
          data.length,
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  VerifyData(data, sign) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckDataStruct(sign);

    this.CheckMaxDataSize(data);
    this.CheckMaxDataSize(sign);

    var isSignStr = typeof sign == "string";
    var infoPtr = EUPointerSignerInfo();
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUVerifyData",
        "number",
        [
          "array",
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
        ],
        [
          data,
          data.length,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(0, sign);
    } catch (e) {
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, data, signTimeInfo);
    infoPtr.free();

    return info;
  }
  VerifyDataOnTimeEx(data, signIndex, sign, onTime, offline, noCRL) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckDataStruct(sign);

    this.CheckMaxDataSize(data);
    this.CheckMaxDataSize(sign);

    var isSignStr = typeof sign == "string";
    var onTimePtr = onTime != null ? EUPointerSystemtime(onTime) : 0;
    var infoPtr = EUPointerSignerInfo();
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUVerifyDataOnTimeEx",
        "number",
        [
          "array",
          "number",
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          data,
          data.length,
          signIndex,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          onTime != null ? onTimePtr.ptr : 0,
          IntFromBool(offline),
          IntFromBool(noCRL),
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (onTime != null) onTimePtr.free();

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
    } catch (e) {
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, data, signTimeInfo);
    infoPtr.free();

    return info;
  }
  SignDataInternal(appendCert, data, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSignDataInternal",
        "number",
        ["number", "array", "number", "number", "number", "number"],
        [
          IntFromBool(appendCert),
          data,
          data.length,
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  VerifyDataInternal(sign) {
    this.CheckMaxDataSize(sign);

    this.CheckDataStruct(sign);

    var isSignStr = typeof sign == "string";
    var infoPtr = EUPointerSignerInfo();
    var arrPtr = EUPointerArray();
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUVerifyDataInternal",
        "number",
        [
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          arrPtr.ptr,
          arrPtr.lengthPtr,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      arrPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(0, sign);
    } catch (e) {
      infoPtr.free();
      arrPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, arrPtr.toArray(), signTimeInfo);
    infoPtr.free();

    return info;
  }
  VerifyDataInternalOnTimeEx(signIndex, sign, onTime, offline, noCRL) {
    this.CheckMaxDataSize(sign);

    this.CheckDataStruct(sign);

    var isSignStr = typeof sign == "string";
    var onTimePtr = onTime != null ? EUPointerSystemtime(onTime) : 0;
    var infoPtr = EUPointerSignerInfo();
    var arrPtr = EUPointerArray();
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUVerifyDataInternalOnTimeEx",
        "number",
        [
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          signIndex,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          onTime != null ? onTimePtr.ptr : 0,
          IntFromBool(offline),
          IntFromBool(noCRL),
          arrPtr.ptr,
          arrPtr.lengthPtr,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (onTime != null) onTimePtr.free();

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      arrPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
    } catch (e) {
      infoPtr.free();
      arrPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, arrPtr.toArray(), signTimeInfo);
    infoPtr.free();

    return info;
  }
  SignHash(hash, asBase64String) {
    this.CheckMaxDataSize(hash);

    var isHashStr = typeof hash == "string";
    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSignHash",
        "number",
        [
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  VerifyHash(hash, sign) {
    this.CheckMaxDataSize(hash);
    this.CheckMaxDataSize(sign);

    this.CheckDataStruct(sign);

    var isHashStr = typeof hash == "string";
    var isSignStr = typeof sign == "string";
    var infoPtr = EUPointerSignerInfo();
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUVerifyHash",
        "number",
        [
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
        ],
        [
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(0, sign);
    } catch (e) {
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
    infoPtr.free();

    return info;
  }
  VerifyHashOnTimeEx(hash, signIndex, sign, onTime, offline, noCRL) {
    this.CheckMaxDataSize(hash);
    this.CheckMaxDataSize(sign);

    this.CheckDataStruct(sign);

    var isHashStr = typeof hash == "string";
    var isSignStr = typeof sign == "string";
    var infoPtr = EUPointerSignerInfo();
    var onTimePtr = onTime != null ? EUPointerSystemtime(onTime) : 0;
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUVerifyHashOnTimeEx",
        "number",
        [
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          signIndex,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          onTime != null ? onTimePtr.ptr : 0,
          IntFromBool(offline),
          IntFromBool(noCRL),
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (onTime != null) onTimePtr.free();

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
    } catch (e) {
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
    infoPtr.free();

    return info;
  }
  SignHashRSA(hash, asBase64String) {
    this.CheckMaxDataSize(hash);

    var isHashStr = typeof hash == "string";
    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSignHashRSA",
        "number",
        [
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  SignDataRSA(data, appendCert, externalSgn, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSignDataRSA",
        "number",
        ["array", "number", "number", "number", "number", "number", "number"],
        [
          data,
          data.length,
          IntFromBool(appendCert),
          IntFromBool(externalSgn),
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  IsDataInSignedFileAvailable(signedFile, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      if (!EUFS.link(signedFile)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var intPtr = EUPointerInt();
      var error;

      try {
        error = Module.ccall(
          "EUIsDataInSignedFileAvailable",
          "number",
          ["array", "number"],
          [UTF8ToCP1251Array(EUFS.getFilePath(signedFile)), intPtr.ptr]
        );
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();
        EUFS.unlink(signedFile);

        onError(pThis.MakeError(error));
        return;
      }

      EUFS.unlink(signedFile);

      onSuccess(intPtr.toBoolean());
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var isAvailable = pThis.IsDataInSignedDataAvailable(fileReaded.data);
          onSuccess(isAvailable);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(signedFile, _onSuccess, onError);
    }
  }
  GetDataFromSignedFile(signedFile, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      var file = signedFile.name + MakeUID(10);

      if (!EUFS.link(signedFile)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      if (!EUFS.link(file)) {
        EUFS.unlink(signedFile);

        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var error;

      try {
        error = Module.ccall(
          "EUGetDataFromSignedFile",
          "number",
          ["array", "array"],
          [
            UTF8ToCP1251Array(EUFS.getFilePath(signedFile)),
            UTF8ToCP1251Array(EUFS.getFilePath(file)),
          ]
        );
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(file);
        EUFS.unlink(signedFile);

        onError(pThis.MakeError(error));
        return;
      }

      var data = EUFS.readFileAsUint8Array(file);

      EUFS.unlink(file);
      EUFS.unlink(signedFile);

      onSuccess(data);
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var data = pThis.GetDataFromSignedData(fileReaded.data);

          onSuccess(data);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(signedFile, _onSuccess, onError);
    }
  }
  VerifyFileWithExternalSign(file, fileWithSign, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      if (!EUFS.link(file)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      if (!EUFS.link(fileWithSign)) {
        EUFS.unlink(file);

        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var infoPtr = EUPointerSignerInfo();
      var timeInfo = null;
      var error;

      try {
        error = Module.ccall(
          "EUCheckFileStruct",
          "number",
          ["array"],
          [UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign))]
        );
        if (error == EU_ERROR_NONE) {
          error = Module.ccall(
            "EUVerifyFile",
            "number",
            ["array", "array", "number"],
            [
              UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign)),
              UTF8ToCP1251Array(EUFS.getFilePath(file)),
              infoPtr.ptr,
            ]
          );
        }
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(fileWithSign);
        EUFS.unlink(file);

        onError(pThis.MakeError(error));
        return;
      }

      EUFS.unlink(fileWithSign);
      EUFS.unlink(file);

      try {
        timeInfo = pThis._GetFileSignTimeInfoSync(0, fileWithSign);
      } catch (e) {
        onError(e);
        return;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, null, timeInfo);
      infoPtr.free();

      onSuccess(info);
    } else {
      var _onSuccess = function (files) {
        try {
          var info = pThis.VerifyData(files[0].data, files[1].data);
          info.data = null;

          onSuccess(info);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFiles([file, fileWithSign], _onSuccess, onError);
    }
  }
  VerifyFileWithInternalSign(signedFile, dataFile, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      var file;

      file = dataFile != null ? dataFile : signedFile.name + MakeUID(10);

      if (!EUFS.link(file, dataFile == null)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      if (!EUFS.link(signedFile)) {
        EUFS.unlink(file);

        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var infoPtr = EUPointerSignerInfo();
      var timeInfo;
      var error;

      try {
        error = Module.ccall(
          "EUCheckFileStruct",
          "number",
          ["array"],
          [UTF8ToCP1251Array(EUFS.getFilePath(signedFile))]
        );
        if (error == EU_ERROR_NONE) {
          error = Module.ccall(
            "EUVerifyFile",
            "number",
            ["array", "array", "number"],
            [
              UTF8ToCP1251Array(EUFS.getFilePath(signedFile)),
              UTF8ToCP1251Array(EUFS.getFilePath(file)),
              infoPtr.ptr,
            ]
          );
        }
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(signedFile);
        EUFS.unlink(file);

        onError(pThis.MakeError(error));
        return;
      }

      var data = dataFile != null ? EUFS.readFileAsUint8Array(file) : null;

      EUFS.unlink(file);
      EUFS.unlink(signedFile);

      try {
        timeInfo = pThis._GetFileSignTimeInfoSync(0, signedFile);
      } catch (e) {
        onError(e);
        return;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, data, timeInfo);
      infoPtr.free();

      onSuccess(info);
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var info = pThis.VerifyDataInternal(fileReaded.data);

          if (dataFile == null) info.data = null;

          onSuccess(info);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(signedFile, _onSuccess, onError);
    }
  }
  CreateEmptySign(data, asBase64String) {
    var isInternalSign = data != null;
    if (isInternalSign) this.CheckMaxDataSize(data);
    if (isInternalSign) {
      if (typeof data == "string") data = this.StringToArray(data);
    }

    var signPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUCreateEmptySign",
        "number",
        [
          isInternalSign ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isInternalSign ? data : 0,
          isInternalSign ? data.length : 0,
          asBase64String ? signPtr.ptr : 0,
          !asBase64String ? signPtr.ptr : 0,
          !asBase64String ? signPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      signPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return signPtr.toString(true);
    else return signPtr.toArray();
  }
  CreateSigner(hash, asBase64String) {
    this.CheckMaxDataSize(hash);

    var isHashStr = typeof hash == "string";
    var signerPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUCreateSigner",
        "number",
        [
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          asBase64String ? signerPtr.ptr : 0,
          !asBase64String ? signerPtr.ptr : 0,
          !asBase64String ? signerPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      signerPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return signerPtr.toString(true);
    else return signerPtr.toArray();
  }
  AppendSigner(signer, certificate, prevSign, asBase64String) {
    this.CheckMaxDataSize(signer);
    if (certificate != null) this.CheckMaxDataSize(certificate);
    this.CheckMaxDataSize(prevSign);

    var isSignerStr = typeof signer == "string";
    var isPrevSignStr = typeof prevSign == "string";
    var signPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUAppendSigner",
        "number",
        [
          isSignerStr ? "array" : "number",
          !isSignerStr ? "array" : "number",
          "number",
          certificate != null ? "array" : "number",
          "number",
          isPrevSignStr ? "array" : "number",
          !isPrevSignStr ? "array" : "numer",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isSignerStr ? StringToCString(signer) : 0,
          !isSignerStr ? signer : 0,
          !isSignerStr ? signer.length : 0,
          certificate != null ? certificate : 0,
          certificate != null ? certificate.length : 0,
          isPrevSignStr ? StringToCString(prevSign) : 0,
          !isPrevSignStr ? prevSign : 0,
          !isPrevSignStr ? prevSign.length : 0,
          asBase64String ? signPtr.ptr : 0,
          !asBase64String ? signPtr.ptr : 0,
          !asBase64String ? signPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      signPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return signPtr.toString(true);
    else return signPtr.toArray();
  }
  GetSigner(signIndex, sign, asBase64String) {
    this.CheckMaxDataSize(sign);

    var isSignStr = typeof sign == "string";
    var signerPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUGetSigner",
        "number",
        [
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          signIndex,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          asBase64String ? signerPtr.ptr : 0,
          !asBase64String ? signerPtr.ptr : 0,
          !asBase64String ? signerPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      signerPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return signerPtr.toString(true);
    else return signerPtr.toArray();
  }
  AppendValidationDataToSigner(prevSigner, certificate, asBase64String) {
    this.CheckMaxDataSize(prevSigner);
    if (certificate != null) this.CheckMaxDataSize(certificate);

    var isPrevSignerStr = typeof prevSigner == "string";
    var signerPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUAppendValidationDataToSigner",
        "number",
        [
          isPrevSignerStr ? "array" : "number",
          !isPrevSignerStr ? "array" : "number",
          "number",
          certificate != null ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isPrevSignerStr ? StringToCString(prevSigner) : 0,
          !isPrevSignerStr ? prevSigner : 0,
          !isPrevSignerStr ? prevSigner.length : 0,
          certificate != null ? certificate : 0,
          certificate != null ? certificate.length : 0,
          asBase64String ? signerPtr.ptr : 0,
          !asBase64String ? signerPtr.ptr : 0,
          !asBase64String ? signerPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      signerPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return signerPtr.toString(true);
    else return signerPtr.toArray();
  }
  RawSignData(data, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EURawSignData",
        "number",
        ["array", "number", "number", "number", "number"],
        [
          data,
          data.length,
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  RawVerifyDataEx(cert, data, sign) {
    if (typeof data == "string") data = this.StringToArray(data);

    if (cert != null) this.CheckMaxDataSize(cert);

    this.CheckMaxDataSize(data);
    this.CheckMaxDataSize(sign);

    var isSignStr = typeof sign == "string";
    var infoPtr = EUPointerSignerInfo();
    var error;

    try {
      error = Module.ccall(
        "EURawVerifyDataEx",
        "number",
        [
          cert ? "array" : "numer",
          "number",
          "array",
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
        ],
        [
          cert != null ? cert : 0,
          cert != null ? cert.length : 0,
          data,
          data.length,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    var info = new EndUserSignInfo(infoPtr.ptr, data);
    infoPtr.free();

    return info;
  }
  RawSignHash(hash, asBase64String) {
    this.CheckMaxDataSize(hash);

    var isHashStr = typeof hash == "string";
    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EURawSignHash",
        "number",
        [
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return pPtr.toString(true);
    else return pPtr.toArray();
  }
  RawVerifyHash(hash, sign) {
    this.CheckMaxDataSize(hash);
    this.CheckMaxDataSize(sign);

    var isHashStr = typeof hash == "string";
    var isSignStr = typeof sign == "string";
    var infoPtr = EUPointerSignerInfo();
    var error;

    try {
      error = Module.ccall(
        "EURawVerifyHash",
        "number",
        [
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          isSignStr ? "array" : "number",
          !isSignStr ? "array" : "number",
          "number",
          "number",
        ],
        [
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          isSignStr ? StringToCString(sign) : 0,
          !isSignStr ? sign : 0,
          !isSignStr ? sign.length : 0,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    var info = new EndUserSignInfo(infoPtr.ptr, null);
    infoPtr.free();

    return info;
  }
  CtxSignHash(
    privateKeyContext,
    signAlgo,
    hashContext,
    appendCert,
    asBase64String
  ) {
    var pPtr = EUPointerArray(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxSignHash",
        "number",
        ["number", "number", "number", "number", "number", "number"],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          hashContext.GetContext(),
          IntFromBool(appendCert),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxVerifyHash(hashContext, signIndex, sign) {
    this.CheckDataStruct(sign);

    this.CheckMaxDataSize(sign);

    if (typeof sign == "string") sign = this.Base64Decode(sign);

    var infoPtr = EUPointerSignerInfo(hashContext.GetContext());
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUCtxVerifyHash",
        "number",
        ["number", "number", "array", "number", "number"],
        [hashContext.GetContext(), signIndex, sign, sign.length, infoPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
    } catch (e) {
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
    infoPtr.free();

    return info;
  }
  CtxSignHashValue(
    privateKeyContext,
    signAlgo,
    hash,
    appendCert,
    asBase64String
  ) {
    if (typeof hash == "string") hash = this.Base64Decode(hash);

    var pPtr = EUPointerArray(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxSignHashValue",
        "number",
        ["number", "number", "array", "number", "number", "number", "number"],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          hash,
          hash.length,
          IntFromBool(appendCert),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxVerifyHashValue(context, hash, signIndex, sign) {
    this.CheckDataStruct(sign);

    this.CheckMaxDataSize(hash);
    this.CheckMaxDataSize(sign);

    if (typeof hash == "string") hash = this.Base64Decode(hash);

    if (typeof sign == "string") sign = this.Base64Decode(sign);

    var infoPtr = EUPointerSignerInfo(context.GetContext());
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUCtxVerifyHashValue",
        "number",
        ["number", "array", "number", "number", "array", "number", "number"],
        [
          context.GetContext(),
          hash,
          hash.length,
          signIndex,
          sign,
          sign.length,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
    } catch (e) {
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, null, signTimeInfo);
    infoPtr.free();

    return info;
  }
  CtxSignData(
    privateKeyContext,
    signAlgo,
    data,
    external,
    appendCert,
    asBase64String
  ) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = EUPointer(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxSignData",
        "number",
        [
          "number",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          data,
          data.length,
          IntFromBool(external),
          IntFromBool(appendCert),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxVerifyData(context, data, signIndex, sign) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckDataStruct(sign);

    this.CheckMaxDataSize(data);
    this.CheckMaxDataSize(sign);

    if (typeof sign == "string") sign = this.Base64Decode(sign);

    var infoPtr = EUPointerSignerInfo(context.GetContext());
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUCtxVerifyData",
        "number",
        ["number", "array", "number", "number", "array", "number", "number"],
        [
          context.GetContext(),
          data,
          data.length,
          signIndex,
          sign,
          sign.length,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
    } catch (e) {
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, data, signTimeInfo);
    infoPtr.free();

    return info;
  }
  CtxVerifyDataInternal(context, signIndex, sign) {
    this.CheckMaxDataSize(sign);

    if (typeof sign == "string") sign = this.Base64Decode(sign);

    this.CheckDataStruct(sign);

    var arrPtr = EUPointerArray(context.GetContext());
    var infoPtr = EUPointerSignerInfo(context.GetContext());
    var signTimeInfo = null;
    var error;

    try {
      error = Module.ccall(
        "EUCtxVerifyDataInternal",
        "number",
        ["number", "number", "array", "number", "number", "number", "number"],
        [
          context.GetContext(),
          signIndex,
          sign,
          sign.length,
          arrPtr.ptr,
          arrPtr.lengthPtr,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      arrPtr.free();
      infoPtr.free();
      this.RaiseError(error);
    }

    try {
      signTimeInfo = this.GetSignTimeInfo(signIndex, sign);
    } catch (e) {
      arrPtr.free();
      infoPtr.free();
      throw e;
    }

    var info = new EndUserSignInfo(infoPtr.ptr, arrPtr.toArray(), signTimeInfo);
    infoPtr.free();

    return info;
  }
  CtxSignFile(
    privateKeyContext,
    signAlgo,
    file,
    external,
    appendCert,
    fileWithSign,
    onSuccess,
    onError
  ) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      var signFile;

      signFile = fileWithSign != null ? fileWithSign : file.name + MakeUID(10);

      if (!EUFS.link(signFile, signFile == null)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      if (!EUFS.link(file)) {
        EUFS.unlink(signFile);

        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var error;

      try {
        error = Module.ccall(
          "EUCtxSignFile",
          "number",
          ["number", "number", "array", "number", "number", "array"],
          [
            privateKeyContext.GetContext(),
            signAlgo,
            UTF8ToCP1251Array(EUFS.getFilePath(file)),
            IntFromBool(external),
            IntFromBool(appendCert),
            UTF8ToCP1251Array(EUFS.getFilePath(signFile)),
          ]
        );
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(file);
        EUFS.unlink(signFile);

        onError(pThis.MakeError(error));
        return;
      }

      var sign = file != null ? EUFS.readFileAsUint8Array(signFile) : null;

      EUFS.unlink(signFile);
      EUFS.unlink(file);

      onSuccess(sign);
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var signedData;

          signedData = pThis.CtxSignData(
            privateKeyContext,
            signAlgo,
            fileReaded.data,
            external,
            appendCert
          );

          onSuccess(signedData);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(file, _onSuccess, onError);
    }
  }
  CtxIsAlreadySigned(privateKeyContext, signAlgo, sign) {
    this.CheckMaxDataSize(sign);

    if (typeof sign == "string") sign = this.Base64Decode(sign);

    var intPtr = EUPointerInt();
    var error;

    try {
      error = Module.ccall(
        "EUCtxIsAlreadySigned",
        "number",
        ["number", "number", "array", "number", "number"],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          sign,
          sign.length,
          intPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      intPtr.free();
      this.RaiseError(error);
    }

    return intPtr.toBoolean();
  }
  CtxAppendSignHash(
    privateKeyContext,
    signAlgo,
    hashContext,
    previousSign,
    appendCert,
    asBase64String
  ) {
    this.CheckMaxDataSize(previousSign);

    if (typeof previousSign == "string")
      previousSign = this.Base64Decode(previousSign);

    this.CheckDataStruct(previousSign);

    var pPtr = EUPointerArray(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxAppendSignHash",
        "number",
        [
          "number",
          "number",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          hashContext.GetContext(),
          previousSign,
          previousSign.length,
          IntFromBool(appendCert),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxAppendSignHashValue(
    privateKeyContext,
    signAlgo,
    hash,
    previousSign,
    appendCert,
    asBase64String
  ) {
    this.CheckMaxDataSize(hash);
    this.CheckMaxDataSize(previousSign);

    if (typeof hash == "string") hash = this.Base64Decode(hash);

    if (typeof previousSign == "string")
      previousSign = this.Base64Decode(previousSign);

    this.CheckDataStruct(previousSign);

    var pPtr = EUPointerArray(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxAppendSignHashValue",
        "number",
        [
          "number",
          "number",
          "array",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          hash,
          hash.length,
          previousSign,
          previousSign.length,
          IntFromBool(appendCert),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxAppendSign(
    privateKeyContext,
    signAlgo,
    data,
    previousSign,
    appendCert,
    asBase64String
  ) {
    if (data != null && typeof data == "string")
      data = this.StringToArray(data);

    if (data != null) this.CheckMaxDataSize(data);
    this.CheckMaxDataSize(previousSign);

    if (typeof previousSign == "string")
      previousSign = this.Base64Decode(previousSign);

    this.CheckDataStruct(previousSign);

    var pPtr = EUPointer(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxAppendSign",
        "number",
        [
          "number",
          "number",
          data ? "array" : "number",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          data != null ? data : 0,
          data != null ? data.length : 0,
          previousSign,
          previousSign.length,
          IntFromBool(appendCert),
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxCreateEmptySign(context, signAlgo, data, certificate, asBase64String) {
    if (data != null && typeof data == "string")
      data = this.StringToArray(data);

    if (data != null) this.CheckMaxDataSize(data);
    this.CheckMaxDataSize(certificate);

    var pPtr = EUPointer(context.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxCreateEmptySign",
        "number",
        [
          "number",
          "number",
          data ? "array" : "number",
          "number",
          "array",
          "number",
          "number",
          "number",
        ],
        [
          context.GetContext(),
          signAlgo,
          data != null ? data : 0,
          data != null ? data.length : 0,
          certificate,
          certificate.length,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxCreateSigner(privateKeyContext, signAlgo, hash, asBase64String) {
    this.CheckMaxDataSize(hash);

    if (typeof hash == "string") hash = this.Base64Decode(hash);

    var pPtr = EUPointer(privateKeyContext.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxCreateSigner",
        "number",
        ["number", "number", "array", "number", "number", "number"],
        [
          privateKeyContext.GetContext(),
          signAlgo,
          hash,
          hash.length,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxAppendSigner(
    context,
    signAlgo,
    signer,
    certificate,
    previousSign,
    asBase64String
  ) {
    this.CheckMaxDataSize(signer);
    if (certificate != null) this.CheckMaxDataSize(certificate);
    this.CheckMaxDataSize(previousSign);

    if (typeof signer == "string") signer = this.Base64Decode(signer);

    if (typeof previousSign == "string")
      previousSign = this.Base64Decode(previousSign);

    var pPtr = EUPointer(context.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxAppendSigner",
        "number",
        [
          "number",
          "number",
          "array",
          "number",
          certificate != null ? "array" : "number",
          "number",
          "array",
          "number",
          "number",
          "number",
        ],
        [
          context.GetContext(),
          signAlgo,
          signer,
          signer.length,
          certificate != null ? certificate : 0,
          certificate != null ? certificate.length : 0,
          previousSign,
          previousSign.length,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxGetSignsCount(context, sign) {
    this.CheckMaxDataSize(sign);

    if (typeof sign == "string") sign = this.Base64Decode(sign);

    var intPtr = EUPointerDWORD();
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetSignsCount",
        "number",
        ["number", "array", "number", "number"],
        [context.GetContext(), sign, sign.length, intPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      intPtr.free();
      this.RaiseError(error);
    }

    return intPtr.toNumber();
  }
  CtxGetSignerInfo(context, signIndex, sign) {
    this.CheckMaxDataSize(sign);

    if (typeof sign == "string") sign = this.Base64Decode(sign);

    var pCertInfoExPtr = EUPointer();
    var certArrPtr = EUPointerArray(context.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetSignerInfo",
        "number",
        ["number", "number", "array", "number", "number", "number", "number"],
        [
          context.GetContext(),
          signIndex,
          sign,
          sign.length,
          pCertInfoExPtr.ptr,
          certArrPtr.ptr,
          certArrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pCertInfoExPtr.free();
      certArrPtr.free();

      this.RaiseError(error);
    }

    var certInfoExPtr, certInfoEx;

    certInfoExPtr = pCertInfoExPtr.toPtr();
    certInfoEx = new EndUserCertificateInfoEx(certInfoExPtr);
    Module._EUCtxFreeCertificateInfoEx(context.GetContext() | 0, certInfoExPtr);

    return new EndUserCertificate(certInfoEx, certArrPtr.toArray());
  }
  CtxGetFileSignsCount(context, signFile, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      if (!EUFS.link(signFile)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var intPtr = EUPointerDWORD();
      var error;
      try {
        error = Module.ccall(
          "EUCtxGetFileSignsCount",
          "number",
          ["number", "array", "number"],
          [
            context.GetContext(),
            UTF8ToCP1251Array(EUFS.getFilePath(signFile)),
            intPtr.ptr,
          ]
        );
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        intPtr.free();

        onError(pThis.MakeError(error));
        return;
      }

      EUFS.unlink(signFile);

      onSuccess(intPtr.toNumber());
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var signsCount;

          signsCount = pThis.CtxGetSignsCount(context, fileReaded.data);

          onSuccess(signsCount);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(signFile, _onSuccess, onError);
    }
  }
  CtxGetFileSignerInfo(context, signIndex, signFile, onSuccess, onError) {
    var pThis = this;

    if (pThis.isFileSyncAPISupported) {
      if (!EUFS.link(signFile)) {
        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var pCertInfoExPtr = EUPointer();
      var certArrPtr = EUPointerArray(context.GetContext());
      var error;
      try {
        error = Module.ccall(
          "EUCtxGetFileSignerInfo",
          "number",
          ["number", "number", "array", "number", "number", "number"],
          [
            context.GetContext(),
            signIndex,
            UTF8ToCP1251Array(EUFS.getFilePath(signFile)),
            pCertInfoExPtr.ptr,
            certArrPtr.ptr,
            certArrPtr.lengthPtr,
          ]
        );
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(signFile);
        pCertInfoExPtr.free();
        certArrPtr.free();

        onError(pThis.MakeError(error));
        return;
      }

      EUFS.unlink(signFile);

      var certInfoExPtr, certInfoEx;

      certInfoExPtr = pCertInfoExPtr.toPtr();
      certInfoEx = new EndUserCertificateInfoEx(certInfoExPtr);
      Module._EUCtxFreeCertificateInfoEx(
        context.GetContext() | 0,
        certInfoExPtr
      );

      onSuccess(new EndUserCertificate(certInfoEx, certArrPtr.toArray()));
    } else {
      var _onSuccess = function (fileReaded) {
        try {
          var signerInfo;

          signerInfo = pThis.CtxGetSignerInfo(
            context,
            signIndex,
            fileReaded.data
          );

          onSuccess(signerInfo);
        } catch (e) {
          onError(e);
        }
      };

      pThis.ReadFile(signFile, _onSuccess, onError);
    }
  }
  CtxVerifyFile(context, signIndex, fileWithSign, file, onSuccess, onError) {
    var pThis = this;

    var internal = file == null || typeof file === "string";

    if (pThis.isFileSyncAPISupported) {
      var dataFile = file != null ? file : fileWithSign.name + MakeUID(10);

      if (internal) {
        if (!EUFS.link(dataFile, file == null)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }
      } else {
        if (!EUFS.link(dataFile)) {
          onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
          return;
        }
      }

      if (!EUFS.link(fileWithSign)) {
        EUFS.unlink(dataFile);

        onError(pThis.MakeError(EU_ERROR_JS_READ_FILE));
        return;
      }

      var infoPtr = EUPointerSignerInfo();
      var timeInfo;
      var error;

      try {
        error = Module.ccall(
          "EUCheckFileStruct",
          "number",
          ["array"],
          [UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign))]
        );
        if (error == EU_ERROR_NONE) {
          error = Module.ccall(
            "EUCtxVerifyFile",
            "number",
            ["number", "number", "array", "array", "number"],
            [
              context.GetContext(),
              signIndex,
              UTF8ToCP1251Array(EUFS.getFilePath(fileWithSign)),
              UTF8ToCP1251Array(EUFS.getFilePath(dataFile)),
              infoPtr.ptr,
            ]
          );
        }
      } catch (e) {
      console.error(e);
        error = EU_ERROR_UNKNOWN;
      }

      if (error != EU_ERROR_NONE) {
        EUFS.unlink(fileWithSign);
        EUFS.unlink(dataFile);

        onError(pThis.MakeError(error));
        return;
      }

      var data =
        internal && file != null ? EUFS.readFileAsUint8Array(dataFile) : null;

      EUFS.unlink(fileWithSign);
      EUFS.unlink(dataFile);

      try {
        timeInfo = pThis._GetFileSignTimeInfoSync(signIndex, fileWithSign);
      } catch (e) {
        onError(e);
        return;
      }

      var info = new EndUserSignInfo(infoPtr.ptr, data, timeInfo);
      infoPtr.free();

      onSuccess(info);
    } else {
      var _onSuccess = function (files) {
        try {
          var info;

          if (internal) {
            info = pThis.CtxVerifyDataInternal(
              context,
              signIndex,
              files[0].data
            );
            if (file == null) info.data = null;
          } else {
            info = pThis.CtxVerifyData(
              context,
              files[0].data,
              signIndex,
              files[1].data
            );
            info.data = null;
          }

          onSuccess(info);
        } catch (e) {
          onError(e);
        }
      };

      var files = [];
      if (!internal) files.push(file);
      files.push(fileWithSign);

      pThis.ReadFiles(files, _onSuccess, onError);
    }
  }
  GetTSPByAccessInfo(hashAlgo, hash, accessInfo, accessInfoPort) {
    this.CheckMaxDataSize(hash);

    var isHashStr = typeof hash == "string";
    var pPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUGetTSPByAccessInfo",
        "number",
        [
          "number",
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          accessInfo ? "array" : "number",
          accessInfoPort ? "array" : "number",
          "number",
          "number",
        ],
        [
          hashAlgo,
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          accessInfo ? UTF8ToCP1251Array(accessInfo) : 0,
          accessInfoPort ? UTF8ToCP1251Array(accessInfoPort) : 0,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toArray();
  }
  CheckTSP(tsp, hashAlgo, hash) {
    var error;

    this.CheckMaxDataSize(tsp);

    if (hash) {
      this.CheckMaxDataSize(hash);
      hash = typeof hash == "string" ? this.Base64Decode(hash) : hash;
    }

    try {
      error = Module.ccall(
        "EUCheckTSP",
        "number",
        [
          "array",
          "number",
          "number",
          "number",
          hash ? "array" : "number",
          "number",
        ],
        [tsp, tsp.length, hashAlgo, 0, hash ? hash : 0, hash ? hash.length : 0]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }
  }
  //-----------------------------------------------------------------------------
  IsEnvelopedData(enveloped) {
    this.CheckMaxDataSize(enveloped);

    if (typeof enveloped == "string") enveloped = this.Base64Decode(enveloped);

    var isEnveloped = false;
    var error;

    try {
      isEnveloped =
        Module.ccall(
          "EUIsEnvelopedData",
          "number",
          ["array", "number"],
          [enveloped, enveloped.length]
        ) != EU_FALSE;
      error = EU_ERROR_NONE;
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }

    return isEnveloped;
  }
  EnvelopDataEx(
    recipientCertIssuers,
    recipientCertSerials,
    signData,
    data,
    asBase64String
  ) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var envDataPtr = asBase64String ? EUPointer() : EUPointerArray();
    var issuers = intArrayFromStrings(recipientCertIssuers);
    var serials = intArrayFromStrings(recipientCertSerials);
    var error;

    try {
      error = Module.ccall(
        "EUEnvelopDataEx",
        "number",
        [
          "array",
          "array",
          "number",
          data ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          issuers,
          serials,
          IntFromBool(signData),
          data != null ? data : 0,
          data != null ? data.length : 0,
          asBase64String ? envDataPtr.ptr : 0,
          !asBase64String ? envDataPtr.ptr : 0,
          !asBase64String ? envDataPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      envDataPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return envDataPtr.toString(true);
    else return envDataPtr.toArray();
  }
  DevelopData(data) {
    this.CheckMaxDataSize(data);

    var isDataStr = typeof data == "string";
    var devDataPtr = EUPointerArray();
    var infoPtr = EUPointerSenderInfo();
    var error;

    try {
      error = Module.ccall(
        "EUDevelopData",
        "number",
        [
          isDataStr ? "array" : "number",
          !isDataStr ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          isDataStr ? StringToCString(data) : 0,
          !isDataStr ? data : 0,
          !isDataStr ? data.length : 0,
          devDataPtr.ptr,
          devDataPtr.lengthPtr,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      devDataPtr.free();
      infoPtr.free();
      this.RaiseError(error);
    }

    var info = new EndUserSenderInfo(infoPtr.ptr, devDataPtr.toArray());
    devDataPtr.free();

    return info;
  }
  EnvelopDataToRecipientsWithDynamicKey(
    recipientCertificates,
    signData,
    appendCert,
    data,
    asBase64String
  ) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var envDataPtr = asBase64String ? EUPointer() : EUPointerArray();

    var recipientCertsArray = new EUArrayFromArrayOfArray(
      recipientCertificates
    );
    var error;

    try {
      error = Module.ccall(
        "EUEnvelopDataToRecipientsWithDynamicKey",
        "number",
        [
          "number",
          "number",
          "number",
          "number",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          recipientCertsArray.count,
          recipientCertsArray.arraysPtr,
          recipientCertsArray.arraysLengthPtr,
          IntFromBool(signData),
          IntFromBool(appendCert),
          data,
          data.length,
          asBase64String ? envDataPtr.ptr : 0,
          !asBase64String ? envDataPtr.ptr : 0,
          !asBase64String ? envDataPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      recipientCertsArray.free();
      envDataPtr.free();
      this.RaiseError(error);
    }

    recipientCertsArray.free();

    if (asBase64String) return envDataPtr.toString(true);
    else return envDataPtr.toArray();
  }
  EnvelopDataRSAEx(
    contentEncAlgoType,
    recipientCertIssuers,
    recipientCertSerials,
    signData,
    data,
    asBase64String
  ) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var envDataPtr = asBase64String ? EUPointer() : EUPointerArray();
    var issuers = intArrayFromStrings(recipientCertIssuers);
    var serials = intArrayFromStrings(recipientCertSerials);
    var error;

    try {
      error = Module.ccall(
        "EUEnvelopDataRSAEx",
        "number",
        [
          "number",
          "array",
          "array",
          "number",
          data ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          contentEncAlgoType,
          issuers,
          serials,
          IntFromBool(signData),
          data != null ? data : 0,
          data != null ? data.length : 0,
          asBase64String ? envDataPtr.ptr : 0,
          !asBase64String ? envDataPtr.ptr : 0,
          !asBase64String ? envDataPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      envDataPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return envDataPtr.toString(true);
    else return envDataPtr.toArray();
  }
  CtxEnvelopData(
    privateKeyContext,
    recipientCertificates,
    recipientAppendType,
    signData,
    appendCert,
    data,
    asBase64String
  ) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = EUPointer(privateKeyContext.GetContext());
    var recipientCertsArray = new EUArrayFromArrayOfArray(
      recipientCertificates
    );
    var error;

    try {
      error = Module.ccall(
        "EUCtxEnvelopData",
        "number",
        [
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "array",
          "number",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          recipientCertsArray.count,
          recipientCertsArray.arraysPtr,
          recipientCertsArray.arraysLengthPtr,
          recipientAppendType,
          IntFromBool(signData),
          IntFromBool(appendCert),
          data,
          data.length,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      recipientCertsArray.free();
      pPtr.free();
      this.RaiseError(error);
    }

    recipientCertsArray.free();

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxDevelopData(privateKeyContext, data, senderCert) {
    this.CheckMaxDataSize(data);
    if (senderCert != null) this.CheckMaxDataSize(senderCert);

    var isEnvDataStr = typeof data == "string";
    var devDataPtr = EUPointer(privateKeyContext.GetContext());
    var infoPtr = EUPointerSenderInfo();
    var error;

    try {
      error = Module.ccall(
        "EUCtxDevelopData",
        "number",
        [
          "number",
          isEnvDataStr ? "array" : "number",
          !isEnvDataStr ? "array" : "number",
          "number",
          senderCert ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          isEnvDataStr ? StringToCString(data) : 0,
          !isEnvDataStr ? data : 0,
          !isEnvDataStr ? data.length : 0,
          senderCert != null ? senderCert : 0,
          senderCert != null ? senderCert.length : 0,
          devDataPtr.ptr,
          devDataPtr.lengthPtr,
          infoPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      devDataPtr.free();
      infoPtr.free();
      this.RaiseError(error);
    }

    var info = new EndUserSenderInfo(infoPtr.ptr, devDataPtr.toArray());
    devDataPtr.free();

    return info;
  }
  CtxEnvelopDataWithDynamicKey(
    privateKeyContext,
    recipientCertificates,
    recipientAppendType,
    signData,
    appendCert,
    data,
    asBase64String
  ) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = EUPointer(privateKeyContext.GetContext());
    var recipientCertsArray = new EUArrayFromArrayOfArray(
      recipientCertificates
    );
    var error;

    try {
      error = Module.ccall(
        "EUCtxEnvelopDataWithDynamicKey",
        "number",
        [
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "array",
          "number",
          "number",
          "number",
        ],
        [
          privateKeyContext.GetContext(),
          recipientCertsArray.count,
          recipientCertsArray.arraysPtr,
          recipientCertsArray.arraysLengthPtr,
          recipientAppendType,
          IntFromBool(signData),
          IntFromBool(appendCert),
          data,
          data.length,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      recipientCertsArray.free();
      pPtr.free();
      this.RaiseError(error);
    }

    recipientCertsArray.free();

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  CtxGetSenderInfo(context, data, recipientCert) {
    this.CheckMaxDataSize(data);

    if (typeof data == "string") data = this.Base64Decode(data);

    var isDynamicKeyPtr = EUPointerInt();
    var pCertInfoExPtr = EUPointer();
    var certArrPtr = EUPointerArray(context.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetSenderInfo",
        "number",
        [
          "number",
          "array",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          context.GetContext(),
          data,
          data.length,
          recipientCert,
          recipientCert.length,
          isDynamicKeyPtr.ptr,
          pCertInfoExPtr.ptr,
          certArrPtr.ptr,
          certArrPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      isDynamicKeyPtr.free();
      pCertInfoExPtr.free();
      certArrPtr.free();

      this.RaiseError(error);
    }

    var certInfoExPtr, certInfoEx;

    certInfoExPtr = pCertInfoExPtr.toPtr();
    certInfoEx = new EndUserCertificateInfoEx(certInfoExPtr);
    Module._EUCtxFreeCertificateInfoEx(context.GetContext() | 0, certInfoExPtr);

    return EndUserSenderInfoEx(
      isDynamicKeyPtr.toBoolean(),
      certInfoEx,
      certArrPtr.toArray()
    );
  }
  CtxGetRecipientsCount(context, envelopedData) {
    this.CheckMaxDataSize(envelopedData);

    if (typeof envelopedData == "string")
      envelopedData = this.Base64Decode(envelopedData);

    var intPtr = EUPointerDWORD();
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetRecipientsCount",
        "number",
        ["number", "array", "number", "number"],
        [context.GetContext(), envelopedData, envelopedData.length, intPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      intPtr.free();

      this.RaiseError(error);
    }

    return intPtr.toNumber();
  }
  CtxGetRecipientInfo(context, recipientIndex, envelopedData) {
    this.CheckMaxDataSize(envelopedData);

    if (typeof envelopedData == "string")
      envelopedData = this.Base64Decode(envelopedData);

    var infoTypePtr = EUPointerDWORD();
    var pIssuerPtr = EUPointer(context.GetContext());
    var pSerialPtr = EUPointer(context.GetContext());
    var pPublicKeyIDPtr = EUPointer(context.GetContext());
    var error;

    try {
      error = Module.ccall(
        "EUCtxGetRecipientInfo",
        "number",
        [
          "number",
          "number",
          "array",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          context.GetContext(),
          recipientIndex,
          envelopedData,
          envelopedData.length,
          infoTypePtr.ptr,
          pIssuerPtr.ptr,
          pSerialPtr.ptr,
          pPublicKeyIDPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoTypePtr.free();
      pIssuerPtr.free();
      pSerialPtr.free();
      pPublicKeyIDPtr.free();

      this.RaiseError(error);
    }

    return EndUserRecipientInfo(
      infoTypePtr.toNumber(),
      pIssuerPtr.toString(),
      pSerialPtr.toString(),
      pPublicKeyIDPtr.toString()
    );
  }
  //-----------------------------------------------------------------------------
  ClientSessionCreateStep1(expireTime) {
    var pPtr = EUPointer();
    var error;

    var dataPtr = EUPointerArray();

    try {
      error = Module.ccall(
        "EUClientSessionCreateStep1",
        "number",
        ["number", "number", "number", "number"],
        [expireTime, pPtr.ptr, dataPtr.ptr, dataPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      dataPtr.free();
      this.RaiseError(error);
    }

    return new EndUserSession(pPtr.toPtr(), dataPtr.toArray());
  }
  ServerSessionCreateStep1(expireTime, clientData) {
    var pPtr = EUPointer();
    var error;

    var dataPtr = EUPointerArray();

    try {
      error = Module.ccall(
        "EUServerSessionCreateStep1",
        "number",
        ["number", "array", "number", "number", "number", "number"],
        [
          expireTime,
          clientData,
          clientData.length,
          pPtr.ptr,
          dataPtr.ptr,
          dataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      dataPtr.free();
      this.RaiseError(error);
    }

    return new EndUserSession(pPtr.toPtr(), dataPtr.toArray());
  }
  ClientSessionCreateStep2(session, serverData) {
    var error;

    var dataPtr = EUPointerArray();

    try {
      error = Module.ccall(
        "EUClientSessionCreateStep2",
        "number",
        ["number", "array", "number", "number", "number"],
        [
          session.GetHandle() | 0,
          serverData,
          serverData.length,
          dataPtr.ptr,
          dataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      dataPtr.free();
      this.RaiseError(error);
    }

    session.SetData(dataPtr.toArray());
  }
  ServerSessionCreateStep2(session, clientData) {
    var error;

    try {
      error = Module.ccall(
        "EUServerSessionCreateStep2",
        "number",
        ["number", "array", "number"],
        [session.GetHandle() | 0, clientData, clientData.length]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }
  }
  SessionClose(session) {
    var error = EU_ERROR_NONE;

    try {
      Module.ccall(
        "EUSessionDestroy",
        "number",
        ["number"],
        [session.GetHandle() | 0]
      );
      error = EU_ERROR_NONE;
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }
  }
  SessionIsInitialized(session) {
    var isInitialized;
    var error = EU_ERROR_NONE;

    try {
      isInitialized = Module.ccall(
        "EUSessionIsInitialized",
        "number",
        ["number"],
        [session.GetHandle() | 0]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }

    return isInitialized != EU_FALSE;
  }
  SessionCheckCertificates(session) {
    var error = EU_ERROR_NONE;

    try {
      error = Module.ccall(
        "EUSessionCheckCertificates",
        "number",
        ["number"],
        [session.GetHandle() | 0]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }

    return true;
  }
  SessionGetPeerCertificateInfo(session) {
    var infoPtr = EUPointerCertificateInfo();
    var error;

    try {
      error = Module.ccall(
        "EUSessionGetPeerCertificateInfo",
        "number",
        ["number", "number"],
        [session.GetHandle() | 0, infoPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      infoPtr.free();
      this.RaiseError(error);
    }

    var info = new EndUserCertificateInfo(infoPtr.ptr);
    infoPtr.free();

    return info;
  }
  SessionSave(session) {
    var error;

    var dataPtr = EUPointerArray();

    try {
      error = Module.ccall(
        "EUSessionSave",
        "number",
        ["number", "number", "number"],
        [session.GetHandle() | 0, dataPtr.ptr, dataPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      dataPtr.free();
      this.RaiseError(error);
    }

    return dataPtr.toArray();
  }
  SessionLoad(sessionData) {
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUSessionLoad",
        "number",
        ["array", "number", "number"],
        [sessionData, sessionData.length, pPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return new EndUserSession(pPtr.toPtr(), null);
  }
  ClientDynamicKeySessionCreate(
    expireTime,
    serverCertIssuer,
    serverCertSerial
  ) {
    var isCertData = arguments.length == 2;

    var pPtr = EUPointer();
    var error;

    var dataPtr = EUPointerArray();

    try {
      error = Module.ccall(
        "EUClientDynamicKeySessionCreate",
        "number",
        [
          "number",
          isCertData ? "number" : "array",
          isCertData ? "number" : "array",
          isCertData ? "array" : "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          expireTime,
          isCertData ? 0 : UTF8ToCP1251Array(serverCertIssuer),
          isCertData ? 0 : UTF8ToCP1251Array(serverCertSerial),
          isCertData ? serverCertIssuer : 0,
          isCertData ? serverCertIssuer.length : 0,
          pPtr.ptr,
          dataPtr.ptr,
          dataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      dataPtr.free();
      this.RaiseError(error);
    }

    return new EndUserSession(pPtr.toPtr(), dataPtr.toArray());
  }
  ServerDynamicKeySessionCreate(expireTime, clientData) {
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUServerDynamicKeySessionCreate",
        "number",
        ["number", "array", "number", "number"],
        [expireTime, clientData, clientData.length, pPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return new EndUserSession(pPtr.toPtr(), null);
  }
  ClientDynamicKeySessionLoad(sessionData) {
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUClientDynamicKeySessionLoad",
        "number",
        ["array", "number", "number"],
        [sessionData, sessionData.length, pPtr.ptr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return new EndUserSession(pPtr.toPtr(), null);
  }
  SessionEncrypt(session, data, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSessionEncrypt",
        "number",
        ["number", "array", "number", "number", "number"],
        [session.GetHandle() | 0, data, data.length, pPtr.ptr, pPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  SessionDecrypt(session, encryptedData) {
    if (typeof encryptedData == "string")
      encryptedData = this.Base64Decode(encryptedData);

    this.CheckMaxDataSize(encryptedData);

    var pPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSessionDecrypt",
        "number",
        ["number", "array", "number", "number", "number"],
        [
          session.GetHandle() | 0,
          encryptedData,
          encryptedData.length,
          pPtr.ptr,
          pPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toArray();
  }
  SessionEncryptContinue(session, data, asBase64String) {
    if (typeof data == "string") data = this.StringToArray(data);

    this.CheckMaxDataSize(data);

    var pPtr = EUPointerStaticArray(data);
    var error;

    try {
      error = Module.ccall(
        "EUSessionEncryptContinue",
        "number",
        ["number", "number", "number"],
        [session.GetHandle() | 0, pPtr.ptr, pPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return this.Base64Encode(pPtr.toArray());
    else return pPtr.toArray();
  }
  SessionDecryptContinue(session, encryptedData) {
    if (typeof encryptedData == "string")
      encryptedData = this.Base64Decode(encryptedData);

    this.CheckMaxDataSize(encryptedData);

    var pPtr = EUPointerStaticArray(encryptedData);
    var error;

    try {
      error = Module.ccall(
        "EUSessionDecryptContinue",
        "number",
        ["number", "number", "number"],
        [session.GetHandle() | 0, pPtr.ptr, pPtr.lengthPtr]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toArray();
  }
  //-----------------------------------------------------------------------------
  CtxCreate() {
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall("EUCtxCreate", "number", ["number"], [pPtr.ptr]);
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    var context = new EndUserContext(pPtr.toPtr());

    return context;
  }
  CtxFree(context) {
    try {
      Module._EUCtxFree(context.GetContext() | 0);
    } catch (e) {}
  }
  CtxSetParameter(context, name, value) {
    var error;
    var intPtr = EUPointerBool();
    if (typeof value != "boolean") {
      this.RaiseError(EU_ERROR_BAD_PARAMETER);
    }

    try {
      Module.setValue(intPtr.ptr, IntFromBool(value) | 0, "i32");

      error = Module.ccall(
        "EUCtxSetParameter",
        "number",
        ["number", "array", "number", "number"],
        [
          context.GetContext() | 0,
          UTF8ToCP1251Array(name),
          intPtr.ptr,
          EU_BOOL_SIZE,
        ]
      );
    } catch (e) {
      error = EU_ERROR_UNKNOWN;
      intPtr.free();
    }

    if (error != EU_ERROR_NONE) {
      this.RaiseError(error);
    }

    intPtr.free();
  }
  //-----------------------------------------------------------------------------
  ProtectDataByPassword(data, password, asBase64String) {
    if (typeof data == "string") data = UTF8ToCP1251Array(data);

    this.CheckMaxDataSize(data);

    var protDataPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUProtectDataByPassword",
        "number",
        [
          "array",
          "number",
          password ? "array" : "number",
          "number",
          "number",
          "number",
        ],
        [
          data,
          data.length,
          password != null ? UTF8ToCP1251Array(password) : 0,
          asBase64String ? protDataPtr.ptr : 0,
          !asBase64String ? protDataPtr.ptr : 0,
          !asBase64String ? protDataPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      protDataPtr.free();
      this.RaiseError(error);
    }

    if (asBase64String) return protDataPtr.toString();
    else return protDataPtr.toArray();
  }
  UnprotectDataByPassword(data, password, asString) {
    this.CheckMaxDataSize(data);

    var isDataStr = typeof data == "string";
    var unprotDataPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUUnprotectDataByPassword",
        "number",
        [
          isDataStr ? "array" : "number",
          !isDataStr ? "array" : "number",
          "number",
          password ? "array" : "number",
          "number",
          "number",
        ],
        [
          isDataStr ? StringToCString(data) : 0,
          !isDataStr ? data : 0,
          !isDataStr ? data.length : 0,
          password != null ? UTF8ToCP1251Array(password) : 0,
          unprotDataPtr.ptr,
          unprotDataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      unprotDataPtr.free();
      this.RaiseError(error);
    }

    if (asString) {
      return unprotDataPtr.toString();
    } else {
      return unprotDataPtr.toArray();
    }
  }
  //-----------------------------------------------------------------------------
  QRCodeEncode(data, scale) {
    var arrPtr = null;
    var arrLenPtr = null;
    var imgArray = null;
    var error = EU_ERROR_NONE;

    this.CheckMaxDataSize(data);

    scale = scale || 1;

    var _free = function () {
      try {
        if (arrPtr != null) Module._free(arrPtr);

        if (arrLenPtr != null) Module._free(arrLenPtr);
      } catch (e) {}
    };

    try {
      arrPtr = Module._malloc(4);
      arrLenPtr = Module._malloc(4);

      Module.setValue(arrPtr, 0);
      Module.setValue(arrLenPtr, 0);

      var isSuccess = Module.ccall(
        "QRCodeEncode",
        "number",
        ["array", "number", "number", "number", "number"],
        [data, data.length, scale, arrPtr, arrLenPtr]
      );
      if (isSuccess) {
        var imgData = Module.getValue(arrPtr, "i8*");
        var imgDataLength = Module.getValue(arrLenPtr, "i32");
        var imgBuffer = new ArrayBuffer(imgDataLength);

        imgArray = new Uint8Array(imgBuffer);
        imgArray.set(
          new Uint8Array(Module.HEAPU8.buffer, imgData, imgDataLength)
        );

        Module._QRCodeFreeMemory(imgData);
      } else {
        error = EU_ERROR_BAD_PARAMETER;
      }

      _free();
    } catch (e) {
      _free();
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) this.RaiseError(error);

    return imgArray;
  }
  //-----------------------------------------------------------------------------
  AppendTransportHeader(caType, fileName, clientEMail, clientCert, data) {
    this.CheckMaxDataSize(data);

    var resultDataPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUAppendTransportHeader",
        "number",
        [
          "array",
          "array",
          "array",
          "array",
          "number",
          "array",
          "number",
          "number",
          "number",
        ],
        [
          UTF8ToCP1251Array(caType),
          UTF8ToCP1251Array(fileName),
          UTF8ToCP1251Array(clientEMail),
          clientCert,
          clientCert.length,
          data,
          data.length,
          resultDataPtr.ptr,
          resultDataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      resultDataPtr.free();
      this.RaiseError(error);
    }

    return resultDataPtr.toArray();
  }
  //-----------------------------------------------------------------------------
  ParseTransportHeader(data) {
    if (typeof data == "string") data = this.Base64Decode(data);

    this.CheckMaxDataSize(data);

    var intPtr = EUPointerDWORD();
    var resultDataPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUParseTransportHeader",
        "number",
        ["array", "number", "number", "number", "number"],
        [
          data,
          data.length,
          intPtr.ptr,
          resultDataPtr.ptr,
          resultDataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      intPtr.free();
      resultDataPtr.free();
      this.RaiseError(error);
    }

    return new EndUserTransportHeader(
      intPtr.toNumber(),
      resultDataPtr.toArray()
    );
  }
  //-----------------------------------------------------------------------------
  AppendCryptoHeader(caType, headerType, data) {
    this.CheckMaxDataSize(data);

    var resultDataPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUAppendCryptoHeader",
        "number",
        ["array", "number", "array", "number", "number", "number"],
        [
          UTF8ToCP1251Array(caType),
          headerType,
          data,
          data.length,
          resultDataPtr.ptr,
          resultDataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      resultDataPtr.free();
      this.RaiseError(error);
    }

    return resultDataPtr.toArray();
  }
  //-----------------------------------------------------------------------------
  ParseCryptoHeader(data) {
    if (typeof data == "string") data = this.Base64Decode(data);

    this.CheckMaxDataSize(data);

    var caTypePtr = EUPointerMemory(EU_HEADER_MAX_CA_TYPE_SIZE + 1);
    var headerTypePtr = EUPointerDWORD();
    var headerSizePtr = EUPointerDWORD();
    var resultDataPtr = EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUParseCryptoHeader",
        "number",
        ["array", "number", "number", "number", "number", "number", "number"],
        [
          data,
          data.length,
          caTypePtr.ptr,
          headerTypePtr.ptr,
          headerSizePtr.ptr,
          resultDataPtr.ptr,
          resultDataPtr.lengthPtr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      caTypePtr.free();
      headerTypePtr.free();
      headerSizePtr.free();
      resultDataPtr.free();
      this.RaiseError(error);
    }

    var caType = CP1251PointerToUTF8(caTypePtr.ptr);
    caTypePtr.free();

    return new EndUserCryptoHeader(
      caType,
      headerTypePtr.toNumber(),
      headerSizePtr.toNumber(),
      resultDataPtr.toArray()
    );
  }
  //-----------------------------------------------------------------------------
  SServerClientSignHashAsync(
    serverAddress,
    serverPort,
    clientID,
    originatorDescription,
    hashDescription,
    hash,
    signAlgorithmName
  ) {
    var isPort = serverPort != null && serverPort != "";
    var isHashStr = typeof hash == "string";
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUSServerClientSignHashAsync",
        "number",
        [
          "array",
          isPort ? "array" : "number",
          "array",
          originatorDescription ? "array" : "number",
          "array",
          isHashStr ? "array" : "number",
          !isHashStr ? "array" : "number",
          "number",
          "array",
          "number",
        ],
        [
          UTF8ToCP1251Array(serverAddress),
          isPort ? UTF8ToCP1251Array(serverPort) : 0,
          UTF8ToCP1251Array(clientID),
          originatorDescription ? UTF8ToCP1251Array(originatorDescription) : 0,
          UTF8ToCP1251Array(hashDescription),
          isHashStr ? StringToCString(hash) : 0,
          !isHashStr ? hash : 0,
          !isHashStr ? hash.length : 0,
          UTF8ToCP1251Array(signAlgorithmName),
          pPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toString(true);
  }
  SServerClientCheckSignHashStatus(
    serverAddress,
    serverPort,
    clientID,
    operationID,
    asBase64String
  ) {
    var isPort = serverPort != null && serverPort != "";
    var pPtr = asBase64String ? EUPointer() : EUPointerArray();
    var error;

    try {
      error = Module.ccall(
        "EUSServerClientCheckSignHashStatus",
        "number",
        [
          "array",
          isPort ? "array" : "number",
          "array",
          "array",
          "number",
          "number",
          "number",
        ],
        [
          UTF8ToCP1251Array(serverAddress),
          isPort ? UTF8ToCP1251Array(serverPort) : 0,
          UTF8ToCP1251Array(clientID),
          UTF8ToCP1251Array(operationID),
          asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.ptr : 0,
          !asBase64String ? pPtr.lengthPtr : 0,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    var sign = asBase64String ? pPtr.toString(true) : pPtr.toArray();
    return sign && sign.length > 0 ? sign : null;
  }
  SServerClientSignHashesAsync(
    serverAddress,
    serverPort,
    clientID,
    originatorDescription,
    operationDescription,
    hashesDescriptions,
    hashes,
    signAlgorithmName
  ) {
    var isPort = serverPort != null && serverPort != "";
    var hashesDescr =
      hashesDescriptions != null ? intArrayFromStrings(hashesDescriptions) : 0;
    var isHashesStr = typeof hashes[0] == "string";
    var hashesValues = isHashesStr
      ? intArrayFromStrings(hashes)
      : new EUArrayFromArrayOfArray(hashes);

    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUSServerClientSignHashesAsync",
        "number",
        [
          "array",
          isPort ? "array" : "number",
          "array",
          originatorDescription ? "array" : "number",
          "array",
          hashesDescr ? "array" : "number",
          isHashesStr ? "array" : "number",
          "number",
          "number",
          "number",
          "array",
          "number",
        ],
        [
          UTF8ToCP1251Array(serverAddress),
          isPort ? UTF8ToCP1251Array(serverPort) : 0,
          UTF8ToCP1251Array(clientID),
          originatorDescription ? UTF8ToCP1251Array(originatorDescription) : 0,
          UTF8ToCP1251Array(operationDescription),
          hashesDescr ? hashesDescr : 0,
          isHashesStr ? hashesValues : 0,
          !isHashesStr ? hashesValues.count : 0,
          !isHashesStr ? hashesValues.arraysPtr : 0,
          !isHashesStr ? hashesValues.arraysLengthPtr : 0,
          UTF8ToCP1251Array(signAlgorithmName),
          pPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toString(true);
  }
  SServerClientCheckSignHashesStatus(
    serverAddress,
    serverPort,
    clientID,
    operationID
  ) {
    var isPort = serverPort != null && serverPort != "";
    var pPtr = EUPointer();
    var intPtr = EUPointerDWORD();
    var error;
    try {
      error = Module.ccall(
        "EUSServerClientCheckSignHashesStatus",
        "number",
        [
          "array",
          isPort ? "array" : "number",
          "array",
          "array",
          "number",
          "number",
        ],
        [
          UTF8ToCP1251Array(serverAddress),
          isPort ? UTF8ToCP1251Array(serverPort) : 0,
          UTF8ToCP1251Array(clientID),
          UTF8ToCP1251Array(operationID),
          pPtr.ptr,
          intPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      intPtr.free();
      this.RaiseError(error);
    }

    var itemsPtr = pPtr.toPtr();
    var itemsCount = intPtr.toNumber();
    var results = [];
    try {
      for (var i = 0; i < itemsCount; i++) {
        var pCurPtr = Module.getValue((itemsPtr + i * EU_PTR_SIZE) | 0, "i8*");

        results.push(new EndUserSSSignHashResult(pCurPtr));
      }
    } catch (e) {
      Module._EUSServerClientFreeSignHashesResults(itemsPtr);
      this.RaiseError(EU_ERROR_UNKNOWN);
    }

    Module._EUSServerClientFreeSignHashesResults(itemsPtr);

    return results;
  }
  SServerClientGeneratePrivateKeyAsync(
    serverAddress,
    serverPort,
    clientID,
    originatorDescription,
    privateKeyDescription,
    uaAlgorithmName,
    uaDSKeyLength,
    useDSKeyAsKEP,
    uaKEPKeyLength,
    internationalAlgorithmName,
    internationalKeyLength
  ) {
    var isPort = serverPort != null && serverPort != "";
    var isUAAlgorithmName = typeof uaAlgorithmName == "string";
    var isIntAlgorithmName = typeof internationalAlgorithmName == "string";
    var pPtr = EUPointer();
    var error;

    try {
      error = Module.ccall(
        "EUSServerClientGeneratePrivateKeyAsync",
        "number",
        [
          "array",
          isPort ? "array" : "number",
          "array",
          originatorDescription ? "array" : "number",
          "array",
          isUAAlgorithmName ? "array" : "number",
          "number",
          "number",
          "number",
          isIntAlgorithmName ? "array" : "number",
          "number",
          "number",
        ],
        [
          UTF8ToCP1251Array(serverAddress),
          isPort ? UTF8ToCP1251Array(serverPort) : 0,
          UTF8ToCP1251Array(clientID),
          originatorDescription ? UTF8ToCP1251Array(originatorDescription) : 0,
          UTF8ToCP1251Array(privateKeyDescription),
          isUAAlgorithmName ? UTF8ToCP1251Array(uaAlgorithmName) : 0,
          uaDSKeyLength,
          useDSKeyAsKEP ? 1 : 0,
          uaKEPKeyLength,
          isIntAlgorithmName
            ? UTF8ToCP1251Array(internationalAlgorithmName)
            : 0,
          internationalKeyLength,
          pPtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      pPtr.free();
      this.RaiseError(error);
    }

    return pPtr.toString(true);
  }
  SServerClientCheckGeneratePrivateKeyStatus(
    serverAddress,
    serverPort,
    clientID,
    operationID
  ) {
    var isPort = serverPort != null && serverPort != "";
    var uaReqPtr = EUPointerArray();
    var uaReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
    var uaKEPReqPtr = EUPointerArray();
    var uaKEPReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
    var intReqPtr = EUPointerArray();
    var intReqNamePtr = EUPointerMemory(EU_PATH_MAX_LENGTH);
    var error;

    var _free = function () {
      uaReqPtr.free();
      uaReqNamePtr.free();
      uaKEPReqPtr.free();
      uaKEPReqNamePtr.free();
      intReqPtr.free();
      intReqNamePtr.free();
    };

    try {
      error = Module.ccall(
        "EUSServerClientCheckGeneratePrivateKeyStatus",
        "number",
        [
          "array",
          isPort ? "array" : "number",
          "array",
          "array",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
          "number",
        ],
        [
          UTF8ToCP1251Array(serverAddress),
          isPort ? UTF8ToCP1251Array(serverPort) : 0,
          UTF8ToCP1251Array(clientID),
          UTF8ToCP1251Array(operationID),
          uaReqPtr.ptr,
          uaReqPtr.lengthPtr,
          uaReqNamePtr.ptr,
          uaKEPReqPtr.ptr,
          uaKEPReqPtr.lengthPtr,
          uaKEPReqNamePtr.ptr,
          intReqPtr.ptr,
          intReqPtr.lengthPtr,
          intReqNamePtr.ptr,
        ]
      );
    } catch (e) {
      console.error(e);
      error = EU_ERROR_UNKNOWN;
    }

    if (error != EU_ERROR_NONE) {
      _free();
      this.RaiseError(error);
    }

    var _toString = function (strPtr) {
      var str = CP1251PointerToUTF8(strPtr);
      var lastInd = str.lastIndexOf("/");
      if (lastInd < 0) return str;

      return str.substring(lastInd + 1, str.length);
    };

    var _toArray = function (arrPtr) {
      var arr = arrPtr.toArray();
      return arr && arr.length > 0 ? arr : null;
    };

    var uaReq = _toArray(uaReqPtr);
    var uaReqName = _toString(uaReqNamePtr.ptr);
    var uaKEPReq = _toArray(uaKEPReqPtr);
    var uaKEPReqName = _toString(uaKEPReqNamePtr.ptr);
    var intReq = _toArray(intReqPtr);
    var intReqName = _toString(intReqNamePtr.ptr);

    if (uaReq == null && uaKEPReq == null && intReq == null) {
      return null;
    }

    var euPrivateKey = EndUserPrivateKey(
      null,
      null,
      uaReq,
      uaReqName,
      uaKEPReq,
      uaKEPReqName,
      intReq,
      intReqName
    );

    _free();

    return euPrivateKey;
  }
}

//EUSignCPModuleInitialize();

//=============================================================================
