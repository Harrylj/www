(function ($) {
	$.extend({
		tipsBox: function (options) {
			options = $.extend({
				obj: null,  //jq对象，要在那个html标签上显示
				str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
				startSize: "12px",  //动画开始的文字大小
				endSize: "30px",    //动画结束的文字大小
				interval: 600,  //动画时间间隔
				color: "red",    //文字颜色
				callback: function () { }    //回调函数
			}, options);
			$("body").append("<span class='num'>" + options.str + "</span>");
			var box = $(".num");
			var left = options.obj.offset().left + options.obj.width() / 2;
			var top = options.obj.offset().top - options.obj.height();
			box.css({
				"position": "absolute",
				"left": left + "px",
				"top": top + "px",
				"z-index": 9999,
				"font-size": options.startSize,
				"line-height": options.endSize,
				"color": options.color
			});
			box.animate({
				"font-size": options.endSize,
				"opacity": "0",
				"top": top - parseInt(options.endSize) + "px"
			}, options.interval, function () {
				box.remove();
				options.callback();
			});
		}
	});
})(jQuery);
  

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
			
			$.tipsBox({
				obj: $(this),
				str: "+1",
			});
		}
		//最后一次投票抽奖
		else if(tpNumber.val()=='4')
		{
			loveNumber.html(parseInt(loveNumber.html())+1);
			lastNmuber.val(parseInt(lastNmuber.val())-1);
			tpNumber.val(parseInt(tpNumber.val())+1);
			zzc.show();
			mscj.show();
			
			$.tipsBox({
				obj: $(this),
				str: "+1",
			});
		}
		//可以投票但不提示抽奖
		else if(parseInt(lastNmuber.val())>0)
		{
			loveNumber.html(parseInt(loveNumber.html())+1);
			lastNmuber.val(parseInt(lastNmuber.val())-1);
			tpNumber.val(parseInt(tpNumber.val())+1);
			
			$.tipsBox({
				obj: $(this),
				str: "+1",
			});
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
