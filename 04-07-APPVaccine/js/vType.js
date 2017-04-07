$(function(){
	//点击头部菜单切换选中状态
	$('.vt-nav').children().on('click',function(){
		var thisIndex = $(this).index();
		$(this).addClass('vt-click')
			.siblings()
			.removeClass('vt-click');
		$('.v-type-content').children()
			.eq(thisIndex)
			.addClass('vt-show')
			.siblings()
			.removeClass('vt-show');
	})
	
	//点击知识百科子菜单切换选中状态
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
})
