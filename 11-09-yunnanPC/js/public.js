//
//let baseUrl = 'http://api.hanyuananiu.com/api/'
//export default {baseUrl}

//var appkey_public = '123455644444';
//
//export default  {appkey_public};

function public_obj() {
	var _obj = {};
	_obj.appkey = '123455644444';
	return _obj;
}
//浏览器版本过低 提示升级 低于ie 10的都会提示  
(function (w) {
	if (!("WebSocket" in w && 2 === w.WebSocket.CLOSING)) {
		var b = document.getElementsByTagName('body')[0];
		//  b.innerHTML= "";
		var d = document.createElement("div");
		d.className = "browsehappy";
		d.innerHTML = '<div class="ie-hint" >为了您的电脑安全，请升级您的浏览器</strong><a target="_blank" href="http://browsehappy.osfipin.com/" >点击此处升级</a></div>';

		var f = function () {
			var s = document.getElementsByTagName("body")[0];
			if ("undefined" == typeof (s)) {
				setTimeout(f, 10)
			} else {
				s.insertBefore(d, s.firstChild)
			}
		};
		f()
	}
}(window));