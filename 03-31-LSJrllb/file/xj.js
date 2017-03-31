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
        $(".btn-main").eq(2).attr("href",'sms:10086?body=YRJ');
        $(".btn-main").eq(3).attr("href",'sms:10086?body=QMJ');
        $(".btn-main").eq(4).attr("href",'sms:10086?body=LLJX');
        $(".btn-main").eq(5).attr("href",'sms:10086?body=LLHX');
    }
    if(mobile == 'iphone'){
        $(".btn-main").eq(0).attr("href",'sms:10086&body=LLQT');
        $(".btn-main").eq(1).attr("href",'sms:10086&body=51SSBZ');
        $(".btn-main").eq(2).attr("href",'sms:10086&body=YRJ');
        $(".btn-main").eq(3).attr("href",'sms:10086&body=QMJ');
        $(".btn-main").eq(4).attr("href",'sms:10086&body=LLJX');
        $(".btn-main").eq(5).attr("href",'sms:10086&body=LLHX');
    }
});

