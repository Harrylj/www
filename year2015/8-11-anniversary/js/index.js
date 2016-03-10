$(function(){
	//大图轮播01
	var swiper = new Swiper('.i-nav-01-swiper', {

        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 5000,//5秒自动滑动
        autoplayDisableOnInteraction: false

    });
    
})
