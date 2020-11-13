(function (doc, win) {
	//      用原生方法获取用户设置的浏览器的字体大小(兼容ie)
	if (doc.documentElement.currentStyle) {
		var user_webset_font = doc.documentElement.currentStyle['fontSize'];
	}
	else {
		var user_webset_font = getComputedStyle(doc.documentElement, false)['fontSize'];
	}
	//      取整后与默认16px的比例系数
	var xs = parseFloat(user_webset_font) / 16;
	//      设置rem的js设置的字体大小
	var view_jsset_font, result_font;
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		clientWidth,
		recalc = function () {
			clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (!doc.addEventListener) return;
			if (clientWidth < 1080) {
				console.log('111',clientWidth)
				//              设置rem的js设置的字体大小
				view_jsset_font = 100 * (clientWidth / 750);
				//              最终的字体大小为rem字体/系数
				// result_font = view_jsset_font / xs;
				result_font = view_jsset_font;
				console.log('222',view_jsset_font,result_font)
				//              设置根字体大小
				docEl.style.fontSize = result_font + 'px';
			}
			else {
				docEl.style.fontSize = 100 + 'px';
			}
		};
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	

	var aa = window.screen.height;
	var bb = window.screen.width;
	document.getElementById("app").style.minHeight=aa+'px'
	document.getElementById("app").style.minWidth=bb+'px'
	console.log('1234',aa,bb)
})(document, window);

function public_obj() {
	var _obj = {};
	_obj.appkey = '123455644444';
	return _obj;
}
function public_return_page(){
	window.history.back();
	console.log('返回上一页')
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

// 使用
// $(function(){
// 	navHeader(150,34,49,119);
// 	$(window).scroll(function () {
// 		navHeader(150,34,49,119);
// 	})
// })
// 顶部添加背景色_h:下拉的距离,rgb(颜色)
function navHeader(_h,_r,_g,_b) {
	console.log(_h,_r,_g,_b)
	if ($(window).scrollTop() > 0) {
		var _opacity = $(window).scrollTop()/_h;
		// $(".public-header-title").addClass("light");
		// $(".public-header-title").css('opacity',_opacity)
		$(".public-header-title").css('background', 'rgba('+_r+','+_g+','+_b+','+_opacity+')')
		// console.log($(window).scrollTop())
	} else {
		// $(".public-header-title").removeClass("light");
	}
}
