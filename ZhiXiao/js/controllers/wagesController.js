serverDomain = localStorage.getItem("ApiAddress") || serverDomain;
var myApp = angular.module('myApp', []);
myApp.controller('wagesCtrl', function($scope, $http) {
	
	if (window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}
	$scope.data = [];
	$scope.title = "";
	$scope.getWages = function(startDate, endDate) {
		getDataByNet(startDate, endDate);
	}
	
	function getDataByNet(startDate, endDate) {
		plus.nativeUI.showWaiting("正在获取数据...");
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		var param = "userId=" + userInfo.userid + "&startMonth=" + dateFormat(startDate) + "&endMonth=" + dateFormat(endDate);
		$http.get(serverDomain + "GetPayByMonth?" + param).success(function(data) {
			plus.nativeUI.closeWaiting();
			var result = data;
			if(result.resultCode == '000000') {
				$scope.data = [];
				var resultData = result.data;
				for (var i = 0; i< resultData.length; i++) {
					var item = resultData[i];
					item.month = dateFormat(new Date(parseInt(item.month.slice(6, 19))));
					item.basicPay = parseFloat(item.basicPay);
					item.postPay = parseFloat(item.grantTotal);
					item.meritPay = parseFloat(item.meritPay);
					item.deduction = parseFloat(item.deduction);
					item.wagesTotal = parseFloat(item.wagesTotal);
					$scope.data.push(item);
				}
				if($scope.data.length < 1) {
					document.getElementsByClassName("mui-loader")[0].innerHTML = "暂无数据";
					jQuery(".mui-scroll-wrapper").hide();
					jQuery("#btn-chart").hide();
				} else {
					jQuery(".mui-scroll-wrapper").show();
					jQuery("#btn-chart").show();
				}
				$scope.title = dateFormat(startDate) + "~" + dateFormat(endDate);
			} else {
				mui.toast(result.resultMsg || "请求失败");
				document.getElementsByClassName("mui-loader")[0].innerHTML = result.resultMsg || "请求失败";
			}
		}).error(function(data) {
			mui.toast("请求失败");
			document.getElementsByClassName("mui-loader")[0].innerHTML = "服务器连接超时";
			plus.nativeUI.closeWaiting();
		});
	}

	function plusReady() {
		var nowDate = new Date();
		$scope.getWages(nowDate, nowDate);
	}
	$scope.onClick = function(item) {
		var id = 'moneyImg';
		startWindowWithExtras(id, id + ".html", {data: $scope.data, title: $scope.title});
	}
});

function dateFormat(date) {
	if(date instanceof Date) {
		var month = date.getMonth() + 1;
		if(month < 10) {
			month = "0" + month;
		}
		return date.getFullYear() + "-" + month;
	} else {
		return "";
	}
}

function dateFormat1(date) {
	if(date instanceof Date) {
		return date.getFullYear() + "年" + (date.getMonth() + 1) + "月";
	} else {
		return "";
	}
}