mui.plusReady(function() {
	os = plus.os.name;
	if(os == "Android") {
		main = plus.android.runtimeMainActivity();
		Intent = plus.android.importClass("android.content.Intent");
		File = plus.android.importClass("java.io.File");
		Uri = plus.android.importClass("android.net.Uri");
	}
	initCacheSize();
});

function clear() {
	plus.nativeUI.confirm("确定清除缓存？ ", function(e) {
		if(e.index == 0) {
			if(os == "Android") {
				if(cacheCaleState == true) {
					clearAllCache4Android();
					initCacheSize();
					mui.toast("删除完成");
				} else {
					mui.toast("缓存计算中……");
				}
			} else if(os == "iOS") {
				clearCache(function() {
					//再次计算缓存大小
					initCacheSize();
					mui.toast("删除完成");
				});
			} else {
				mui.toast("未知的设备类型,无法计算缓存");
				cacheCaleState = false;
			}
		}
	}, "通知", ["确定", "取消"]);
}

function initCacheSize() {
	var formatedSize;
	if(os == "Android") {
		formatedSize = formatSize(calcCache4Android());
		cacheCaleState = true;
	} else if(os == "iOS") {
		calcCache(function(size) {
			cacheCaleState = true;
			formatedSize = formatSize(size);
		});
	}
}
/**
 * 计算缓存大小  官方提供方法，用于iOS
 */
function calcCache(callback) {
	var finalSize = -1;
	plus.cache.calculate(function(size) {
		var sizeInt = parseInt(size);
		callback(sizeInt);
	});
}

function calcCache4Android() {
	var cacheSize = 0;
	var sdRoot = main.getCacheDir();
	var files = plus.android.invoke(sdRoot, "listFiles");
	cacheSize += getFolderSize(files);
	return cacheSize;
}

function getFolderSize(files) {
	var size = 0;
	var len = files.length;
	for(var i = 0; i < len; i++) {
		if(files[i].isDirectory()) {
			size = size + getFolderSize(files[i]);
		} else if(!files[i].isHidden()) {
			size = size + files[i].length();
		}
	}
	return size;
}

function formatSize(size) {
	var fileSizeString;
	size = parseInt(size);
	if(size == 0) {
		fileSizeString = "0B";
	} else if(size < 1024) {
		fileSizeString = size + "B";
	} else if(size < 1048576) {
		fileSizeString = (size / 1024).toFixed(2) + "KB";
	} else if(size < 1073741824) {
		fileSizeString = (size / 1048576).toFixed(2) + "MB";
	} else {
		fileSizeString = (size / 1073741824).toFixed(2) + "GB";
	}
	return fileSizeString;
}

/**
 * 清除缓存  
 */
function clearCache(callback) {
	plus.cache.clear(callback);
}

function clearAllCache4Android() {
	var sdRoot = main.getCacheDir();
	var files = plus.android.invoke(sdRoot, "listFiles");
	deleteDir(files);
}

function deleteDir(files) {
	var len = files.length;
	for(var i = 0; i < len; i++) {
		if(files[i].isFile) {
			files[i].delete();
		} else if(files[i].isDirectory) {
			deleteDir(files[i]);
		}
	}
}