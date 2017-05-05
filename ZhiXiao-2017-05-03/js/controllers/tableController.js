serverDomain = localStorage.getItem("ApiAddress") || serverDomain;
var myApp = angular.module('myApp', []);

myApp.controller('tableCtrl', function($scope, $http) {

	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}

	$scope.getData = function(userId, callback) {
		getDataByNet(userId, callback);
	}

	$scope.newsList = [];

	function getDataByNet(userId, callback) {
		if(!callback) {
			plus.nativeUI.showWaiting("正在获取数据...");
		}
		var param = "userId=" + userId;
		$http.get(serverDomain + "GetReport?" + param).success(function(data) {
			var result = data;
			if(result.resultCode == '000000') {
				$scope.newsList = [];
				for(var i = 0; i < result.data.length; i++) {
					var item = result.data[i];
					item.publishTime = formatTime(item.publishTime);
					item.reportType = item.reportType.trim();
					item.KeyPair = item.KeyPair.replace(/name/g, "\"name\"").replace(/value/g, "\"value\"");
					item.tableData = JSON.parse("[" + item.KeyPair + "]");
					$scope.newsList.push(item)
				}
				setTip($scope.newsList.length < 1 ? "暂无数据" : "");
			} else {
				mui.toast(result.resultMsg || "请求失败");
				setTip(result.resultMsg || "请求失败");
			}
			if(callback) {
				callback();
			} else {
				plus.nativeUI.closeWaiting();
			}
		}).error(function(data) {
			mui.toast("请求失败");
			setTip("服务器连接超时");
			if(callback) {
				callback();
			} else {
				plus.nativeUI.closeWaiting();
			}
		});
	}

	function plusReady() {
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		if(userInfo) {
			setTimeout(function(){
				$scope.getData(userInfo.userid);
			}, 500);
		}
		
	}

	$scope.onItemClick = function(item) {
		var id = 'charts-pie';
		if(item.reportType == "折线图" || item.reportType == "柱状图") {
			id = 'charts-lineAndbar';
		} else if(item.reportType == "饼状图" || item.reportType == "饼图") {
			id = 'charts-pie';
		} else if(item.reportType == "二维表") {
			id = 'charts-table';
		}
		startWindowWithExtras(id, id + ".html", { data: item });
	}
});

function formatTime(publishTime) {
	var date = eval('new ' + publishTime.substr(1, publishTime.length - 2));
	var month = date.getMonth() + 1;
	if(month < 10) {
		month = "0" + month;
	}

	var day = date.getDate();
	if(day < 10) {
		day = "0" + day;
	}
	return date.getFullYear() + "." + month + "." + day;
}