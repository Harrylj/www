window.bridgeHelper = {
	bridgeReady: function(callback) {
		if (window.sdtz && window.sdtz.isReady) {
			setTimeout(function() {
				callback();
			}, 0)
		} else {
			document.addEventListener("WebViewJavascriptBridgeReady", function(event) {
				callback();
			}, false);
		}
	}
}

! function(helper, win) {
	helper.back = function() {
		if(win.history.length > 1) {
			win.history.back();
		}
	};
	
	helper.bridgeReady(function() {
		document.addEventListener("onBackPressed", function(data) {
			helper.back();
		});
	})
}(bridgeHelper, window);