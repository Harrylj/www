$(function(){
	//点击获取验证码
	$('.index-btn-hqyzm').on('click',function(){
		var numberYzmPhone = $('.number-yzm-phone'),
			yzmPhone = $('.i-input-phone'),
			gs = /^1\d{10}$/,
			ts = $('.index-ts'),
			ts_01 = '手机号码不能为空',
			ts_02 = '手机号码格式不正确';
		//手机号码不能为空
		if(yzmPhone.val()=='')
		{
			ts.html(ts_01);
		}
		//手机号码格式不正确
		else if(!gs.test(yzmPhone.val()))
		{
			ts.html(ts_02);
		}
		//获取验证码
		else{
			ts.html('');
			alert('获取验证码，默认为:1234')
		}
		
	});
	
	//点击按钮“马上兑换”
	$('.index-btn-msdh').on('click',function(){
		var ts = $('.index-ts'),
			ts_01 = '验证码不能为空',
			ts_02 = '验证码不正确',
			ts_03 = '手机号码和验证码不匹配',
			numberYzmPhone = $('.number-yzm-phone'),
			yzmPhone = $('.i-input-phone'),
			numberYzm = $('.number-yzm'),
			yzm = $('.i-input-yzm'),
			zzc = $('.zzc'),
			dhjd = $('.index-dhjd');
		//验证码不能为空	
		if(yzm.val()=='')
		{
			ts.html(ts_01);
		}
		//验证码不正确
		else if(yzm.val()!=numberYzm.val())
		{
			ts.html(ts_02);
		}
		//手机号码和验证码不匹配
		else if(yzm.val()!=numberYzm.val()||yzmPhone.val()!=numberYzmPhone.val())
		{
			ts.html(ts_03);	
		}
		//验证成功
		else
		{
			ts.html('');
			zzc.show();
			dhjd.show();
		}
	})
	
});
