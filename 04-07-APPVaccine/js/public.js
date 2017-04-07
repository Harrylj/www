/**
 * Created by Administrator on 2015/7/14.
 */
$(function(){
    //输入框获取焦点
    $('.public-input').on('focus',function(){
        var thisDefault = $(this)[0].defaultValue;
        if($(this).val() == thisDefault)
        {
            $(this).val('');
        }
    });
    //输入框失去焦点
    $('.public-input').on('blur',function(){
        var thisDefault = $(this)[0].defaultValue;
        if($(this).val() == '')
        {
            $(this).val(thisDefault);
        }
    });
    
    //公用底部菜单点击切换状态
    $('.public-footer-nav').children().children().on('click',function(){
    	$(this).addClass('pfn-click')
    		.parent()
    		.siblings()
    		.children()
    		.removeClass('pfn-click');
    });
    //密码输入获取焦点
    $('.pulibc-input-password').on('focus',function(){
    	var thisDefault = $(this)[0].defaultValue;
    	if($(this).val()!==thisDefault)
    	{
    		$(this).attr('type','password');
    	}
    });
    //密码输入失去焦点
    $('.pulibc-input-password').on('blur',function(){
    	var thisDefault = $(this)[0].defaultValue;
    	if($(this).val()==thisDefault)
    	{
    		$(this).attr('type','text');
    	}
    });
    
});