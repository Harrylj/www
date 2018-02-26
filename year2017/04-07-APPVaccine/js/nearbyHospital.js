$(function(){
	//点击选中状态
	$('.nh-list').on('click',function(){
		$(this).addClass('nh-click')
			.siblings()
			.removeClass('nh-click');
	})
	
	$('.public-header-right').on('click',function(){
		var nak = $('.nh-click').children('h1').html()+$('.nh-click').children('p').html();
		$.cookie('nak', nak);
		alert($.cookie("nak")); 
	});
	
})
