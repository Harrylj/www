$(function(){
	$('.vd-nav').children().on('click',function(){
		var thisIndex = $(this).index();
		$(this).addClass('vd-nav-click')
			.siblings()
			.removeClass('vd-nav-click');
		$('.index-box').children()
			.eq(thisIndex)
			.addClass('vd-click')
			.siblings()
			.removeClass('vd-click');
		var $containerOne = $('.masonry-one');
			    $containerOne.imagesLoaded(function() {
			        $containerOne.masonry({
			                itemSelector: '.index-img',
			                gutter: 0,
			                isAnimated: true,
			            });
			     });
	})
	
});
