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
  var num = 5; //页数展示个数，只能为奇数
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
  <span>共 " + _nPageSum + " 条</span>\
  <span>共 " + _nPageCount + " 页</span>\
  <span>当前第 " + _nCurrIndex + " 页</span>\
  <span>跳转至</span>\
  <input id=\"pagination-input\" type=\"text\" onkeyup=\"if(event.keyCode == 13 ) pagination_go('" + _sPageName + "','" + _sPageExt + "','" + _nPageCount + "') \"  >\
  <span>页</span>\
  <a href=\"javascript:;\" onclick=\"pagination_go('" + _sPageName + "','" + _sPageExt + "','" + _nPageCount + "')\">GO</a>\
  </span>";

  document.getElementById(_divName).innerHTML = con_text;
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

function copyUrl() {
  var clipBoardContent = this.location.href;
  window.clipboardData.setData("Text", clipBoardContent);
  alert("复制成功!");
}