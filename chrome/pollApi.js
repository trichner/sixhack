var qrUrl = 'https://api.qrserver.com/v1/create-qr-code';
var qrParam = '?size=150x150&data=';
var serverUrl = 'https://coffe-cup.eu-gb.mybluemix.net/wallet/';

function updateWallets(callback) {
  var walletIds = [];
  chrome.storage.local.get('wallet-ids', function(item){
    var storedWalletIds = item['wallet-ids'];
    if(!storedWalletIds) {
      storedWalletIds = [];
      chrome.storage.local.set({'wallet-ids':storedWalletIds});
    }
    walletIds = storedWalletIds;
  });
  var u = 0;
  for(var i = 0; i < walletIds.length; i++) {
    var x = new XMLHttpRequest();
    x.open('GET', serverUrl + walletIds[i]);
    console.log('Checking...' + walletIds[i]);
    x.responseType = 'json';
    x.onload = function() {
      // Parse and process the response from Google Image Search.
      var response = x.response;
      if (!response || !response.responseData || !response.responseData.results ||
          response.responseData.results.length === 0) {
        errorCallback('No response from Server!');
        return;
      }
      var firstResult = response.responseData.results[0];

      var seed = firstResult.seed;
      var tail = firstResult.tail;
      var id = firstResult.id;

      callback(id, seed, tail);
    };
    x.onerror = function() {
      errorCallback('Network error.');
    };
    x.send();
  }

}


function updateBadge(updateText, updateColor) {
  chrome.browserAction.setBadgeBackgroundColor({color: updateColor});
  chrome.browserAction.setBadgeText({text: updateText});
}

updateBadge("0","#FF0000")

var i = 0;


chrome.alarms.onAlarm.addListener(function(alarm) {
  updateWallets(function(id, seed, tail) {
  console.log('id: '+id + ' seed: ' + seed + ' tail: ' + tail) });
  updateBadge("+1k", "#FFD700");
  chrome.browserAction.setIcon({path: 'res/coffee_open.png'});
  window.setTimeout(function(){
    updateBadge(i+'k',"#008000");chrome.browserAction.setIcon({path:'res/coffee_closed.png'})}, 1000);
  i++;
});
