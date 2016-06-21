define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js"],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+top.window.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function o(){
return document.domain="qq.com",-1!=top.location.href.indexOf("&_newvideoplayer=0")?!1:-1!=top.location.href.indexOf("&_newvideoplayer=1")?!0:a.canSupportVideo&&_.inWechat?_.is_ios||_.is_android&&_.is_x5?!0:!1:(top.window._hasReportCanSupportVideo||a.canSupportVideo||!_.inWechat||(top.window._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function n(){
{
var e=top.location.href;
top.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=top.sn&&"f62e1cb98630008303667f77c17c43d7"!=top.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=top.sn?-1!=e.indexOf("&_videoad=1")?!0:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:"54"==top.window.appmsg_type?!1:top.window.__appmsgCgiData.can_use_page&&(_.is_ios||_.is_android)?!0:r.showAd()?!0:!1:!1;
}
function t(){
var e=top.location.href;
return top.window.user_uin?-1!=e.indexOf("&_proxy=1")?!0:-1!=e.indexOf("&_proxy=0")?!1:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:_.inWechat&&_.is_android&&_.is_x5&&_.wechatVer>="6.2.2"?!0:_.inWechat&&_.is_ios&&(-1!=w.indexOf("MicroMessenger/6.2.4")||_.wechatVer>="6.2.4")?!0:!1:!1;
}
function s(){
return c.networkType;
}
var d=e("biz_common/dom/event.js"),p=e("biz_wap/jsapi/core.js"),a=e("biz_wap/utils/device.js"),r=e("new_video/ctl.js"),w=top.window.navigator.userAgent,c={
networkType:""
},_={};
return function(e){
var i=a.os;
_.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),_.is_android=!!i.android,_.is_wp=!!i.phone,
_.is_pc=!(i.phone||!i.Mac&&!i.windows),_.inWechat=/MicroMessenger/.test(e),_.is_android_phone=_.is_android&&/Mobile/i.test(e),
_.is_android_tablet=_.is_android&&!/Mobile/i.test(e),_.ipad=/iPad/i.test(e),_.iphone=!_.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
_.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var o=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
_.wechatVer=o&&o[1]||0,d.on(window,"load",function(){
if(""==c.networkType&&_.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
p.invoke("getNetworkType",{},function(i){
c.networkType=e[i.err_msg]||"fail";
});
}
},!1);
}(top.window.navigator.userAgent),"undefined"==typeof top.window._hasReportCanSupportVideo&&(top.window._hasReportCanSupportVideo=!1),
{
device:_,
isShowMpVideo:o,
isUseProxy:t,
isUseAd:n,
getNetworkType:s
};
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});define("biz_common/tmpl.js",[],function(){
"use strict";
var n=function(n,t){
var r=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)#>/g,"',$1,'").split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
return r(t);
},t=function(t,r){
var e=document.getElementById(t);
return e?n(e.innerHTML,r):"";
};
return{
render:t,
tmpl:n
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});define("appmsg/a_tpl.html.js",[],function(){
return'<div class="rich_media_extra" id="gdt_area">\n    <# if(pos_type==0){ #>\n    <div class="rich_tips with_line title_tips">\n        <span class="tips">广告</span>\n    </div>\n    <# } #>\n    <div class="js_ad_link extra_link" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>"  data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>">\n        <# if(pt==1){ #>\n        <#=hint_txt#>\n        <img class="icon_arrow_gray" src="<%@GetResFullName($images_path$icon/common/icon_arrow_gray.png)%>">\n        <img class="icon_loading_white icon_after" style="display:none;" id="loading_<#=traceid#>" src="<%@GetResFullName($images_path$icon/common/icon_loading_white.gif)%>">\n        <# }else if(pt==2){ #>\n        <!--第三方logo-->\n        <# if (logo.indexOf("http://mmsns.qpic.cn/") == 0){ #>\n        <div class="brand_logo"><img src="<#=logo#>" alt="logo图片"></div>\n        <# } #>\n        <img class="appmsg_banner" src="<#=image_url#>">\n        <# if(watermark_type!=0){ #><i class="promotion_tag"><# if(watermark_type==1){ #>商品推广<# }else if (watermark_type==2){ #>活动推广<# }else if (watermark_type==3){ #>应用下载<# } #></i><# } #>\n        <# }else if(pt==7){ #>\n        <!-- 图文 -->\n        <div class="preview_group preview_card">\n            <div class="preview_group_inner card_inner">\n                <div class="preview_group_info">\n                    <strong class="preview_group_title2"><#=hint_txt#></strong>\n                    <div class="preview_group_desc"><#=ad_desc#></div>\n                    <img src="<#=image_url#>" alt="" class="preview_card_avatar">\n                </div>\n            </div>\n        </div>\n        <# }else if(pt==100){ #>\n        <div class="preview_group">\n            <div class="preview_group_inner">\n                <div class="preview_group_info append_btn">\n                    <strong class="preview_group_title"><#=biz_info.nick_name#></strong>\n                    <div class="preview_group_desc"><#=hint_txt#></div>\n                    <# if(!!biz_info.head_img){ #>\n                    <img src="<#=biz_info.head_img#>" alt="" class="preview_group_avatar br_radius">\n                    <# }else{ #>\n                    <img class="preview_group_avatar br_radius" src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" alt="<#=biz_info.nick_name#>">\n                    <# } #>                                 \n                </div>\n                <div class="preview_group_opr">\n                    <a id="js_view_profile_<#=pos_type#>" <# if(biz_info.is_subscribed == 0){ #>style="display:none"<# } #> class="btn btn_inline btn_primary btn_line js_ad_btn" href="javascript:void(0);">查看</a>\n                    <a id="js_add_contact_<#=pos_type#>" data-url="<#=url#>" data-type="<#=type#>" data-tid="<#=traceid#>" data-rl="<#=rl#>" <# if(biz_info.is_subscribed ==1){ #>style="display:none"<# } #> class="btn btn_inline btn_line  btn_primary js_ad_btn" href="javascript:void(0);">关注</a>\n                </div>\n            </div>\n        </div>\n        <# }else if(pt==102){ #>\n        <div class="preview_group">\n            <div class="preview_group_inner">\n                <div class="preview_group_info append_btn">\n                    <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                    <div class="preview_group_desc"><#=hint_txt#></div>\n                    <img src="<#=app_info.icon_url#>" alt="" class="preview_group_avatar br_radius">\n                </div>\n                <div class="preview_group_opr">\n                    <a id="js_app_action_<#=pos_type#>" class="btn btn_inline btn_primary js_ad_btn btn_download" href="javascript:void(0);">下载</a>\n                </div>\n            </div>\n        </div>\n        <# }else if(pt==101){ #>\n        <div class="preview_group preview_card">\n            <div class="preview_group_inner card_inner">                            \n                <div class="preview_group_info append_btn">\n                    <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                    <div class="preview_group_desc"><#=hint_txt#></div>\n                    <img src="<#=app_info.icon_url#>" alt="" class="preview_card_avatar">                               \n                </div>\n                <div class="preview_group_opr">\n                    <a href="javascript:void(0);" id="js_app_action_<#=pos_type#>" class="btn btn_inline btn_primary js_ad_btn">下载</a>\n                </div>\n            </div>                        \n        </div>\n        <# }else if(pt==103||pt==104){ #>\n        <div class="preview_group obvious_app">\n            <div class="preview_group_inner">\n                <div class="pic_app">\n                    <img src="<#=image_url#>" alt="">\n                </div>\n                <div class="info_app">\n                    <p class="name_app"><#=app_info.app_name#></p>\n                    <# if(pt==103){ #>\n                    <p class="profile_app" style="display:none;"><span class="fun_exp"><#=app_info._category#></span><em>|</em><span class="compacity"><#=app_info._app_size#></span></p>\n                    <# } else if(pt==104){ #>\n                    <p class="profile_app" style="display:none;"><span class="fun_exp"><#=app_info._app_size#></span><em>|</em><span class="compacity"><#=app_info._down_count#></span></p>\n                    <# } #>\n                    <!--星级评分-->\n                    <p class="grade_app" id="js_app_rating_<#=pos_type#>">\n                        <!--\n                            半星：star_half\n                            一星：star_one\n                            一星半：star_one_half\n                            二星：star_two\n                            三星：star_three\n                            四星：star_four\n                            五星：star_five\n                        -->\n                        <span class="js_stars stars" style="display:none;"></span>\n                        <!--暂无评分\n                        <span class="scores">3.5</span>\n                        -->\n                        <span class="js_scores scores"></span>\n                    </p>\n                    <div class="dm_app">\n                        <a href="javascript:void(0);" id="js_appdetail_action_<#=pos_type#>" class="ad_btn btn_download js_ad_btn">下载</a>\n                        <p class="extra_info">来自<# if(pt==103){ #>App Store<# }else{ #>腾讯应用宝<# } #></p>\n                    </div>\n                </div>\n            </div>            \n        </div>\n        <# }else if(pt==105){ #>\n        <div class="mpda_card cardticket">\n            <div class="cardticket_hd cell">\n                <div class="cell_hd">\n                    <span class="radius_avatar">\n                        <img class="avatar" src="<#=card_info.card_logo_url#>">\n                    </span>\n                </div>\n                <div class="cell_bd cell_primary"><#=card_info.card_title#></div>\n                <div class="cell_ft">\n                    <a href="javascript:void(0);"  class="btn btn_plain_primary btn_inline js_ad_btn" id="js_card_action_<#=pos_type#>">领券</a>\n                </div>\n            </div>\n            <div class="cardticket_ft">\n                <div class="cardticket_theme"></div>\n                <p class="cardticket_source tips_global"><#=card_info.card_brand_name#></p>\n            </div>\n        </div>\n        <# } #>\n    </div>\n</div>';
});define("biz_common/ui/imgonepx.js",[],function(){
"use strict";
return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
});define("biz_common/dom/attr.js",[],function(){
"use strict";
function t(t,e,n){
return"undefined"==typeof n?t.getAttribute(e):t.setAttribute(e,n);
}
function e(t,e,n,r){
t.style.setProperty?(r=r||null,t.style.setProperty(e,n,r)):"undefined"!=typeof t.style.cssText&&(r=r?"!"+r:"",
t.style.cssText+=";"+e+":"+n+r+";");
}
return{
attr:t,
setProperty:e
};
});define("biz_wap/utils/ajax.js",["biz_common/utils/url/parse.js"],function(e){
"use strict";
function t(e){
var t={};
return"undefined"!=typeof uin&&(t.uin=uin),"undefined"!=typeof key&&(t.key=key),
"undefined"!=typeof pass_ticket&&(t.pass_ticket=pass_ticket),"undefined"!=typeof wxtoken&&(t.wxtoken=wxtoken),
"undefined"!=typeof top.window.devicetype&&(t.devicetype=top.window.devicetype),
"undefined"!=typeof top.window.clientversion&&(t.clientversion=top.window.clientversion),
t.x5=r?"1":"0",n.join(e,t);
}
function o(e){
var o=(e.type||"GET").toUpperCase(),n=t(e.url),r=!!e.mayAbort,f="undefined"==typeof e.async?!0:e.async,p=new XMLHttpRequest,l=null,y=null;
if("object"==typeof e.data){
var w=e.data;
y=[];
for(var m in w)w.hasOwnProperty(m)&&y.push(m+"="+encodeURIComponent(w[m]));
y=y.join("&");
}else y="string"==typeof e.data?e.data:null;
p.open(o,n,f),p.onreadystatechange=function(){
if(3==p.readyState&&e.received&&e.received(p),4==p.readyState){
p.onreadystatechange=null;
var t=p.status;
if(t>=200&&400>t)try{
e.success&&e.success(p.responseText);
}catch(o){
throw i({
offset:a,
e:o
}),o;
}else{
try{
e.error&&e.error(p);
}catch(o){
throw i({
offset:c,
e:o
}),o;
}
if(t||!r){
var u=window.__ajaxtest||"0";
i({
offset:s,
log:"ajax_network_error["+t+"]["+u+"]: "+n+";host:"+top.location.host,
e:""
});
}
}
clearTimeout(l);
try{
e.complete&&e.complete();
}catch(o){
throw i({
offset:d,
e:o
}),o;
}
e.complete=null;
}
},"POST"==o&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
p.setRequestHeader("X-Requested-With","XMLHttpRequest"),"undefined"!=typeof e.timeout&&(l=setTimeout(function(){
p.abort("timeout");
try{
e.complete&&e.complete();
}catch(t){
throw i({
offset:d,
e:t
}),t;
}
e.complete=null,i({
offset:u,
log:"ajax_timeout_error: "+n,
e:""
});
},e.timeout));
try{
p.send(y);
}catch(h){
e.error&&e.error();
}
}
var n=e("biz_common/utils/url/parse.js"),r=-1!=navigator.userAgent.indexOf("TBS/"),i=window.__moon_report||function(){},a=3,s=4,c=5,u=6,d=7;
return o;
});define("biz_common/utils/string/html.js",[],function(){
"use strict";
return String.prototype.html=function(t){
var e=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","¥","&amp;","&"];
t&&e.reverse();
for(var n=0,r=this;n<e.length;n+=2)r=r.replace(new RegExp(e[n],"g"),e[n+1]);
return r;
},String.prototype.htmlEncode=function(){
return this.html(!0);
},String.prototype.htmlDecode=function(){
return this.html(!1);
},String.prototype.getPureText=function(){
return this.replace(/<\/?[^>]*\/?>/g,"");
},{
htmlDecode:function(t){
return t.htmlDecode();
},
htmlEncode:function(t){
return t.htmlEncode();
},
getPureText:function(t){
return t.getPureText();
}
};
});define("appmsg/report.js",["biz_common/dom/event.js","biz_common/utils/huatuo.js","biz_wap/utils/ajax.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function t(){
var t=(e("biz_wap/utils/mmversion.js"),e("biz_common/utils/report.js"),e("biz_common/utils/monitor.js")),a=!1,s=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),s&&s.timing&&s.timing.navigationStart?(a=s.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=write_sceen_time-a,s=first_sceen__time-a,d=page_endtime-a,m=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-a:void 0,w=window.logs.a8key_ready_time?window.logs.a8key_ready_time-a:void 0,g=c&&c.connectEnd-c.connectStart,p=c&&c.secureConnectionStart&&c.connectEnd-c.secureConnectionStart;
if(window.logs.pagetime.wtime=i,window.logs.pagetime.ftime=s,window.logs.pagetime.ptime=d,
window.logs.pagetime.jsapi_ready_time=m,window.logs.pagetime.a8key_ready_time=w,
Math.random()<.01){
var c=window.performance&&window.performance.timing,u={
28:d,
29:s,
30:i,
31:m,
32:w,
33:g,
34:p
};
o.setFlags(1636,1,1);
for(var f in u)!u[f]||u[f]<0||o.setPoint(f,u[f]);
o.report();
}
if(need_report_cost&&r({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1,1,"+d,"1,2,"+s,"1,3,"+i,"1,4,"+m,"1,5,"+w,"1,6,"+g,"1,7,"+p].join(";")
}
}),!(Math.random()>.2||0>i||0>s||0>d)){
if(m&&t.setAvg(27822,15,m),w&&t.setAvg(27822,17,w),d>=15e3)return t.setAvg(27822,29,d),
void t.send();
t.setAvg(27822,1,d).setAvg(27822,3,i).setAvg(27822,5,s),window.isWeixinCached&&t.setAvg(27822,19,d),
e()?(t.setAvg(27822,9,d),window.isWeixinCached&&t.setAvg(27822,23,d)):"wifi"==networkType?(t.setAvg(27822,7,d),
window.isWeixinCached&&t.setAvg(27822,21,d)):"2g/3g"==networkType?(t.setAvg(27822,11,d),
window.isWeixinCached&&t.setAvg(27822,25,d)):(t.setAvg(27822,13,d),window.isWeixinCached&&t.setAvg(27822,28,d)),
t.send();
}
}(),function(){
window.logs.jsapi_ready_fail&&(t.setSum(24729,55,window.logs.jsapi_ready_fail),t.send());
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content"),n=window.innerHeight||document.documentElement.clientHeight;
if(t&&!(Math.random()>.1)){
var o=function(){
var r=window.pageYOffset||document.documentElement.scrollTop,a=e.offsetTop;
if(r+n>=a){
for(var d,m,w=t.getElementsByTagName("img"),g={},p=[],c=0,u=0,f=0,l=0,v=w.length;v>l;++l){
var _=w[l];
d=_.getAttribute("data-src")||_.getAttribute("src"),m=_.getAttribute("src"),d&&(d.isCDN()?u++:f++,
c++,g[m]={});
}
if(p.push("1="+1e3*c),p.push("2="+1e3*u),p.push("3="+1e3*f),s.getEntries){
var h=s.getEntries(),y=window.logs.img.download,j=[0,0,0],A=[0,0,0];
c=u=0;
for(var l=0,b=h.length;b>l;++l){
var k=h[l],T=k.name;
T&&"img"==k.initiatorType&&g[T]&&(T.isCDN()&&(A[0]+=k.duration,u++),j[0]+=k.duration,
c++,g[T]={
startTime:k.startTime,
responseEnd:k.responseEnd
});
}
j[0]>0&&c>0&&(j[2]=j[0]/c),A[0]>0&&u>0&&(A[2]=A[0]/u);
for(var l in y)if(y.hasOwnProperty(l)){
for(var M=y[l],E=0,x=0,z=0,C=0,S=0,v=M.length;v>S;++S){
var d=M[S];
if(g[d]&&g[d].startTime&&g[d].responseEnd){
var N=g[d].startTime,W=g[d].responseEnd;
E=Math.max(E,W),x=x?Math.min(x,N):N,d.isCDN()&&(z=Math.max(E,W),C=x?Math.min(x,N):N);
}
}
j[1]+=Math.round(E-x),A[1]+=Math.round(z-C);
}
for(var I=4,P=7,l=0;3>l;l++)j[l]=Math.round(j[l]),A[l]=Math.round(A[l]),j[l]>0&&(p.push(I+l+"="+j[l]),
"wifi"==networkType?p.push(I+l+6+"="+j[l]):"2g/3g"==networkType&&p.push(I+l+12+"="+j[l])),
A[l]>0&&(p.push(P+l+"="+A[l]),"wifi"==networkType?p.push(P+l+6+"="+A[l]):"2g/3g"==networkType&&p.push(P+l+12+"="+A[l]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",o,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("biz_common/dom/event.js"),n=navigator.userAgent,o=e("biz_common/utils/huatuo.js"),r=e("biz_wap/utils/ajax.js");
e("appmsg/cdn_img_lib.js"),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],t();
});
}else t();
},!1);
});define("biz_common/dom/class.js",[],function(){
"use strict";
function s(s,a){
return s.classList?s.classList.contains(a):s.className.match(new RegExp("(\\s|^)"+a+"(\\s|$)"));
}
function a(s,a){
s.classList?s.classList.add(a):this.hasClass(s,a)||(s.className+=" "+a);
}
function e(a,e){
if(a.classList)a.classList.remove(e);else if(s(a,e)){
var c=new RegExp("(\\s|^)"+e+"(\\s|$)");
a.className=a.className.replace(c," ");
}
}
function c(c,l){
s(c,l)?e(c,l):a(c,l);
}
return{
hasClass:s,
addClass:a,
removeClass:e,
toggleClass:c
};
});define("appmsg/report_and_source.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(require,exports,module){
"use strict";
function viewSource(){
var redirectUrl=sourceurl.indexOf("://")<0?"http://"+sourceurl:sourceurl;
if(-1!=redirectUrl.indexOf("mp.weixin.qq.com/s")||-1!=redirectUrl.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var redirectUrlArr=redirectUrl.split("#");
redirectUrl=ParseJs.addParam(redirectUrlArr[0],"scene",25,!0)+(redirectUrlArr[1]?"#"+redirectUrlArr[1]:""),
redirectUrl=redirectUrl.replace(/#rd$/g,"#wechat_redirect");
}else redirectUrl="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(sourceurl);
var opt={
url:"/mp/advertisement_report"+location.search+"&report_type=3&action_type=0&url="+encodeURIComponent(sourceurl)+"&__biz="+biz+"&r="+Math.random(),
type:"GET",
mayAbort:!0,
async:!1
};
return tid?opt.success=function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0==res.ret?location.href=redirectUrl:viewSource();
}:(opt.timeout=2e3,opt.complete=function(){
location.href=redirectUrl;
}),ajax(opt),!1;
}
require("biz_common/utils/string/html.js");
var DomEvent=require("biz_common/dom/event.js"),ParseJs=require("biz_common/utils/url/parse.js"),ajax=require("biz_wap/utils/ajax.js"),title=msg_title.htmlDecode(),sourceurl=msg_source_url.htmlDecode(),js_report_article=document.getElementById("js_report_article3"),JSAPI=require("biz_wap/jsapi/core.js");
DomEvent.tap(js_report_article,function(){
var e=["/mp/infringement?url=",encodeURIComponent(location.href),"&title=",encodeURIComponent(title),"&__biz=",biz].join("");
return location.href=e+"#wechat_redirect",!1;
});
var js_view_source=document.getElementById("js_view_source");
DomEvent.on(js_view_source,"click",function(){
return viewSource(),!1;
});
});define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/cookie.js","appmsg/cdn_img_lib.js","biz_wap/utils/storage.js"],function(e){
"use strict";
function t(e){
for(var t=5381,o=0;o<e.length;o++)t=(t<<5)+t+e.charCodeAt(o),t&=2147483647;
return t;
}
function o(e,t){
if(e&&!(e.length<=0))for(var o,n,i,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,l=0,r=e.length;r>l;++l)o=e[l],
o&&(n=o.getAttribute(t),n&&(i=n.match(a),i&&i[2]&&(w[i[2]]=!0)));
}
function n(e){
for(var t=0,o=f.length;o>t;++t)if(f[t]==e)return!0;
return!1;
}
function i(){
w={},o(document.getElementsByTagName("a"),"href"),o(document.getElementsByTagName("link"),"href"),
o(document.getElementsByTagName("iframe"),"src"),o(document.getElementsByTagName("script"),"src"),
o(document.getElementsByTagName("img"),"src");
var e=[];
for(var t in w)w.hasOwnProperty(t)&&(window.networkType&&"wifi"==window.networkType&&!_&&n(t)&&(_=!0),
e.push(t));
return w={},e.join(",");
}
function a(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,o=document.getElementById("js_content"),n=document.documentElement.clientHeight||window.innerHeight,a=document.body.scrollHeight||document.body.offsetHeight,l=Math.ceil(a/n),m=Math.ceil((o.scrollHeight||o.offsetHeight)/n),d=(window.logs.read_height||t)+n,g=document.getElementById("js_toobar3").offsetTop,w=o.getElementsByTagName("img")||[],f=Math.ceil(d/n)||1,p=document.getElementById("media"),h=50,u=0,y=0,v=0,b=0,T=d+h>g?1:0;
f>l&&(f=l);
var j=function(t){
if(t)for(var o=0,n=t.length;n>o;++o){
var i=t[o];
if(i){
u++;
var a=i.getAttribute("src"),l=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(y++,a.isCDN()&&(v++,-1!=a.indexOf("tp=webp")&&b++),l&&(e["img_"+l+"_cnt"]=e["img_"+l+"_cnt"]||0,
e["img_"+l+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=b||0,e.download_img_cnt=y||0,e.download_cdn_img_cnt=v||0,
e.img_cnt=u||0;
},O=window.appmsgstat||{},x=window.logs.img||{},z=window.logs.pagetime||{},E=x.load||{},k=x.read||{},D=[],B=[],N=0,S=0,I=0;
for(var H in k)H&&0==H.indexOf("http")&&k.hasOwnProperty(H)&&B.push(H);
for(var H in E)H&&0==H.indexOf("http")&&E.hasOwnProperty(H)&&D.push(H);
for(var M=0,P=D.length;P>M;++M){
var Y=D[M];
Y&&Y.isCDN()&&(-1!=Y.indexOf("/0")&&N++,-1!=Y.indexOf("/640")&&S++,-1!=Y.indexOf("/300")&&I++);
}
var e={
__biz:biz,
title:msg_title.htmlDecode(),
mid:mid,
idx:idx,
read_cnt:O.read_num||0,
like_cnt:O.like_num||0,
screen_height:n,
screen_num:m,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:window.logs.video_cnt||0,
read_screen_num:f||0,
is_finished_read:T,
scene:source,
content_len:c.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
img_640_cnt:S,
img_0_cnt:N,
img_300_cnt:I,
wtime:z.wtime||0,
ftime:z.ftime||0,
ptime:z.ptime||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=D.length,
e.wifi_read_imgs_cnt=B.length),window.logs.webplog&&4==window.logs.webplog.total){
var A=window.logs.webplog;
e.webp_total=1,e.webp_lossy=A.lossy,e.webp_lossless=A.lossless,e.webp_alpha=A.alpha,
e.webp_animation=A.animation;
}
if(e.copyright_stat=window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.logs.idkeys){
var C=window.logs.idkeys,J=[];
for(var R in C)if(C.hasOwnProperty(R)){
var q=C[R];
q.val>0&&J.push(R+"_"+q.val);
}
e.idkey=J.join(";");
}
j(!!p&&p.getElementsByTagName("img")),j(w);
var L=(new Date).getDay(),$=i();
(_||0!==user_uin&&Math.floor(user_uin/100)%7==L)&&(e.domain_list=$),_&&(e.html_content=s),
r({
url:"/mp/appmsgreport?action=page_time",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
});
}
e("biz_common/utils/string/html.js");
{
var l=e("biz_common/dom/event.js"),r=e("biz_wap/utils/ajax.js");
e("biz_common/utils/cookie.js");
}
e("appmsg/cdn_img_lib.js");
var s,m=e("biz_wap/utils/storage.js"),d=new m("ad"),g=new m("page_pos"),c={};
!function(){
if(s=document.getElementsByTagName("html"),s&&1==!!s.length){
s=s[0].innerHTML;
var e=s.replace(/[\x00-\xff]/g,""),t=s.replace(/[^\x00-\xff]/g,"");
c.content_length=1*t.length+3*e.length+"<!DOCTYPE html><html></html>".length;
}
window.logs.pageinfo=c;
}();
var w={},_=!1,f=["wap.zjtoolbar.10086.cn","125.88.113.247","115.239.136.61","134.224.117.240","hm.baidu.com","c.cnzz.com","w.cnzz.com","124.232.136.164","img.100msh.net","10.233.12.76","wifi.witown.com","211.137.132.89","qiao.baidu.com","baike.baidu.com"],p=null,h=0,u=msg_link.split("?").pop(),y=t(u);
!function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var t=localStorage.key(e);
t.match(/^\d+$/)?localStorage.removeItem(t):t.match(/^adinfo_/)&&localStorage.removeItem(t),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(l.on(window,"load",function(){
h=1*g.get(y);
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var o=t.offsetTop;
window.scrollTo(0,o-25);
}else window.scrollTo(0,h);
}),l.on(window,"unload",function(){
if(g.set(o,h,+new Date+72e5),window.__ajaxtest="2",window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,o=[biz,sn,mid,idx].join("_");
d.set(o,{
info:e,
time:t
},+new Date+24e4);
}
a();
}),window.logs.read_height=0,l.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(p),p=setTimeout(function(){
h=window.pageYOffset,g.set(y,h,+new Date+72e5);
},500);
}),l.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(p),p=setTimeout(function(){
h=window.pageYOffset,g.set(y,h,+new Date+72e5);
},500);
}));
});define("appmsg/cdn_speed_report.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function n(){
function e(e){
var n=[];
for(var i in e)n.push(i+"="+encodeURIComponent(e[i]||""));
return n.join("&");
}
if(networkType){
var n=window.performance||window.msPerformance||window.webkitPerformance;
if(n&&"undefined"!=typeof n.getEntries){
var i,t,a=100,o=document.getElementsByTagName("img"),s=o.length,p=navigator.userAgent,m=!1;
/micromessenger\/(\d+\.\d+)/i.test(p),t=RegExp.$1;
for(var g=0,w=o.length;w>g;g++)if(i=parseInt(100*Math.random()),!(i>a)){
var d=o[g].getAttribute("src");
if(d&&!(d.indexOf("mp.weixin.qq.com")>=0)){
for(var f,c=n.getEntries(),_=0;_<c.length;_++)if(f=c[_],f.name==d){
r({
type:"POST",
url:"/mp/appmsgpicreport?__biz="+biz+"#wechat_redirect",
data:e({
rnd:Math.random(),
uin:uin,
version:version,
client_version:t,
device:navigator.userAgent,
time_stamp:parseInt(+new Date/1e3),
url:d,
img_size:o[g].fileSize||0,
user_agent:navigator.userAgent,
net_type:networkType,
appmsg_id:window.appmsgid||"",
sample:s>100?100:s,
delay_time:parseInt(f.duration)
})
}),m=!0;
break;
}
if(m)break;
}
}
}
}
}
var i=e("biz_common/dom/event.js"),t=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/ajax.js"),a={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
t.invoke("getNetworkType",{},function(e){
networkType=a[e.err_msg],n();
}),i.on(window,"load",n,!1);
});define("appmsg/voice.js",["biz_common/utils/string/html.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=g("js_content");
return e?(d._oElements=e.getElementsByTagName("mpvoice")||[],d._oElements.length<=0?!1:!0):!1;
}
function t(){
d.musicLen=d._oElements.length;
}
function n(){
for(var e=0,i=0;i<d.musicLen;i++){
var t=d._oElements[i],n={};
n.voiceid=a(decodeURIComponent(t.getAttribute("voice_encode_fileid")||"")),n.voiceid=n.voiceid.replace(/&#61;/g,"="),
n.src=d.srcRoot.replace("#meidaid#",n.voiceid),n.voiceid&&"undefined"!=n.voiceid&&(o(t,n,e),
e++);
}
}
function o(e,i,t){
i.duration=1*e.getAttribute("play_length")||0,i.duration_str=s(i.duration),i.posIndex=t,
i.title=a(decodeURIComponent(e.getAttribute("name")||"")),p.renderPlayer("voice_tpl",i,e,!0),
c(i),d.musicList[i.voiceid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.voiceid+"_"+e.posIndex,t=r(e.title);
e.player=p.init({
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
duration:1*(e.duration/1e3).toFixed(2),
title:t.length>8?t.substr(0,8)+"...":t,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"playing",
playCssDom:g("voice_main_"+i),
playArea:g("voice_main_"+i),
progress:g("voice_progress_"+i)
});
}
function r(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function a(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function s(e){
if(isNaN(e))return"0:00";
var i=new Date(0),t=new Date(1*e),n=t.getHours()-i.getHours(),o=t.getMinutes()+60*n,c="i:ss".replace(/i|I/g,o).replace(/ss|SS/,l(t.getSeconds(),2));
return c;
}
function l(e,i){
for(var t=0,n=i-(e+"").length;n>t;t++)e="0"+e;
return e+"";
}
function g(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var p=e("pages/voice_component.js"),d={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
if(i())return t(),n(),d.musicList;
});define("appmsg/qqmusic.js",["biz_common/utils/string/html.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=o("js_content");
return e?(g._oElements=e.getElementsByTagName("qqmusic")||[],g._oElements.length<=0?!1:!0):!1;
}
function t(){
g.musicLen=g._oElements.length;
}
function n(){
for(var e=0,i=0;i<g.musicLen;i++){
var t=g._oElements[i],n={};
n.musicid=s(t.getAttribute("musicid")||""),n.comment_id=s(t.getAttribute("commentid")||""),
n.musicid&&"undefined"!=n.musicid&&n.comment_id&&"undefined"!=n.comment_id&&(m(t,n,e),
e++);
}
}
function m(e,i,t){
i.media_id=s(e.getAttribute("mid")||""),i.duration=e.getAttribute("play_length")||0,
i.posIndex=t,i.musicImgPart=s(e.getAttribute("albumurl")||""),i.music_img=g.imgroot+i.musicImgPart,
i.audiourl=s(e.getAttribute("audiourl")||""),i.singer=s(e.getAttribute("singer")||""),
i.music_name=s(e.getAttribute("music_name")||""),a.renderPlayer("qqmusic_tpl",i,e,!0),
c(i),g.musicList[i.musicid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.musicid+"_"+e.posIndex,t=e.comment_id+"_"+e.posIndex,n=["http://i.y.qq.com/v8/playsong.html?songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),m=u(e.music_name);
e.player=a.init({
type:0,
comment_id:e.comment_id,
mid:e.media_id,
songId:e.musicid,
duration:1*(e.duration/1e3).toFixed(2),
title:m.length>8?m.substr(0,8)+"...":m,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"QQ音乐",
coverImgUrl:e.music_img,
playingCss:"qqmusic_playing",
playCssDom:o("qqmusic_main_"+t),
playArea:o("qqmusic_play_"+i),
detailUrl:n,
detailArea:o("qqmusic_home_"+i)
});
}
function u(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function s(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function r(){}
function o(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var a=e("pages/voice_component.js"),g={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_68",
musicList:{},
musicLen:0
};
if(i())return t(),n(),r(),g.musicList;
});