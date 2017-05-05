serverDomain = localStorage.getItem("ApiAddress") || serverDomain;
var myApp = angular.module('myApp', []);

myApp.controller('businessCtrl', function($scope, $http) {
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}

	$scope.data = [];
	$scope.getData = function(userId, callBack) {
		getDataByNet(userId, callBack);
	}

	function getDataByNet(userId, callBack) {
		if(!callBack) {
			plus.nativeUI.showWaiting("正在获取数据...");
		}
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		var param = "userId=" + userId;
		$http.get(serverDomain + "GetMyProducts?" + param).success(function(data) {
			var result = data;
			if(result.resultCode == '000000') {
				$scope.data = [];
				var tempTimes = [];
				for(i in result.data) {
					var item = result.data[i];
					item.transTime = formatTime(item.transTime);
					item.productNo = item.productNo.trim();
					item.integral = parseFloat(item.integral);
					var products = getProducts($scope.data, item.transTime);
					if(products == null) {
						var temp = {};
						temp.transTime = item.transTime;
						temp.products = [];
						temp.products.push(item);
						$scope.data.push(temp);
					} else {
						products.push(item);
					}
				}
				setTip($scope.data.length < 1 ? "暂无数据" : "");
			} else {
				mui.toast(result.resultMsg || "请求失败");
				setTip(result.resultMsg || "请求失败");
			}
			if(callBack) {
				callBack();
			} else {
				plus.nativeUI.closeWaiting();
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
		var id = 'businessSearch';
		startWindowWithExtras(id, id + ".html", { data: item });
	}
});

function formatTime(publishTime) {
	var date = eval('new ' + publishTime.substr(1, publishTime.length - 2));
	return date.getFullYear() + "年";
}

function getProducts(data, transTime) {
	for(i in data) {
		var item = data[i];
		if(item.transTime == transTime) {
			return item.products;
		}
	}
	return null;
}
