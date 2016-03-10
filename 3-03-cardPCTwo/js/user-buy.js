$(function(){
	
	//赛选县区
	$('.ub-ul-02').children('li').on('click',function(){
		var thisHtml = $(this).html();
		var changeE = $('.ub-click-01');
		var nextAddress = $('.ub-ul-03');
		var changeClass = 'ub-click-02';
		var showTable = $('.ub-table');
		var ts = $('.ub-li-02');
		
		$(this).addClass(changeClass)
			.siblings()
			.removeClass(changeClass)
			.parent()
			.hide();
		
		changeE.html(thisHtml)
			.show();
		nextAddress.show();
		showTable.show();
		ts.hide();
	})
	//赛选街道
	$('.ub-ul-03').children('li').on('click',function(){
		var changeClass = 'ub-click-02';
		$(this).addClass(changeClass)
			.siblings()
			.removeClass(changeClass);
	})
	
	//关闭选择县区
	$('.ub-click-01').on('click',function(){
		var NowAddress = $('.ub-ul-02');
		var nextAddress = $('.ub-ul-03');
		var showTable = $('.ub-table');
		var ts = $('.ub-li-02');
		showTable.hide();
		nextAddress.hide();
		NowAddress.show();
		ts.show();
		$(this).hide();
	})
	
})
