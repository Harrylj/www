// 公用参数，栏目
function public_obj() {
	var _obj = {};
	_obj.appkey = 'f003e79e-6820-4235-a781-aae069cee459',
	// _obj.siteUrl = 'http://47.98.233.45:8032/', // 站点栏目，内容
	// _obj.shopUrl = 'http://47.98.233.45:8031/', // 展品展商
	_obj.siteUrl = 'http://47.98.233.45:8032/', // 站点栏目，内容
	_obj.shopUrl = 'http://exhibitor.ynwbh.com/', // 展品展商
	_obj.idSite = 23, // 站点id
	_obj.idSite_PC = 1, // 站点id-PC端
	_obj.idSYDBLB = 28, // 首页顶部轮播
	_obj.idXWDT = 30, // 新闻动态
	_obj.idXBDW = 38, // 协办单位
	_obj.idZHZJ = 29, // 展区直击
	_obj.idCBDW = 37, // 承办单位
	_obj.idZBDW = 36, // 主办单位
	_obj.idZBJB = 34, // 重磅嘉宾
	_obj.idKMS = 33, // 开幕式
	_obj.idYJJB = 100, // 演讲嘉宾
	_obj.idKMS_CID = 48, // 开幕式-内容id
	_obj.idYGZ = 35, // 云逛展
	_obj.idHZS = 167, // 合作商,文博企业
	_obj.idTSHW = 32, // 特色好物
	_obj.idFLHD = 31, // 福利活动
	_obj.idFHLT = 41, // 峰会论坛
	_obj.idFHLT_list = '115,116,117,118,119', // 峰荟论坛子集数组
	_obj.idFHLT_listJB = [120,121,122,123,124], // 峰会论坛子集特邀嘉宾列表
	_obj.idLXWM = 40, // 联系我们
	_obj.idLXWM_CID = 70, // 联系我们-内容id
	_obj.idHZZX = 91, // 合作咨询
	_obj.idHZZX_CID = 93, // 合作咨询-内容id
	_obj.idZGZQ = 92, // 展馆展区
	_obj.idZGRC = 93, // 展馆日程
	_obj.idZQ = 62, // 会场展区
	_obj.idZQ_01 = 63, // 展区01
	_obj.idZQ_02 = 64, // 展区02
	_obj.idZQ_03 = 65, // 展区03
	_obj.idZQ_04 = 66, // 展区04
	_obj.idTPHD = 94, // 投票活动-活动规则存放处
	_obj.idTPHD_PC = 11, // 投票活动-PC端-内容存放处
	_obj.idZHYJ = 95; // 展会影集
	return _obj;
}
// 处理图片路径,相对路径改为绝对路径
function public_imgsrc(_obj){
	_obj.forEach((element,index) => {
		var _index = index;
		var _element = element;
		var file_src = element.fileUrl?element.fileUrl.split('@/')[1]:'';
		// var image_src = element.imageUrl?element.imageUrl.split('@/')[1]:'';
		var video_src = element.videoUrl?element.videoUrl.split('@/')[1]:'';
		_a = 'mobile/';
		// 附件地址
		_obj[index].fileUrl = public_obj().siteUrl+_a+file_src;
		// 图片地址
		// _obj[index].imageUrl= public_obj().siteUrl+_a+image_src;
		// 视频地址
		_obj[index].videoUrl= public_obj().siteUrl+_a+video_src;
		// 直播状态转大写
		_obj[index].zhibozt ? _obj[index].zhibozt = _obj[index].zhibozt.toUpperCase() : _obj[index].zhibozt= 'LIVE';
		_obj[index].zT ? _obj[index].zT = _obj[index].zT.toUpperCase() : _obj[index].zT = 'LIVE';
		var arr_img = [];
		// 图片地址数组处理
		Object.keys(_element).forEach((element,key)=>{
			if(element.indexOf("imageUrl") != -1 & element != 'imageUrlCount'){
				var image_src = _element[element]?_element[element].split('@/')[1]:'';
				_obj[_index][element]= public_obj().siteUrl+_a+image_src;
				// arr_img.push(element) 
			}
		})
	}); 
	// console.log('122223455',_obj)
	return _obj
}


/**
 * obj2qs({'a':1,'b':2})
 * @author web得胜
 * @param {Object} obj 需要拼接的参数对象
 * @return {String}
 * */
function obj2qs(obj) {
    if(!obj && !Object.keys(obj).length) {
        return "";
    } else {
        var arr = [];
        for(var key in obj) {
            arr.push(key + "=" + obj[key]);
        }
        return arr.join("&");
    }
}

/**
 * qs2obj('file:///E:/wamp/www/11-10-yunnan/column_xwdt.html?abc=1&aaa=2')
 * @param {String} url url地址栏
 * @return {Object}
 */
function qs2obj(url) {
    var qs = url.split("?")[1];
    var arr = [];
    var res = {};
    if(!qs) {
        // return res;
    } else {
        arr = qs.split("&");
        for(var i = 0, len = arr.length; i < len; i++) {
            var key = arr[i].split("=")[0];
            var val = arr[i].split("=")[1];
            res[key] = decodeURIComponent(val);
        }
    }
    return res;
}

// 跳转页面js
function goPage(_src,_obj){
	_obj?window.location.href= _src + '?'+obj2qs(_obj):window.location.href= _src;
	
}

// 返回上一页
function public_return_page(){
	window.history.back();
	// console.log('返回上一页')
}

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
				// console.log('111',clientWidth)
				//              设置rem的js设置的字体大小
				view_jsset_font = 100 * (clientWidth / 750);
				//              最终的字体大小为rem字体/系数
				// result_font = view_jsset_font / xs;
				result_font = view_jsset_font;
				// console.log('222',view_jsset_font,result_font)
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
// navHeader();
// $(window).scroll(function () {
// 	navHeader();
// })
// 顶部添加背景色_h:下拉的距离,rgb(左颜色),rgb(右颜色)
function navHeader(_h,_r_01,_g_01,_b_01,_r_02,_g_02,_b_02) {
	// 默认值// navHeader(150,20,24,158,40,128,232);
	var _h = _h?_h:150
	var _r_01 =_r_01?_r_01:20
	var _g_01 = _g_01?_g_01:24
	var _b_01 = _b_01?_b_01:158
	var _r_02 = _r_02?_r_02:40
	var _g_02 = _g_02?_g_02:128
	var _b_02 = _b_02?_b_02:232
	console.log(_h,_r_01,_g_01,_b_01,_r_02,_g_02,_b_02)
	if ($(window).scrollTop() > 0) {
		var _opacity = $(window).scrollTop()/_h;
		// $(".public-header-title").addClass("light");
		// $(".public-header-title").css('background', 'rgba('+_r+','+_g+','+_b+','+_opacity+')')
		$(".public-header-title").css('background', 'linear-gradient(90deg, rgba('+_r_01+','+_g_01+','+_b_01+','+_opacity+'), rgba('+_r_02+','+_g_02+','+_b_02+','+_opacity+'))')
		// console.log($(window).scrollTop())
	} else {
		// $(".public-header-title").removeClass("light");
	}
}
