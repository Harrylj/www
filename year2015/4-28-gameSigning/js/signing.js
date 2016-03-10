/**
 * Created by Administrator on 2015/5/4.
 */
$(function(){
    /*活动规则
    1.签到则获取金豆，未签到则不获取金豆
    2.获取金豆范围，
累计签到1-10次，每次获取1金豆
     11-20次：每次获取2金豆
     21-30次：每次获取3金豆
     31-40次：每次获取4金豆
     41-50次：每次获取5金豆
    3.活动会中断
    4.活动不跨年
    */
    var m_aMonHead = new Array(12);         //定义阳历中每个月的最大天数
    m_aMonHead[0] = 31; m_aMonHead[1] = 28; m_aMonHead[2] = 31; m_aMonHead[3] = 30; m_aMonHead[4]  = 31; m_aMonHead[5]  = 30;
    m_aMonHead[6] = 31; m_aMonHead[7] = 31; m_aMonHead[8] = 30; m_aMonHead[9] = 31; m_aMonHead[10] = 30; m_aMonHead[11] = 31;

    //判断某年是否为闰年
    function isPinYear(year){
        var bolRet = false;
        if (0==year%4&&((year%100!=0)||(year%400==0))) {
            bolRet = true;
        }
        return bolRet;
    }
    //得到一个月的天数，闰年为29天
    function getMonthCount(year,month){
        var c = m_aMonHead[month-1];
        if((month==2)&&isPinYear(year)) c++;
        return c;
    }
    //判断是否闰年，生成日期天数数组
    getMonthCount();

    //点击按钮"活动规则"
    $('.s-btn-hdgz').on('click',function(){
        $('.zzc').show();
        $('.s-tc-hdgz').show();
    });


    //活动开始第几天函数
    function signingDay(){
        var myYear = 2015, //活动开始年数
            myMonth = 4,    //活动开始月数
            myDay = 11, //活动开始号数
            newDate = new Date(),    //当前时间
            nowYear = newDate.getYear() + 1900,    //当前年数
            nowMonth = newDate.getMonth() + 1 ,     //当前月数
            nowDate = newDate.getDate(),    //当前号数
            dayLength ,        //活动开始第几天
            dayArray = new Array(),     //创建活动开始第几天数组
            dayArrayNumber = 0; //活动开始第几天数组值总和

        //判断活动开始第几天
        //非同一年
        if( nowYear!= myYear)
        {

        }
        //同一年
        else
        {
            //非同一月
            if(nowMonth!=myMonth)
            {
                //传值活动开始第几天数组
                for(var i = myMonth; i<nowMonth; i++)
                {
                    dayArray.push(m_aMonHead[i]);
                }
                //遍历活动开始第几天数组
                for(var a = 0;a<dayArray.length;a++)
                {
                    dayArrayNumber = dayArrayNumber + dayArray[a];
                }
                dayLength =  dayArrayNumber - myDay + nowDate;
            }
            //同一月
            else
            {
                dayLength =  nowDate - myDay + 1;
            }
        }
        //传值活动开始第几天
        $('.signing-day').val(dayLength);
    }

    //载入时调用活动开始第几天函数
    signingDay();
    //签到第几天
    var signingDayVal = $('.signing-day').val();

    //AJAX
    function sAjax(){

        $.ajax({
            type: "GET",
            url: "ajax.html",
            dataType: 'JSON',
            success: function (message) {
                //签到数组,1表示签到，其他表示未签到
                var signing = message.signing;
                //补齐数组间隙
                signing.length = signingDayVal -1;
                //生成签到状态
                function signingStatus(){
                    var gameLi = $('.s-game-ul').children('li');
                    for(var b = 0; b<signing.length;b++)
                    {
                        //s-g-valid:签到；s-g-invalid：未签到
                        //签到状态
                        if(signing[b]=='1')
                        {
                            gameLi.eq(b).addClass('s-g-valid');
                        }
                        //非签到状态
                        else
                        {
                            gameLi.eq(b).addClass('s-g-invalid');
                        }

                    }
                }
                //载入时调用生成签到状态函数
                signingStatus();


                //点击按钮"开始签到"
                $('.s-btn-ksqd').on('click',function(){
                    /*
                     var xmlDocument = { "firstName": "Jason", "lastName":"Hunter", "email": "bbbb" };
                     $.ajax({
                     type: "POST",
                     url: "ajax.html",
                     data: xmlDocument,
                     dataType: 'JSON',
                     success: function (message) {
                     if (message > 0) {
                     alert("请求已提交！我们会尽快与您取得联系");
                     }
                     console.log(message.signing[2]);
                     },
                     error: function (message) {
                     alert('提交数据失败！');
                     }
                     });
                     */

                    var ulLi = $('.s-game-ul').children('li'),  //签到层
                        zzc = $('.zzc'),    //遮罩层
                        SGNumber = $('.signing-get-number'),    //获得金豆数
                        validArray = new Array(), //有效签到日期数组
                        SDNumber = $('.signing-day-number'),  //第几次签到数
                        QTP = $('.qd-ts-p'),    //金豆提示层
                        QTNmuber = $('.qd-ts-number'),  //提示需要金豆数
                        QTJd = $('.qd-ts-jd'), //提示下一阶段金豆数
                        QLDay = $('.qd-last-day'), //距离签到结束还有多少天
                        YGQ = $('.s-tc-ygq');   //活动过期提示层
                    //已过期
                    if(signing.length>ulLi.length)
                    {
                        zzc.show();
                        YGQ.show();
                    }
                    //未过期
                    else
                    {
                        //已签到
                        if(ulLi.eq(signingDayVal-1).hasClass('s-g-valid'))
                        {
                            $('.s-tc-yqd').show();
                            zzc.show();
                        }
                        //未签到
                        else{
                            ulLi.eq(signingDayVal-1).addClass('s-g-valid');
                            //赋值签到日期数组
                            ulLi.each(function(){
                                if($(this).hasClass('s-g-valid'))
                                {
                                    validArray.push('');
                                }
                            });
                            /*
                             累计签到1-10次，每次获取1金豆
                             11-20次：每次获取2金豆
                             21-30次：每次获取3金豆
                             31-40次：每次获取4金豆
                             41-50次：每次获取5金豆
                             */
                            //判断获取金豆个数
                            if(validArray.length<=10)
                            {
                                SGNumber.html('1');
                                QTNmuber.html(10-validArray.length);
                                QTJd.html('2')
                            }
                            else if(validArray.length<=20)
                            {
                                SGNumber.html('2');
                                QTNmuber.html(20-validArray.length);
                                QTJd.html('3')
                            }
                            else if(validArray.length<=30)
                            {
                                SGNumber.html('3');
                                QTNmuber.html(30-validArray.length);
                                QTJd.html('4')
                            }
                            else if(validArray.length<=40)
                            {
                                SGNumber.html('4');
                                QTNmuber.html(40-validArray.length);
                                QTJd.html('5')
                            }
                            else
                            {
                                QTP.hide();
                                SGNumber.html('5');
                            }
                            //第几次签到
                            SDNumber.html(validArray.length);
                            //距离签到结束还有多少天
                            QLDay.html(50-signing.length-1);
                            $('.s-tc-wqd').show();
                            zzc.show();
                        }
                    }



                });
            },
            error: function (message) {
                alert('提取数据失败！请重新加载页面。');
            }
        });
    }
    //运行AJAX函数
    sAjax();












});