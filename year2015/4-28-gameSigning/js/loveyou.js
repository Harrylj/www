/**
 * Created by Administrator on 2015/4/28.
 */
$(function(){
    //在页面载入的时候存在2种状态对应值1,0: 1：表示有好友向你赠送流量，0：表示没有好友向你赠送流量
    //默认值为1：表示有好友向你赠送流量
    $('.ly-status').val('1');
    //这里表示手机的验证码：我默认添加为“1234”
    $('.ly-yz-number').val('1234');
    //有好友向你赠送流量
    if( $('.ly-status').val() == '1' )
    {
        $('.ly-p-p2').show();
        $('.ly-btn-lqkzll').addClass('ly-btn-lqkzll-01');
    }
    //没有好友向你赠送流量
    if( $('.ly-status').val() == '0')
    {
        $('.ly-p-p2').hide();
        $('.ly-btn-lqkzll').removeClass('ly-btn-lqkzll-01');
    }

    //点击选择金豆好礼
    $('.ly-ul-02').on('click',function(){
        $('.ly-ul-02').removeClass('ly-ul-checked');
        $(this).addClass('ly-ul-checked');
    });

    //点击"赠送给好友"按钮
    $('.ly-btn-zsghy').on('click',function(){
            //自己拥有的金豆数
        var myNumber = parseInt($('.ly-my-number').html()),
            //套餐需求要的金豆数
            tcNumber = parseInt($('.ly-ul-checked').children().children('.ly-tc-number').html()),
            lyTS = $('.ly-ts-01');
        //条件满足，可以赠送给好友
        if(myNumber>=tcNumber)
        {
            lyTS.hide();
            alert('你可以赠送给好友');
        }
        //不能赠送给好友
        else
        {
            lyTS.show();
        }
    });

    //点击领取馈赠流量
    $('.ly-btn-lqkzll-01').on('click',function(){
        $('.zzc').show();
        $('.ly-tc-father').show();
    });

    //点击'获取验证码'按钮
    $('.ly-btn-lqyzm').on('click',function(){
        var phone = $('.ly-input-phone'),
            phoneDefaultVal = $('.ly-input-phone')[0].defaultValue,
            ts = $('.ly-ts'),
            regPhone = /^0?1[3|4|5|8][0-9]\d{8}$/,
            tsOne = '手机号码不能为空',
            tsTwo = '手机号码格式不对';
        //手机号码不能为空
        if( phone.val() == phoneDefaultVal || phone.val() == '')
        {
            ts.html(tsOne);
            phone.addClass('public-input-false');

        }
        //手机号码格式不对
        else if(!regPhone.test(phone.val()))
        {
            ts.html(tsTwo);
            phone.addClass('public-input-false');
        }
        //获取验证码
        else
        {
            ts.html('');
            phone.removeClass('public-input-false');
            alert('请接收验证码，默认为“1234”');
        }
    });

    //点击'马上获取'按钮
    $('.ly-btn-mshq').on('click',function(){
        var yz = $('.ly-input-yz'),
            yzDefault = $('.ly-input-yz')[0].defaultValue,
            ts = $('.ly-ts'),
            yzNumber = $('.ly-yz-number').val(),
            tsOne = '验证码不能为空',
            tsTwo = '验证码不正确';
        //验证码不能为空
        if(yz.val() == yzDefault || yz.val()=='')
        {
            ts.addClass('public-input-false');
            ts.html(tsOne);
        }
        //验证码不正确
        else if(yz.val() != yzNumber )
        {
            ts.addClass('public-input-false');
            ts.html(tsTwo);
        }
        //验证码正确
        else if( yz.val() == yzNumber)
        {
            ts.removeClass('public-input-false');
            ts.html('');
            alert('获取成功');
        }
    });
});