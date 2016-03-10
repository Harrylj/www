/**
 * Created by Administrator on 2015/6/11.
 */
$(function(){
    //.public-login:值为0表示未登录,值为1表示已登录
    //这儿我默认添加未登录
    $('.public-login').val('0');
    //默认添加验证码为"1234"
    $('.public-yz-number').val('1234');

    //输入框获取焦点
    $('.public-input').on('focus',function(){
        var thisDefault = $(this)[0].defaultValue;
        if($(this).val() == thisDefault)
        {
            $(this).val('');
        }
    });
    //输入框失去焦点
    $('.public-input').on('blur',function(){
        var thisDefault = $(this)[0].defaultValue;
        if($(this).val() == '')
        {
            $(this).val(thisDefault);
        }
    });

    //判断登录函数
    function userLogin(){
        var loginVal = $('.public-login').val(),
            zzc = $('.zzc'),
            loginBox = $('.public-login-box'),
            game_lj = $('.g-lj-box'),
            index_lj = $('.i-lj-box');

        if(loginVal=='0')
        {
            zzc.show();
            loginBox.show();
            game_lj.hide();
            index_lj.hide();
        }
        if(loginVal=='1')
        {
            zzc.show();
            loginBox.hide();
            game_lj.show();
            index_lj.show();
        }
    }

    //点击"验证码"按钮
    $('.public-btn-yzm').on('click',function(){
        var userName = $('.public-input-user').val(),
            userPhone = $('.public-input-phone').val(),
            userNameDefault = $('.public-input-user')[0].defaultValue,
            userPhonDefaulte = $('.public-input-phone')[0].defaultValue,
            gs = /^1\d{10}$/,
            ts = $('.public-p-ts'),
            ts_01= '姓名和电话号码不能为空',
            ts_02 = '姓名不能为空,电话号码格式错误',
            ts_03 = '姓名不能为空',
            ts_04 = '电话号码不能为空',
            ts_05 = '电话号码格式错误';

        //姓名和电话号码不能为空
        if((userName == userNameDefault || userName == "")&&(userPhone == userPhonDefaulte || userPhone==""))
        {
            ts.html(ts_01);
        }
        //姓名不能为空,电话号码格式错误
        else if((userName == userNameDefault || userName == "")&&(!gs.test(userPhone)))
        {
            ts.html(ts_02)
        }
        //姓名不能为空
        else if(userName == userNameDefault || userName == '')
        {
            ts.html(ts_03)
        }
        //电话号码不能为空
        else if(userPhone == userPhonDefaulte || userPhone=="")
        {
            ts.html(ts_04)
        }
        //电话号码格式错误
        else if(!gs.test(userPhone))
        {
            ts.html(ts_05)
        }
        else
        {
            alert('获取验证码,默认"1234" ');
        }

    });
    //点击"提交信息领取奖品"按钮
    $('.public-btn-lqjp').on('click',function(){

        var yzVal = $('.public-input-yz').val(),
            yzValDefault = $('.public-input-yz')[0].defaultValue,
            yzNumber = $('.public-yz-number').val(),
            ts = $('.public-p-ts'),
            ts_01 = '验证码不能为空',
            ts_02 = '验证码不正确';
        //验证码不能为空
        if(yzVal == '' || yzVal == yzValDefault)
        {
            ts.html(ts_01)
        }
        //验证码不正确
        else if(yzVal != yzNumber)
        {
            ts.html(ts_02)
        }
        //验证码正确
        else if(yzVal == yzNumber)
        {
            alert('验证成功..');
            $('.zzc').hide();
            $(this).parents('.public-tc-01-fahter').hide();
        }

    });

    //点击弹出层的“关闭”按钮
    $('.public-btn-close').on('click',function(){
        $('.zzc').hide();
        $(this).parents('.public-tc-01-fahter').hide();
        $(this).parents('.public-tc-02-father').hide();
    });


    //点击"登录"按钮
    $('.public-login').on('click',function(){
        //运行判断登录函数
        userLogin();
        return false;
    });

});