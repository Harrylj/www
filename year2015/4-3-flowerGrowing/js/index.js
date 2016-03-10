/**
 * Created by Administrator on 2015/4/7.
 */
$(function(){
    //活动规则界面打开
    $('.index-btn-hdgz').on('click',function(){
        $('.index-zzc').show();
        $('.index-hdgz').show();
    });
    //活动规则界面关闭
    $('.hdgz-btn-close').on('click',function(){
        $('.index-zzc').hide();
        $('.index-hdgz').hide();
    });
    //用户登录界面打开
    $('.index-btn-lqzz').on('click',function(){
        $('.index-zzc').show();
        $('.index-yhdl').show();
    });
    //用户登录界面关闭
    $('.yhdl-btn-close').on('click',function(){
        $('.index-zzc').hide();
        $('.index-yhdl').hide();
    });

    //输入框获取焦点添加边框
    $('.yhdl-input').on('focus',function(){
        $(this).addClass('yhdl-input-border');
        $(this).removeClass('yhdl-input-false');
    });
    $('.yhdl-input').on('blur',function(){
        $(this).removeClass('yhdl-input-border');
    });
    //输入框提示文字切换
    $('.yhdl-input-user').on('focus',function(){
        if($(this).val()=='用户名称')
        {
            $(this).val('')
        }
    });
    $('.yhdl-input-user').on('blur',function(){
        if($(this).val()=='')
        {
            $(this).val('用户名称')
        }
    });
    $('.yhdl-input-phone').on('focus',function(){
        if($(this).val()=='绑定手机号')
        {
            $(this).val('')
        }
    });
    $('.yhdl-input-phone').on('blur',function(){
        if($(this).val()=='')
        {
            $(this).val('绑定手机号')
        }
    });
    $('.yhdl-input-yz').on('focus',function(){
        if($(this).val()=='验证码')
        {
            $(this).val('')
        }
    });
    $('.yhdl-input-yz').on('blur',function(){
        if($(this).val()=='')
        {
            $(this).val('验证码')
        }
    });

    //点击“获取验证”按钮，判断信息是否完整
    $('.yhdl-btn-yz').on('click',function(){
        var user = $('.yhdl-input-user'),
            phone = $('.yhdl-input-phone'),
            ts = $('.yhdl-ts'),
            myreg = /^0?1[3|4|5|8][0-9]\d{8}$/,
            yhdlSuccess = $('.yhdl-success');
        //信息填写不完整，提示文字
        if(user.val() == ''|| user.val() =='用户名称')
        {
            user.addClass('yhdl-input-false');
            ts.html('用户名称不能为空');
        }
        else if(!myreg.test(phone.val()))
        {
            phone.addClass('yhdl-input-false');
            ts.html('手机号码格式不对');
        }
        else if(phone.val()== '' || phone.val()=='绑定手机号')
        {
            phone.addClass('yhdl-input-false');
            ts.html('绑定手机号不能为空');
        }
        else if((user.val() == ''|| user.val() =='用户名称') && (!myreg.test(phone.val())))
        {
            user.addClass('yhdl-input-false');
            phone.addClass('yhdl-input-false');
            ts.html('用户名称不能为空，手机号码格式不对');
        }
        else if((user.val() == ''|| user.val() =='用户名称') && (phone.val()== '' || phone.val()=='绑定手机号'))
        {
            user.addClass('yhdl-input-false');
            phone.addClass('yhdl-input-false');
            ts.html('用户名称和绑定手机号不能为空');
        }
        else
        {
            ts.html('')
        }
        //信息填写完整，获取验证码
        //判断信息是否填写完成 0-未完成 1-完成
        if(ts.html() == ''||  ts.html()== '请完善信息，确保格式正确')
        {
            yhdlSuccess.val('1');
            alert('信息正确，请接收验证码');
        }
        else
        {
            yhdlSuccess.val('0');
        }
    });

    //点击“确定”按钮，验证验证码是否正确
    $('.yhdl-btn-yhbd').on('click',function(){
        var yz = $('.yhdl-input-yz'),
            ts = $('.yhdl-ts'),
            yhdlSuccess = $('.yhdl-success');
        //验证码获取的前提是信息输入完整，且格式正确
        if( yhdlSuccess.val() == '1')
        {
            //验证码是否为空
            if(yz.val()=='' || yz.val()=='验证码')
            {
                yz.addClass('yhdl-input-false');
                ts.html('验证码不能为空');
            }
            //验证码正确
            else
            {
                yz.removeClass('yhdl-input-false');
                alert('验证成功，请稍后');
            }
        }
        //提示完善信息
        if( yhdlSuccess.val() == '0')
        {
            yz.removeClass('yhdl-input-false');
            ts.html('请完善信息，确保格式正确');
        }

    });


});