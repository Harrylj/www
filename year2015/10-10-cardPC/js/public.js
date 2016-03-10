$(function(){

	//点击切换按钮切换
	//thisClick:点击的按钮
	//thisChange:对应改变显示的地方
	//changeClass：点击的按钮改变的样式
	function clickToggle(thisClick,thisChange,changeClass){		
		var thClick= $(thisClick),
			thChange = $(thisChange),
			thClass = changeClass;
		thClick.on('click',function(){
			var thisIndex = $(this).index();
			$(this).addClass(thClass)
				.siblings()
				.removeClass(thClass);
			
			thChange.children()
				.eq(thisIndex)
				.show()
				.siblings()
				.hide();
		})
		
	}
	
	clickToggle('.this-click','.this-change','up-btn-click');

	$('.public-input').on('focus',function(){
		var defaultVal = $(this)[0].defaultValue;
		if($(this).val()==defaultVal)
		{
			$(this).val('');	
		}
		
	})
		
	$('.public-input').on('blur',function(){
		var defaultVal = $(this)[0].defaultValue;
		if($(this).val()=='')
		{
			$(this).val(defaultVal);
		}
	})
	
	//公用底部
	var publicFooter = $('<div class="public-footer-father"><div class="public-footer"><ul class="public-footer-nav"><li class="public-nav-li-01">商户合作</li><li class="public-nav-li-02">活动公告</li><li class="public-nav-li-03">400-9080-0987</li></ul><div class="clear"></div><p>ICP备11001465&nbsp;&nbsp;ICP证110287&nbsp;&nbsp;公网安备11010802011682号</p><p>版权所有@成都时代天择科技有限公司</p></div></div>')
	$('body').append(publicFooter);

	//JS跳转
	//window.location.href
	$('.index-btn-login').click(function(){
		window.location.href="login.html"
	})
	$('.index-btn-register').click(function(){
		window.location.href="register.html"
	})
	$('.register-btn-next').click(function(){
		window.location.href="register-next.html"
	})
	$('.register-btn-ok').click(function(){
		window.location.href="user-card.html"
	})
	$('.up-btn-next').click(function(){
		window.location.href="user-pay-sccess.html"
	})
	$('.login-btn-login').click(function(){
		window.location.href="user-card.html"
	})
	
	














	/*
	//验证当图片验证码输入正确时才会显示获取手机验证码
	$('.public-input-tpyzm').on('change',function(){
		var trueVal = '4wa62z';
		if($(this).val().toLowerCase()==trueVal)
		{
			$('.public-tpyzm-next').show();
			alert(1);
		}
		else
		{
			alert(2);
			$('.public-tpyzm-next').hide();
		}

	})
	*/
	
})
