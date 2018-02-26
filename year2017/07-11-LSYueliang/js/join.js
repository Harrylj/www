$(function(){
	var img_01 = $('.join-img-add').attr('src');
	$('.join-btn-msjr').on('click',function(){
		var ts = $('.join-ts'),
			ts_01 = '姓名不能为空',
			ts_02 = '个性宣言不能为空',
			ts_03 = '图片不能为空',
			inputName = $('.join-input-name'),
			inputText = $('.join-input-text'),
			inputTel = $('.join-input-tel'),
			myreg = /^0?1[3|4|5|8][0-9]\d{8}$/;
		
		//姓名不能为空
		if(inputName.val()=='')
		{
			ts.html(ts_01);
		}
		//手机号码格式不正确
		else if(!myreg.test(inputTel.val()))
		{
			ts.html('手机号码格式不正确！');
		}
		//个性宣言不能为空
		else if(inputText.val()=='')
		{
			ts.html(ts_02);	
		}
		//完成
		else
		{
			ts.html('')
			$('.btn-join-tc').click();
		}

	})

})
