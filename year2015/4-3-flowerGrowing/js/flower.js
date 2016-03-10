/**
 * Created by Administrator on 2015/4/7.
 */
$(function(){




    //点击菜单(阳光，浇水，杀虫，除草，施肥，翻土)出现相应界面
    $('.f-f-nav').children('li')
        .on('click',function(){
            var thisIndex =  $(this).index(),
                menu = $('.f-m-father'),
                zzc = $('.index-zzc');
            zzc.show();
            menu.children()
                .eq(thisIndex)
                .show();
        });

    //点击"菜单"关闭确定按钮，关闭当前界面
    $('.bb-btn-close').on('click',function(){
        var zzc = $('.index-zzc');

        zzc.hide();
        $(this).parents('.border-box')
            .hide();
    });

    //点击菜单"确定"按钮,关闭当前界面,完成相应操作
    $('.bb-btn-true').on('click',function(){
        var zzc = $('.index-zzc'),
            number = parseInt($(this).parent().siblings('.b-b-p').children('.xh-number').html()),
            jdNumber =parseInt($('.f-h-number').html()),
            numberValPast = $('.fc-number-val').html();
        zzc.hide();
        $(this).parents('.border-box')
            .hide();
        //金豆充足
        if( jdNumber > number)
        {
            //成长值未满
            if(numberValPast<200)
            {
                if(number == '5')
                {
                    var czzNumber =parseInt(5) + parseInt(5*Math.random());

                }
                if(number == '10')
                {
                    var czzNumber = parseInt(10) + parseInt(10*Math.random());
                }
                if(number == '15')
                {
                    var czzNumber = parseInt(15) + parseInt(10*Math.random());
                }
                if(number == '20')
                {
                    var czzNumber = parseInt(20) + parseInt(15*Math.random());
                }
                if(number == '25')
                {
                    var czzNumber = parseInt(25) + parseInt(20*Math.random());
                }
                if(number == '30')
                {
                    var czzNumber = parseInt(30) + parseInt(25*Math.random());
                }
                var numberValNow =   parseInt(numberValPast) + parseInt(czzNumber),
                    flower = $('.f-c-flower');
                //改变进度条数值
                $('.fc-number-val').html(numberValNow);
                //改变金豆余额
                $('.f-h-number').html(jdNumber - number);
                //调用成长值改变函数
                changeNumber(numberValNow);
            }
            //成长值已满,提示采摘
            else
            {

                $('.czz-over').show();
                zzc.show();
            }

        }
        //金豆不足
        else
        {
            $('.flower-over').show();
            zzc.show();
        }
    });
    //可采摘函数
    function gameAgain(){
        //点击果树收获话费
        $('.f-c-flower-05').on('click',function(){
            //继续播种显现
            $('.flower-again').show();
            $('.index-zzc').show();
        });
        //继续播种
        $('.bb-btn-jxzz').on('click',function(){
            $('.flower-again').hide();
            $('.index-zzc').hide();
            $('.f-c-flower').attr('class','f-c-flower f-c-flower-01');
            $('.f-c-ts').hide();
            $('.fc-number-val').html('0');
            changeNumber(0);
        });
    }


    //成长值改变函数
    function changeNumber(numberValNow){
        var number = $('.fc-number-val').html(),
            flower = $('.f-c-flower'),
            jdt = $('.progress-bar'),
            zzc = $('.index-zzc');
        //切换成长图片
        if(numberValNow<='49')
        {
            flower.addClass('f-c-flower-01');
        }
        else if(numberValNow<='99')
        {
            flower.addClass('f-c-flower-02');
        }
        else if(numberValNow<='149')
        {
            flower.addClass('f-c-flower-03');
        }
        else if(numberValNow<='199')
        {
            flower.addClass('f-c-flower-04');
        }
        else if(numberValNow>'199')
        {
            flower.addClass('f-c-flower-05');
            $('.f-c-ts').show();
            $('.fc-number-val').html('200');
            //调用可采摘函数
            gameAgain();

        }
        var jdtNmuber = parseInt(numberValNow/2);
        //改变进度条
        jdt.css('width',jdtNmuber);
    }

    //点击“金豆”，弹出如何获得金豆页面
    $('.f-h-nav').children('li').eq(0).children('ul').on('click',function(){
        $('.f-hdjd').show();
        $('.index-zzc').show();
    });



    //载入时获取进度条
    var numberValNow = parseInt($('.fc-number-val').html());
    changeNumber(numberValNow);
    //载入时调用可采摘
    gameAgain()






});