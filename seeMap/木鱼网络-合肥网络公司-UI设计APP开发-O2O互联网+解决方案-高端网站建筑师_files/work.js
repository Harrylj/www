
$(function(){
	
	$(".item6").hover(
		function(){
			var that=this;
			item6Timer=setTimeout(function(){
				$(that).find("div").animate({width:205,height:205,left:0,top:0},300,function(){
					$(that).find("h2").fadeOut(200);
					$(that).find("dl").fadeIn(200);
				});
			},100);
			
			},
		function(){
			var that=this;
			clearTimeout(item6Timer);
			$(that).find("dl").fadeOut(200);
			$(that).find("div").stop().animate({width:0,height:0,left:102,top:102},300);
			$(that).find("h2").fadeIn(200);
			}
		)
});