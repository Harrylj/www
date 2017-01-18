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
        $(".main-btn").eq(0).html("<a href='sms:10086?body=YDJ'>办理</a>");
        $(".main-btn").eq(1).html("<a href='sms:10086?body=CJ'>办理</a>");
        $(".main-btn").eq(2).html("<a href='sms:10086?body=YXJ'>办理</a>");
        $(".main-btn").eq(3).html("<a href='sms:10086?body=QRJ'>办理</a>");
        $(".main-btn").eq(4).html("<a href='sms:10086?body=FNJ'>办理</a>");
        $(".main-btn").eq(5).html("<a href='sms:10086?body=BSQRJ'>办理</a>");
        $(".main-btn").eq(6).html("<a href='sms:10086?body=51SSJD'>办理</a>");
        $(".main-btn").eq(7).html("<a href='sms:10086?body=DFL1'>办理</a>");
        $(".main-btn").eq(8).html("<a href='sms:10086?body=DFL2'>办理</a>");
        $(".main-btn").eq(9).html("<a href='sms:10086?body=DFL3'>办理</a>");
        $(".main-btn").eq(10).html("<a href='sms:10086?body='>办理</a>");
        $(".main-btn").eq(11).html("<a href='sms:10086?body='>办理</a>");
        $(".main-btn").eq(12).html("<a href='sms:10086?body=spkhd'>办理</a>");
    }
    if(mobile == 'iphone'){
        $(".main-btn").eq(0).html("<a href='sms:10086&body=YDJ'>办理</a>");
        $(".main-btn").eq(1).html("<a href='sms:10086&body=CJ'>办理</a>");
        $(".main-btn").eq(2).html("<a href='sms:10086&body=YXJ'>办理</a>");
        $(".main-btn").eq(3).html("<a href='sms:10086&body=QRJ'>办理</a>");
        $(".main-btn").eq(4).html("<a href='sms:10086&body=FNJ'>办理</a>");
        $(".main-btn").eq(5).html("<a href='sms:10086&body=BSQRJ'>办理</a>");
        $(".main-btn").eq(6).html("<a href='sms:10086&body=51SSJD'>办理</a>");
        $(".main-btn").eq(7).html("<a href='sms:10086&body=DFL1'>办理</a>");
        $(".main-btn").eq(8).html("<a href='sms:10086&body=DFL2'>办理</a>");
        $(".main-btn").eq(9).html("<a href='sms:10086&body=DFL3'>办理</a>");
        $(".main-btn").eq(10).html("<a href='sms:10086&body='>办理</a>");
        $(".main-btn").eq(11).html("<a href='sms:10086&body='>办理</a>");
        $(".main-btn").eq(12).html("<a href='sms:10086&body=spkhd'>办理</a>");
    }
});

