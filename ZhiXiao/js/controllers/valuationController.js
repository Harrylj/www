serverDomain = localStorage.getItem("ApiAddress") || serverDomain;
var myApp = angular.module('myApp', []);

myApp.controller('valuationCtrl', function($scope, $http) {
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}

	$scope.data = [];
	$scope.title = "";
	$scope.getValuation = function(startDate, endDate) {
		getDataByNet(startDate, endDate);
	}

	function getDataByNet(startDate, endDate) {
		var w = plus.nativeUI.showWaiting("正在获取数据...");
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		var param = "userId=" + userInfo.userid + "&startMonth=" + dateFormat(startDate) + "&endMonth=" + dateFormat(endDate)
		$http.get(serverDomain + "GetCommissionByMonth?" + param).success(function(data) {
			plus.nativeUI.closeWaiting();
			var result = data;
			if(result.resultCode == '000000') {
				$scope.data = [];
				var tempTimes = [];
				for(i in result.data) {
					var item = result.data[i];
					item.month = formatTime(item.month);
					item.sellPrice = parseFloat(item.sellPrice);

					var products = getProducts($scope.data, item.month);
					if(products == null) {
						var temp = {};
						temp.month = item.month;
						temp.commission = [];
						temp.commission.push(item);
						$scope.data.push(temp);
					} else {
						products.push(item);
					}
				}

				for(var i = 0; i < $scope.data.length; i++) {
					var item = $scope.data[i];
					var total = 0;
					for(var j = 0; j < item.commission.length; j++) {
						total += item.commission[j].sellPrice;
					}
					item.totalPrice = total;
				}
				$scope.title = dateFormat(startDate) + "~" + dateFormat(endDate);
				setTip($scope.data.length < 1 ? "暂无数据" : "");
				if($scope.data.length < 1) {
					jQuery(".mui-pull-right").hide();
				} else {
					jQuery(".mui-pull-right").show();
				}
			} else {
				mui.toast(result.resultMsg || "请求失败");
				setTip(result.resultMsg || "请求失败");
			}
		}).error(function(data) {
			mui.toast("请求失败");
			setTip("服务器连接超时");
			plus.nativeUI.closeWaiting();
		});
	}

	function plusReady() {
		var nowDate = new Date();
		startDate = new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, 1);
		endDate = nowDate;
		$scope.getValuation(startDate, endDate);
	}

	$scope.onClick = function() {
		var id = 'valuationMineHistory';
		startWindowWithExtras(id, id + ".html", { data: $scope.data, title: $scope.title });
	}
});

function dateFormat(date) {
	if(date instanceof Date) {
		var month = date.getMonth() + 1;
		if(month < 10) {
			month = "0" + month;
		}
		var day = date.getDate();
		if(day < 10) {
			day = "0" + day;
		}
		return date.getFullYear() + "-" + month + "-" + day;
	} else {
		return "";
	}
}

function dateFormat1(date) {
	if(date instanceof Date) {
		return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	} else {
		return "";
	}
}

function formatTime(publishTime) {
	var date = eval('new ' + publishTime.substr(1, publishTime.length - 2));
	return date.getFullYear() + "年" + (date.getMonth() + 1) + "月";
}

function getProducts(data, month) {
	for(i in data) {
		var item = data[i];
		if(item.month == month) {
			return item.commission;
		}
	}
	return null;
}