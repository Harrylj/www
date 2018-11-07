/**
 * 简单的jquery购物商城秒杀倒计时插件
 * @date 2016-06-11
 * @author TangShiwei
 * @email 591468061@qq.com
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
     countdown: function(options) {
      if (options && typeof(options) !== 'object') {
       return false;
      }
      //默认配置
      var defaults = {
       //活动开始时间 (可采用时间戳 或者 标准日期时间格式 "yyyy/MM/dd HH:mm:ss")
       //优先采取元素的data-stime值(该值只能为时间戳格式)
       startTime: '2016/6/11 21:00:00',
       //活动结束时间 (可采用时间戳 或者 标准日期时间格式 "yyyy/MM/dd HH:mm:ss")
       //优先采取元素的data-etime值(该值只能为时间戳格式)         
       endTime: '2016/6/11 24:00:00',
       //活动开始前倒计时的修饰
       //可自定义元素,例如"<span>距离活动开始倒计时还有:</span>"            
       beforeStart: '距离活动开始倒计时还有:',
       //活动进行中倒计时的修饰 
       //可自定义元素,例如"<span>距离活动截止还有:</span>"  
       beforeEnd: '距离活动截止还有:',
       //活动结束后的修饰
       //可自定义元素,例如"<span>活动已结束</span>"             
       afterEnd: '活动已结束',
       //时间格式化(可采用"ddd:hh:mm:ss、 dd:hh:mm:ss、  hh:mm:ss、 mm:ss、 ss"等)                   
       format: 'dd:hh:mm:ss',
       //活动结束后的回调函数                    
       callback: function() {                    
        return false;
       }
      };
      //根据时间格式渲染对应结构
      var strategies = {
       "4": function($this, timeArr, desc) {
        return $this.html(desc + '<span class="countdown-day">' + timeArr[0] + '</span>天' + 　'<span class="countdown-hour">' + timeArr[1] + '</span>时' + '<span class="countdown-minute">' + timeArr[2] + '</span>分' + '<span class="countdown-second">' + timeArr[3] + '</span>秒');
       },
       "3": function($this, timeArr, desc) {
        return $this.html(desc + '<span class="countdown-hour">' + timeArr[0] + '</span>时' + '<span class="countdown-minute">' + timeArr[1] + '</span>分' + '<span class="countdown-second">' + timeArr[2] + '</span>秒');
       },
       "2": function($this, timeArr, desc) {
        return $this.html(desc + '<span class="countdown-minute">' + timeArr[0] + '</span>分' + '<span class="countdown-second">' + timeArr[1] + '</span>秒');
       },
       "1": function($this, timeArr, desc) {
        return $this.html(desc + '<span class="countdown-second">' + timeArr[0] + '</span>秒');
       }
      };
      /**
       * [killTime 时间差换算并进行格式化操作]
       * @param  {[Object]} _this_ [jquery对象]
       * @param  {[Number]} sTime  [当前时间]
       * @param  {[Number]} eTime  [结束时间]
       * @param  {[String]} desc   [时间修饰]
       * @param  {[String]} format [时间格式]
       * @return {[Function]} strategies [根据格式渲染对应结构]
       */
      var killTime = function(_this_, sTime, eTime, desc, format) {
       var diffSec = (eTime - sTime) / 1000;
       var map = {
        h: Math.floor(diffSec / (60 * 60)) % 24,
       //h: Math.floor(diffSec / (60 * 60)),
       m: Math.floor(diffSec / 60) % 60,
        s: Math.floor(diffSec % 60)
       };
       var format = format.replace(/([dhms])+/g, function(match, subExp) {
        var subExpVal = map[subExp];
        if (subExpVal !== undefined) {
         if (match.length > 1) {
          subExpVal = '0' + subExpVal;
          subExpVal = subExpVal.substr(subExpVal.length - match.length);
          return subExpVal;
         }
        } else if (subExp === 'd') {
         if (match.length >= 1 && match.length < 4) {
          map[subExp] = Math.floor(diffSec / (60 * 60 * 24));
          var d = '00' + map[subExp];
          return d.substr(d.length - match.length);
         }
        }
        return match;
       });
       //将时间格式通过":"符号进行分组
       var timeArr = String.prototype.split.call(format, ':');
      /**
       * [render 通过分组情况渲染对应结构]
       * @param  {[Object]} _this_ [jquery对象]
       * @param  {[Number]} timeArrLen  [时间分组后的数组长度]
       * @param  {[Array]} timeArr  [时间分组后的数组]
       * @param  {[String]} desc   [时间修饰]
       * @return {[Function]} strategies [根据数组长度渲染对应结构]
       */
       var render = function(_this_, timeArrLen, timeArr, desc) {
        return strategies[timeArrLen](_this_, timeArr, desc);
       };
       render(_this_, timeArr.length, timeArr, desc);
      }
      //覆盖默认配置
      var opts = $.extend({}, defaults, options);
      return this.each(function() {
       var $this = $(this);
       var _timer = null;
       //优先采取元素的data-stime值(该值只能为时间戳格式)
       var sTime = $this.data('stime') ? parseInt($this.data('stime'), 10) : (new Date(opts.startTime)).getTime();
       //优先采取元素的data-etime值(该值只能为时间戳格式)
       var eTime = $this.data('etime') ? parseInt($this.data('etime'), 10) : (new Date(opts.endTime)).getTime();
       if (_timer) {
        clearInterval(_timer);
       }
       _timer = setInterval(function() {
        var nowTime = (new Date()).getTime();
        if (nowTime < sTime) {
         //活动暂未开始
         killTime($this, nowTime, sTime, opts.beforeStart, opts.format);
        } else if (nowTime >= sTime && nowTime <= eTime) {
         //活动进行中
         killTime($this, nowTime, eTime, opts.beforeEnd, opts.format);
        } else {
         //活动已结束
         clearInterval(_timer);
         $this.html(opts.afterEnd);
         if (opts.callback && $.isFunction(opts.callback)) {
          opts.callback.call($this);
         }
        }
       }, 1000);
      });
     }
    });
   });

//源代码