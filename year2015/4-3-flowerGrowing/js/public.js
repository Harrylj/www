/**
 * Created by Administrator on 2015/4/9.
 */

$(function(){
    //输入框获取焦点
    $('.public-text').on('focus',function(){
        var defaultValue = $(this)[0].defaultValue;
        $(this).addClass('border-focus');
        if($(this).val() == defaultValue)
        {
            $(this).val('');
        }
    });
    //输入框失去焦点
    $('.public-text').on('blur',function(){
        var defaultValue = $(this)[0].defaultValue;
        $(this).removeClass('border-focus');
        if($(this).val() == '')
        {
            $(this).val(defaultValue);
        }
    });

    //点击"菜单"关闭确定按钮，关闭当前界面
    $('.bb-btn-close').on('click',function(){
        var zzc = $('.index-zzc');

        zzc.hide();
        $(this).parents('.border-box')
            .hide();
    });


});

