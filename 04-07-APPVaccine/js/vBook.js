/**
 * Created by Administrator on 2015/7/10.
 */
$(function(){
    $('.vb-nav').children().on('click',function(){
        var thisIndex = $(this).index();
        $(this).addClass('vb-nav-checked')
            .siblings()
            .removeClass('vb-nav-checked');
        $('.vb-nav-list').children()
            .eq(thisIndex)
            .addClass('nav-list-checked')
            .siblings()
            .removeClass('nav-list-checked');
    });
});