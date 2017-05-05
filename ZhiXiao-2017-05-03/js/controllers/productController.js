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

myApp.directive('imageOver', function() {
	return {
		restrict: 'A',
		scope: {
			imageOver: '=imageOver'
		},
		link: function(scope, elm, attr) {
			if(scope.$parent.$last) {
				scope.imageOver = true;
			}
		}
	}
});

myApp.controller('productCtrl', function($scope, $http) {
	var selectItem = "";
	if(window.plus) {
		plusReady();
	} else {
		document.addEventListener("plusready", plusReady, false);
	}

	$scope.toggle = {
		now: false
	};
	$scope.$watch('toggle.now', function() {
		if($scope.toggle.now) {
			var swiper = new Swiper('.swiper-container-header', {
				slidesPerView: 4,
				paginationClickable: true,
				spaceBetween: 0
			});
			//默认为选中第一项
			var index = 0;
			if(selectItem && $scope.data) {
				for(var i = 0; i < $scope.data.length; i++) {
					console.log($scope.data[i].category.trim())
					if($scope.data[i].category.trim() == selectItem) {
						index = i;
						break;
					}
				}
			}
			jQuery('.mn-nav').children().eq(0).addClass('mn-nav-click');
			jQuery('.content-div').children().eq(0).addClass('content-list-click');
			
			jQuery('.mn-nav').children().on('click', function() {
				var thisIndex = jQuery(this).index(),
					thisClickClass = 'mn-nav-click',
					linkDiv = $('.content-div'),
					linkClickClass = 'content-list-click';
				selectItem = jQuery(this).html().trim();
				$(this).addClass(thisClickClass).siblings().removeClass(thisClickClass);
				linkDiv.children().eq(thisIndex).addClass(linkClickClass).siblings().removeClass(linkClickClass);
			})
			$scope.toggle.now = false;
		}
	});

	$scope.toggleImage = {
		now: false
	};
	$scope.$watch('toggleImage.now', function() {
		if($scope.toggleImage.now) {
			var swiper = new Swiper('.swiper-container-img', {
				paginationClickable: true,
				slidesPerView: 1,
				autoplay: 5000,
				loop: true,
				spaceBetween: 0
			});
			$scope.toggleImage.now = false;
		}
	});

	$scope.data = [];
	$scope.getData = function(userId, callBack) {
		getDataByNet(userId, callBack);
	}

	function getDataByNet(userId, callBack) {
		if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
			document.getElementsByClassName("mui-loader")[0].innerHTML = "网络异常，请检查网络设置";
			if(callBack) {
				mui.toast("网络异常，请检查网络设置");
				callBack();
			}
			return;
		}
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		var param = "userId=" + userId;
		$http.get(serverDomain + "GetProducts?" + param, {
			timeout: 3000
		}).success(function(data) {
			var result = data;
			if(result.resultCode == '000000') {
				$scope.imageNews = [];
				$scope.data = result.data;
				var temItems = [];
				for(var i = 0; i < result.data.length; i++) {
					var item = result.data[i];
					for(var j = 0; j < item.products.length; j++) {
						var item1 = item.products[j];
						item1.image = '' || getFirstImage(item1.content);
//						temItems.push(item1)
					}
				}
				if($scope.data.length > 0) {
					temItems.sort(function(a, b) {
						return a.publishTime < b.publishTime
					});

					for(i in temItems) {
						var item = temItems[i];
						if(item.image != '' && $scope.imageNews.length < 3) {
							$scope.imageNews.push(item);
						}
					}
					jQuery(".swiper-container-header").show();
					jQuery(".mui-loader").hide();
				} else {
					document.getElementsByClassName("mui-loader")[0].innerHTML = "暂无数据";
					jQuery(".mui-loader").show();
					jQuery(".swiper-container-header").hide();
				}
				if($scope.imageNews.length <= 0) {
					jQuery(".swiper-container-img").hide();
				} else {
					jQuery(".swiper-container-img").show();
				}
			} else {
				document.getElementsByClassName("mui-loader")[0].innerHTML = result.resultMsg || "请求失败";
				jQuery(".mui-loader").show();
				if(callBack) {
					mui.toast(result.resultMsg || "请求失败");
				}
			}
			if(callBack) {
				callBack();
			}
		}).error(function(data, status, header, config) {
			document.getElementsByClassName("mui-loader")[0].innerHTML = "服务器连接超时";
			jQuery(".mui-loader").show();
			mui.toast("请求失败");
			if(callBack) {
				callBack();
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
		var id = 'detailsProduct';
		startWindowWithExtras(id, id + ".html", {
			data: item
		});
	}
});