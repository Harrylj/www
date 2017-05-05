var serverDomain = "http://192.168.178.13:5819/Interface/";
//var serverDomain = "http://211.149.234.57:5819/Interface/";

function startWindow(pageId, pageUrl) {
	if(window.mui) {
		var topoffset = '0px';
		if(plus.navigator.isImmersedStatusbar()) { // 兼容immersed状态栏模式
			topoffset = Math.round(plus.navigator.getStatusbarHeight()) + 'px';
		}
		mui.openWindow({
			id: pageId,
			url: pageUrl,
			styles: {
				hardwareAccelerated: true, //开启硬件加速
				//				top: topoffset,
				bottom: '0px'
			},
			waiting: {
				autoShow: true, //自动显示等待框，默认为true  
				title: '正在加载...', //等待对话框上显示的提示内容   
			}
		});
	}
}

function startWindowWithExtras(pageId, pageUrl, extras) {
	if(window.mui) {
		var topoffset = '0px';
		if(plus.navigator.isImmersedStatusbar()) { // 兼容immersed状态栏模式
			topoffset = Math.round(plus.navigator.getStatusbarHeight()) + 'px';
		}
		mui.openWindow({
			url: pageUrl,
			id: pageId,
			createNew: true,
			extras: extras,
			styles: {
				hardwareAccelerated: true, //开启硬件加速
				//				top: topoffset,
				bottom: '0px'
			}
		});
	}
}

function startNewWindow(webview) {
	if(window.mui) {
		var topoffset = '0px';
		if(plus.navigator.isImmersedStatusbar()) { // 兼容immersed状态栏模式
			topoffset = Math.round(plus.navigator.getStatusbarHeight()) + 'px';
		}
		webview.setStyle({
			hardwareAccelerated: true, //开启硬件加速
			//			top: topoffset,
			bottom: '0px'
		});
		webview.show("slide-in-right", 300);
	}
}

function openWindow(pageId, pageUrl) {
	var isSuccess = true;
	var webview = plus.webview.getWebviewById(pageId);
	if(webview != null) {
		startNewWindow(webview);
	} else if(pageId) {
		startWindow(pageId, pageUrl);
	} else {
		isSuccess = false;
	}
	return isSuccess;
}

// 手机号码验证
function checkMobile(phone) {
	var pattern = /^(13[0-9]|15[^4,\D]|18[0,2,3,5-9])\d{8}$/;
	return phone && pattern.test(phone);
}

// 验证邮箱
function checkEmail(str) {
	var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
	return re.test(str);
}

function httpRequest(title, method, params, success) {
	var str = "";
	//如果遍历map
	for(var prop in params) {
		if(params.hasOwnProperty(prop)) {
			str += prop + "=" + params[prop] + "&";
		}
	}
	if(str != "") {
		str = "?" + str.substr(0, str.length - 1);
	}

	jQuery.ajax({
		type: 'POST',
		contentType: "application/json; charset=utf-8",
		url: serverDomain + method + str,
		dataType: 'json',
		timeout: 5000,
		success: function(msg, status) {
			if(!msg) {
				alert("请求失败");
			} else if(msg.resultCode == "000000") {
				success(msg.data);
			} else {
				plus.nativeUI.confirm(msg.resultMsg || '请求失败', null, "温馨提示", ["确定"]);
			}
		},
		error: function(xhr, desc, err) {
			plus.nativeUI.toast("网络连接异常");
		},
		complete: function(XMLHttpRequest, textStatus) {
			if(window.plus) {
				plus.nativeUI.closeWaiting();
			}
		},
		beforeSend: function(XMLHttpRequest) {
			if(window.plus) {
				plus.nativeUI.showWaiting(title);
			}
		}
	});
}

function HTMLDecode(text) {
	var temp = document.createElement("div");
	temp.innerHTML = text;
	var output = temp.innerText || temp.textContent;
	temp = null;
	return output;
}

function escape2Html(str) {
	var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
	return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) { return arrEntities[t]; });
}

function formatDate(dt) {
	var year = dt.getYear();
	var month = dt.getMonth() + 1;
	var date = dt.getDate();
	var hour = dt.getHours();
	var minute = dt.getMinutes();
	var second = dt.getSeconds();
	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

function getFirstImage(htmlStr) {
	var arr = htmlStr.replace(' ', '').split('\"');
	var arrImg = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].indexOf('src=') >= 0) {
			arrImg.push(arr[i + 1]);
		}
	}
	return arrImg.length > 0 ? arrImg[0] : "";
}

function setTip(msg) {
	if(msg) {
		jQuery(".mui-loader").html(msg);
		jQuery(".mui-loader").show();
	} else {
		jQuery(".mui-loader").hide();
	}
}

/*Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}*/