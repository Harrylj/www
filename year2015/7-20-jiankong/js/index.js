$(function(){
	$('.vd-nav').children().on('click',function(){
		var thisIndex = $(this).index();
		$(this).addClass('vd-nav-click')
			.siblings()
			.removeClass('vd-nav-click');
		$('.index-box').children()
			.eq(thisIndex)
			.addClass('vd-click')
			.siblings()
			.removeClass('vd-click');
	})
	
});
