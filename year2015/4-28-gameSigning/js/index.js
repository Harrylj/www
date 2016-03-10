/**
 * Created by Administrator on 2015/4/28.
 */
$(function(){

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1.6,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });

    //点击选择相应游戏，改变按钮路径
    $('.swiper-slide').on('click',function(){
        var thisHref= $(this).attr('href'),
            thisChecked = $(this).children('.index-game').children('h1');
        //添加选中状态
        $('.index-game-h1').removeClass('index-game-checked');
        thisChecked.addClass('index-game-checked');
        //改变跳转href
        $('.index-btn-wft').parent().attr('href',thisHref);
    });
    //添加默认跳转路径
    $('.index-btn-wft').parent().attr('href',$('.index-game-checked').parents('.swiper-slide').attr('href'));

});