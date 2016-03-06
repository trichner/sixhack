/*
  TipIt Chrome Extension
  Done for SixHackathon 2016
  Author: Marcel Mohler
  Popup Code
*/
/*
  Global variables
*/
var qrUrl = 'https://api.qrserver.com/v1/create-qr-code';
var qrParam = '?size=150x150&data=';
var serverUrl = 'https://n1b.ch:7443/wallet/';
/*
  Wrapper around btoa that makes it URL friendly
*/
function btoaUrl(string) {
  return window.btoa(string).replace(/\+/g,'-').replace(/\//g,'_');
}

function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}
/*
  Gets an image URL
*/
function getImageUrl(id, callback, errorCallback) {
  callback(qrUrl + qrParam + serverUrl + id + '/create', 150, 150);
}
/*
  Counts the number of valid and invalid wallets
*/
function countWallets() {
  console.log(walletIds.length);
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    var array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    var transactionId = btoaUrl(array);
    walletIds.push(transactionId);
    chrome.storage.local.set({'wallet-ids':walletIds});

    console.log('Getting a new QR code for ' + transactionId);

    getImageUrl(transactionId, function(imageUrl, width, height) {
      console.log('Requesting ' + transactionId + '\n' +
          'Got: ' + imageUrl);
      console.log('ID: ' + transactionId.substring(1,12) + '...');
      var imageResult = document.getElementById('image-result');
      imageResult.width = width;
      imageResult.height = height;
      imageResult.src = imageUrl;
      imageResult.hidden = false;

    }, function(errorMessage) {
      console.log('Cannot display image. ' + errorMessage);
    });
  });
});
/*
  Makes sure wallet-ids are initialized
*/
var walletIds = null;
chrome.storage.local.get('wallet-ids', function(item){
  var storedWalletIds = item['wallet-ids'];
  if(!storedWalletIds) {
    storedWalletIds = [];
    chrome.storage.local.set({'wallet-ids':storedWalletIds});
  }
  walletIds = storedWalletIds;
});

chrome.alarms.create("myAlarm", {delayInMinutes: 0.02, periodInMinutes: 0.02} );
