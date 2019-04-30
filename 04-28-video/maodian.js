//以下是锚点JS
var a = $(document);
a.ready(function() {
  var b = $('body'),
    d = 'sideToolbar',
    e = 'sideCatalog',
    f = 'sideCatalog-catalog',
    g = 'sideCatalogBtn',
    h = 'sideToolbar-up',
    i = '<div id="sideToolbar"style="display:none;">\<div class="sideCatalogBg"id="sideCatalog">\<div id="sideCatalog-sidebar">\<div class="sideCatalog-sidebar-top"></div>\<div class="sideCatalog-sidebar-bottom"></div>\</div>\<div id="sideCatalog-catalog">\<ul class="nav"style="width:225px;zoom:1">\</ul>\</div>\</div>\<a href="javascript:void(0);"id="sideCatalogBtn"class="sideCatalogBtnDisable"></a>\</div>',
    j = '',
    k = 200,
    l = 0,
    m = 0,
    n = 0,
    //限制存在个数，如数量过多，则只显示h2，不显示h3
    //o, p = 13,
    o, p = 100,
    q = true,
    r = true,
    s = b;
  if(s.length === 0) {
    return
  };
  b.append(i);
  //指定获取目录的范围-------------这一点非常重要，因为每个人指定的范围都不一样，所以这是要修改的地方
  //o = s.find(':header');
  o = $('#cnblogs_post_body').find(':header')
  if(o.length > p) {
    r = false;
    var t = s.find('h2');
    var u = s.find('h3');
    if(t.length + u.length > p) {
      q = false
    }
  };
  o.each(function(t) {
    var u = $(this),
      v = u[0];

    var title = u.text();
    var text = u.text();

    u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
    //if (!u.attr('id')) {
    //    u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
    //};
    if(v.localName === 'h2') {
      l++;
      m = 0;
      if(text.length > 14) text = text.substr(0, 20) + "...";
      j += '<li><span>' + l + '&nbsp&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a><span class="sideCatalog-dot"></span></li>';
    } else if(v.localName === 'h3') {
      m++;
      n = 0;
      if(q) {
        if(text.length > 12) text = text.substr(0, 16) + "...";
        j += '<li class="h2Offset"><span>' + l + '.' + m + '&nbsp&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
      }
    } else if(v.localName === 'h4') {
      n++;
      if(r) {
        j += '<li class="h3Offset"><span>' + l + '.' + m + '.' + n + '&nbsp&nbsp</span><a href="#' + u.attr('id') + '" title="' + title + '">' + u.text() + '</a></li>';
      }
    }
  });
  $('#' + f + '>ul').html(j);
  b.data('spy', 'scroll');
  b.data('target', '.sideCatalogBg');
  $('body').scrollspy({
    target: '.sideCatalogBg'
  });
  $sideCatelog = $('#' + e);
  $('#' + g).on('click', function() {
    if($(this).hasClass('sideCatalogBtnDisable')) {
      $sideCatelog.css('visibility', 'hidden')
    } else {
      $sideCatelog.css('visibility', 'visible')
    };
    $(this).toggleClass('sideCatalogBtnDisable')
  });
  $('#' + h).on('click', function() {
    $("html,body").animate({
      scrollTop: 0
    }, 500)
  });
  $sideToolbar = $('#' + d);

  //通过判断评论框是否存在显示索引目录
  var commentDiv = $("#blog-comments-placeholder");

  a.on('scroll', function() {
    //评论框存在才调用方法
    if(commentDiv.length > 0) {
      var t = a.scrollTop();
      if(t > k) {
        $sideToolbar.css('display', 'block');
        $('#gotop').show()
      } else {
        $sideToolbar.css('display', 'none')
        $('#gotop').hide()
      }
    }
  })
});
//以上是锚点JS
//以下是返回顶部JS
$(function() {
  $('body').append('<div id="gotop" onclick="goTop();"></div>');
});

function goTop(u, t, r) {
  var scrollActivate = !0;
  if(scrollActivate) {
    u = u || 0.1;
    t = t || 16;
    var s = 0,
      q = 0,
      o = 0,
      p = 0,
      n = 0,
      j = 0;
    document.documentElement && (s = document.documentElement.scrollLeft || 0, q = document.documentElement.scrollTop || 0);
    document.body && (o = document.body.scrollLeft || 0, p = document.body.scrollTop || 0);
    n = window.scrollX || 0;
    j = window.scrollY || 0;
    s = Math.max(s, Math.max(o, n));
    q = Math.max(q, Math.max(p, j));
    p = 1 + u;
    window.scrollTo(Math.floor(s / p), Math.floor(q / p));
    0 < s || 0 < q ? window.setTimeout('goTop(' + u + ', ' + t + ')', t) : 'undefined' != typeof r && r()
  } else {
    scrollActivate = !0
  }
}
//以上是返回顶部JS