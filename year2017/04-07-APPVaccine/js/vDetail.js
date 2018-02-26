$(function(){
	
	//点击菜单切换内容
	$('.vd-nav').children().on('click',function(){
		var thisIndex = $(this).index();
		$(this).addClass('vd-nav-click')
			.siblings()
			.removeClass('vd-nav-click');
		$('.vd-content').children()
			.eq(thisIndex)
			.addClass('vd-click')
			.siblings()
			.removeClass('vd-click');
	});
})
