
/*
 *
 *
 *
 *
 */

(function(root){
	var api = {}

	var getRequestId = (function(){
		var i = 0
		return function(){
			i += 1
			return "TIPIT_REQ_" + i.toString()
		}
	})()

	var callbacks = {}

	api.request = function(n,cb){
		var reqId = getRequestId()
		callbacks[reqId] = cb
		window.postMessage({id: reqId, amount: n}, "*");
	}

	window.addEventListener("message", function(event) {
	  // We only accept messages from ourselves
	  if (event.source != window){
	  	console.log("Received message, but dont know for whom it was.")
	  	return;
	  }

	  if (event.data && (event.data.id.startsWith("TIPIT_RESP_"))) {
	    console.log("Page received: " + event.data);
	    var reqId = event.data.id.replace("RESP","REQ");
	    var coin = event.data.coin

	    if(callbacks[reqId]){
	    	callbacks[reqId]();
	    }

	  }else{
	  	console.log("Received message, but dont know what to do with it :/");
	  }
	}, false);

	root.TipIt = api
})(window)
