/**
 * Created by Administrator on 2015/3/30.
 */
$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        //loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        effect: '1000'
    });

    //手机验证，交互
    $('.s5-phone').on('focus',function(){
        var thisValue = $(this).val();
        if(thisValue=='请输入您的手机号码领取专属话费')
        {
            $(this).css('color','black')
                .val('');
        }
    });
    $('.s5-phone').on('blur',function(){
        var thisValue = $(this).val();
        if(thisValue == '')
        {
            $(this).css('color','#bababa')
                .val('请输入您的手机号码领取专属话费');
        }

        var myreg = /^0?1[3|4|5|8][0-9]\d{8}$/;
        if(!myreg.test(thisValue))
        {
            $('.s5-ts-phone').html('手机号码格式不正确！');
            $(this).addClass('border-false')
        }
        else
        {
            $('.s5-ts-phone').html('');
            $(this).removeClass('border-false')
        }

    });
    //验证码验证和交互
    $('.s5-yz').on('focus',function(){
        var thisValue = $(this).val();
        if(thisValue=='请输入验证码')
        {
            $(this).css('color','black')
                .val('');
        }
    });
    $('.s5-yz').on('blur',function(){
        var thisValue = $(this).val();
        if(thisValue == '')
        {
            $(this).css('color','#bababa')
                .val('请输入验证码');
        }
        if(thisValue ==''||thisValue=='请输入验证码')
        {
            $('.s5-ts-yz').html('验证码不能为空！');
            $(this).addClass('border-false')
        }
        else
        {
            $('.s5-ts-yz').html('');
            $(this).removeClass('border-false')
        }
    });
    //添加边框
    $('.s5-input').on('focus',function(){
            $(this).addClass('border-focus');
    });
    $('.s5-input').on('blur',function(){
            $(this).removeClass('border-focus')
    });



    //弹出页面
    $('.btn-sub').on('click',function(){
         $('.swiper-pagination').hide();
         $('.s5-zz').show();
         $('.s5-fx').show();
    });



});
