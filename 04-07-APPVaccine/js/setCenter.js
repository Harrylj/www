$(function(){
	//点击切换提示状态
	$('.sc-img').on('click',function(){
		var thisClass = 'sc-img-change';
		if($(this).hasClass(thisClass)){
			$(this).removeClass(thisClass)
		}
		else
		{
			$(this).addClass(thisClass);
		}
		
	})
	
})
