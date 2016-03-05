var qrUrl = 'https://api.qrserver.com/v1/create-qr-code';
var qrParam = '?size=150x150&data=';
var serverUrl = 'https://coffe-cup.eu-gb.mybluemix.net/wallet/';

// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

/**
 * @param {string} searchTerm - Search term for Google Image search.
 * @param {function(string,number,number)} callback - Called when an image has
 *   been found. The callback gets the URL, width and height of the image.
 * @param {function(string)} errorCallback - Called when the image is not found.
 *   The callback gets a string that describes the failure reason.
 */
function getImageUrl(id, callback, errorCallback) {
    var width = parseInt(150);
    var height = parseInt(150);
    //console.assert(
    //    typeof imageUrl == 'string' && !isNaN(width) && !isNaN(height),
    //    'Unexpected respose!');
    callback(qrUrl + qrParam + serverUrl + id, width, height);
}

function countWallets() {
  console.log(walletIds.length);
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    var array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    var transactionId = window.btoa(array);
    walletIds.push(transactionId);
    chrome.storage.local.set({'wallet-ids':walletIds});

    renderStatus('Getting a new QR code for ' + transactionId);

    getImageUrl(transactionId, function(imageUrl, width, height) {

      renderStatus('Requesting ' + transactionId + '\n' +
          'Got: ' + imageUrl);

      renderStatus('UserID: ' + macId + '\n' +
          'ID: ' + transactionId.substring(1,12) + '...');
      var imageResult = document.getElementById('image-result');
      // Explicitly set the width/height to minimize the number of reflows. For
      // a single image, this does not matter, but if you're going to embed
      // multiple external images in your page, then the absence of width/height
      // attributes causes the popup to resize multiple times.
      imageResult.width = width;
      imageResult.height = height;
      imageResult.src = imageUrl;
      imageResult.hidden = false;

    }, function(errorMessage) {
      renderStatus('Cannot display image. ' + errorMessage);
    });
  });
});


var macId = null;
chrome.storage.local.get('machine-id', function(item){
  var storedMacId = item['machine-id'];
  if(!storedMacId) {
    storedMacId = Math.random().toString(36).slice(2).substring(0,6);
    chrome.storage.local.set({'machine-id':storedMacId});
  }
  macId = storedMacId;
});

var walletIds = null;
chrome.storage.local.get('wallet-ids', function(item){
  var storedWalletIds = item['wallet-ids'];
  if(!storedWalletIds) {
    storedWalletIds = [];
    chrome.storage.local.set({'wallet-ids':storedWalletIds});
  }
  walletIds = storedWalletIds;
});

var alarmClock = {

        onHandler : function(e) {
            chrome.alarms.create("myAlarm", {delayInMinutes: 0.05, periodInMinutes: 0.05} );
                    window.close();
        },

        offHandler : function(e) {
            chrome.alarms.clear("myAlarm");
                    window.close();
        },

        setup: function() {
            var a = document.getElementById('alarmOn');
            a.addEventListener('click',  alarmClock.onHandler );
            var a = document.getElementById('alarmOff');
            a.addEventListener('click',  alarmClock.offHandler );
        }
};
document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});
