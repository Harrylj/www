/**
 * Created by hanke0726 on 2016/7/29.
 */
$(function(){
    $(".page").css("min-height",$(window).height()+"px");

    var u = navigator.userAgent,mobile = '';
    var tw = 'an';
    if(u.indexOf('iPhone') > -1) mobile = 'iphone';
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) mobile = 'Android';
    if(mobile == 'Android'){
        $(".btn-main").eq(0).attr("href",'sms:10086?body=LLQT');
        $(".btn-main").eq(1).attr("href",'sms:10086?body=51SSBZ');
        $(".btn-main").eq(2).attr("href",'sms:10086?body=LDJ');
        $(".btn-main").eq(3).attr("href",'sms:10086?body=MQJ');
        $(".btn-main").eq(4).attr("href",'sms:10086?body=GBR');
        $(".btn-main").eq(5).attr("href",'sms:10086?body=DWJ');
        $(".btn-main").eq(6).attr("href",'sms:10086?body=ETJ');
        $(".btn-main").eq(7).attr("href",'sms:10086?body=GKR');
        $(".btn-main").eq(8).attr("href",'sms:10086?body=FQJ');
        $(".btn-main").eq(9).attr("href",'sms:10086?body=YMKH3');
        $(".btn-main").eq(10).attr("href",'sms:10086?body=YMKH5');
        $(".btn-main").eq(11).attr("href",'sms:10086?body=LLJX');
        $(".btn-main").eq(12).attr("href",'sms:10086?body=LLHX');
        $(".btn-main").eq(13).attr("href",'sms:10086?body=LLZX');

    }
    if(mobile == 'iphone'){
        $(".btn-main").eq(0).attr("href",'sms:10086&body=LLQT');
        $(".btn-main").eq(1).attr("href",'sms:10086&body=51SSBZ');
        $(".btn-main").eq(2).attr("href",'sms:10086&body=LDJ');
        $(".btn-main").eq(3).attr("href",'sms:10086&body=MQJ');
        $(".btn-main").eq(4).attr("href",'sms:10086&body=GBR');
        $(".btn-main").eq(5).attr("href",'sms:10086&body=DWJ');
        $(".btn-main").eq(6).attr("href",'sms:10086&body=ETJ');
        $(".btn-main").eq(7).attr("href",'sms:10086&body=GKR');
        $(".btn-main").eq(8).attr("href",'sms:10086&body=FQJ');
        $(".btn-main").eq(9).attr("href",'sms:10086&body=YMKH3');
        $(".btn-main").eq(10).attr("href",'sms:10086&body=YMKH5');
        $(".btn-main").eq(11).attr("href",'sms:10086&body=LLJX');
        $(".btn-main").eq(12).attr("href",'sms:10086&body=LLHX');
        $(".btn-main").eq(13).attr("href",'sms:10086&body=LLZX');


    }
});

