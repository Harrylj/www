$(function(){
	//投票资格函数
	function vote(){
		var lastNmuber= $('.last-number').val();
		var loveNumber = $('.love-number');
		if(lastNmuber>0)
		{
			loveNumber.addClass('love-number-click')
		}
		else
		{
			loveNumber.removeClass('love-number-click');
		}
	}
	//运行投票资格函数
	vote();
	//点击投票
	//.love-number
	$('.love-number').on('click',function(){
		var lastNmuber= $('.last-number'),
			loveNumber = $(this),
			tpNumber = $('.tp-number'),
			zzc = $('.zzc'),
			jxtp = $('.jxtp'),
			mscj = $('.mscj'),
			over = $('.over');
		
		//第一次投票
		if(tpNumber.val()=='0')
		{
			loveNumber.html(parseInt(loveNumber.html())+1);
			lastNmuber.val(parseInt(lastNmuber.val())-1);
			tpNumber.val(parseInt(tpNumber.val())+1);
			zzc.show();
			jxtp.show();
		}
		//最后一次投票抽奖
		else if(tpNumber.val()=='4')
		{
			loveNumber.html(parseInt(loveNumber.html())+1);
			lastNmuber.val(parseInt(lastNmuber.val())-1);
			tpNumber.val(parseInt(tpNumber.val())+1);
			zzc.show();
			mscj.show();
		}
		//可以投票但不提示抽奖
		else if(parseInt(lastNmuber.val())>0)
		{
			loveNumber.html(parseInt(loveNumber.html())+1);
			lastNmuber.val(parseInt(lastNmuber.val())-1);
			tpNumber.val(parseInt(tpNumber.val())+1);
			
		}
		//不能投票
		else if(lastNmuber.val()=='0')
		{
			zzc.show();
			over.show();
		}
		//运行投票资格函数
		vote();
	});
	
	//弹窗关闭按钮
	$('.public-btn-colse').on('click',function(){
		$(this).parents('.public-tc').hide();
		$('.zzc').hide();
	})
	
})
