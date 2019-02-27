$(function(){
	//改变联系方式
	function changeInfo(){
		//微信名称
		var wxName = "2018hello",
		//手机号码
			phoneNum = "18200166666";
		$('.wx-name').html(wxName);
		$('.phone-num').html(phoneNum);
	}
	
	changeInfo();
	
	//改变排列顺序
	function changeList(){
		var arrList = new Array();
		$('.more-list').children().each(function(){
			var abc = Math.floor(Math.random()*5);
			var thisIndex = $(this).index();
			//等于0则隐藏
			if(thisIndex%abc){
				$(this).hide()
			}
			console.log(thisIndex,abc,!(thisIndex%abc))
		})

	}
	
	changeList();
	
	
})
