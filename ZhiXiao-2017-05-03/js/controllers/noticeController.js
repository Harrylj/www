serverDomain = localStorage.getItem("ApiAddress") || serverDomain;
var myApp = angular.module('myApp', []);

myApp.controller('noticeCtrl', function($scope, $http) {
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}

	$scope.getData = function(userId, callBack) {
		getDataByNet(userId, callBack);
	}

	function getDataByNet(userId, callBack) {
		if(!callBack) {
			plus.nativeUI.showWaiting("正在获取数据...");
		}
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		var param = "userId=" + userId;
		$http.get(serverDomain + "GetNotice?" + param).success(function(data) {
			if(callBack) {
				callBack();
			} else {
				plus.nativeUI.closeWaiting();
			}
			var result = data;
			if(result.resultCode == '000000') {
				$scope.data = [];
				var deleteData = [];
				if(localStorage.getItem("deleteNotice")) {
					var deleteData = JSON.parse(localStorage.getItem("deleteNotice"));
				}
				for(var i = 0, flag = true, len = deleteData.length; i < len; flag ? i++ : i) {
					if(deleteData[i] && !isContains(result.data, deleteData[i])) {
						deleteData.splice(i, 1);
						flag = false;
					} else {
						flag = true;
					}
				}
				for(var i = 0; i < result.data.length; i++) {
					var item = result.data[i];
					if(!isContains(deleteData, item)) {
						item.publishTime = formatTime(item.publishTime);
						$scope.data.push(item);
					}
				}
				$scope.data.sort(function(a, b) {
					return a.publishTime < b.publishTime
				});
				setTip($scope.data.length < 1 ? "暂无数据" : "");
			} else {
				mui.toast(result.resultMsg || "请求失败");
				setTip(result.resultMsg || "请求失败");
			}
		}).error(function(data) {
			mui.toast("请求失败");
			setTip("服务器连接超时");
			if(callBack) {
				callBack();
			} else {
				plus.nativeUI.closeWaiting();
			}
		});
	}

	function plusReady() {
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		if(userInfo) {
			setTimeout(function() {
				$scope.getData(userInfo.userid);
			}, 500);
		}
	}
	$scope.onItemClick = function(item) {
		var id = 'detailsNotice';
		startWindowWithExtras(id, id + ".html", {
			data: item
		});
	}

	$scope.onClick = function(elem) {
		var deleteData = [];
		if(localStorage.getItem("deleteNotice")) {
			var deleteData = JSON.parse(localStorage.getItem("deleteNotice"));
		}
		for(var i = 0; i < $scope.data.length; i++) {
			deleteData.push($scope.data[i]);
		}
		localStorage.setItem("deleteNotice", JSON.stringify(deleteData));
		$scope.data = [];
	}
});

function formatTime(publishTime) {
	var date = eval('new ' + publishTime.substr(1, publishTime.length - 2));
	var nowDate = new Date();
	if(date.getFullYear() == nowDate.getFullYear() &&
		date.getMonth() == nowDate.getMonth() &&
		date.getDate() == nowDate.getDate()) {
		var hours = date.getHours();
		if(hours < 10) {
			hours = "0" + hours;
		}

		var minutes = date.getMinutes();
		if(minutes < 10) {
			minutes = "0" + minutes;
		}

		return "今天  " + hours + ":" + minutes;
	} else {
		var month = date.getMonth() + 1;
		if(month < 10) {
			month = "0" + month;
		}

		var day = date.getDate();
		if(day < 10) {
			day = "0" + day;
		}
		return date.getFullYear() + "-" + month + "-" + day;
	}
}

function isContains(array, item) {
	if(array instanceof Array) {
		for(var i = 0; i < array.length; i++) {
			var temp = array[i];
			if(temp.nid == item.nid) {
				return true;
			}
		}
	}
	return false;
}