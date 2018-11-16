$(function(){
/*======================栏目切换============================*/
function func6(arg1,arg2,arg3){
	arg3=arg3.constructor==Array?arg3:[arg3];
	$(arg1+" "+arg2+">*").mouseenter(function(){
		var index=$(this).index();
		for(var i=0;i<arg3.length;i++){
			$(this).closest(arg1).find(arg3[i]+">*").removeClass('dis').eq(index).addClass('dis');
		}
		$(this).closest(arg1).find(arg2+">*").removeClass('hover').eq(index).addClass('hover');
	});
}
func6('.lmqh0','.lmqh_menu0','.lmqh_div0');
func6('.lmqh1','.lmqh_menu1',['.lmqh_div1','.lmqh_gd1']);

function func7(){
	$('#wsxf,#jzxx').on('mouseenter',function(){
		$('.gzhd2').css('display','block');
		$(this).closest('.gzhd2').css('display','none');
	})
}
func7();

function func1(div) {//选择器
    var fontsize = ['20px', '16px', '12px'];
    $('#fontszie span').each(function(i) {
        $(this).on('click', function() {
            $(div+' *').css('font-size', fontsize[i]);
        });
    });
}
func1('#zoomcon');
//保护色
function func3(div) {//选择器
    var yanshe = ['#F1F8CF', '#F3ECD0', '#F8E4D9', '#DBEFA8', '#DDEAF2', '#E7DDF6', '#EDEDED', '#FFFFFF'];
    $('#bhsls img').each(function(i) {
        $(this).click(function() {
            $(div+' *').css('background', yanshe[i]);
        });
    });
}
func3('#zoomcon,#zoomcon');
});

