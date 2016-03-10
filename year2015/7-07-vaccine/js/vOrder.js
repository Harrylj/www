$(function(){
	//点击替换疫苗名字
	$('.list-ym').children('div').on('click',function(){
		var thisName = $(this).children('.pc-list-name').html();
		$('.ym-name').html(thisName);
		$('.zzc').hide();
		$('.list-ym').hide();
	});
	
	//弹出疫苗列表
	$('.list-ym-click').on('click',function(){
		$('.zzc').show();
		$('.list-ym').show();
	})
	
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
