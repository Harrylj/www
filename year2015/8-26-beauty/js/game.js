$(function(){
	
	//点击选中，改变状态
	$('.nav-li').on('click',function(){
		var thisVal = $(this).html();
		$('.nav-li-01').html(thisVal).siblings().hide();
		if($(this).hasClass('nav-li-01'))
		{
			
		}
		else
		{
			$('.nav-li-01').removeClass('nav-li-colse');
		}
		
		
	})
	
	//点击第一个选项时判断，改变状态
	$('.nav-li-01').on('click',function(){
		
		if($(this).hasClass('nav-li-colse'))
		{
			$(this).siblings().hide();
			$(this).removeClass('nav-li-colse');
		}
		else
		{
			$(this).siblings().show();
			$(this).addClass('nav-li-colse');
		}
	})
	
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    /*
    $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#back-to-top").fadeIn(1500);
                }
                else
                {
                    $("#back-to-top").fadeOut(1500);
                }
    });
	*/
    //当点击跳转链接后，回到页面顶部位置

    $("#back-to-top a").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
    });
    

    
    /*瀑布流*/
    function loadMeinv() {
		var data = 0;
		for (var i = 0; i < 10; i++) {//每次加载时模拟随机加载图片
			data = parseInt(Math.random() * 10);
			var html = "";
			html = '<div class="list-goods box boy fl"><a href="detail.html"><img class="img-100" src="images/'
				+ data + '.jpg" /></a><p>一不小心又被自己给帅醒了，怎么办..</p><div class="list-goods-footer "><span class="goods-index">001</span>&nbsp;<span>美女'
				+ data + '</span><div class="number-father fr"><div class="love-number">120111</div></div><div class="clear"></div></div></div>';
			$minUl = getMinUl();
			$minUl.append(html);
		}
		
	}
	loadMeinv();
	//无限加载
	$(window).on("scroll", function() {
		$minUl = getMinUl();
		if ($minUl.height() <= $(window).scrollTop() + $(window).height()) {
			//当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
			//loadMeinv();//加载新图片
		}
	})
	function getMinUl() {//每次获取最短的ul,将图片放到其后
		var $arrUl = $("main .game-list");
		var $minUl = $arrUl.eq(0);
		$arrUl.each(function(index, elem) {
			if ($(elem).height() < $minUl.height()) {
				$minUl = $(elem);
			}
		});
		return $minUl;
	}
	//点击更多加载
	$("#loadMeinvMOre").click(function() {
		$minUl = getMinUl();
		loadMeinv();

	});
	
    
    
    
    
})
