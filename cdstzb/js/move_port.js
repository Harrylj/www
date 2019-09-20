/*移动方法*/
function move_obj(obj,move_w,move_h,x,y,l,t,m){
  if(obj==undefined){
    alert("方法调用错误,请传入正确参数!");
    return;
  }
  move_w=(move_w==undefined||move_w=='')?$(window).width():move_w;//水平移动范围,默认浏览器可视区域宽度
  move_h=(move_h==undefined||move_h=='')?$(window).height():move_h;//垂直移动范围,默认浏览器可视区域高度
  x=(x==undefined||x=='')?3:x;//一次水平移动距离,默认3px
  y=(y==undefined||y=='')?3:y;//一次垂直移动距离,默认3px
  l=(l==undefined||l=='')?0:l;//相对于body的起始水平位置,默认0
  t=(t==undefined||t=='')?0:t;//相对于body的起始垂直位置,默认0
  m=(m==undefined||m=='')?80:m;//计时周期,单位毫秒,默认80ms
  function moving(){
    x=(l>=move_w-$(obj).width()||l<0)?-x:x;
    y=(t>=move_h-$(obj).height()||t<0)?-y:y;
    l+=x;
    t+=y;
    $(obj).css({left:l,top:t});
  }
  var timer_move=setInterval(function () {
    moving();
  },m);
  //悬停停止运动
  $(obj).mouseover(function(){
    $(this).children(".close_port").show();
    clearInterval(timer_move);
  });
  //移开鼠标后继续运动
  $(obj).mouseout(function(){
    $(this).children(".close_port").hide();
    timer_move=setInterval(function () {
      moving();
    },m);
  });
  //关闭浮窗,关闭后只能通过刷新页面才能显示,也可以自定义关闭功能
  var close="<div class=\"close_port\">×</div>";
  $(obj).append(close);
  $(".close_port").css({
    position:'absolute',
    display:'none',
    width:'20px',
    height:'20px',
    top:0,
    right:0,
    color:'red',
    border:'1px solid red',
    background:'#ccc',
    textAlign:'center',
    lineHeight:'20px',
    cursor: 'pointer'
  });
  $(obj).on('click','.close_port',function () {
    //如果有嵌套子级漂浮窗,同时清除子级定时器,清理缓存
    $(obj).find('.close_port').trigger('mouseover');
    clearInterval(timer_move);
    $(this).parent().remove();
  })
}