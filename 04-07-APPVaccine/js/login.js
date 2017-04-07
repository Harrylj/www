$(function(){
	//点击登录菜单切换状态
	$('.l-nav-li').on('click',function(){
		var thisIndex = $(this).index();
		$(this).addClass('l-nav-click')
			.siblings()
			.removeClass('l-nav-click');
		$('.l-content').children()
			.eq(thisIndex)
			.addClass('l-click')
			.siblings()
			.removeClass('l-click')
		//切换头像	
		if(thisIndex=='0')
		{
			$('.l-header-img').removeClass('l-header-img-right');
		}
		else if(thisIndex=='2')
		{
			$('.l-header-img').addClass('l-header-img-right');
		}
	});
	
	//点击训中服务条款
	$('.l-register-tk').on('click',function(){
		var classTrue = 'l-register-tk-true';
		if($(this).hasClass(classTrue))
		{
			$(this).removeClass(classTrue)
		}
		else
		{
			$(this).addClass(classTrue)
		}
		
	})
	
	//登录验证
	$('.l-btn-login').on('click',function(){
		var ts = $('.l-login-ts'),
			ts_01 = "用户名不能为空",
			ts_02 = "密码不能为空",
			ts_03 = "用户名或密码不正确",
			ts_04 = "用户名和密码都不能为空",
			numberUserVal = $('.number-user').val(),
			numberPasswordVal = $('.number-password').val(),
			inputUser = $('.l-input-user'),
			inputPassword = $('.l-input-password'),
			defaultUserVal = inputUser[0].defaultValue,
			defaultPasswordVal = inputPassword[0].defaultValue;
		//用户名和密码都不能为空
		if((inputUser.val()=='' || inputUser.val()==defaultUserVal) && (inputPassword.val()=='' || inputPassword.val()==defaultPasswordVal))
		{
			ts.html(ts_04);
		}
		//用户名不能为空
		else if(inputUser.val()=='' || inputUser.val()==defaultUserVal){
			ts.html(ts_01);
		}
		//密码不能为空
		else if(inputPassword.val()==''|| inputPassword.val()==defaultPasswordVal){
			ts.html(ts_02);
		}
		//用户名或密码不正确
		else if(inputUser.val()!=numberUserVal || inputPassword.val()!=numberPasswordVal ){
			ts.html(ts_03);
		}
		//登录成功
		else{
			ts.html('');
			alert('登录成功');
		}
		
	});
	//注册获取验证码
	$('.l-btn-yzm').on('click',function(){
		var ts_01 ='手机号码不能为空',
			ts_02 ='手机号码格式不正确',
			ts_03 ='该手机号码已被注册',
			inputPhone = $('.l-input-phone'),
			ts = $('.l-register-ts'),
			gs = /^1\d{10}$/,
			defaultPhoneVal = inputPhone[0].defaultValue,
			inputPhoneVal = inputPhone.val(),
			numberPhone = $('.number-phone').val();
			//手机号码不能为空
			if(inputPhoneVal=='' || inputPhoneVal==defaultPhoneVal)
			{
				ts.html(ts_01);
			}
			//手机号码格式不正确
			else if(!gs.test(inputPhoneVal))
			{
				ts.html(ts_02);
			}
			//手机号码号码已被注册
			else if(inputPhoneVal == parseInt(numberPhone))
			{
				ts.html(ts_03)
			}
			//获取验证码
			else
			{
				ts.html('');
				alert('接收验证码,“默认为1234”');
			}
			
	})
	//注册验证
	$('.l-btn-register').on('click',function(){
		var ts_01 ='手机号码不能为空',
			ts_02 ='验证码不能为空',
			ts_04 ='验证码不正确或与手机号码不匹配',
			ts_05 ='密码输入不能为空',
			ts_06 ='两次密码输入不相同',
			ts_07 ='请同意服务条款及隐私说明',
			inputPhone = $('.l-input-phone'),
			rPasswordOne = $('.register-password-01'),
			rPasswordTwo = $('.register-password-02'),
			rTK = $('.l-register-tk'),
			ts = $('.l-register-ts'),
			numberYZM = $('.number-yzm'),
			numberYZMPhone = $('.number-yzm-phone'),
			gs = /^1\d{10}$/,
			defaultPhoneVal = inputPhone[0].defaultValue,
			defaultPasswordOneVal = rPasswordOne[0].defaultValue,
			defaultPasswordTwoVal = rPasswordTwo[0].defaultValue;
			//手机号码不能为空
			if(inputPhone.val()=='' || inputPhone.val()==defaultPhoneVal)
			{
				ts.html(ts_01);
			}
			//密码输入不能为空
			else if(rPasswordOne.val()=='' || rPasswordOne.val() == defaultPasswordOneVal || rPasswordTwo.val()=='' || rPasswordTwo.val() == defaultPasswordTwoVal)
			{
				ts.html(ts_05);
			}
			//请同意服务条款及隐私说明
			else if(!rTK.hasClass('l-register-tk-true'))
			{
				ts.html(ts_07)
			}
			//两次密码输入不相同
			else if(rPasswordOne.val()!=rPasswordTwo.val())
			{
				ts.html(ts_06)
			}
			//注册成功
			else
			{
				ts.html('');
				alert('注册成功');
			}
	})
	
	//忘记密码验证
	$('.pf-btn-next').on('click',function(){
		var ts_01 ='手机号码不能为空',
			ts_02 ='验证码不能为空',
			ts_04 ='验证码不正确或与手机号码不匹配',
			inputPhone = $('.l-input-phone'),
			inputYZM = $('.l-input-yzm'),
			rTK = $('.l-register-tk'),
			ts = $('.l-register-ts'),
			numberYZM = $('.number-yzm'),
			numberYZMPhone = $('.number-yzm-phone'),
			defaultPhoneVal = inputPhone[0].defaultValue,
			defaultYZMVal = inputYZM[0].defaultValue,
			gs = /^1\d{10}$/;
			//手机号码不能为空
			if(inputPhone.val()=='' || inputPhone.val()==defaultPhoneVal)
			{
				ts.html(ts_01);
			}
			//验证码不能为空
			else if(inputYZM.val()=='' || inputYZM.val()==defaultYZMVal)
			{
				ts.html(ts_02);
			}
			//验证码不正确或不匹配
			else if(inputYZM.val()!=numberYZM.val() || inputPhone.val()!=numberYZMPhone.val())
			{
				ts.html(ts_04)
			}
			//注册成功
			else
			{
				ts.html('')
				alert('进入下一步');
			}
	})
	
})
