$(function(){
	$('.pf-btn-qd').on('click',function(){
		var passwordOne = $('.again-passoword-01'),
			passwordTwe = $('.again-passoword-02'),
			paTS = $('.pa-ts'),
			ts_01 = '密码输入不能为空',
			ts_02 = '密码输入不一致';
		//密码输入不能为空
		if(passwordOne.val()=='' || passwordOne.val()== passwordOne[0].defaultValue || passwordTwe.val()=='' ||passwordTwe.val()==passwordTwe[0].defaultValue)
		{
			paTS.html(ts_01);
		}
		//密码输入不一致
		else if(passwordOne.val() != passwordTwe.val())
		{
			paTS.html(ts_02);
		}
		//修改成功
		else
		{
			paTS.html('');
			alert('修改成功');
		}
		
	});
})
