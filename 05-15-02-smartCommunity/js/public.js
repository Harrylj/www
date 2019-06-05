// 点击显示顶部导航栏
$('.two-public-header-more').on('click',function(){
  $('.two-public-header-nav-div').show();
})

// 点击隐藏顶部导航栏
$('.two-public-header-nav-div').on('click',function(){
  $(this).hide();
})


//返回按钮
$('.two-public-header-return').on('click',function(){
   window.location.href= "www.baidu.com"
})
