/**
 * Created by Administrator on 2015/4/22.
 */
$(function(){
    //轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay : 5000,
        // 如果需要分页器
        pagination: '.swiper-pagination'

        // 如果需要前进后退按钮
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',

    })

});