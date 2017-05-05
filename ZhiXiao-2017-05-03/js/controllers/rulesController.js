serverDomain = localStorage.getItem("ApiAddress") || serverDomain;
var myApp = angular.module('myApp', []);

myApp.directive('isOver', function() {
	return {
		restrict: 'A',
		scope: {
			over: '=isOver'
		},
		link: function(scope, elm, attr) {
			if(scope.$parent.$last) {
				scope.over = true;
			}
		}
	}
});

myApp.controller('rulesCtrl', function($scope, $http) {
	$scope.toggle = {
		now: false
	};
	$scope.$watch('toggle.now', function() {
		if($scope.toggle.now) {
			var liList = document.getElementsByClassName('mui-table-view-cell');
			for(var i = 0; i < liList.length; i++) {
				var divWidth = 0;
				divWidth = liList[i].getElementsByClassName('nm-list-right')[0].innerHTML;
				liList[i].getElementsByClassName('rd-list-bg')[0].style.width = divWidth;
			}
			$scope.toggle.now = false;
		}
	});

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
		$http.get(serverDomain + "GetRules?" + param).success(function(data) {
			var result = data;
			if(result.resultCode == '000000') {
				resultData = result.data;
				var rules = JSON.parse(localStorage.getItem("rules"));
				if(!rules) {
					rules = [];
				}
				for(var i = 0; i < resultData.length; i++) {
					for(var j = 0; j < rules.length; j++) {
						if(resultData[i].rid == rules[j].rid) {
							resultData[i].ratio = rules[j].ratio;
						}
					}
					if(!resultData[i].ratio) {
						resultData[i].ratio = 0;
						rules.push(resultData[i]);
					}
				}
				localStorage.setItem("rules", JSON.stringify(rules));
				$scope.data = resultData;
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
		var id = 'detailsRule';
		startWindowWithExtras(id, id + ".html", {
			data: item
		});
	}

	$scope.onClick = function(elem) {
		$scope.data = []
	}
});