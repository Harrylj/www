$(function(){
	//模拟操作步骤
	/*
	//点击"立即绑定"
	$('.uc-btn-ljbd').on('click',function(){
		$('.uc-bdkh-01').hide();
		$('.uc-bdkh-02').show();
	})
	*/
	//点击"解除绑定"
	$('.uc-btn-jcbd').on('click',function(){
		$('.uc-bdkh-01').show();
		$('.uc-bdkh-02').hide();
	})
	
	//点击"修改完善"
	$('.yc-btn-xgws').on('click',function(){
		$(this).hide();
		$('.uc-ljbd-table-info').hide();
		$('.uc-ljbd-table-modify').show();
	})
	//点击修改完善的"确定"
	$('.uc-ljbd-qd').on('click',function(){
		$('.yc-btn-xgws').show();
		$('.uc-ljbd-table-info').show();
		$('.uc-ljbd-table-modify').hide();
	})
	
	//点击“刷卡密码”
	$('.uc-btn-skmm').on('click',function(){
		$(this).addClass('uc-mmsz-btn-click')
			.siblings()
			.removeClass('uc-mmsz-btn-click');
		$('.uc-mmsz-skmm').show();
		$('.uc-mmsz-dlmm').hide();
	})
	
	//点击“登录密码”
	$('.uc-btn-dlmm').on('click',function(){
		$(this).addClass('uc-mmsz-btn-click')
			.siblings()
			.removeClass('uc-mmsz-btn-click');
		$('.uc-mmsz-skmm').hide();
		$('.uc-mmsz-dlmm').show();
	})
	
	
})

