$(function(){
	
	//公用弹窗
	function publicTC(content){
		//获取浏览器高度
		var bodyHeight = document.body.clientHeight,
			bodyWidth = window.screen.availWidth;
		//阴影背景
		var tcbg = $('<div class="tcbg"><div>');
		//弹窗内容
		var tcContent = $('<div class="public-ts-father"><div class="public-ts"><input class="ts-btn-close" type="button" /><p class="public-ts-content">'+content+'</p></div></div>')
		if($('.tcbg').length<1)
		{
			tcbg.appendTo($('body'));
			tcContent.appendTo($('body'));
		}
		tcbg.css({
			'width':bodyWidth,
			'height':bodyHeight,
			'display':'block'
		})
		$('.public-ts-father').show();
		setTimeout(function () {
        	$('.tcbg').hide();
        	$('.public-ts-father').hide();
	    }, 2000);
		
	}
	//调用函数
	publicTC('你错误提示错误提示在这里你要看的错误提示在这里');
	//点击关闭错误提示框
	$('.ts-btn-close').on('click',function(){
		$(this).parents('.public-ts-father').hide();
		$('.tcbg').hide();
	})
	
	
	
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
	
	

	
	//JS跳转
	//window.location.href
	/*
	$('.index-btn-login').click(function(){
		window.location.href="login.html"
	})
	*/


	
})
