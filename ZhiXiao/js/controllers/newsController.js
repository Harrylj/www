serverDomain = localStorage.getItem("ApiAddress") || serverDomain;
var newsApp = angular.module('newsApp', []);

newsApp.directive('isOver', function() {
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

newsApp.directive('imageOver', function() {
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

newsApp.controller('newsCtrl', function($scope, $http) {

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
			var count = document.getElementsByClassName('mn-nav')[0].children.length;
			if(count > 5) {
				count = 5;
			}
			var swiper = new Swiper('.swiper-container-header', {
				slidesPerView: 5,
				paginationClickable: true,
				spaceBetween: 0
			});
			//默认为选中第一项
			jQuery('.mn-nav').children().eq(0).addClass('mn-nav-click');
			jQuery('.content-div').children().eq(0).addClass('content-list-click');
			//点击头部导航栏切换内容
			jQuery('.mn-nav').children().on('click', function() {
				var thisIndex = jQuery(this).index(),
					thisClickClass = 'mn-nav-click',
					linkDiv = jQuery('.content-div'),
					linkClickClass = 'content-list-click';

				jQuery(this).addClass(thisClickClass).siblings().removeClass(thisClickClass);
				linkDiv.children().eq(thisIndex).addClass(linkClickClass).siblings().removeClass(linkClickClass);
			});
			$scope.toggle.now = false;
		}
	});

	$scope.toggleImage = {
		now: false
	};
	$scope.$watch('toggleImage.now', function() {
		if($scope.toggleImage.now) {
			var count = document.getElementById('imgContent').children.length;
			var autoplay = count > 1 ? 5000 : 0;
			var mySwiper = new Swiper('.swiper-container-img', {
				pagination: '.swiper-pagination-img',
				paginationClickable: true,
				slidesPerView: 1,
				autoplay: autoplay,
				loop: true,
				spaceBetween: 0,
				//				onSlideChangeStart: function(swiper) {
				//					changeSwiperNumber();
				//				}
			});

			//			function changeSwiperNumber() {
			//				var fatherHeight = document.getElementsByClassName('swiper-container-img')[0].height;
			//				var bodyHeight = window.screen.height;
			//				var indexImg = jQuery('.swiper-slide-active').children('img').eq(0);
			//				indexImg.parent().height(fatherHeight);
			//				indexImg.css({ 'position': 'absolute', 'top': '50%', 'margin-top': '-' + indexImg.height() / 2 + 'px' });
			//			}
			//			changeSwiperNumber();
			$scope.toggleImage.now = false;
		}
	});

	$scope.imageNews = [];
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
		$http.get(serverDomain + "GetNews?" + param).success(function(data) {
			var result = data;
			if(result.resultCode == '000000') {
				$scope.imageNews = [];
				$scope.data = [];
				var temItems = [];
				for(var i = 0; i < result.data.length; i++) {
					var item = result.data[i];
					for(var j = 0; j < item.hot.length; j++) {
						var item1 = item.hot[j];
						item1.category = item.category;
						item1.publishTime = formatTime(item1.publishTime);
						var image = getFirstImage(item1.content);
						item1.image = '' || image;
						item1.hasImage = item1.image != '';
						item1.showClass = item1.hasImage ? "" : "hasImage";
						temItems.push(item1)
					}
					item.hot.sort(function(a, b) {
						return a.publishTime < b.publishTime
					});
					$scope.data.push(item);
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
		}).error(function(data) {
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
			$scope.getData(userInfo.userid)
		}
	}

	$scope.onItemClick = function(item) {
		if(item.title && item.content) {
			var id = 'detailsNews';
			startWindowWithExtras(id, id + ".html", { data: item });
		}
	}
});

newsApp.controller('homeNewsCtrl', function($scope, $http) {

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
			var swiper = new Swiper('.swiper-container-img', {
				pagination: '.swiper-pagination-img',
				paginationClickable: true,
				slidesPerView: 1,
				autoplay: 5000, ///5S
				loop: true,
				spaceBetween: 0
			});
			$scope.toggle.now = false;
		}
	});

	$scope.getData = function(userId, callBack) {
		getDataByNet(userId, callBack);
	}

	$scope.imageNews = [];
	$scope.data = [];

	function getDataByNet(userId, callBack) {
		if(!callBack) {
			plus.nativeUI.showWaiting("正在获取数据...");
		}
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		var param = "userId=" + userId;
		$http.get(serverDomain + "GetNews?" + param).success(function(data) {
			plus.nativeUI.closeWaiting();
			var result = data;
			$scope.data = [];
			$scope.imageNews = [];
			if(result.resultCode == '000000') {
				for(var i = 0; i < result.data.length; i++) {
					var item = result.data[i];
					for(var j = 0; j < item.hot.length; j++) {
						var item1 = item.hot[j];
						item1.category = item.category;
						item1.publishTime = formatTime(item1.publishTime);
						var image = getFirstImage(item1.content);
						item1.image = '' || image;
						item1.hasImage = item1.image != '';
						item1.showClass = item1.hasImage ? "" : "hasImage";
						$scope.data.push(item1);
					}
				}

				if($scope.data.length > 0) {
					$scope.data.sort(function(a, b) {
						return a.publishTime < b.publishTime
					});

					for(i in $scope.data) {
						var item = $scope.data[i];
						if(item.image != '' && $scope.imageNews.length < 3) {
							$scope.imageNews.push(item);
						}
					}
					jQuery(".content-list").show();
					jQuery(".mui-loader").hide();
				} else {
					document.getElementsByClassName("mui-loader")[0].innerHTML = "暂无数据";
					jQuery(".mui-loader").show();
					jQuery(".content-list").hide();
				}

				if($scope.imageNews.length <= 1) {
					jQuery(".swiper-container-img").hide();
				} else {
					jQuery(".swiper-container-img").show();
				}
			} else {
				mui.toast(result.resultMsg || "请求失败");
			}
			if(callBack) {
				callBack();
			}
		}).error(function(data) {
			mui.toast("请求失败");
			plus.nativeUI.closeWaiting();
			if(callBack) {
				callBack();
			}
		});
	}

	function plusReady() {
		var userInfo = JSON.parse(localStorage.getItem("userInfo"));
		if(userInfo) {
			$scope.getData(userInfo.userid)
		}
	}
	$scope.onItemClick = function(item) {
		if(item.title && item.content) {
			var id = 'detailsNews';
			startWindowWithExtras(id, id + ".html", { data: item });
		}
	}
});

var defaultImages = [
	{ title: "精准发力全方位服务实体经济", content: "123", publishTime: "今天  12:51", category: "咨询", image: "../images/main/zx-mn-01.jpg" },
];

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
		return date.getFullYear() + "." + month + "." + day;
	}
}