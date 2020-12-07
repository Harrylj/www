// pc打开跳转pc
// if(!(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))) {
// 	window.location.href = 'http://www.ynwbh.com'
// }


// 公用参数，栏目
function public_obj() {
	var _obj = {};
	_obj.appkey = 'f003e79e-6820-4235-a781-aae069cee459',
	// _obj.siteUrl = 'http://47.98.233.45:8032/', // 站点栏目，内容
	// _obj.shopUrl = 'http://47.98.233.45:8031/', // 展品展商
	_obj.siteUrl = 'http://admin.ynwbh.com/', // 站点栏目，内容
	_obj.shopUrl = 'http://exhibitor.ynwbh.com/', // 展品展商
	_obj.idSite = 23, // 站点id
	_obj.idSite_PC = 1, // 站点id-PC端
	_obj.idSYDBLB = 28, // 首页顶部轮播
	_obj.idWZWBDBLB = 179, // 玩转文博顶部轮播
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
		
		String.prototype.myReplace=function(f,e){//吧f替换成e
			var reg=new RegExp(f,"g"); //创建正则RegExp对象   
			return this.replace(reg,e); 
		}
		// var newstr=str.myReplace('中国','天朝');
		var abc = '汪"汪你爱"汪"汪'
		element.body?element.body = element.body.replace(/@/g,'http://admin.ynwbh.com/mobile'):'';
		// element.body?element.body = element.body.myReplace('src="/mobile','http://admin.ynwbh.com/mobile'):'';
		// alert(abc.myReplace('"汪','呃？？'))
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
// PC处理图片路径,相对路径改为绝对路径少了mobile/
function public_imgsrc_pc(_obj){
	_obj.forEach((element,index) => {
		var _index = index;
		var _element = element;
		var file_src = element.fileUrl?element.fileUrl.split('@/')[1]:'';
		// var image_src = element.imageUrl?element.imageUrl.split('@/')[1]:'';
		var video_src = element.videoUrl?element.videoUrl.split('@/')[1]:'';
		_a = '';
		// 附件地址
		_obj[index].fileUrl = public_obj().siteUrl+_a+file_src;
		// 图片地址
		// _obj[index].imageUrl= public_obj().siteUrl+_a+image_src;
		// 视频地址
		_obj[index].videoUrl= public_obj().siteUrl+_a+video_src;
		// 直播状态转大写
		_obj[index].zhibozt ? _obj[index].zhibozt = _obj[index].zhibozt.toUpperCase() : _obj[index].zhibozt= 'LIVE';
		_obj[index].zT ? _obj[index].zT = _obj[index].zT.toUpperCase() : _obj[index].zT = 'LIVE';
		
		element.body?element.body = element.body.replace(/@/g,'http://admin.ynwbh.com'):'';
		var arr_img = [];
		// 图片地址数组处理
		Object.keys(_element).forEach((element,key)=>{
			if(element.indexOf("imageUrl") != -1 & element != 'imageUrlCount'){
				if(_element[element].indexOf("@/")!= -1){
					var image_src = _element[element]?_element[element].split('@/')[1]:'';
					_obj[_index][element]= public_obj().siteUrl+_a+image_src;
				}
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

/**
  * 获取距离指定时间还有多少天
  * @param {String | Number | Date} dateTime 日期时间
  * @example
  * ```javascript
  *     getDistanceSpecifiedTime('2019/02/02 02:02:00');
  *     getDistanceSpecifiedTime(1549036800000);
  *     getDistanceSpecifiedTime(new Date("2019/2/2 00:00:00"));
  * ```
  */
 function getDistanceSpecifiedTime(dateTime) {
    // 指定日期和时间
    var EndTime = new Date(dateTime);
    // 当前系统时间
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);
	var html = d + " 天" + h + " 时" + m + " 分" + s + " 秒";
	return html.split(' ')[0]
    // console.log(html);
}

// 跳转页面js
function goPage(_src,_obj){
	_obj?window.location.href= _src + '?'+obj2qs(_obj):window.location.href= _src;
	// _obj?(_obj.length>1?window.location.href= _src + '?'+obj2qs(_obj):''):window.location.href= _src;
	// _obj?window.location.href= _src;

}
// 数组随机取值
function getRandomArrayElements(arr, count) {
	var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
	while (i-- > min) {
	index = Math.floor((i + 1) * Math.random());
	temp = shuffled[index];
	shuffled[index] = shuffled[i];
	shuffled[i] = temp;
	}
	return shuffled.slice(min);
}
// var items = ['1','2','4','5','6','7','8','9','10'];
// console.log('222222222',getRandomArrayElements(items, 4) );
// 判断当前是否微信浏览器
function isWeChatBrowser() {
	const ua = window.navigator.userAgent.toLowerCase()
	const matchArr = ua.match(/MicroMessenger/i)
	return matchArr && (matchArr.toString() === 'micromessenger')
}

// 返回上一页
function public_return_page(){
	window.history.back();
	// console.log('返回上一页')
}

/*
    作者:alan
    此版本应用于 750px尺寸的 iOS 设计稿
    rem计算方式：设计图尺寸px / 100 = 实际rem  【例: 100px = 1rem，32px = 0.32rem】
 */
!function (window) {
    /* 设计图文档宽度 */
    var docWidth = 750;
    var doc = window.document,
        docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = (function refreshRem () {
        /* 窗口当前宽度 */
        var clientWidth = docEl.getBoundingClientRect().width;
        /* 页面宽度大于 750 时不再放大 */
        clientWidth = clientWidth > 750 ? 750 : clientWidth;
        var oldSize = (clientWidth/docWidth*100) + 'px';
        docEl.style.fontSize = oldSize;

        /* 获取设置后的字体大小情况 - 因微信设置APP字体大小后会影响该设置 */
        var nowSize = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize;
        var oldSizeValue = parseFloat(oldSize,10);
        var nowSizeValue = parseFloat(nowSize,10);

        /* 当差值大于1时重新按差比计算出正确的px值 */
        if((nowSizeValue - oldSizeValue) > 1 || (nowSizeValue - oldSizeValue) < -1){
            var diff = (oldSizeValue / nowSizeValue);
            docEl.style.fontSize = (clientWidth/docWidth*100*diff) + 'px';
		}
		// 设置app和新闻详情页最低高度
		var aa = window.screen.height;
		if(document.getElementsByClassName("xwxq-body").length>0){
			document.getElementsByClassName("xwxq-body")[0].style.minHeight=(aa-nowSize.split('px')[0])+'px';
		}
		document.getElementById("app").style.minHeight=aa+'px'
		// alert(nowSize.split('px')[0])
		return refreshRem;
    })();
    /* 添加倍屏标识，安卓为1 */
    docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);
    if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
        /* 添加IOS标识 */
        doc.documentElement.classList.add('ios');
        /* IOS8以上给html添加hairline样式，以便特殊处理 */
        if (parseInt(window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
            doc.documentElement.classList.add('hairline');
    }
    if (!doc.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);

}(window);


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
	// console.log(_h,_r_01,_g_01,_b_01,_r_02,_g_02,_b_02)
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
