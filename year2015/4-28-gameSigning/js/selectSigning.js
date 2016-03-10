/**
 * Created by Administrator on 2015/4/30.
 */
$(function(){
    $('.ss-ul-01').children('li').on('click',function(){
        $(this).addClass('ss-li-checked')
            .siblings()
            .removeClass('ss-li-checked');
    });
});