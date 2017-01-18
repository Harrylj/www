$(function(){
	var img_01 = $('.join-img-add').attr('src');
	$('.join-btn-msjr').on('click',function(){
		var ts = $('.join-ts'),
			ts_01 = '姓名不能为空',
			ts_02 = '个性宣言不能为空',
			ts_03 = '图片不能为空',
			inputName = $('.join-input-name'),
			inputText = $('.join-input-text'),
			img = $('.join-img-add');
		
		//姓名不能为空
		if(inputName.val()=='')
		{
			ts.html(ts_01);
		}
		//个性宣言不能为空
		else if(inputText.val()=='')
		{
			ts.html(ts_02);	
		}	
		//图片不能为空
		
		else if(img.attr('src')==img_01)
		{
			ts.html(ts_03)
		}
		//完成
		else
		{
			alert('上传成功！')
		}

	})

})
