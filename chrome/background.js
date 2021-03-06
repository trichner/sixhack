/*
  TipIt Chrome Extension
  Done for SixHackathon 2016
  Author: Marcel Mohler
  Background Code
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
/*
  Class that holds information about a wallet
*/
function Wallet (id, seed, tail) {
  this.id = id;
  this.seed = seed;
  this.tail = tail;
  this.hashes = [];
}
/*
  Helper class to generate a new Wallet
*/
Wallet.generateWallet = function(id, seed, tail) {
  var wallet = new Wallet(id, seed, tail);
  wallet.hashes = generateHashes(seed, tail);
  return wallet;
}
/*
  Generates all hashes between head and tail
*/
function generateHashes(head, tail) {
  var hashes = [];
  var limit = 20000;
  var coins = 0;
  for(;coins < limit;coins++) {
    if(head == tail) {
      break;
    }
    hashes.push(head);
    head = hashStep(head);
    //console.log(head);
  }
  console.log(hashes.length);
  return hashes;
}
/*
  One single SHA256 step
*/
function hashStep(input) {
  var shaObj = new jsSHA("SHA-256", "TEXT", {encoding:"UTF8"});
  shaObj.update(input);
  return btoaUrl(shaObj.getHash("BYTES"));
}
/*
  Retreives coins from the latest wallet
*/
function retreiveCoins(amount,callback) {
  chrome.storage.local.get('wallet-hashmap', function(item){
    var walletHashMap = item['wallet-hashmap'];
    var key = "";
    var poppedElement;
    for(key in walletHashMap) {
      if(walletHashMap.hasOwnProperty(key)) {
        walletHashMap[key].hashes.length;
        for(var i = 0; i < amount; i++) {
          console.log(key)
          poppedElement = walletHashMap[key].hashes.pop();
        }
        break;
      }
    }
    chrome.storage.local.set({'wallet-hashmap':walletHashMap});
    callback({
            wallet: key,
            hash: poppedElement
      });
    })
}
/*
  Core functionality that updates the wallets
*/
function checkWalletId(wid,cb){
    var x = new XMLHttpRequest();
    x.open('GET', serverUrl + wid);
    console.log('Checking...' + serverUrl+wid);
    x.responseType = 'json';
    x.onload = function() {
      // Parse and process the response
      var response = x.response;
      if (x.status == 404 || !response || !response.seed || !response.tail || !response.id) {
        cb(new Error("No wallet found"));
        return;
      }
      var seed = response.seed;
      var tail = response.tail;
      var id = response.id;
      var wallet = Wallet.generateWallet(id, seed, tail);

      var walletHashMap = {};
      chrome.storage.local.get('wallet-hashmap', function(item){
        var storedWalletHashMap = item['wallet-hashmap'];
        if(!storedWalletHashMap) {
          storedWalletHashMap = {};
          chrome.storage.local.set({'wallet-hashmap':storedWalletHashMap});
        }
        walletHashMap = storedWalletHashMap;
        walletHashMap[id] = wallet;
        var newWalletAmount = 0;
        console.log('WalletHashMap size: ' + Object.keys(walletHashMap).length);
        for(var key in walletHashMap) {
          if(walletHashMap.hasOwnProperty(key)) {
            newWalletAmount += walletHashMap[key].hashes.length;
          }
        }
        chrome.storage.local.set({'wallet-hashmap':walletHashMap});
        var walletAmount = null;
        chrome.storage.local.get('wallet-amount', function(item){
          var storedWalletAmount = item['wallet-amount'];
          if(!storedWalletAmount) {
            storedWalletAmount = 0;
            chrome.storage.local.set({'wallet-amount':storedWalletAmount});
          }
          walletAmount = storedWalletAmount;
          if(newWalletAmount > walletAmount) {
            updateBadge(newWalletAmount-walletAmount, 1);
            animateIcon(newWalletAmount);
            walletAmount = newWalletAmount;
            chrome.storage.local.set({'wallet-amount':walletAmount});
          }
          else if (newWalletAmount < walletAmount) {
            updateBadge(newWalletAmount-walletAmount, 2);
            animateIcon(newWalletAmount);
            walletAmount = newWalletAmount;
            chrome.storage.local.set({'wallet-amount':walletAmount});
          }
          cb();
        });
      });
    }

    x.onerror = function() {
      cb(new Error("Network Error."))
    };
    x.send();
}

function checkWalletIds(ids,cb){
  var ajaxCallsRemaining = ids.length;
  var returnedData = [];
  var success = 0;

  for (var i = 0; i < ids.length; i++ ){
      checkWalletId(ids[i], function(err) {
        if(err) {
          console.log("Completed with errors: " + err)
        } else {
          success++;
        }
        --ajaxCallsRemaining;
        if (ajaxCallsRemaining <= 0) {
            cb(success)
        }
      });
  }
}

function updateWallets(callback) {
  var walletIds = [];
  chrome.storage.local.get('wallet-ids', function(item){
    var storedWalletIds = item['wallet-ids'];
    if(!storedWalletIds) {
      storedWalletIds = [];
      chrome.storage.local.set({'wallet-ids':storedWalletIds});
    }
    checkWalletIds(storedWalletIds,callback)
  });

}

/*
  Very hacky approach to make the icon animated
*/
function animateIcon(newWalletAmount) {
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup0.png'})}, 0);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup1.png'})}, 200);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup2.png'})}, 400);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup3.png'})}, 600);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup1.png'})}, 800);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup2.png'})}, 1000);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup3.png'})}, 1200);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup1.png'})}, 1400);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup2.png'})}, 1600);
window.setTimeout(function(){
  chrome.browserAction.setIcon({path:'res/cup3.png'})}, 1800);
window.setTimeout(function() {
   updateBadge(newWalletAmount,0);chrome.browserAction.setIcon({path:'res/cup3.png'})}, 2000);
}
/*
  Converts the badge number to be display friendly
*/
function convertBadgeToString(input) {
  // this converts a number in a readable badge
  // numbers below 1000 get displayed as is
  // numbers above 1000 get rounded down
  if(input < 1000) {
    return (''+input);
  } else if (input < 10000){
    return (input/1000+'k');
  } else {
    return (parseInt(input/1000)+'k');
  }
}
/*
  Updates the badge in one of the 3 following
  ways
  type is an int with 3 values:
  type 0: standard
  type 1: plus
  type 2: minus
*/
function updateBadge(updateInt,type) {
  updateText = convertBadgeToString(updateInt);
  if(type == 1) {
    updateText = "+" + updateText;
    updateColor = "#FFD700";
  } else if (type == 2) {
    updateColor = "#FF0000";
  } else {
    if(updateInt == 0) {
      updateColor = "#FF0000";
    } else {
      updateColor = "#008000";
    }
  }
  chrome.browserAction.setBadgeBackgroundColor({color: updateColor});
  chrome.browserAction.setBadgeText({text: updateText});
}
/*
  makes sure wallet-amount has a reference
*/
var walletAmount = null;
chrome.storage.local.get('wallet-amount', function(item){
  var storedWalletAmount = item['wallet-amount'];
  if(!storedWalletAmount) {
    storedWalletAmount = 0;
    chrome.storage.local.set({'wallet-amount':storedWalletAmount});
  }
  walletAmount = storedWalletAmount;
  updateBadge(walletAmount,3)
});

/*
 receive message from content script
*/
chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    retreiveCoins(msg.amount, function(hashObj) {
      var newMsg = {id: msg.id.replace("REQ", "RESP"), wallet: hashObj.wallet, coin: hashObj.hash };
      port.postMessage(newMsg);
    });
  });
});
/*
  Listener for reoccuring 'alarm'
*/
chrome.alarms.onAlarm.addListener(function(alarm) {
  updateWallets(function(checked) {
    console.log('checked: ' + checked + ' wallets successfully');
  });
});
