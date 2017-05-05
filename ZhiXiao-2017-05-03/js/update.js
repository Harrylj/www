var server = serverDomain + "AppUpdate";
/**
 * 检测程序升级
 * 从服务器获取升级数据
 */
function checkUpdate(callback) {
	var xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function() {
		switch(xhr.readyState) {
			case 4:
				plus.nativeUI.closeWaiting();
				if(xhr.status == 200) {
					var os = {
						"iOS": "苹果",
						"Android": "安卓"
					};
					var vData = JSON.parse(xhr.responseText);
					for(var i = 0; i < vData.data.length; i++) {
						var item = vData.data[i];
						if(item.Type.trim() == os[plus.os.name]) {
							// 判断是否需要升级
							var curVer = plus.runtime.version; // 当前版本
							var srvVer = item.versionCode; // 服务器版本
							var url = item.url; // 新版本地址
							if(compareVersion(curVer, srvVer)) {
								// 提示用户是否升级
								plus.nativeUI.confirm('发现新版本', function(i) {
									if(0 == i.index) {
										if(plus.os.name == 'iOS') {
											plus.runtime.openURL(url);
										} else {
											downloadAPK(url);
										}
									} else {
										callback();
									}
								}, '检测更新', ["立即更新", "取　　消"]);
							} else {
								mui.toast("已是最新版本");
								callback();
							}
						}
					}
				} else {
					mui.toast("网络连接异常");
					callback();
				}
				break;
			default:
				break;
		}
	}
	plus.nativeUI.showWaiting("检测新版本...");
	xhr.timeout = 5000;
	xhr.open("GET", server);
	xhr.send();
}

function downloadAPK(url, callback) {
	plus.nativeUI.showWaiting("下载新版本...");
	var dtask = plus.downloader.createDownload(url, {}, function(d, status) {
		if(status == 200) { // 下载成功
			var path = d.filename;
			plus.runtime.install(path);
		} else {
			mui.alert("下载失败");
			callback();
		}
		plus.nativeUI.closeWaiting();
	});
	dtask.start();
}

/**
 * 比较版本大小，如果新版本nv大于旧版本ov则返回true，否则返回false
 * @param {String} ov
 * @param {String} nv
 * @return {Boolean} 
 */
function compareVersion(ov, nv) {
	if(!ov || !nv || ov == "" || nv == "") {
		return false;
	}
	var b = false,
		ova = ov.split(".", 4),
		nva = nv.split(".", 4);
	for(var i = 0; i < ova.length && i < nva.length; i++) {
		var so = ova[i],
			no = parseInt(so),
			sn = nva[i],
			nn = parseInt(sn);
		if(nn > no || sn.length > so.length) {
			return true;
		} else if(nn < no) {
			return false;
		}
	}
	if(nva.length > ova.length && 0 == nv.indexOf(ov)) {
		return true;
	}
}