/**
 * Created by Administrator on 2015/4/10.
 */
$(function(){
    //c初始值金豆为100
    $('.qg-my-number').val('100');

    //弹出选择
    $('.qg-btn-sjxz').on('click',function(){
        $('.qg-sjxz').show();
        $('.index-zzc').show();
    });

    //筛选相应赛场
    $('.qg-table td').on('click',function(){
        var thisMax = parseInt($(this).attr('max')),
            thisMin =parseInt($(this).attr('min')),
            qgGame = $('.qg-c-game'),
            qgGameNumber = $('.qg-game-number');
        qgGame.show();
        qgGameNumber.each(function(){
            if(parseInt($(this).html())>thisMin && parseInt($(this).html())<thisMax)
            {
                $(this).parents('.qg-c-game').show();
            }
            else
            {
                $(this).parents('.qg-c-game').hide();
            }


        });
        alert(thisVal);

    });

    //判断金豆是否充足
    $('.qg-c-game').on('click',function(){
        var thisNumber = parseInt($(this).children().children('.qg-game-number').html()),
            myNumber = parseInt($('.qg-my-number').val());
        if(thisNumber < myNumber)
        {
            alert('你可以挑战')
        }
        else
        {
            $('.qg-ts').show();
            $('.index-zzc').show();
        }
    });

});