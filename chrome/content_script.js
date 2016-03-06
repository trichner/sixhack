var port = chrome.runtime.connect();

port.onMessage.addListener(function(msg) {
  window.postMessage(msg,"*");
});


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
