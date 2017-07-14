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
        $(".btn-main").eq(0).attr("href",'sms:10086?body=JDJ');
        $(".btn-main").eq(1).attr("href",'sms:10086?body=RFJQ');
        $(".btn-main").eq(2).attr("href",'sms:10086?body=HBJ');
        $(".btn-main").eq(3).attr("href",'sms:10086?body=JJJ');
        $(".btn-main").eq(4).attr("href",'sms:10086?body=BGJ');
        $(".btn-main").eq(5).attr("href",'sms:10086?body=QXJ');
        $(".btn-main").eq(6).attr("href",'sms:10086?body=JSJ');
        $(".btn-main").eq(7).attr("href",'sms:10086?body=JRJB');
        $(".btn-main").eq(8).attr("href",'sms:10086?body=SXKHB');
        $(".btn-main").eq(9).attr("href",'sms:10086?body=KXKHB');
        $(".btn-main").eq(10).attr("href",'sms:10086?body=LLJX');
        $(".btn-main").eq(11).attr("href",'sms:10086?body=LLHX');
        $(".btn-main").eq(12).attr("href",'sms:10086?body=LLZX');

    }
    if(mobile == 'iphone'){
        $(".btn-main").eq(0).attr("href",'sms:10086&body=JDJ');
        $(".btn-main").eq(1).attr("href",'sms:10086&body=RFJQ');
        $(".btn-main").eq(2).attr("href",'sms:10086&body=HBJ');
        $(".btn-main").eq(3).attr("href",'sms:10086&body=JJJ');
        $(".btn-main").eq(4).attr("href",'sms:10086&body=BGJ');
        $(".btn-main").eq(5).attr("href",'sms:10086&body=QXJ');
        $(".btn-main").eq(6).attr("href",'sms:10086&body=JSJ');
        $(".btn-main").eq(7).attr("href",'sms:10086&body=JRJB');
        $(".btn-main").eq(8).attr("href",'sms:10086&body=SXKHB');
        $(".btn-main").eq(9).attr("href",'sms:10086&body=KXKHB');
        $(".btn-main").eq(10).attr("href",'sms:10086&body=LLJX');
        $(".btn-main").eq(11).attr("href",'sms:10086&body=LLHX');
        $(".btn-main").eq(12).attr("href",'sms:10086&body=LLZX');


    }
});

