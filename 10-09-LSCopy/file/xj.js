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
        $(".main-btn").eq(0).html("<a href='sms:10086?body=GQJ'>办理</a>");
        $(".main-btn").eq(1).html("<a href='sms:10086?body=1010'>办理</a>");
        $(".main-btn").eq(2).html("<a href='sms:10086?body=SSY'>办理</a>");
        $(".main-btn").eq(3).html("<a href='sms:10086?body=DXSJ'>办理</a>");
        $(".main-btn").eq(4).html("<a href='sms:10086?body=GEJ'>办理</a>");
        $(".main-btn").eq(5).html("<a href='sms:10086?body=SSE'>办理</a>");
        $(".main-btn").eq(6).html("<a href='sms:10086?body=AMHG'>办理</a>");
        $(".main-btn").eq(7).html("<a href='sms:10086?body=SDJ'>办理</a>");
        $(".main-btn").eq(8).html("<a href='sms:10086?body=CJSP'>办理</a>");
        $(".main-btn").eq(9).html("<a href='sms:10086?body=51SS'>办理</a>");
    }
    if(mobile == 'iphone'){
        $(".main-btn").eq(0).html("<a href='sms:10086&body=GQJ'>办理</a>");
        $(".main-btn").eq(1).html("<a href='sms:10086&body=1010'>办理</a>");
        $(".main-btn").eq(2).html("<a href='sms:10086&body=SSY'>办理</a>");
        $(".main-btn").eq(3).html("<a href='sms:10086&body=DXSJ'>办理</a>");
        $(".main-btn").eq(4).html("<a href='sms:10086&body=GEJ'>办理</a>");
        $(".main-btn").eq(5).html("<a href='sms:10086&body=SSE'>办理</a>");
        $(".main-btn").eq(6).html("<a href='sms:10086&body=AMHG'>办理</a>");
        $(".main-btn").eq(7).html("<a href='sms:10086&body=SDJ'>办理</a>");
        $(".main-btn").eq(8).html("<a href='sms:10086&body=CJSP'>办理</a>");
        $(".main-btn").eq(9).html("<a href='sms:10086&body=51SS'>办理</a>");
    }
});

