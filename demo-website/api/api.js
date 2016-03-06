
(function(root){
	var api = {}

	var getRequestId = (function(){
		var i = 0
		return function(){
			i += 1
			return "TIPIT_REQ_" + i.toString()
		}
	})();

	var redeemCoins = function(msg,cb){
		var url = "https://n1b.ch:7443/wallet/" + msg.wallet + "/redeem/" + msg.coin;
		$.ajax(url)
			.success(function(data){
				console.log("Redeemed coins: " + data)
				cb(data)
			})
			.error(function(){
				console.log("redeeming failed :/")
				cb(0)
			})
	}

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

	    redeemCoins(event.data,function(amount){
	    	if(callbacks[reqId]){
	    		callbacks[reqId](amount);
	    	}
	    })

	  }else{
	  	console.log("Received message, but dont know what to do with it :/");
	  	console.log(event.data)
	  }
	}, false);

	root.TipIt = api
})(window);
