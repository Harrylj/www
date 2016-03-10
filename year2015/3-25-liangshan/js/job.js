/**
 * Created by Administrator on 2015/3/26.
 */
$(function(){
    //
    $('.ls-input-day').val($('.ls-day-checked').attr('val'));
    //选中天数，增加边框
    $('.ls-day').on('click',function(){
        var thisVal=$(this).attr('val');
        $(this).addClass('ls-day-checked')
            .siblings()
            .removeClass('ls-day-checked');
        $('.ls-input-day').val(thisVal);
    });

    //填入职位名称交互
    $('.ls-input-name').on('focus',function(){
        var thisValue = $(this).val();
        if(thisValue=='请输入职位名称')
        {
            $(this).css('color','black')
                .val('');
        }
    });
    $('.ls-input-name').on('blur',function(){
        var thisValue = $(this).val();
        if(thisValue == '')
        {
            $(this).css('color','#ccc')
                .val('请输入职位名称');
        }
    });

    //验证信息是否完整
    $('.ls-btn-submit').on('click',function(){
        var lsInputDay = $('.ls-input-day'),
            lsInputName = $('.ls-input-name');

        if(lsInputDay.val()=='')
        {
            lsInputDay.siblings('.ls-ts')
                .show();
        }
        else
        {
            lsInputDay.siblings('.ls-ts')
                .hide();
        }
        if(lsInputName.val()=='请输入职位名称')
        {
            lsInputName.siblings('.ls-ts')
                .show();
        }
        else
        {
            lsInputName.siblings('.ls-ts')
                .hide();
        }
    });
});