import {euSignFactory} from "./euscpfactory.js"

window.onload = function() {
  updateServers();
  euSignFactory.onChangeCAs = updateServers;
  euSignFactory.onChangePrivateKeyFile = updateKeysSublist;
  euSignFactory.onerror = showError;
  privKeyChanged();
  document.getElementById("CAsServersSelect").onchange = (e)=>{console.log("selChanged",e);};
  document.getElementById("PKeyFileInput").onchange = privKeyChanged;
  document.getElementById("PKeyFileClear").onclick = privKeyClear;
  document.getElementById("BtnSign").onclick = trySign;
};


function updateServers(){
  var servers = euSignFactory.CAsServers;
  var select = document.getElementById("CAsServersSelect");
  select.innerHTML = '';
  if(servers){
    for (var i = 0; i < servers.length; i++){
      var option = document.createElement("option");
      option.text = servers[i].issuerCNs[0];
      select.add(option);
    }
    select.selectedIndex = euSignFactory.CAServerIndex===null?-1:euSignFactory.CAServerIndex;
  }
}

function updateKeysSublist(){
  var certList = euSignFactory.pkFileDataArray;
  var select = document.getElementById("ChoosePKCertsInput");
  select.innerHTML = '';
  if(certList)
    for (var i = 0; i < certList.length; i++){
      var option = document.createElement("option");
      option.text = certList[i].alias.toString() + ' (' + (certList[i]?.certificates[0]?.infoEx?.subjCN).toString() + ')';
      select.add(option);
    }
}

var errors='';
function showError(message) {
  errors = errors+('<br/>'+message);
	document.getElementById('euOperationErrors').innerHTML = errors;
}

function privKeyChanged(){

  var files = document.getElementById("PKeyFileInput").files;
  euSignFactory.setPrivateKeyFile( files.length>0?files[0]:null );
  var select = document.getElementById("CAsServersSelect");
  select.selectedIndex = euSignFactory.CAServerIndex===null?-1:euSignFactory.CAServerIndex;
  //euSignFactory.updatePrivateKeyData();
}
function privKeyClear(){
  //euSignFactory.setPrivateKeyFile( '' );
  document.getElementById("PKeyFileInput").value = '';
  //document.getElementById("PKeyPassword").value = '';
  privKeyChanged();
}


function trySign(){
  if( euSignFactory.isReady() ){
    var caServIndex = document.getElementById("CAsServersSelect").selectedIndex;
    euSignFactory.setCASettings( caServIndex===null?-1:caServIndex );
    //euSignFactory.setPrivateKeyFile( document.getElementById("PKeyFileInput").value );
    euSignFactory.pkFilePassword = document.getElementById("PKeyPassword").value;
    var select = document.getElementById("ChoosePKCertsInput");
    euSignFactory.pkFileItemIndex = select.selectedIndex===null?-1:select.selectedIndex;
    euSignFactory.readPrivateKeyButtonClick() //перенести в signData??
    var dataSigned = euSignFactory.signData('Hello',true, true, 'def');
    document.getElementById('result').value = dataSigned;
  }
  else
  {
    showError('SignFactory not ready ');
  }
}
//------------------------------------------------------------------------------
