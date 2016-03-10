/**
 * Created by Administrator on 2015/4/17.
 */
$(function(){
    //验证码，默认添加为“1234"
    $('.yz-number').val('1234');
    $('.yz-login').val('1');

    //判断是否登录
    if($('.yz-login').val()=='1')
    {
        $('.index-login').show();
    }
    if($('.yz-login').val()=='0')
    {
        $('.index-login').hide();
    }

    //输入框获取焦点
    $('.index-input').on('focus',function(){
        var thisVal = $(this)[0].defaultValue;
        if($(this).val()==thisVal)
        {
            $(this).val('');
        }

    });
    //输入框失去焦点
    $('.index-input').on('blur',function(){
        var thisVal = $(this)[0].defaultValue;
        if($(this).val() =='')
        {
            $(this).val(thisVal);
        }
    });

    //点击"获取验证码"按钮
    $('.btn-hqyzm').on('click',function(){
        var myreg = /^0?1[3|4|5|8][0-9]\d{8}$/,
            myPhone = $('.input-my-phone'),
            myPhoneDefault = $('.input-my-phone')[0].defaultValue,
            ts = $('.index-ts'),
            tsOne = '手机号码不能为空',
            tsTwo = '手机号码格式不对';

        if(myPhone.val() == myPhoneDefault)
        {
            ts.html(tsOne);
            myPhone.addClass('border-false');
        }
        else if(!myreg.test(myPhone.val()))
        {
            ts.html(tsTwo);
            myPhone.addClass('border-false');
        }
        else
        {
            ts.html('收取验证码');
            myPhone.removeClass('border-false');
        }
    });
    //点击'送票给推荐人'按钮
    $('.btn-spgtjr').on('click',function(){
        var inputYz = $('.input-yz '),
            myreg = /^0?1[3|4|5|8][0-9]\d{8}$/,
            inputYouPhone = $('.input-you-phone'),
            yzDefault = $('.input-yz')[0].defaultValue,
            youPhoneDefault = $('.input-you-phone')[0].defaultValue,
            ts = $('.index-ts'),
            yzNumber = $('.yz-number').val(),  ///正确的验证码
            tsOne = '推荐人手机号码不能为空',
            tsTwo = '验证码错误',
            tsThree = '验证码不能为空',
            tsFour = '推荐人手机号码格式不对',
            tsFive = '验证码和推荐人手机号码都不能为空',
            tsSex = '验证码不能为空，推荐人手机号码格式错误',
            tsSeven = '推荐人手机号码格式和验证码错误';
        //验证码和推荐人手机号码都不能为空
        if(inputYz.val() == yzDefault && inputYouPhone.val() == youPhoneDefault )
        {
            ts.html(tsFive);
        }
        //验证码不能为空，推荐人手机号码格式错误
        else if(inputYz.val() == yzDefault && !myreg.test(inputYouPhone.val()))
        {
            ts.html(tsSex);
        }
        //推荐人手机号码格式和验证码错误
        else if(!myreg.test(inputYouPhone.val()) && inputYz.val()!= yzNumber)
        {
            ts.html(tsSeven);
        }
        //推荐人手机号码不能为空
        else if(inputYouPhone.val() == youPhoneDefault)
        {
            ts.html(tsOne);
        }
        //验证码不能为空
        else if(inputYz.val() == yzDefault)
        {
            ts.html(tsThree);
        }
        //验证码错误
        else if(inputYz.val()!= yzNumber)
        {
            ts.html(tsTwo);
        }
        //推荐人手机号码格式不对
        else if(!myreg.test(inputYouPhone.val()))
        {
            ts.html(tsFour);
        }
        //成功
        else
        {
            ts.html('');
            alert('成功');
        }

    });

});