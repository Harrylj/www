$(function(){
	//缩略显示文本函数
	function xzText(){
		$('.list-game-name').each(function(){
			if($(this).text().length>4){  
	                //给this设置title属性,并且设置this的完整值.给title属性.  
		    		$(this).attr("title",$(this).text());  
		            //获取this的值,进行截取。赋值给text变量保存.  
		    		var text=$(this).text().substring(0,4)+"...";  
		            //重新为this赋值;  
		            $(this).text(text);  
		     }  
		})
	}
	//运行缩略显示文本函数
	xzText();
	
	//关闭弹框
	$('.public-tc-close-01').on('click',function(){
		$(this).parents('.public-tc-01').hide();
		$('.zzc').hide();
	});
	
	
})
