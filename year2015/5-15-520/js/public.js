/**
 * Created by Administrator on 2015/5/15.
 */
$(function(){
    //.g-login:值为0表示未登录,值为1表示已登录
    //这儿我默认添加未登录
    $('.g-login').val('0');
    //默认添加验证码为"1234"
    $('.g-yz-number').val('1234');

    //放大图片
    $('img.public-bg-img').on('click',function(){
        var thisSRC = $(this).attr('src');
        $('.public-bg-box').attr('src',thisSRC).show();
        return false;
    });
    //点击隐藏图片
    $('.public-bg-box').on('click',function(){
        $(this).hide();
    });

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
        var loginVal = $('.g-login').val(),
            zzc = $('.zzc'),
            loginBox = $('.g-login-box'),
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
    $('.g-btn-yzm').on('click',function(){
        var userName = $('.g-input-user').val(),
            userPhone = $('.g-input-phone').val(),
            userNameDefault = $('.g-input-user')[0].defaultValue,
            userPhonDefaulte = $('.g-input-phone')[0].defaultValue,
            gs = /^1\d{10}$/,
            ts = $('.g-p-ts'),
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
    $('.g-btn-lqjp').on('click',function(){

        var yzVal = $('.g-input-yz').val(),
            yzValDefault = $('.g-input-yz')[0].defaultValue,
            yzNumber = $('.g-yz-number').val(),
            ts = $('.g-p-ts'),
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
            alert('验证成功..')
        }

    });

    //点击弹出层的“关闭”按钮
    $('.public-btn-close').on('click',function(){
        $('.zzc').hide();
        $(this).parents('.public-tc-01-fahter').hide();
    });

    //点击"登录"按钮
    $('.public-login').on('click',function(){
        //运行判断登录函数
        userLogin();
        return false;
    });

});