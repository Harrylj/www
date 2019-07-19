/**
 * 移动端APP头部插件
 * @date 2019-07-01
 * @author Alan
 * @email 648267773@qq.com
 */
;(function(factory) {
    "use strict";
    // AMD RequireJS
    if (typeof define === "function" && define.amd) {
     define(["jquery"], factory);
    } else {
     factory(jQuery);
    }
   })(function($) {
    "use strict";
    $.fn.extend({
     publicHeader: function(options) {
      if (options && typeof(options) !== 'object') {
       return false;
      }
      function aaa(aa){
          alert(aa)
      }
      //默认配置
      var defaults = {
       // 父级元素
       fatherE : '.two-public-header-content',
       // 背景颜色
       bgColor: 'white',
       // 文字和左右菜单栏颜色
       fontColor: '#323232',
       // 是否显示返回按钮 Boolean
       returnShow: true,
       // 返回按钮地址
       returnHref: function(){
         aaa('122')
       },
       /*
       returnHref: function(i) {
                console.log($(this).attr('class'))
                return false;
       },
       */
       // 标题名称
       titleName: '这是标题',
       // 是否显示菜单栏 Boolean
       navListShow: true,
       // 配置菜单栏
       // home,首页,images/two/two-nav-home@3x.png
       // help,帮助,images/two/two-nav-help@3x.png
       // message,消息,images/two/two-nav-message@3x.png
       // setting,设置,images/two/two-nav-setting@3x.png
       // activity,我参与的,images/two/two-nav-activity@3x.png
       // reserve,添加预约,images/two/two-nav-reserve@3x.png
       // share,分享,images/two/two-nav-share@3x.png
       // editor,分享,images/two/two-nav-editor@3x.png
       // namv: 菜单名, href:链接地址,imgSrc:图标地址,
       navList: {
         help:{
           name: '帮助',
           href: 'www',
           imgSrc: '/Content/Mobile/images/two/two-nav-help@3x.png',
           //imgSrc: 'images/two/two-nav-help@3x.png',
           clickE: function(){
             alert('1111')
             return false;
           }
         },
         home:{
           name: '首页',
           href: 'www',
           imgSrc: '/Content/Mobile/images/two/two-nav-home@3x.png',
           //imgSrc: 'images/two/two-nav-home@3x.png',
           clickE: function(){
             alert('1111')
             return false;
           }
         },
       },
       
       //活动结束后的回调函数                    
       callback: function() {                    
        return false;
       }
      };
      //根据时间格式渲染对应结构



      /**
       * [killTime 时间差换算并进行格式化操作]
       * @param  {[Object]} _this_ [jquery对象]
       * @param  {[Number]} sTime  [当前时间]
       * @param  {[Number]} eTime  [结束时间]
       * @param  {[String]} desc   [时间修饰]
       * @param  {[String]} format [时间格式]
       * @return {[Function]} strategies [根据格式渲染对应结构]
       */
      
      // 覆盖默认配置
      var opts = $.extend(true,defaults, options);
      
      // 合并后的父级元素
      var this_father_e = $(opts.fatherE);
      
      // 点击显示顶部导航栏
      this_father_e.on('click','.two-public-header-more',function(){
        $('.two-public-header-nav-div').show();
      })
      
      // 点击隐藏顶部导航栏
      this_father_e.on('click','.two-public-header-nav-div',function(){
        $(this).hide();
      })
      
      //返回按钮
      // 如果是字符串
      if(typeof(opts.returnHref)=='string'){
        this_father_e.on('click','.two-public-header-return',function(){
         window.location.href= opts.returnHref;
        })
      }
      // 其他则考虑为函数
      else{
        this_father_e.on('click','.two-public-header-return',opts.returnHref)
      }
      
      // 菜单栏命名前缀
      var public_nav_a = 'public-nav-a-';
      
      /*
      // 循环生成右侧菜单栏
      function navList(){
        var aa = ''
        // 获取菜单栏对象长度
        var navList_length = Object.keys(opts.navList).length;
        for(var i in opts.navList){
          aa = aa + '<li><a class="' + public_nav_a + i +'" href="' + opts.navList[i].href +'"><img src="'+ opts.navList[i].imgSrc +'"/><span>'+ opts.navList[i].name +'</span></a></li>'
          console.log(i,opts.navList[i])
          // 给a标签绑定事件
          this_father_e.on('click','.'+ public_nav_a + i,opts.navList[i].clickE)
        }
        return aa
      }
      */
     // 循环生成右侧菜单栏
      function navList(){
        var aa = '',
            bb = '';
        // 获取菜单栏对象长度
        var navList_length = Object.keys(opts.navList).length;
        for(var i in opts.navList){
          // 手动判断改成菜单栏的生成顺序
          if( i == 'help' || i == 'home'){
            bb = bb + '<li><a class="' + public_nav_a + i +'" href="' + opts.navList[i].href +'"><img src="'+ opts.navList[i].imgSrc +'"/><span>'+ opts.navList[i].name +'</span></a></li>'
          }
          else{
            
            aa = aa + '<li><a class="' + public_nav_a + i +'" href="' + opts.navList[i].href +'"><img src="'+ opts.navList[i].imgSrc +'"/><span>'+ opts.navList[i].name +'</span></a></li>'
            console.log(i,opts.navList[i])
          }
          
          // 给a标签绑定事件
          this_father_e.on('click','.'+ public_nav_a + i,opts.navList[i].clickE)
        }
        // 返回改变后的顺序
        return (aa + bb)
      }
      // 导航栏内容
      var this_content = `
      <div class="two-public-header-div" style="background-color:${opts.bgColor}">
        <div class="two-public-header">
          <div class="two-public-header-return" style="display:${opts.returnShow?'flex':'none'}"><span class="iconfont icon-fanhui" style="color:${opts.fontColor}"></span></div>
          <div class="two-public-header-title" style="color:${opts.fontColor}">${opts.titleName}</div>
          <div class="two-public-header-more" style="display:${opts.navListShow?'flex':'none'}"><span class="iconfont icon-icon-test" style="color:${opts.fontColor}"></span></div>
          <div class="two-public-header-nav-div">
            <div class="two-public-header-nav-div-after"></div>
            <div class="two-public-header-big"></div>
            <ul class="two-public-header-nav">
              ${navList()}  
            </ul>
          </div>
        </div>
      `
      
      console.log(opts)
      console.log(opts.eee)
      // 返回生成内容
      return $(this).html(this_content)
      
     }
    });
   });

//源代码