$(function(){
	//改变联系方式
	function changeInfo(){
		//微信名称
		var wxName = "weixinlapiao666",
		//手机号码
			phoneNum = "15028632514",
		//网址
			webSrc = "qxrih.cn";
		$('.wx-name').html(wxName);
		$('.phone-num').html(phoneNum);
		$('.web-src').html(webSrc);
	}
	//改变联系方式
	changeInfo();
	
	//改变排列顺序
	function changeList(){
		var arrList = new Array();
		$('.more-list').children().each(function(){
			var abc = Math.floor(Math.random()*5);
			var thisIndex = $(this).index();
			//等于0则隐藏
			if(thisIndex%abc){
				$(this).hide()
			}
			console.log(thisIndex,abc,!(thisIndex%abc))
		})

	}
	//改变排列顺序
	changeList();
	
	//改变公用底部
	function changeFooter(){
		var fatherDiv = $('.public-js-footer');
		var e_more= $('<div class="index"><div class="i-main-06"><div class="index-footer-body"><p>蜀ICP备11018552号    许可证：2305101号<br>天蓬团队 版权所有 Copyright 2002--2018</p><p>24H  028-85516789</p><p><a href="other2.html">微信刷票</a><a href="other3.html">人工投票</a><a href="lxwm.html">联系我们</a></p></div></div></div>');
		e_more.appendTo(fatherDiv);
	}
	//改变公用底部
	changeFooter()
})
