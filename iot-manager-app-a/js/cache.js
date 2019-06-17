/**
 * App缓存相关
 */
function CacheUtils(os) {
	this.os = os;

	var Intent = null,
		File = null,
		Uri = null,
		main = null;

	if (os == "Android") {
		main = plus.android.runtimeMainActivity();
		Intent = plus.android.importClass("android.content.Intent");
		File = plus.android.importClass("java.io.File");
		Uri = plus.android.importClass("android.net.Uri");
	}
	/**  
	 * 计算缓存大小，官方提供方法，用于iOS  
	 */
	this.calcCache = function(callback) {
		if (os == "Android") {
			calcCache4Android(callback);
		} else if (os == "iOS") {
			plus.cache.calculate(function(size) {
				return callback(size);
			});
		} else {
			callback(-1);
		}
	}
	
	/**  
	 * 清除缓存    
	 */
	this.clearCache = function(callback) {
		if (os == "Android") {
			clearAllCache4Android(callback);
		} else if (os == "iOS") {
			plus.storage.clear();
			plus.cache.clear(function() {
				return callback();
			});
		} else {
			mui.toast("未知的设备类型,无法计算缓存");
			cacheCaleState = false;
		}
	}

	/**
	 * 计算缓存大小，用于Android
	 */
	function calcCache4Android(callback) {
		var cacheSize = 0;
		var sdRoot = main.getCacheDir();
		var files = plus.android.invoke(sdRoot, "listFiles");
		cacheSize += getFolderSize(files);
		callback(cacheSize);
	}
	
	function clearAllCache4Android(callback) {
		var sdRoot = main.getCacheDir();
		var files = plus.android.invoke(sdRoot, "listFiles");
		deleteDir(files);
		//再次计算缓存大小
		if (callback instanceof Function) {
			callback();
		}
	}

	function deleteDir(files) {
		var len = files.length;
		for (var i = 0; i < len; i++) {
			console.log("delete file dir:" + files[i]);
			files[i].delete();
		}
	}

	function getFolderSize (files) {
		var size = 0;
		var len = files.length;
		for (var i = 0; i < len; i++) {
			// 如果下面还有文件  
			if (files[i].isDirectory()) {
				size = size + getFolderSize(files[i]);
			} else if (!files[i].isHidden()) {
				size = size + files[i].length();
			}
		}
		return size;
	}
}
