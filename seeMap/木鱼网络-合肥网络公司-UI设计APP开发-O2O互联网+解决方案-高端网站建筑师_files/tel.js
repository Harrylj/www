	jQuery.preloadImages = function()
{
	for(var i = 0; i<arguments.length; i++)
	jQuery("<img>").attr("src", arguments[i]);
}
jQuery.preloadImages("/images/tel-icooo.png", "/images/tel-icooo.png", "/images/tel-ico2oo.png", "/images/tel-ico2oo.png", "/images/tel-ico3oo.png", "/images/tel-ico3oo.png");

$(function(){
	
	$("#iconbar li a").hover(
		function(){
			var iconName = $(this).children("img").attr("src");
			var origen = iconName.split(".png")[0];
			$(this).children("img").attr({src: "" + origen + "o.png"});
			$(this).css("cursor", "pointer");
			$(this).animate({ width: "176px" }, {queue:false, duration:"normal"} ,1);
			$(this).children("span").animate({opacity: "show"}, 1);
		}, 
		function(){
			var iconName = $(this).children("img").attr("src");
			var origen = iconName.split("o.")[0];
			$(this).children("img").attr({src: "" + origen + ".png"});	
			$(this).animate({ width: "31px" }, {queue:false, duration:"normal"} ,1);
			$(this).children("span").animate({opacity: "hide"}, 1);
		});
	$("#iconbar li").hover(
	function(){
		$(this).addClass("bj");
	},
	function(){
		$(this).removeClass("bj")
	});
});
