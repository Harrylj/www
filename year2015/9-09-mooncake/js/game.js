$(function(){
	
	//点击月饼切换馅料
	$('.game-yb').on('click',function(){
		var thisIndex = $(this).index();
		$('.game-list').children()
			.eq(thisIndex)
			.show()
			.siblings()
			.hide();

	})
	
	//判断顶部月饼显示状态函数
	function changeYB(){
		var gameZZ = $('.game-zz'),
			ybOne = $('.unmber-yb-01'),
			ybTwo = $('.unmber-yb-02'),
			gameYB = $('.game-yb');
			ybOne.val(0);
			ybTwo.val(0);
		gameZZ.children().each(function()
		{
			var thisParentIndex = $(this).parent().index();
			//第一个月饼
			if(thisParentIndex=='0')
			{
				if($(this).hasClass('game-bx'))
				{
					
					ybOne.val(parseInt(ybOne.val())+1);
					//bOne.val($(this).length)
				}
			}
			//第二个月饼
			else
			{
				
				if($(this).hasClass('game-bx'))
				{
					
					ybTwo.val(parseInt(ybTwo.val())+1);	
				}
			}
			
		})
		//给第一个月饼改变状态
		if(ybOne.val()=='5')
		{
			gameYB.eq(0).addClass('game-yb-ok')
		}
		else
		{
			gameYB.eq(0).removeClass('game-yb-ok')
		}
		//给第二个月饼改变状态
		if(ybTwo.val()=='5')
		{
			gameYB.eq(1).addClass('game-yb-ok')
		}
		else
		{
			gameYB.eq(1).removeClass('game-yb-ok')
		}
		//alert(ybOne.val()+'+'+ybTwo.val());
	}
	//运行顶部月饼显示状态函数
	changeYB();
	
	//判断默认显示未满月饼馅料函数
	function showXB(){
		var thisOK = $('.game-yb-ok'),
			gameList = $('.game-list');
		//月饼馅料都没有满或都满时默认显示第一个
		if(thisOK.length!='1')
		{
			gameList.children()
				.eq(0)
				.show()
				.siblings()
				.hide();
		}
		//月饼馅料只有1个满时
		else
		{
			var thisIndex = thisOK.index();
			gameList.children()
				.eq(thisIndex)
				.hide()
				.siblings()
				.show();
		}
		
	}
	//运行显示未满的月饼馅料函数
	showXB();
	
	
	//判断本人显示按钮和文本函数
	function showBtn(){
		var thisLength = $('.game-bx').length,
			allBtn = $('.public-btn-02'),
			mslq = $('.game-btn-mslq'),
			yqpy = $('.game-btn-yqpy'),
			zsybx = $('.game-btn-zsybx'),
			wyycj = $('.game-btn-wyycj');
		//显示“马上领取”按钮，馅料完成数为10
		if(thisLength=='10')
		{
			$('.game-text').hide().eq(1).show();
			mslq.show();
			yqpy.hide();
			zsybx.hide();
			wyycj.hide();
		}
		else
		{
			$('.game-text').hide().eq(0).show();
			mslq.hide();
			zsybx.hide();
			yqpy.show();
			wyycj.hide();
		}
	}
	
	//赠送月饼馅函数
	function zsybx(){
		var userNumber = $('.user-number'),//投资资格值记录
			bxNumber = $('.unmber-bx'), //记录饼馅个数
			userVal = $('.user-val'), //记录是否赠送过馅饼，同1个个人只能赠送1次
			zzc = $('.zzc'),
			tc_01 = $('.game-tc-01'),	//赠送具备赠送资格
			tc_02 = $('.game-tc-02'),	//不具备赠送资格
			tc_04 = $('.game-tc-04'), //提示月饼已完成，无法赠送
			tc_06 = $('.game-tc-06'); //提示同1个用户只能赠送1次月饼馅
		//具有赠送资格
		if(userNumber.val()<2)
		{
			//同1个用户只能赠送1次月饼馅
			//已赠送1次
			if(userVal.val()=='1')
			{
				zzc.show();
				tc_06.show();
			}
			//未赠送1次
			else
			{
				//判断是否月饼是否制作完成
				//制作完成
				if(gameBX.length=='10')
				{
					tc_04.show();
					zzc.hide();
				}
				//制作未完成
				else
				{
					tc_01.show();
					zzc.show();
					//资格记录+1
					userNumber.val(parseInt(userNumber.val())+1)
					//饼馅个数+1
					bxNumber.val(parseInt(bxNumber.val())+1);
					//记录已赠送过1次
					userVal.val('1');
					//alert(bxNumber.val())
					
				}
			}
			
		}
		//不具备赠送资格
		else
		{
			zzc.show();
			tc_02.show();
		}
	}
	
	//运行赠送月饼函数
	//zsybx();

	
	var userID = $('.user-id');	//加载时判断是否本人 1本人，0非本人
	var gameZZ = $('.game-zz');	//饼馅节点元素的父级元素
	var tc_01 = $('.game-tc-01'); //提示赠送月饼成功
	var zzc = $('.zzc');	//遮罩层
	var gameBX = $('.game-bx'); //已被赠送的饼馅
	var tc_04 = $('.game-tc-04'); //提示月饼已完成，无法赠送
	var tc_05 = $('.game-tc-05');	//该饼馅已被赠送，赠送失败
	//本人
	if(userID.val()=='1')
	{
		//运行判断本人显示按钮和文本函数
		showBtn();
		//本人点击馅料时提示本人无法给自己赠送馅料
		gameZZ.children().on('click',function(){
			$('.game-tc-03').show();
			zzc.show();
		})
	}
	//非本人
	else
	{
		//判断非本人显示按钮
		$('.public-btn-02').hide();
		$('.game-btn-zsybx').show();
		$('.game-btn-wyycj').show();
		//判断显示非本人文本
		$('.game-text').hide().eq(2).show();
		
		//运行非本人点击添加馅料函数
		//begin
		//点击图片添加馅料
		gameZZ.children().on('click',function(){
			//判断饼馅是否被赠送
			//已被赠送
			if($(this).hasClass('game-bx'))
			{
				tc_05.show();
				zzc.show();
			}
			//未被赠送
			else
			{
				
				
				//赠送饼馅函数
				zsybx();
				//通过判断提示框是否显示来添加图片状态
				if(!$('.game-tc-06').is(':visible'))
				{
					//添加图片改变状态
					$(this).addClass('game-bx');
				}
				//判断顶部月饼显示状态
				changeYB();
				
			}

		})
		//点击按钮添加馅料
		$('.game-btn-zsybx').on('click',function(){
			//赠送饼馅函数
			zsybx();
			//因为提示框挡住了赠送饼馅的改变状态，所以这里我就不写改变状态了
		});
	}
})
