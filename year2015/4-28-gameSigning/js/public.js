/**
 * Created by Administrator on 2015/4/29.
 */
$(function(){
    //输入框获取焦点
    $('.public-input').on('focus',function(){
        var thisDefaultVal = $(this)[0].defaultValue;
        $(this).addClass('public-input-focus');
        if( $(this).val() == thisDefaultVal)
        {
            $(this).val('');
        }
    });
    //输入框失去焦点
    $('.public-input').on('blur',function(){
        var thisDefaultVal = $(this)[0].defaultValue;
        $(this).removeClass('public-input-focus');
        if( $(this).val() == '')
        {
            $(this).val(thisDefaultVal);
        }
    });

    //弹出框02，点击关闭按钮
    $('.public-btn-close').on('click',function(){
        $(this).parents('.public-tc-father').hide();
        $('.zzc').hide();
    });

});