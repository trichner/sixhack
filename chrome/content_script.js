var port = chrome.runtime.connect();
/*
  Proxy that forwards messages from the
  extension to the website
*/
port.onMessage.addListener(function(msg) {
  window.postMessage(msg,"*");
});
/*
  Messages coming from the website
  to the extension
*/
window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;
  console.log("ContentScript: " + JSON.stringify(event.data));
  if (event.data.id && (event.data.id.startsWith("TIPIT_REQ_"))) {
    console.log("Content script received: " + event.data.id);
    port.postMessage(event.data);
  }
}, false);
