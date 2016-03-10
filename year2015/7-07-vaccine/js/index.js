$(function(){
	//大图轮播01
	var swiper = new Swiper('.ic-nav-01-swiper', {

        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 5000,//2秒自动滑动
        autoplayDisableOnInteraction: false

    });
    //选项滑动02
    var swiper = new Swiper('.ic-nav-02-swiper', {
        pagination: '.swiper-pagination1',
        slidesPerView: 4.5,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true
    });
    
    //点击选项切换选中状态
    
    $('.ic-nav-02-father').children().on('click',function(){
    	var thisIndex = $(this).index();
    	$(this).addClass('ic-nav-click')
    		.siblings()
    		.removeClass('ic-nav-click');
    	$('.swiper-pagination1').children()
    		.eq(thisIndex)
    		.click();
    	$('.ic-list').children()
    		.eq(thisIndex)
    		.addClass('ic-list-click')
    		.siblings()
    		.removeClass('ic-list-click')
    });
    
   
    //点击名字弹出选择宝宝名字界面
    $('.change-children').on('click',function(){
    	$('.zzc').show();
    	$('.children-name').show();
    });
    //点击宝宝名字替换信息
    $('.children-name').children('div').on('click',function(){
    	var thisName = $(this).children('.pc-list-name').html();
    	$('.change-children').html(thisName);
    	$('.zzc').hide();
    	$('.children-name').hide();
    });
    
    
})
