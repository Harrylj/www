/**
 * Created by Administrator on 2015/4/30.
 */
$(function(){

    //点击"时间段"按钮筛选相应内容
    $('.pt-a-btn').on('click',function(){
        var thisIndex = $(this).index();
        $(this).addClass('pt-a-btn-click')
                .siblings()
                .removeClass('pt-a-btn-click');
        $('.pt-a-content').children('ul')
                            .eq(thisIndex)
                            .addClass('pt-a-ul-checked')
                            .siblings()
                            .removeClass('pt-a-ul-checked');
    });

    //点击活动选项，判断相应的行为
    //活动时间段是否满足
    $('.pt-a-ul').children('li').on('click',function(){
        var myDate = new Date(),
            getHours = parseInt( myDate.getHours()),
            thisIndex =  $(this).parent('.pt-a-ul-checked').index(),
            thisHours =  parseInt($('.pt-a-header').children().eq(thisIndex).children('span').html());
        //满足
        if(getHours>=thisHours)
        {
            $(this).addClass('pt-radio-checked').siblings().removeClass('pt-radio-checked')
        }
        //不满足
        else
        {
            //弹出相应提示框
            $('.pt-tc-sjbz').show();
            $('.zzc').show();
        }
    });

    //点击”活动规则“按钮
    $('.pt-btn-yxgz').on('click',function(){
        $('.pt-tc-hdgz').show();
        $('.zzc').show();
    });

});