$(function(){
	
	//判断用户是否本人:1为本人，2为非本人
	var userVal = $('.input-user').val(),
		headerImg = $('.a-header-img'),
		ImgTsOne = $('.map-img-ts-01'),
		mapClick = $('.map-click');
	//本人	
	if(userVal=='1')
	{
		headerImg.attr('src','images/map-12.png');
		//加载判断全部点亮函数
		gameOver();
	}
	//非本人
	else if(userVal=='2')
	{
		headerImg.attr('src','images/map-16.png');
		ImgTsOne.show();
	}
	//加载出错
	else
	{
		alert('数据加载出错，请刷新页面！')
	}
	
	//判断是否全部点亮函数
	function gameOver(){
		var mapClick = $('.map-click'),
			ImgTsTwo = $('.map-img-ts-02');
		//未点亮所有地点
		if(mapClick.hasClass('map-img'))
		{
			ImgTsTwo.hide();
			//alert('没点亮完')
		}
		//点亮所有地点
		else
		{
			ImgTsTwo.show();
			//alert('点亮完')
		}
	}
	
	//点亮地点
	mapClick.on('click',function(){
		var ts = $('.map-ts-p'),
			ts_01 = '你已经点亮过一次了，每人只能点亮一次！',
			ts_02 = '该地点已被点亮，不能重复点亮',
			clickNumber = $('.input-click-number'),
			zzc = $('.zzc'),
			mapTs = $('.map-ts'),
			mapTs_01 = $('.map-ts-01'),
			mapTs_02 = $('.map-ts-02'),
			mapTs_03 = $('.map-ts-03');
		//具有点亮资格
		if(clickNumber.val()=='1')
		{
			
			//未点亮
			if($(this).hasClass('map-img'))
			{
				$(this).removeClass('map-img')
				//本人
				if(userVal=='1')
				{
					mapTs_01.show();
					zzc.show();
					//加载判断全部点亮函数
					gameOver();
				}
				//非本人
				else if(userVal=='2')
				{
					mapTs_03.show();
					zzc.show();
				}
				//移除点亮资格
				clickNumber.val('0');
			}
			//已点亮
			else
			{
				mapTs.show();
				ts.html(ts_02);
				zzc.show();
			}
			
		}
		//没有点亮资格
		else if(clickNumber.val()=='0')
		{
			zzc.show();
			mapTs.show();
			ts.html(ts_01);
		}
		
	});
	
	
	//关闭当前弹窗
	$('.map-btn').on('click',function(){
		$(this).parents('.public-tc-01').hide();
		$('.zzc').hide();
	})
	//关闭提示好友点亮窗口
	$('.map-img-ts-01').click(function(){
		$(this).hide();
	})
	//提示用户查看领取点亮奖励
	$('.map-img-ts-02').on('click',function(){
		$(this).hide();
		$('.zzc').show();
		$('.map-ts-02').show();
	})
	
})
