/**
 * Created by Administrator on 2015/7/9.
 */
$(function(){
	
	//点击选择
	$('.vo-list-time').on('click',function(){
		$(this).addClass('vo-list-click')
			.siblings()
			.removeClass('vo-list-click');
	})
	
	
})
