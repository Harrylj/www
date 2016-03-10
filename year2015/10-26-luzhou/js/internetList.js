$(function(){
	var il_list = $('.il-list-ul');		//筛选项父元素
	
	//点击筛选页的返回按钮
	$('.il-btn-return').on('click',function(){
		$('.zzc').hide();
		$('.il-sx').hide();
	})
	
	//点击“筛选”按钮
	$('.il-btn-sx').on('click',function(){
		$('.zzc').show();
		$('.il-sx').show();
	})
	//宽带选择
	$('.il-kd-father').children('li').on('click',function(){
		$(this).addClass('il-kd-click')
			.siblings()
			.removeClass('il-kd-click');
	})
	//价格选择
	$('.il-jg-father').children('li').on('click',function(){
		$(this).addClass('il-jg-click')
			.siblings()
			.removeClass('il-jg-click');
	})
	
	//点击筛选页“确定”按钮
	//筛选页赛选条件
	$('.il-btn-qd').on('click',function(){
		$('.zzc').hide();
		$('.il-sx').hide();
		var tj_01 = $('.il-kd-click').html(),
			tj_02 = $('.il-jg-click').index();
		//筛选"带宽"
		$('.il-num-kd').each(function(){
			//"带宽"匹配
			if($(this).html()== tj_01)
			{
				//$(this).parents('.il-list-li').show();
				//筛选"价格"	
				switch(tj_02)
				{
					//价格低于100
					case 0:
					$(this).parents('.il-list-li').children('.i-list-number').children('.il-num-jg').each(function(){
						if(parseInt($(this).html())<100)
						{
							$(this).parents('.il-list-li').show();
						}
						else
						{
							$(this).parents('.il-list-li').hide();
						}
					});
					break;
					//价格100-150
					case 1:
					$(this).parents('.il-list-li').children('.i-list-number').children('.il-num-jg').each(function(){
						if(parseInt($(this).html()) >=100 && parseInt($(this).html())<=150)
						{
							$(this).parents('.il-list-li').show();
						}
						else
						{
							$(this).parents('.il-list-li').hide();
						}
					});
					break;
					//价格高于150
					case 2:
					$(this).parents('.il-list-li').children('.i-list-number').children('.il-num-jg').each(function(){
						if(parseInt($(this).html())>150)
						{
							$(this).parents('.il-list-li').show();
						}
						else
						{
							$(this).parents('.il-list-li').hide();
						}
					});
					break;
				}
				
			}
			//"带宽"不匹配
			else
			{
				$(this).parents('.il-list-li').hide();
			}
		})
		
	})
	
	//筛选条件：全选
	$('.il-btn-qx').on('click',function(){
		il_list.children().show();
	})
	//筛选条件：爱家套餐
	$('.il-btn-ajtc').on('click',function(){
		il_list.children('.il-list-aj').show();
		il_list.children('.il-list-yj').hide();
	})
	
	//筛选条件：优家套餐
	$('.il-btn-yjtc').on('click',function(){
		il_list.children('.il-list-aj').hide();
		il_list.children('.il-list-yj').show();
	})
	
	
});
