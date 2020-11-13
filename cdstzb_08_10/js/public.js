//rem兼容方案
(function(doc, win) {
  var docEl = doc.documentElement,
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      docEl.style.fontSize = clientWidth * (100 / 750) + 'px';
    };
  if(doc.addEventListener) {
    win.addEventListener('resize', recalc, false);
  } else {
    win.attachEvent('onresize', recalc);
  }
  
  recalc();
})(document, window);

/*  _divName    div元素名

    _nPageCount 总页数；

    _nCurrIndex 当前页码；

    _sPageName  共同前缀名；

    _sPageExt   分页页面的文件名后缀;

    _nPageSum   总记录数

*/


function createPageHTML(_divName, _nPageCount, _nCurrIndex, _sPageName, _sPageExt, _nPageSum) {
  var con_text = "";
  var active = "";
  var pagination_num = [];
  var num = 7; //页数展示个数，只能为奇数
  if(_nPageCount == null || _nPageCount < 1) return;

  con_text += "<span class=\"pagination-first\"><a class=\"pagination-index\" href=\"" + _sPageName + "." + _sPageExt + "\">首页</a>";
  if(_nCurrIndex == 1) {
    con_text += "<a class=\"pagination-index\" href=\"javascript:;\">上一页</a>";
  } else {
    if(_nCurrIndex == 2) {
      con_text += "<a class=\"pagination-index\" href=\"" + _sPageName + "." + _sPageExt + "\">上一页</a>";
    } else {
      con_text += "<a class=\"pagination-index\" href=\"" + _sPageName + "_" + (_nCurrIndex - 1) + "." + _sPageExt + "\">上一页</a>";
    }
  }

  for(var i = 0; i < num; i++) {
    var pagination_num_txt = _nCurrIndex - (num - 1) / 2 + i;
    active = (i == (num - 1) / 2) ? "active" : "";
    if(pagination_num_txt == 1) {
      if((i == (num - 1) / 2)) {
        pagination_num[i] = "<a class=\"pagination-num " + active + "\" href=\"javascript:;\">" + pagination_num_txt + "</a>";
      } else {
        pagination_num[i] = "<a class=\"pagination-num " + active + "\" href=\"" + _sPageName + "." + _sPageExt + "\">" + pagination_num_txt + "</a>";
      }
    } else {
      if((i == (num - 1) / 2)) {
        pagination_num[i] = "<a class=\"pagination-num " + active + "\" href=\"javascript:;\">" + pagination_num_txt + "</a>";
      } else {
        pagination_num[i] = "<a class=\"pagination-num " + active + "\" href=\"" + _sPageName + "_" + pagination_num_txt + "." + _sPageExt + "\">" + pagination_num_txt + "</a>";
      }
    }
    if(pagination_num_txt > _nPageCount || pagination_num_txt < 1) {
      pagination_num[i] = "";
    }
    con_text += pagination_num[i];
  }

  if(_nCurrIndex == _nPageCount) {
    con_text += "<a class=\"pagination-index\" href=\"javascript:;\">下一页</a>";
  } else {
    con_text += "<a class=\"pagination-index\" href=\"" + _sPageName + "_" + (_nCurrIndex + 1) + "." + _sPageExt + "\">下一页</a>";
  }
  if(_nPageCount == 1) {
    con_text += "<a class=\"pagination-index\" href=\"javascript:;\">末页</a></span>";
  } else {
    con_text += "<a class=\"pagination-index\" href=\"" + _sPageName + "_" + _nPageCount + "." + _sPageExt + "\">末页</a></span>";
  }

  con_text += "<span class=\"pagination-last\">\
  <span>跳转至</span>\
  <input id=\"pagination-input\" type=\"text\" onkeyup=\"if(event.keyCode == 13 ) pagination_go('" + _sPageName + "','" + _sPageExt + "','" + _nPageCount + "') \"  >\
  <span>页</span>\
  <a href=\"javascript:;\" onclick=\"pagination_go('" + _sPageName + "','" + _sPageExt + "','" + _nPageCount + "')\">GO</a>\
  </span>";

  document.getElementById(_divName).innerHTML = con_text;
  document.getElementById("now_all_page").innerHTML = "共<span>"+  _nPageSum + "</span>条记录  第" + _nCurrIndex + "页" ;
}

function pagination_go(sPageName, sPageExt, nPageCount) { //跳转
  var gopageID = document.getElementById('pagination-input').value;
  gopageID = gopageID.replace(" ", '');
  if(parseInt(gopageID) <= nPageCount && parseInt(gopageID) > 0) {
    if(gopageID == "1") {
      window.location.href = sPageName + "." + sPageExt;
    } else {
      window.location.href = sPageName + "_" + gopageID + "." + sPageExt;
    }
  } else {
    alert('请输入正确页数')
  }
  return false;
}

//ejs分页
/*  divName      导航选择器
  
    nPageCount   总页数；
    
    nCurrIndex   当前页码；
    
    nPageSize    每页条数；
    
    nPesultCount 总条数
    
    callback     回调函数；
*/
function ejscreatePageHTML(divName, nPageCount, nCurrIndex, nPageSize, nPesultCount, callback) {
  $('#' + divName).each(function() {
    var active = "";
    var pagination_num = [];
    var num = 5;
    var con_text = '<span class="pagination-first"><a class="pagination-index"  href="javascript:;">首页</a><a class="pagination-index" href="javascript:;">上一页</a>';

    for(var i = 0; i < num; i++) {
      var pagination_num_txt = nCurrIndex - (num - 1) / 2 + i;
      active = (i == (num - 1) / 2) ? "active" : "";

      pagination_num[i] = "<a class=\"pagination-num " + active + "\"  href=\"javascript:;\">" + pagination_num_txt + "</a>";

      if(pagination_num_txt > nPageCount || pagination_num_txt < 1) {
        pagination_num[i] = "";
      }
      con_text += pagination_num[i];
    }

    con_text += '<a class="pagination-index" href="javascript:;">下一页</a><a  class="pagination-index" href="javascript:;">末页</a></span>' +
      "<span class=\"pagination-last\">\
    <span>每页 " + nPageSize + " 条</span>\
    <span>共 " + nPesultCount + " 条</span>\
    <span>共 " + nPageCount + " 页</span>\
    <span>当前第 " + nCurrIndex + " 页</span>\
    <span>跳转至</span>\
    <input id=\"pagination-input\" type=\"text\" onkeyup=\"if(event.keyCode == 13 ) ejspagination_go(" + nPageCount + ",callback) \"  >\
    <span>页</span>\
    <a href=\"javascript:;\" onclick=\"ejspagination_go(" + nPageCount + ",callback)\">GO</a>\
    </span>";

    $(this).html(con_text);

    $(this).find('.pagination-first>a').on('click', function() {
      var txt = $(this).text();
      if(txt == "首页" && nCurrIndex != 1) {
        callback(1);
      } else if(txt == "末页" && nCurrIndex != nPageCount) {
        callback(nPageCount);
      } else if(txt == "上一页" && nCurrIndex > 1) {
        callback(nCurrIndex - 1);
      } else if(txt == "下一页" && nCurrIndex < nPageCount) {
        callback(nCurrIndex + 1);
      } else if(Number(txt) && nCurrIndex != Number(txt)) {
        callback(Number(txt));
      }
    });
  });
}

function ejspagination_go(nPageCount, callback) { //跳转
  var gopageID = document.getElementById('pagination-input').value;
  gopageID = gopageID.replace(" ", '');
  if(parseInt(gopageID) <= nPageCount && parseInt(gopageID) > 0) {
    callback(Number(gopageID));
  } else {
    alert('请输入正确的页数')
  }
  return false;
}

function callback(n) {
  $('.data').load('/es-search/search/' + lmCode + '?_template=ucap/list_ejs&_isAgg=1&_pageSize=20&page=' + n);
}
// &_pageSize=20 设置美页条数
// &_isAgg=1 设置是否显示聚合 0 不聚合，1聚合
$(function() {
  if($('.data').length != 0) {
    $('.data').load('/es-search/search/' + lmCode + '?_template=ucap/list_ejs&_isAgg=1&_pageSize=20&page=1');
  }
});
///////内容页上一篇下一篇功能;_nNowPageID当前信息ID
function ContentUporNext(_nNowPageID, _target, _type) {
  if(!content_str) return false;
  if(content_str.indexOf("#####") != -1) {
    splitNewContent(_nNowPageID, _target, _type);
    return;
  }
  if(content_str.lastIndexOf(",") == content_str.length - 1) {
    content_str = content_str.substring(0, content_str.length - 1);
  }
  var tst = content_str.split(",");
  for(var i = 0; i < tst.length; i++) {
    var iscan = tst[i].indexOf(_nNowPageID + ":");
    if(iscan != -1) {
      if(i == 0) { ///此时没有上一篇
        var prevReg = /^[PREV]|[prev]$/;
        if("PREV" != _type) {
          var content_tst = tst[i + 1].split(":");
          if(content_tst[2] && content_tst[2].indexOf("..") > -1) {
            content_tst[2] = content_tst[2].substring(content_tst[2].lastIndexOf("..") + 2);
          }
          document.write("<a  href='../../" + content_tst[2] + "' target='" + _target + "'>" + content_tst[1] + "<FONT face=Webdings>4</FONT></a>");
        }
      } else if(i == tst.length - 1) { //此时没有下一篇
        if("NEXT" != _type) {
          var content_tst = tst[i - 1].split(":");
          if(content_tst[2] && content_tst[2].indexOf("..") > -1) {
            content_tst[2] = content_tst[2].substring(content_tst[2].lastIndexOf("..") + 2);
          }
          document.write("<a  href='../../" + content_tst[2] + "' target='" + _target + "'><FONT face=Webdings>3</FONT>" + content_tst[1] + "</a>");
        }
      } else {
        if("PREV" == _type) {
          var content_up = tst[i - 1].split(":");
          if(content_up[2] && content_up[2].indexOf("..") > -1) {
            content_up[2] = content_up[2].substring(content_up[2].lastIndexOf("..") + 2);
          }
          document.write("<a href='../../" + content_up[2] + "' target='" + _target + "'><FONT face=Webdings>3</FONT>" + content_up[1] + "</a>&nbsp;&nbsp;&nbsp;&nbsp;");
        }
        if("NEXT" == _type) {
          var content_next = tst[i + 1].split(":");
          if(content_next[2] && content_next[2].indexOf("..") > -1) {
            content_next[2] = content_next[2].substring(content_next[2].lastIndexOf("..") + 2);
          }
          document.write("<a href='../../" + content_next[2] + "' target='" + _target + "'>" + content_next[1] + "<FONT face=Webdings>4</FONT></a>");
        }
      }
      break;
    }
  }
}
///////内容页上一篇下一篇功能;content内容 以@@@@符合分割
function splitNewContent(_nNowPageID, _target, _type) {
  if(!content_str)
    return false;
  if(content_str.lastIndexOf("#####") == content_str.length - 5) {
    content_str = content_str.substring(0, content_str.length - 5);
  }
  var tst = content_str.split("#####");
  for(var i = 0; i < tst.length; i++) {
    var iscan = tst[i].indexOf(_nNowPageID + "@@@@@");
    if(iscan != -1) {
      if(i == 0) { // /此时没有上一篇
        var prevReg = /^[PREV]|[prev]$/;
        if("PREV" != _type) {
          var content_tst = tst[i + 1].split("@@@@@");
          document.write("<a href='" + content_tst[2] + "' target='" +
            _target + "'>" + content_tst[1] + "</a>");
        }
      } else if(i == tst.length - 1) { // 此时没有下一篇
        if("NEXT" != _type) {
          var content_tst = tst[i - 1].split("@@@@@");
          document.write("<a href='" + content_tst[2] + "' target='" +
            _target + "'>" + content_tst[1] + "</a>");
        }
      } else {
        if("PREV" == _type) {
          var content_up = tst[i - 1].split("@@@@@");
          document.write("<a href='" + content_up[2] + "' target='" +
            _target + "'>" + content_up[1] + "</a>");
        }
        if("NEXT" == _type) {
          var content_next = tst[i + 1].split("@@@@@");
          document.write("<a href='" + content_next[2] + "' target='" +
            _target + "'>" + content_next[1] + "</a>");
        }
      }
      break;
    }
  }
}


/*
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jun 01, 2011
 */


(function ($) {

    $.fn.zclip = function (params) {

        if (typeof params == "object" && !params.length) {

            var settings = $.extend({

                path: 'ZeroClipboard.swf',
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: true,
                setHandCursor: true,
                setCSSEffects: true

            }, params);
      

            return this.each(function () {

                var o = $(this);

                if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {

                    ZeroClipboard.setMoviePath(settings.path);
                    var clip = new ZeroClipboard.Client();
                    
                    if($.isFunction(settings.copy)){
                      o.bind('zClip_copy',settings.copy);
                    }
                    if($.isFunction(settings.beforeCopy)){
                      o.bind('zClip_beforeCopy',settings.beforeCopy);
                    }
                    if($.isFunction(settings.afterCopy)){
                      o.bind('zClip_afterCopy',settings.afterCopy);
                    }                    

                    clip.setHandCursor(settings.setHandCursor);
                    clip.setCSSEffects(settings.setCSSEffects);
                    clip.addEventListener('mouseOver', function (client) {
                        o.trigger('mouseenter');
                    });
                    clip.addEventListener('mouseOut', function (client) {
                        o.trigger('mouseleave');
                    });
                    clip.addEventListener('mouseDown', function (client) {

                        o.trigger('mousedown');
                        
      if(!$.isFunction(settings.copy)){
         clip.setText(settings.copy);
      } else {
         clip.setText(o.triggerHandler('zClip_copy'));
      }                        
                        
                        if ($.isFunction(settings.beforeCopy)) {
                            o.trigger('zClip_beforeCopy');                            
                        }

                    });

                    clip.addEventListener('complete', function (client, text) {

                        if ($.isFunction(settings.afterCopy)) {
                            
                            o.trigger('zClip_afterCopy');

                        } else {
                            if (text.length > 500) {
                                text = text.substr(0, 500) + "...\n\n(" + (text.length - 500) + " characters not shown)";
                            }
              
          o.removeClass('hover');
                            alert("Copied text to clipboard:\n\n " + text);
                        }

                        if (settings.clickAfter) {
                            o.trigger('click');
                        }

                    });

          
                    clip.glue(o[0], o.parent()[0]);
          
        $(window).bind('load resize',function(){clip.reposition();});
          

                }

            });

        } else if (typeof params == "string") {

            return this.each(function () {

                var o = $(this);

                params = params.toLowerCase();
                var zclipId = o.data('zclipId');
                var clipElm = $('#' + zclipId + '.zclip');

                if (params == "remove") {

                    clipElm.remove();
                    o.removeClass('active hover');

                } else if (params == "hide") {

                    clipElm.hide();
                    o.removeClass('active hover');

                } else if (params == "show") {

                    clipElm.show();

                }

            });

        }

    } 
  
  

})(jQuery);







// ZeroClipboard
// Simple Set Clipboard System
// Author: Joseph Huckaby
var ZeroClipboard = {

    version: "1.0.7",
    clients: {},
    // registered upload clients on page, indexed by id
    moviePath: 'ZeroClipboard.swf',
    // URL to movie
    nextId: 1,
    // ID of next movie
    $: function (thingy) {
        // simple DOM lookup utility function
        if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
        if (!thingy.addClass) {
            // extend element with a few useful methods
            thingy.hide = function () {
                this.style.display = 'none';
            };
            thingy.show = function () {
                this.style.display = '';
            };
            thingy.addClass = function (name) {
                this.removeClass(name);
                this.className += ' ' + name;
            };
            thingy.removeClass = function (name) {
                var classes = this.className.split(/\s+/);
                var idx = -1;
                for (var k = 0; k < classes.length; k++) {
                    if (classes[k] == name) {
                        idx = k;
                        k = classes.length;
                    }
                }
                if (idx > -1) {
                    classes.splice(idx, 1);
                    this.className = classes.join(' ');
                }
                return this;
            };
            thingy.hasClass = function (name) {
                return !!this.className.match(new RegExp("\\s*" + name + "\\s*"));
            };
        }
        return thingy;
    },

    setMoviePath: function (path) {
        // set path to ZeroClipboard.swf
        this.moviePath = path;
    },

    dispatch: function (id, eventName, args) {
        // receive event from flash movie, send to client   
        var client = this.clients[id];
        if (client) {
            client.receiveEvent(eventName, args);
        }
    },

    register: function (id, client) {
        // register new client to receive events
        this.clients[id] = client;
    },

    getDOMObjectPosition: function (obj, stopObj) {
        // get absolute coordinates for dom element
        var info = {
            left: 0,
            top: 0,
            width: obj.width ? obj.width : obj.offsetWidth,
            height: obj.height ? obj.height : obj.offsetHeight
        };

        if (obj && (obj != stopObj)) {
      info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
        }

        return info;
    },

    Client: function (elem) {
        // constructor for new simple upload client
        this.handlers = {};

        // unique ID
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;

        // register client with singleton to receive flash events
        ZeroClipboard.register(this.id, this);

        // create movie
        if (elem) this.glue(elem);
    }
};

ZeroClipboard.Client.prototype = {

    id: 0,
    // unique ID for us
    ready: false,
    // whether movie is ready to receive events or not
    movie: null,
    // reference to movie object
    clipText: '',
    // text to copy to clipboard
    handCursorEnabled: true,
    // whether to show hand cursor, or default pointer cursor
    cssEffects: true,
    // enable CSS mouse effects on dom container
    handlers: null,
    // user event handlers
    glue: function (elem, appendElem, stylesToAdd) {
        // glue to DOM element
        // elem can be ID or actual DOM element object
        this.domElement = ZeroClipboard.$(elem);

        // float just above object, or zIndex 99 if dom element isn't set
        var zIndex = 99;
        if (this.domElement.style.zIndex) {
            zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
        }

        if (typeof(appendElem) == 'string') {
            appendElem = ZeroClipboard.$(appendElem);
        } else if (typeof(appendElem) == 'undefined') {
            appendElem = document.getElementsByTagName('body')[0];
        }

        // find X/Y position of domElement
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);

        // create floating DIV above element
        this.div = document.createElement('div');
        this.div.className = "zclip";
        this.div.id = "zclip-" + this.movieId;
        $(this.domElement).data('zclipId', 'zclip-' + this.movieId);
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;

        if (typeof(stylesToAdd) == 'object') {
            for (addedStyle in stylesToAdd) {
                style[addedStyle] = stylesToAdd[addedStyle];
            }
        }

        // style.backgroundColor = '#f00'; // debug
        appendElem.appendChild(this.div);

        this.div.innerHTML = this.getHTML(box.width, box.height);
    },

    getHTML: function (width, height) {
        // return HTML for movie
        var html = '';
        var flashvars = 'id=' + this.id + '&width=' + width + '&height=' + height;

        if (navigator.userAgent.match(/MSIE/)) {
            // IE gets an OBJECT tag
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>';
        } else {
            // all other browsers get an EMBED tag
            html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />';
        }
        return html;
    },

    hide: function () {
        // temporarily hide floater offscreen
        if (this.div) {
            this.div.style.left = '-2000px';
        }
    },

    show: function () {
        // show ourselves after a call to hide()
        this.reposition();
    },

    destroy: function () {
        // destroy control and floater
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = '';

            var body = document.getElementsByTagName('body')[0];
            try {
                body.removeChild(this.div);
            } catch (e) {;
            }

            this.domElement = null;
            this.div = null;
        }
    },

    reposition: function (elem) {
        // reposition our floating div, optionally to new container
        // warning: container CANNOT change size, only position
        if (elem) {
            this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) this.hide();
        }

        if (this.domElement && this.div) {
            var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            var style = this.div.style;
            style.left = '' + box.left + 'px';
            style.top = '' + box.top + 'px';
        }
    },

    setText: function (newText) {
        // set text to be copied to clipboard
        this.clipText = newText;
        if (this.ready) {
            this.movie.setText(newText);
        }
    },

    addEventListener: function (eventName, func) {
        // add user event listener for event
        // event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(func);
    },

    setHandCursor: function (enabled) {
        // enable hand cursor (true), or default arrow cursor (false)
        this.handCursorEnabled = enabled;
        if (this.ready) {
            this.movie.setHandCursor(enabled);
        }
    },

    setCSSEffects: function (enabled) {
        // enable or disable CSS effects on DOM container
        this.cssEffects = !! enabled;
    },

    receiveEvent: function (eventName, args) {
        // receive event from flash
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');

        // special behavior for certain events
        switch (eventName) {
        case 'load':
            // movie claims it is ready, but in IE this isn't always the case...
            // bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 1);
                return;
            }

            // firefox on pc needs a "kick" in order to set these in certain cases
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 100);
                this.ready = true;
                return;
            }

            this.ready = true;
            try {
                this.movie.setText(this.clipText);
            } catch (e) {}
            try {
                this.movie.setHandCursor(this.handCursorEnabled);
            } catch (e) {}
            break;

        case 'mouseover':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('hover');
                if (this.recoverActive) {
                    this.domElement.addClass('active');
                }


            }


            break;

        case 'mouseout':
            if (this.domElement && this.cssEffects) {
                this.recoverActive = false;
                if (this.domElement.hasClass('active')) {
                    this.domElement.removeClass('active');
                    this.recoverActive = true;
                }
                this.domElement.removeClass('hover');

            }
            break;

        case 'mousedown':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('active');
            }
            break;

        case 'mouseup':
            if (this.domElement && this.cssEffects) {
                this.domElement.removeClass('active');
                this.recoverActive = false;
            }
            break;
        } // switch eventName
        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];

                if (typeof(func) == 'function') {
                    // actual function reference
                    func(this, args);
                } else if ((typeof(func) == 'object') && (func.length == 2)) {
                    // PHP style object + method, i.e. [myObject, 'myMethod']
                    func[0][func[1]](this, args);
                } else if (typeof(func) == 'string') {
                    // name of function
                    window[func](this, args);
                }
            } // foreach event handler defined
        } // user defined handler for event
    }

};  

$(function(){
//  console.log($('.ab-one').html());
//  console.log($('.ltb-one-title').html());
      // 改变导航页提示字
      $('.ab-one').children('a').each(function(){
        var a = '首页右侧列表',
            b = '频道',
            c = '';
        // 隐藏>
        if($(this).html() == a || $(this).html() == b || $(this).html() == c ){
          $(this).hide().parent('.ab-one').children('a').eq(0).css({'position':'relative','z-index': '10','background-color': 'white','margin-right': '-10px'})
        }
        // 去掉一些栏目的首页显示
        if($(this).html() != '首页'){
          var aaa = $(this).html().replace("首页","");
          $(this).html(aaa)
        }
      })
      // 改变导航页提示字
      $('.ltb-one-title').children('a').each(function(){
        var a = '首页右侧列表',
            b = '频道',
            c = '';
        // 隐藏>
        if($(this).html() == a || $(this).html() == b || $(this).html() == c ){
          $(this).hide().parent('.ltb-one-title').children('a').eq(0).css({'position':'relative','z-index': '10','background-color': 'white','margin-right': '-10px'})
        }
        // 去掉一些栏目的首页显示
        if($(this).html() != '首页'){
          var aaa = $(this).html().replace("首页","");
          $(this).html(aaa)
        }
      })
      
      // 去掉一些栏目的首页显示
      $('.ab-one').children('span').each(function(){
        if($(this).html() != '首页'){
          var aaa = $(this).html().replace("首页","");
          $(this).html(aaa)
        }
      })
      // 去掉一些栏目的首页显示
      $('.ltb-one-title').children('span').each(function(){
        if($(this).html() != '首页'){
          var aaa = $(this).html().replace("首页","");
          $(this).html(aaa)
        }
      })
      console.log('2020-04-07- 16-57')
})



// 判断是否处于4月4号
$(function(){
    // stime 开始时间 etime 结束时间
    // compareTime('2020-4-04 00:00','2020-4-05 00:00')
	function compareTime (stime, etime) {
	      // 转换时间格式，并转换为时间戳
	      function tranDate (time) {
	        return new Date(time.replace(/-/g, '/')).getTime();
	      }
	      // 开始时间
	      let startTime = tranDate(stime);
	      // 结束时间
	      let endTime = tranDate(etime);
	      let thisDate = new Date();
	      // 获取当前时间，格式为 2018-9-10 20:08
	      let currentTime = thisDate.getFullYear() + '-' + (thisDate.getMonth() + 1) + '-' + thisDate.getDate() + ' ' + thisDate.getHours() + ':' + thisDate.getMinutes();
	      let nowTime = tranDate(currentTime);
	      // 如果当前时间处于时间段内，返回true，否则返回false
	      if (nowTime < startTime || nowTime > endTime) {
	        return false;
	      }
	      return true;
	   }
	// 2020-4-04 00:00~2020-4-05 00:00 时间段内
	/*
	if(compareTime('2020-4-04 00:00','2020-4-05 00:00')){
		$('body').addClass('theme_black')
		console.log('添加黑白方案')
	}
	else{
		$('body').removeClass('theme_black')
		console.log('不添加黑白方案')
	}
	*/
})



