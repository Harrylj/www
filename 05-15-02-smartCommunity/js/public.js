(function() {
  // 显示加载中
  /*
  jQuery("body").mLoading({
      text: "看我的", //加载文字，默认值：加载中...
      // icon:"",//加载图标，默认值：一个小型的base64的gif图片
      html: false, //设置加载内容是否是html格式，默认值是false
      content: "", //忽略icon和text的值，直接在加载框中显示此值
      mask: true //是否显示遮罩效果，默认显示
  });
  alert("DOM还没加载哦!");
  */
})(jQuery);
$(function() {
  // 关闭加载中
  $("body").mLoading("hide"); 
  // 虚拟键盘挡住输入框的解决方案，添加类public-input-focus-top
  var input_focus_e = $('.public-input-focus-top');
  var body_ = $('body');
  input_focus_e.on('focus', function() {
    var time_ = 200; // 滚动速度1000 = 1s
    var X = $(this).offset().top; // 当前输入框的X轴
    var Y = $(this).offset().left;
    // 添加padding使出现滚动条
    body_.css('padding-bottom', '400px')
    // 滚动到指定位置
    $('html,body').animate({
      scrollTop: X - 50
    }, 200);
  })
  input_focus_e.on('blur', function() {
    body_.css('padding-bottom', '0')
  })
  
})