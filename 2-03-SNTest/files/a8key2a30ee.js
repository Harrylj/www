define("appmsg/iframe.js",["new_video/ctl.js","pages/version4video.js","biz_common/dom/attr.js","biz_common/dom/event.js"],function(e){
"use strict";
function t(e){
var t=0;
try{
e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight);
var i=e.parentElement;
if(i&&(e.style.height=t+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var o=e.contentWindow.document.getElementsByTagName("html");
o&&o.length&&(o[0].style.overflow="hidden");
}
}catch(n){}
}
function i(e,t){
t===!0?(d.checkOriTime=0,d.orientation!=window.orientation?(d.orientation=window.orientation,
window.mpVideoFullScreent(e)):i(e,!1)):d.checkOriTime<=2&&(d.checkOriTime++,setTimeout(function(){
d.orientation!=window.orientation?(d.checkOriTime=0,d.orientation=window.orientation,
window.mpVideoFullScreent(e)):i(e,!1);
},150));
}
function o(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=d.video_top.length,i=e+d.innerHeight,n=0,c=0;t>c;c++){
var m=d.video_top[c];
m.reported?n++:i>=m.start&&i<=m.end&&(m.reported=!0,r.report({
step:1,
vid:m.vid
}));
}
n==t&&(a.off(window,"scroll",o),d.video_top=d.video_iframe=o=null);
}
{
var n,r=e("new_video/ctl.js"),d={
mpVideoBotH:37,
checkOri:"orientation"in window,
innerHeight:window.innerHeight||document.documentElement.clientHeight,
video_iframe:[],
video_top:[]
},c=e("pages/version4video.js"),m=e("biz_common/dom/attr.js"),s=m.setProperty,a=e("biz_common/dom/event.js"),p=document.getElementsByTagName("iframe");
/MicroMessenger/.test(navigator.userAgent);
}
window.reportVid=[];
for(var u=0,l=p.length;l>u;++u){
n=p[u];
var f=n.getAttribute("data-src")||"",h=n.className||"",v=n.getAttribute("src")||f;
if(!f||"#"==f){
var w=n.getAttribute("data-display-src");
if(w&&(0==w.indexOf("/cgi-bin/readtemplate?t=vote/vote-new_tmpl")||0==w.indexOf("https://mp.weixin.qq.com/cgi-bin/readtemplate?t=vote/vote-new_tmpl"))){
w=w.replace(/&amp;/g,"&");
for(var g=w.split("&"),_=["/mp/newappmsgvote?action=show"],u=0;u<g.length;u++)(0==g[u].indexOf("__biz=")||0==g[u].indexOf("supervoteid="))&&_.push(g[u]);
_.length>1&&(f=_.join("&")+"#wechat_redirect");
}
}
if(c.isShowMpVideo()&&v&&(0==v.indexOf("http://v.qq.com/iframe/player.html")||0==v.indexOf("http://v.qq.com/iframe/preview.html")||0==v.indexOf("https://v.qq.com/iframe/player.html")||0==v.indexOf("https://v.qq.com/iframe/preview.html"))){
f=f.replace(/^https:/,location.protocol),f=f.replace(/^http:/,location.protocol),
f=f.replace(/preview.html/,"player.html");
var x=v.match(/[\?&]vid\=([^&]*)/);
if(!x||!x[1])continue;
var y=x[1],b=document.getElementById("js_content").offsetWidth,O=Math.ceil(3*b/4);
window.reportVid.push(y),d.video_iframe.push({
dom:n,
vid:y
}),v=["/mp/videoplayer?video_h=",O,"&scene=1&source=4&vid=",y,"&mid=",appmsgid,"&idx=",itemidx||idx,"&__biz=",biz,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&version=",version,"&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join(""),
setTimeout(function(e,t,i,o){
return function(){
o.removeAttribute("style"),o.setAttribute("width",e),o.setAttribute("height",t+d.mpVideoBotH),
o.setAttribute("marginWidth",0),o.setAttribute("marginHeight",0),o.style.top="0",
o.setAttribute("src",i);
};
}(b,O,v,n),0);
}else if(f&&(f.indexOf("newappmsgvote")>-1&&h.indexOf("js_editor_vote_card")>=0||0==f.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&h.indexOf("card_iframe")>=0||f.indexOf("appmsgvote")>-1||f.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(f=f.replace(/^http:/,location.protocol),h.indexOf("card_iframe")>=0){
var k=f.replace("#wechat_redirect",["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||"","&child_biz=",biz,"&wxtoken=",window.wxtoken||""].join(""));
reprint_ticket&&(k+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join("")),
n.setAttribute("src",k);
}else{
var A=f.indexOf("#wechat_redirect")>-1,j=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&wxtoken=",window.wxtoken||""].join("");
reprint_ticket?j+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join(""):h.indexOf("vote_iframe")>=0&&(j+=["&mid=",mid,"&idx=",idx].join(""));
var k=A?f.replace("#wechat_redirect",j):f+j;
n.setAttribute("src",k);
}
-1==f.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&!function(e){
e.onload=function(){
t(e);
};
}(n),n.appmsg_idx=u;
}
if(f&&f.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&b>0){
var H=b,q=3*H/4;
n.width=H,n.height=q,n.style.setProperty&&(n.style.setProperty("width",H+"px","important"),
n.style.setProperty("height",q+"px","important"));
}
}
var T="onorientationchange"in window?"orientationchange":"resize";
if(a.on(window,T,function(){
for(var e=document.getElementsByTagName("iframe"),t=0,o=e.length;o>t;t++){
var n=e[t],r=n.getAttribute("src");
r&&-1!=r.indexOf("/mp/videoplayer")&&n.className.indexOf("iframe_full_video")>=0&&setTimeout(function(e){
return function(){
d.checkOri?i(e,!0):window.mpVideoFullScreent(e);
};
}(n),0);
}
},!1),a.on(window,"resize",function(){
for(var e=document.getElementsByTagName("iframe"),t=0,i=e.length;i>t;t++){
var o=e[t],n=o.getAttribute("src");
n&&-1!=n.indexOf("/mp/videoplayer")&&setTimeout(function(e){
return function(){
var t=document.getElementById("js_content").offsetWidth,i=Math.ceil(3*t/4)+d.mpVideoBotH;
e.setAttribute("width",t),e.setAttribute("height",i);
};
}(o),100);
}
},!1),window.resetMpVideoH=function(e){
var t=document.getElementById("js_content").offsetWidth,i=Math.ceil(3*t/4)+d.mpVideoBotH;
return e.setAttribute("width",t),e.setAttribute("height",i),s(e,"position","static","important"),
!1;
},window.mpVideoFullScreent=function(e){
d.orientation=window.orientation||0;
var t=window.innerHeight,i=window.innerWidth,o=0;
if(d.checkOri&&90==Math.abs(d.orientation)){
var n=t;
t=i,i=n,o=0;
}
(e.getAttribute("height")!=t||e.getAttribute("width")!=i)&&setTimeout(function(){
s(e,"position","absolute","important"),e.setAttribute("width",i),e.setAttribute("height",t),
setTimeout(function(){
s(e,"position","fixed","important");
},20);
},0);
},window.iframe_reload=function(){
for(var e=0,i=p.length;i>e;++e){
n=p[e];
var o=n.getAttribute("src");
o&&(o.indexOf("newappmsgvote")>-1||o.indexOf("appmsgvote")>-1)&&t(n);
}
},"getElementsByClassName"in document)for(var B,E=document.getElementsByClassName("video_iframe"),u=0;B=E.item(u++);)B.setAttribute("scrolling","no"),
B.style.overflow="hidden";
d.video_iframe.length>0&&setTimeout(function(){
for(var e=d.video_iframe,t=document.getElementById("js_article"),i=0,n=e.length;n>i;i++){
var r=e[i];
if(!r||!r.dom)return;
for(var c=r.dom,m=c.offsetHeight,s=0;c&&t!==c;)s+=c.offsetTop,c=c.offsetParent;
d.video_top.push({
start:s+m/2,
end:s+m/2+d.innerHeight,
reported:!1,
vid:r.vid
});
}
o(),a.on(window,"scroll",o);
},0);
});define("appmsg/review_image.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
function t(e,t){
a.invoke("imagePreview",{
current:e,
urls:t
},function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
});
}
function i(e){
var i=[],a=e.container,n=e.imgs||[];
if(a)for(var o=a.getElementsByTagName("img")||[],p=0,m=o.length;m>p;p++)n.push(o.item(p));
for(var p=0,m=n.length;m>p;p++){
var c=n[p],d=c.getAttribute("data-src")||c.getAttribute("src"),u=c.getAttribute("data-type");
if(d){
for(;-1!=d.indexOf("?tp=webp");)d=d.replace("?tp=webp","");
c.dataset&&c.dataset.s&&d.isCDN()&&(d=d.replace(/\/640$/,"/0"),d=d.replace(/\/640\?/,"/0?")),
d.isCDN()&&(d=s.addParam(d,"wxfrom","3",!0)),e.is_https_res&&(d=d.http2https()),
u&&(d=s.addParam(d,"wxtype",u,!0)),i.push(d),function(e){
r.on(c,"click",function(){
return t(e,i),!1;
});
}(d);
}
}
}
var r=e("biz_common/dom/event.js"),a=e("biz_wap/jsapi/core.js"),s=e("biz_common/utils/url/parse.js");
return e("appmsg/cdn_img_lib.js"),i;
});define("appmsg/outer_link.js",["biz_common/dom/event.js"],function(e){
"use strict";
function n(e){
var n=e.container;
if(!n)return!1;
for(var r=n.getElementsByTagName("a")||[],i=0,o=r.length;o>i;++i)!function(n){
var i=r[n],o=i.getAttribute("href");
if(!o)return!1;
var a=0,c=i.innerHTML;
/^[^<>]+$/.test(c)?a=1:/^<img[^>]*>$/.test(c)&&(a=2),!!e.changeHref&&(o=e.changeHref(o,a)),
t.on(i,"click",function(){
return location.href=o,!1;
},!0);
}(i);
}
var t=e("biz_common/dom/event.js");
return n;
});define("biz_wap/jsapi/core.js",[],function(){
"use strict";
document.domain="qq.com";
var n=window.__moon_report||function(){},o=8,i={
ready:function(i){
var t=function(){
try{
i&&i();
}catch(t){
throw n([{
offset:o,
log:"ready",
e:t
}]),t;
}
};
"undefined"!=typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?t():top.window.document.addEventListener?top.window.document.addEventListener("WeixinJSBridgeReady",t,!1):top.window.document.attachEvent&&(top.window.document.attachEvent("WeixinJSBridgeReady",t),
top.window.document.attachEvent("onWeixinJSBridgeReady",t));
},
invoke:function(i,t,e){
this.ready(function(){
return"object"!=typeof top.window.WeixinJSBridge?(alert("请在微信中打开此链接！"),!1):void top.window.WeixinJSBridge.invoke(i,t,function(){
try{
e&&e.apply(window,arguments);
}catch(i){
throw n([{
offset:o,
log:"invoke",
e:i
}]),i;
}
});
});
},
call:function(i){
this.ready(function(){
if("object"!=typeof top.window.WeixinJSBridge)return!1;
try{
top.window.WeixinJSBridge.call(i);
}catch(t){
throw n([{
offset:o,
log:"call",
e:t
}]),t;
}
});
},
on:function(i,t){
this.ready(function(){
return"object"==typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.on?void top.window.WeixinJSBridge.on(i,function(){
try{
t&&t.apply(window,arguments);
}catch(i){
throw n([{
offset:o,
log:"on",
e:i
}]),i;
}
}):!1;
});
}
};
return i;
});define("biz_common/dom/event.js",[],function(){
"use strict";
function e(e,t,n,o){
a.isPc||a.isWp?i(e,"click",o,t,n):i(e,"touchend",o,function(e){
if(-1==a.tsTime||+new Date-a.tsTime>200)return a.tsTime=-1,!1;
var n=e.changedTouches[0];
return Math.abs(a.y-n.clientY)<=5&&Math.abs(a.x-n.clientX)<=5?t.call(this,e):void 0;
},n);
}
function t(e,t){
if(!e||!t||e.nodeType!=e.ELEMENT_NODE)return!1;
var n=e.webkitMatchesSelector||e.msMatchesSelector||e.matchesSelector;
return n?n.call(e,t):(t=t.substr(1),e.className.indexOf(t)>-1);
}
function n(e,n,i){
for(;e&&!t(e,n);)e=e!==i&&e.nodeType!==e.DOCUMENT_NODE&&e.parentNode;
return e;
}
function i(t,i,o,r,c){
var s,d,u;
return"input"==i&&a.isPc,t?("function"==typeof o&&(c=r,r=o,o=""),"string"!=typeof o&&(o=""),
t==window&&"load"==i&&/complete|loaded/.test(document.readyState)?r({
type:"load"
}):"tap"==i?e(t,r,c,o):(s=function(e){
var t=r(e);
return t===!1&&(e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()),
t;
},o&&"."==o.charAt(0)&&(u=function(e){
var i=e.target||e.srcElement,r=n(i,o,t);
return r?(e.delegatedTarget=r,s(e)):void 0;
}),d=u||s,r[i+"_handler"]=d,t.addEventListener?void t.addEventListener(i,d,!!c):t.attachEvent?void t.attachEvent("on"+i,d,!!c):void 0)):void 0;
}
function o(e,t,n,i){
if(e){
var o=n[t+"_handler"]||n;
return e.removeEventListener?void e.removeEventListener(t,o,!!i):e.detachEvent?void e.detachEvent("on"+t,o,!!i):void 0;
}
}
var r=navigator.userAgent,a={
isPc:/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),
isWp:/Windows\sPhone/i.test(r),
tsTime:-1
};
return a.isPc||i(document,"touchstart",function(e){
var t=e.changedTouches[0];
a.x=t.clientX,a.y=t.clientY,a.tsTime=+new Date;
}),{
on:i,
off:o,
tap:e
};
});define("appmsg/copyright_report.js",["biz_common/dom/event.js"],function(e){
"use strict";
function t(e){
var t=["/mp/copyrightreport?action=report&biz=",biz,"&scene=",e.scene,"&ori_username=",source_username,"&user_uin=",user_uin,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&t=",Math.random()].join(""),o=new Image;
o.src=t.substr(0,1024);
}
function o(){
var e=__appmsgCgiData;
if("2"==e.copyright_stat){
for(var t=r("copyright_info"),o=r("js_article");t&&o!==t;)c.copyright_top+=t.offsetTop,
t=t.offsetParent;
i.on(window,"scroll",n);
}
}
function n(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+c.innerHeight>c.copyright_top&&(t({
scene:"1",
card_pos:"0"
}),i.off(window,"scroll",n),n=c.copyright_top=null);
}
function r(e){
return document.getElementById(e);
}
var i=e("biz_common/dom/event.js"),c={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
copyright_top:0
};
return{
card_click_report:t,
card_pv_report:o
};
});define("appmsg/cache.js",["biz_wap/jsapi/core.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function i(){
o();
}
function n(e,i,n,o){
0>o||setTimeout(function(){
"avg"==e?a.setAvg(i,n,o):a.setSum(i,n,o),a.send();
},1150);
}
function o(){
var e=write_sceen_time-window.logs.pagetime.html_begin,i=Math.random()>=.8,o=!1;
try{
var a=t(decodeURIComponent(window.uin));
o=Math.ceil(a/100)%2!=0?!0:!1;
}catch(s){
o=!1;
}
if(window.isInWeixinApp()&&o){
for(var m=(location.href.replace(/\&key\=.*$/g,"#rd"),[]),f=document.getElementsByTagName("link"),u=0;u<f.length;u++)"stylesheet"==f[u].rel&&m.push(f[u].href);
r.invoke("cache",{
disable:!1,
appId:c,
resourceList:m
},function(o){
o&&"cache:ok"==o.err_msg&&i&&n("avg",27822,49,e);
});
}else window.isInWeixinApp()&&i&&n("avg",27822,47,e);
}
function t(e){
var i,n,o,t,r={},a=0,c=0,s="",m=String.fromCharCode,f=e.length,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(i=0;64>i;i++)r[u.charAt(i)]=i;
for(o=0;f>o;o++)for(n=r[e.charAt(o)],a=(a<<6)+n,c+=6;c>=8;)((t=a>>>(c-=8)&255)||f-2>o)&&(s+=m(t));
return s;
}
var r=e("biz_wap/jsapi/core.js"),a=e("biz_common/utils/monitor.js"),c="wx3be6367203f983ac";
i();
});define("appmsg/pay_for_reading.js",["biz_common/dom/class.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/pay.js","biz_common/utils/spin.js"],function(e){
"use strict";
function t(e){
e&&(e.style.display="block");
}
function a(e){
e&&(e.style.display="none");
}
function s(e){
m=!0,r.addClass(d.pay,"disabled"),t(d.toast),i({
url:"/mp/payforread?action=pay",
type:"POST",
data:{
appmsgid:appmsgid,
__biz:biz,
idx:idx,
fee:e,
timestamp:pay_timestamp
},
success:function(e){
try{
e=JSON.parse(e);
}catch(s){
e={},l.src="/mp/jsreport?key=42&content=type:jsonparseerr&r="+Math.random();
}
if(e&&e.base_resp){
var r=+e.base_resp.ret;
if(0==r)n(e.package_info);else{
switch(m=!1,r){
case-6:
alert("操作过于频繁，请稍后重试");
break;

case 155001:
t(d.tips),o.on(d.tipsOK,"touchend",function i(t){
a(d.tips),n(e.package_info),t.preventDefault(),o.off(d.tipsOK,"touchend",i);
});
break;

case 155002:
alert("重复付费");
break;

case 155003:
alert("该文章已关闭付费，可以免费阅读了"),location.reload();
break;

case 155004:
alert("该帐号已被封，不能进行支付");
break;

case 155005:
alert("该文章已被删除");
break;

case 155006:
alert("该文章已被取消原创声明，不需要支付");
break;

case 268502026:
alert("你今日的微信支付已达上限，请择日再付费");
break;

case 268502027:
alert("该公众号已达到微信支付的收款最高限额，不能再进行付费");
break;

case 268502028:
alert("该公众号今日的收款额度已达上限，请择日再付费");
break;

case 268502029:
alert("该公众号已达到微信支付的收款限额，不能再进行付费");
break;

default:
alert("系统错误，请重试");
}
l.src="/mp/jsreport?key=42&content=type:resperr;ret:"+r+"&r="+Math.random();
}
}
},
error:function(){
m=!1,alert("系统错误，请重试"),l.src="/mp/jsreport?key=42&content=type:ajaxerr&r="+Math.random();
},
complete:function(){
r.removeClass(d.pay,"disabled"),a(d.toast);
}
});
}
function n(e){
e.success=function(){
m=!1,location.reload();
},e.error=function(e){
m=!1,-1==e.indexOf(":cancel")&&(l.src="/mp/jsreport?key=43&content=type:jsapierr;msg:"+e+"&r="+Math.random());
},p.pay(e);
}
if(document.getElementById("js_pay_area")){
var r=e("biz_common/dom/class.js");
if(!window.uin||!window.key||!/micromessenger/i.test(window.navigator.userAgent)||/WindowsWechat/i.test(window.navigator.userAgent))return document.getElementById("js_pay_desc").innerText="文章已设置需要付费才能阅读，请在手机微信内进行付费",
void r.addClass(document.getElementById("js_pay_btn"),"disabled");
var o=e("biz_common/dom/event.js"),i=e("biz_wap/utils/ajax.js"),p=e("biz_wap/jsapi/pay.js"),c=e("biz_common/utils/spin.js"),d={
pay:document.getElementById("js_pay_btn"),
tips:document.getElementById("js_pay_tips"),
tipsOK:document.getElementById("js_pay_tips_ok"),
toast:document.getElementById("js_pay_toast")
},m=!1,l=new Image;
!function(){
{
var e=document.getElementById("js_pay_spinner");
new c({
top:"38%",
lines:10,
width:4,
length:8,
radius:8,
color:"#FFF"
}).spin(e);
}
}(),o.on(d.pay,"tap",function(){
s(pay_fee);
});
}
});define("appmsg/async.js",["biz_common/utils/string/html.js","appmsg/a_tpl.html.js","appmsg/img_copyright_tpl.html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_common/tmpl.js","biz_wap/utils/storage.js","pages/version4video.js","appmsg/cdn_img_lib.js","biz_common/utils/url/parse.js","appmsg/a.js","appmsg/like.js","appmsg/comment.js","appmsg/reward_entry.js","appmsg/iframe.js"],function(require,exports,module){
"use strict";
function saveCopy(e){
var t={};
for(var r in e)if(e.hasOwnProperty(r)){
var i=e[r],a=typeof i;
i="string"==a?i.htmlDecode():i,"object"==a&&(i=saveCopy(i)),t[r]=i;
}
return t;
}
function img_copyright(e){
if(e&&e.img_copy_info&&e.img_copy_info.list){
for(var t={},r=e.img_copy_info.list,i=window.__appmsgCgiData.copyright_stat,a=window.__appmsgCgiData.source_biz,n=0,o=r.length;o>n;n++){
var s=r[n];
if(2==s.type){
if(2==i&&a==s.source_uin)continue;
t[s.img_url]={
source_nickname:s.source_nickname,
source_uin:s.source_uin
};
}
}
for(var p=document.getElementsByTagName("img"),n=0,o=p.length;o>n;n++){
var s=p[n],d=s.getAttribute("data-backsrc")||s.getAttribute("data-src")||"";
if(t[d]){
var m=document.createElement("div");
m.innerHTML=TMPL.tmpl(img_copyright_tpl,t[d]);
var c=m.children[0],l=s.parentNode,_=l.insertBefore(c,s),f=_.childNodes[0];
_.insertBefore(s,f);
}
}
}
}
function fillVedio(e){
if(vedio_iframes&&vedio_iframes.length>0)for(var t,r,i,a=0,n=vedio_iframes.length;n>a;++a)t=vedio_iframes[a],
r=t.iframe,i=t.src,e&&(i=i.replace(/\&encryptVer=[^\&]*/gi,""),i=i.replace(/\&platform=[^\&]*/gi,""),
i=i.replace(/\&cKey=[^\&]*/gi,""),i=i+"&encryptVer=6.0&platform=61001&cKey="+e),
r.setAttribute("src",i);
}
function fillData(e){
var t=e.adRenderData||{
advertisement_num:0
};
if(!t.flag&&t.advertisement_num>0){
var r=t.advertisement_num,i=t.advertisement_info;
window.adDatas.num=r;
for(var a=0;r>a;++a){
var n=null,o=i[a];
if(o.biz_info=o.biz_info||{},o.app_info=o.app_info||{},o.pos_type=o.pos_type||0,
o.logo=o.logo||"",100==o.pt)n={
usename:o.biz_info.user_name,
pt:o.pt,
url:o.url,
traceid:o.traceid,
adid:o.aid,
ticket:o.ticket,
is_appmsg:!0
};else if(102==o.pt)n={
appname:o.app_info.app_name,
versioncode:o.app_info.version_code,
pkgname:o.app_info.apk_name,
androiddownurl:o.app_info.apk_url,
md5sum:o.app_info.app_md5,
signature:o.app_info.version_code,
rl:o.rl,
traceid:o.traceid,
pt:o.pt,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};else if(101==o.pt)n={
appname:o.app_info.app_name,
app_id:o.app_info.app_id,
icon_url:o.app_info.icon_url,
appinfo_url:o.app_info.appinfo_url,
rl:o.rl,
traceid:o.traceid,
pt:o.pt,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};else if(103==o.pt||104==o.pt||2==o.pt&&o.app_info){
var s=o.app_info.down_count||0,p=o.app_info.app_size||0,d=o.app_info.app_name||"",m=o.app_info.category,c=["万","百万","亿"];
if(s>=1e4){
s/=1e4;
for(var l=0;s>=10&&2>l;)s/=100,l++;
s=s.toFixed(1)+c[l]+"次";
}else s=s.toFixed(1)+"次";
p>=1024?(p/=1024,p=p>=1024?(p/1024).toFixed(2)+"MB":p.toFixed(2)+"KB"):p=p.toFixed(2)+"B",
m=m?m[0]||"其他":"其他";
for(var _=["-","(",":",'"',"'","：","（","—","“","‘"],f=-1,u=0,g=_.length;g>u;++u){
var w=_[u],v=d.indexOf(w);
-1!=v&&(-1==f||f>v)&&(f=v);
}
-1!=f&&(d=d.substring(0,f)),o.app_info._down_count=s,o.app_info._app_size=p,o.app_info._category=m,
o.app_info.app_name=d,n={
appname:o.app_info.app_name,
app_rating:o.app_info.app_rating||0,
app_id:o.app_info.app_id,
channel_id:o.app_info.channel_id,
md5sum:o.app_info.app_md5,
rl:o.rl,
pkgname:o.app_info.apk_name,
androiddownurl:o.app_info.apk_url,
versioncode:o.app_info.version_code,
appinfo_url:o.app_info.appinfo_url,
traceid:o.traceid,
pt:o.pt,
url:o.url,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};
}else if(105==o.pt){
var h=o.card_info.card_id||"",y=o.card_info.card_ext||"";
y=y.htmlDecode();
try{
y=JSON.parse(y),y.outer_str=o.card_info.card_outer_id||"",y=JSON.stringify(y);
}catch(b){
y="{}";
}
n={
card_id:h,
card_ext:y,
pt:o.pt,
ticket:o.ticket||"",
url:o.url,
rl:o.rl,
tid:o.traceid,
type:o.type,
adid:o.aid,
is_appmsg:!0
};
}
var j=o.image_url;
require("appmsg/cdn_img_lib.js");
var x=require("biz_common/utils/url/parse.js");
j&&j.isCDN()&&(j=j.replace(/\/0$/,"/640"),j=j.replace(/\/0\?/,"/640?"),o.image_url=x.addParam(j,"wxfrom","50",!0)),
adDatas.ads["pos_"+o.pos_type]={
a_info:o,
adData:n
};
}
var k=function(e){
var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
"undefined"!=typeof e&&(t=e);
10>=t&&(z.style.display="block",DomEvent.off(window,"scroll",k));
},q=document.getElementById("js_bottom_ad_area"),z=document.getElementById("js_top_ad_area"),D=adDatas.ads;
for(var E in D)if(0==E.indexOf("pos_")){
var n=D[E],o=!!n&&n.a_info;
if(n&&o)if(0==o.pos_type)q.innerHTML=TMPL.tmpl(a_tpl,o);else if(1==o.pos_type){
z.style.display="none",z.innerHTML=TMPL.tmpl(a_tpl,o),DomEvent.on(window,"scroll",k);
var I=0;
window.localStorage&&(I=1*localStorage.getItem(E)||0),window.scrollTo(0,I),k(I);
}
}
require("appmsg/a.js");
}
var O=e.appmsgstat||{};
window.appmsgstat||(window.appmsgstat=O),O.show&&(!function(){
var e=document.getElementById("js_read_area3"),t=document.getElementById("like3");
e.style.display="block",t.style.display="inline",O.liked&&Class.addClass(t,"praised"),
t.setAttribute("like",O.liked?"1":"0");
var r=document.getElementById("likeNum3"),i=document.getElementById("readNum3"),a=O.read_num,n=O.like_num;
a||(a=1),n||(n="赞"),parseInt(a)>1e5?a="100000+":"",parseInt(n)>1e5?n="100000+":"",
i&&(i.innerHTML=a),r&&(r.innerHTML=n);
}(),require("appmsg/like.js")),1==e.comment_enabled&&require("appmsg/comment.js"),
-1==ua.indexOf("WindowsWechat")&&-1!=ua.indexOf("MicroMessenger")&&e.reward&&(rewardEntry=require("appmsg/reward_entry.js"),
rewardEntry.handle(e.reward,getCountPerLine()));
}
function getAsyncData(){
var is_need_ticket="";
vedio_iframes&&vedio_iframes.length>0&&(is_need_ticket="&is_need_ticket=1");
var is_need_ad=1,_adInfo=null;
if(window.localStorage)try{
var key=[biz,sn,mid,idx].join("_"),_ad=adLS.get(key);
_adInfo=_ad.info;
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var _adInfoSaveTime=_ad.time,_now=+new Date;
_adInfo&&18e4>_now-1*_adInfoSaveTime&&1*_adInfo.advertisement_num>0?is_need_ad=0:adLS.remove(key);
}catch(e){
is_need_ad=1,_adInfo=null;
}
(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger")||inwindowwx)&&(is_need_ad=0);
var screen_num=Math.ceil(document.body.scrollHeight/(document.documentElement.clientHeight||window.innerHeight)),both_ad=screen_num>=2?1:0;
ajax({
url:"/mp/getappmsgext?__biz="+biz+"&appmsg_type="+appmsg_type+"&mid="+mid+"&sn="+sn+"&idx="+idx+"&scene="+source+"&title="+encodeURIComponent(msg_title.htmlDecode())+"&ct="+ct+"&devicetype="+devicetype.htmlDecode()+"&version="+version.htmlDecode()+"&f=json&r="+Math.random()+is_need_ticket+"&is_need_ad="+is_need_ad+"&comment_id="+comment_id+"&is_need_reward="+is_need_reward+"&both_ad="+both_ad+"&reward_uin_count="+(is_need_reward?3*getCountPerLine():0),
type:"POST",
async:!0,
success:function(ret){
var tmpret=ret;
if(ret)try{
try{
ret=eval("("+tmpret+")");
}catch(e){
var img=new Image;
return void(img.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=3&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key3]"+encodeURIComponent(tmpret)+"&r="+Math.random()).substr(0,1024));
}
if(ret&&ret.base_resp&&ret.base_resp.wxtoken&&(window.wxtoken=ret.base_resp.wxtoken),
window.fromWeixinCached&&require("appmsg/iframe.js"),fillVedio(ret.appmsgticket?ret.appmsgticket.ticket:""),
img_copyright(ret),ret.ret)return;
var adRenderData={};
if(0==is_need_ad)adRenderData=_adInfo,adRenderData||(adRenderData={
advertisement_num:0
});else{
if(ret.advertisement_num>0&&ret.advertisement_info){
var d=ret.advertisement_info;
adRenderData.advertisement_info=saveCopy(d);
}
adRenderData.advertisement_num=ret.advertisement_num;
}
1==is_need_ad&&(window._adRenderData=adRenderData),fillData({
adRenderData:adRenderData,
appmsgstat:ret.appmsgstat,
comment_enabled:ret.comment_enabled,
reward:{
reward_total:ret.reward_total_count,
reward_head_imgs:ret.reward_head_imgs||[],
can_reward:ret.can_reward,
timestamp:ret.timestamp
}
});
}catch(e){
var img=new Image;
return img.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(e.toString())+"&r="+Math.random()).substr(0,1024),
void(console&&console.error(e));
}
},
error:function(){
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
}
});
}
function getCountPerLine(){
return DomEvent.on(window,"resize",function(){
onResize(),rewardEntry&&rewardEntry.render(getCountPerLine());
}),onResize();
}
function onResize(){
var e=window.innerWidth||document.documentElement.clientWidth;
try{
e=document.getElementById("page-content").getBoundingClientRect().width;
}catch(t){}
var r=30,i=34,a=Math.floor(.9*(e-r)/i);
return document.getElementById("js_reward_inner")&&(document.getElementById("js_reward_inner").style.width=a*i+"px"),
getCountPerLine=function(){
return a;
},a;
}
require("biz_common/utils/string/html.js");
var a_tpl=require("appmsg/a_tpl.html.js"),img_copyright_tpl=require("appmsg/img_copyright_tpl.html.js"),iswifi=!1,ua=navigator.userAgent,in_mm=-1!=ua.indexOf("MicroMessenger"),inwindowwx=-1!=navigator.userAgent.indexOf("WindowsWechat"),DomEvent=require("biz_common/dom/event.js"),offset=200,ajax=require("biz_wap/utils/ajax.js"),Class=require("biz_common/dom/class.js"),TMPL=require("biz_common/tmpl.js"),LS=require("biz_wap/utils/storage.js"),rewardEntry,adLS=new LS("ad"),iframes=document.getElementsByTagName("iframe"),iframe,js_content=document.getElementById("js_content"),vedio_iframes=[],w=js_content.offsetWidth,h=3*w/4;
window.logs.video_cnt=0;
for(var i=0,len=iframes.length;len>i;++i){
iframe=iframes[i];
var src=iframe.getAttribute("data-src")||"",realsrc=iframe.getAttribute("src")||src;
if(realsrc){
var Version4video=require("pages/version4video.js");
if(!Version4video.isShowMpVideo()&&(0==realsrc.indexOf("http://v.qq.com/iframe/player.html")||0==realsrc.indexOf("https://v.qq.com/iframe/player.html")||0==realsrc.indexOf("http://v.qq.com/iframe/preview.html")||0==realsrc.indexOf("https://v.qq.com/iframe/preview.html"))||0==realsrc.indexOf("http://z.weishi.com/weixin/player.html")){
-1==realsrc.indexOf("http://z.weishi.com/weixin/player.html")&&-1==src.indexOf("http://z.weixin.com/weixin/player.html")&&(src=src.replace(/^https:/,location.protocol),
src=src.replace(/^http:/,location.protocol),src=src.replace(/preview.html/,"player.html"),
realsrc=realsrc.replace(/^https:/,location.protocol),realsrc=realsrc.replace(/^http:/,location.protocol),
realsrc=realsrc.replace(/preview.html/,"player.html")),realsrc=realsrc.replace(/width=\d+/g,"width="+w),
realsrc=realsrc.replace(/height=\d+/g,"height="+h),in_mm&&(0==realsrc.indexOf("http://v.qq.com/iframe/player.html")||0==realsrc.indexOf("https://v.qq.com/iframe/player.html"))||in_mm&&(0==realsrc.indexOf("http://v.qq.com/iframe/preview.html")||0==realsrc.indexOf("https://v.qq.com/iframe/preview.html"))?vedio_iframes.push({
iframe:iframe,
src:realsrc
}):iframe.setAttribute("src",realsrc),iframe.width=w,iframe.height=h,iframe.style.setProperty&&(iframe.style.setProperty("width",w+"px","important"),
iframe.style.setProperty("height",h+"px","important")),window.logs.video_cnt++;
continue;
}
}
}
window.adDatas={
ads:{},
num:0
};
var js_toobar=document.getElementById("js_toobar3"),innerHeight=window.innerHeight||document.documentElement.clientHeight,onScroll=function(){
var e=window.pageYOffset||document.documentElement.scrollTop,t=js_toobar.offsetTop;
e+innerHeight+offset>=t&&(getAsyncData(),DomEvent.off(window,"scroll",onScroll));
};
iswifi?(DomEvent.on(window,"scroll",onScroll),onScroll()):getAsyncData();
});define("biz_wap/ui/lazyload_img.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/dom/attr.js","biz_common/ui/imgonepx.js"],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=e+40,n=this.offset||20,r=0;
if("wifi"==window.networkType){
var s={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(s=this.lazyloadHeightWhenWifi()),n=Math.max(s.bottom*e,n),
r=Math.max(s.top*e,r);
}
for(var l=+new Date,d=[],u=this.sw,f=this,w=0,p=t.length;p>w;w++)!function(t,e){
var s=t.el.offsetTop,l=t.src;
if(l){
var f=r,w=n;
-1!=l.indexOf("wx_fmt=gif")&&c&&(f=0,w=20),!t.show&&(i>=s&&i<=s+t.height+f||s>i&&i+o+w>s)&&(e.inImgRead&&(i>=s&&i<=s+t.height||s>i&&i+o>s)&&e.inImgRead(l,networkType),
e.changeSrc&&(l=e.changeSrc(t.el,l)),t.el.onerror=function(){
var t=this;
!!e.onerror&&e.onerror(l,t);
},t.el.onload=function(){
var t=this;
h(t,"height","auto","important"),t.getAttribute("_width")?h(t,"width",t.getAttribute("_width"),"important"):h(t,"width","auto","important"),
!!e.onload&&e.onload(l,t);
},m(t.el,"src",l),d.push(l),t.show=!0,h(t.el,"visibility","visible","important")),
a.isWp&&1*t.el.width>u&&(t.el.width=u);
}
}(t[w],f);
d.length>0&&this.detect&&this.detect({
time:l,
loadList:d,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,r=0;
o.currentStyle?r=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(r=getComputedStyle(o).width),
this.sw=1*r.replace("px","");
for(var s=0,d=t.length;d>s;s++){
var c=t.item(s),u=m(c,n);
if(u){
var f=100;
if(c.dataset&&c.dataset.ratio){
var w=1*c.dataset.ratio,p=1*c.dataset.w||a;
"number"==typeof w&&w>0?(p=a>=p?p:a,f=p*w,c.style.width&&c.setAttribute("_width",c.style.width),
h(c,"width",p+"px","important"),h(c,"visibility","visible","important"),c.setAttribute("src",l)):h(c,"visibility","hidden","important");
}else h(c,"visibility","hidden","important");
h(c,"height",f+"px","important"),e.push({
el:c,
src:u,
height:f,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
var e=this,o=e.timer;
clearTimeout(o),e.timer=setTimeout(function(){
i.call(e,t);
},300);
}
function n(t){
r.on(window,"scroll",function(i){
o.call(t,i);
}),r.on(window,"load",function(i){
e.call(t,i);
}),r.on(document,"touchmove",function(i){
o.call(t,i);
});
}
var a=t("biz_wap/utils/mmversion.js"),r=t("biz_common/dom/event.js"),s=t("biz_common/dom/attr.js"),m=s.attr,h=s.setProperty,l=t("biz_common/ui/imgonepx.js"),d=new Date,c=(d.getHours(),
!0);
return n;
});define("appmsg/share.js",["biz_common/utils/string/html.js","appmsg/cdn_img_lib.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","biz_wap/utils/mmversion.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(i){
"use strict";
function e(i,e){
var n="";
""!=tid&&(n="tid="+tid+"&aid=54");
var t=i.split("?")[1]||"";
if(t=t.split("#")[0],""!=t){
var o=[t,"scene="+e,"srcid="+srcid];
return""!=n&&o.push(n),t=o.join("&"),i.split("?")[0]+"?"+t+"#"+(i.split("#")[1]||"");
}
}
function n(i,e,n){
var t=i.split("?").pop();
if(t=t.split("#").shift(),""!=t){
var o=[t,"action_type="+n,"scene="+window.source,"vid="+("undefined"!=typeof window.reportVid?window.reportVid.join(";"):""),"musicid="+("undefined"!=typeof window.reportMid?window.reportMid.join(";"):""),"voiceid="+("undefined"!=typeof window.reportVoiceid?window.reportVoiceid.join(";"):"")].join("&");
r({
url:"/mp/appmsg/show",
type:"POST",
data:o
});
}
}
function t(i,e){
return i.isCDN()&&(i=o.addParam(i,"wxfrom",e,!0)),i;
}
i("biz_common/utils/string/html.js"),i("appmsg/cdn_img_lib.js");
var o=(i("biz_common/dom/event.js"),i("biz_common/utils/url/parse.js")),s=i("biz_wap/utils/mmversion.js"),r=i("biz_wap/utils/ajax.js"),m=i("biz_wap/jsapi/core.js");
m.call("hideToolbar"),m.call("showOptionMenu");
var a=msg_title.htmlDecode(),d=(msg_source_url.htmlDecode(),""),l=msg_cdn_url,c=msg_link.htmlDecode(),a=msg_title.htmlDecode(),u=msg_desc.htmlDecode();
u=u||c,u=u.replace(/<br\/>/g,"\n"),idx>1&&document.getElementById("js_content")&&1446652800>ct&&(u=document.getElementById("js_content").innerHTML.replace(/<\/?[^>]*\/?>/g,"").htmlDecode().replace(/^(\s*)|(\s*)$/g,"").substr(0,54)),
l.isCDN()&&(l=l.replace(/\/0$/,"/300")),"1"==is_limit_user&&m.call("hideOptionMenu"),
m.on("menu:share:appmessage",function(i){
var o=1,s=t(l,"1");
i&&"favorite"==i.scene&&(o=24,s=t(l,"4")),m.invoke("sendAppMessage",{
appid:d,
img_url:s,
img_width:"640",
img_height:"640",
link:e(c,o),
desc:u,
title:a
},function(){
n(c,fakeid,o);
});
}),m.on("menu:share:timeline",function(){
var i=l;
s.isIOS||(i=t(l,"2")),n(c,fakeid,2),m.invoke("shareTimeline",{
img_url:i,
img_width:"640",
img_height:"640",
link:e(c,2),
desc:u,
title:a
},function(){});
});
m.on("menu:share:weiboApp",function(){
m.invoke("shareWeiboApp",{
img_url:l,
link:e(c,3),
title:a
},function(){
n(c,fakeid,3);
});
}),m.on("menu:share:facebook",function(){
n(c,fakeid,4),m.invoke("shareFB",{
img_url:l,
img_width:"640",
img_height:"640",
link:e(c,4),
desc:u,
title:a
},function(){});
}),m.on("menu:share:QZone",function(){
var i=t(l,"6");
n(c,fakeid,5),m.invoke("shareQZone",{
img_url:i,
img_width:"640",
img_height:"640",
link:e(c,22),
desc:u,
title:a
},function(){});
}),m.on("menu:share:qq",function(){
var i=t(l,"7");
n(c,fakeid,5),m.invoke("shareQQ",{
img_url:i,
img_width:"640",
img_height:"640",
link:e(c,23),
desc:u,
title:a
},function(){});
}),m.on("menu:share:email",function(){
n(c,fakeid,5),m.invoke("sendEmail",{
content:e(c,5),
title:a
},function(){});
});
});define("biz_wap/utils/mmversion.js",[],function(){
"use strict";
function n(){
var n=/MicroMessenger\/([\d\.]+)/i,t=s.match(n);
return t&&t[1]?t[1]:!1;
}
function t(t,r,i){
var e=n();
if(e){
e=e.split("."),t=t.split("."),e.pop();
for(var o,s,u=f["cp"+r],c=0,a=Math.max(e.length,t.length);a>c;++c){
o=e[c]||0,s=t[c]||0,o=parseInt(o)||0,s=parseInt(s)||0;
var p=f.cp0(o,s);
if(!p)return u(o,s);
}
return i||0==r?!0:!1;
}
}
function r(n){
return t(n,0);
}
function i(n,r){
return t(n,1,r);
}
function e(n,r){
return t(n,-1,r);
}
function o(){
return u?"ios":a?"android":"unknown";
}
var s=navigator.userAgent,u=/(iPhone|iPad|iPod|iOS)/i.test(s),c=/Windows\sPhone/i.test(s),a=/(Android)/i.test(s),f={
"cp-1":function(n,t){
return t>n;
},
cp0:function(n,t){
return n==t;
},
cp1:function(n,t){
return n>t;
}
};
return{
get:n,
cpVersion:t,
eqVersion:r,
gtVersion:i,
ltVersion:e,
getPlatform:o,
isWp:c,
isIOS:u,
isAndroid:a
};
});define("appmsg/cdn_img_lib.js",[],function(){
"use strict";
String.prototype.http2https=function(){
return this.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qlogo.cn/");
},String.prototype.https2http=function(){
return this.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/");
},String.prototype.isCDN=function(){
return 0==this.indexOf("http://mmbiz.qpic.cn/")||0==this.indexOf("https://mmbiz.qlogo.cn/");
};
});define("biz_common/utils/url/parse.js",[],function(){
"use strict";
function r(r){
var n=r.length,e=r.indexOf("?"),t=r.indexOf("#");
t=-1==t?n:t,e=-1==e?t:e;
var s=r.substr(0,e),a=r.substr(e+1,t-e-1),i=r.substr(t+1);
return{
host:s,
query_str:a,
hash:i
};
}
function n(n,e){
var t=r(n),s=t.query_str,a=[];
for(var i in e)e.hasOwnProperty(i)&&a.push(i+"="+encodeURIComponent(e[i]));
return a.length>0&&(s+=(""!=s?"&":"")+a.join("&")),t.host+(""!=s?"?"+s:"")+(""!=t.hash?"#"+t.hash:"");
}
function e(r,n,e,t){
r=r||location.href,-1!=r.indexOf("&")&&-1==r.indexOf("?")&&(r=r.replace("&","?"));
var s=new RegExp("([\\?&]"+n+"=)[^&#]*");
return r.match(s)?t===!0?r.replace(s,"$1"+e):r:-1==r.indexOf("?")?r+"?"+n+"="+e:r+"&"+n+"="+e;
}
return{
parseUrl:r,
join:n,
addParam:e
};
});define("biz_wap/utils/device.js",[],function(){
"use strict";
function s(s){
{
var e=s.match(/MQQBrowser\/(\d+\.\d+)/i),r=s.match(/QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i)||s.match(/V1_AND_SQ_([\d\.]+)/),i=s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/)||s.match(/MicroMessenger\/((\d+)\.(\d+))/),t=s.match(/Mac\sOS\sX\s(\d+\.\d+)/),n=s.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/),a=s.match(/MiuiBrowser\/(\d+\.\d+)/i),d=s.match(/MI-ONE/),h=s.match(/MI PAD/),w=s.match(/UCBrowser\/(\d+\.\d+(\.\d+\.\d+)?)/)||s.match(/\sUC\s/),c=s.match(/IEMobile(\/|\s+)(\d+\.\d+)/)||s.match(/WPDesktop/),b=s.match(/(ipod).*\s([\d_]+)/i),u=s.match(/(ipad).*\s([\d_]+)/i),p=s.match(/(iphone)\sos\s([\d_]+)/i),v=s.match(/Chrome\/(\d+\.\d+)/),m=s.match(/Mozilla.*Linux.*Android.*AppleWebKit.*Mobile Safari/),f=s.match(/(android)\s([\d\.]+)/i);
s.indexOf("HTC")>-1;
}
if(o.browser=o.browser||{},o.os=o.os||{},window.ActiveXObject){
var l=6;
(window.XMLHttpRequest||s.indexOf("MSIE 7.0")>-1)&&(l=7),(window.XDomainRequest||s.indexOf("Trident/4.0")>-1)&&(l=8),
s.indexOf("Trident/5.0")>-1&&(l=9),s.indexOf("Trident/6.0")>-1&&(l=10),o.browser.ie=!0,
o.browser.version=l;
}else s.indexOf("Trident/7.0")>-1&&(o.browser.ie=!0,o.browser.version=11);
f&&(this.os.android=!0,this.os.version=f[2]),b&&(this.os.ios=this.os.ipod=!0,this.os.version=b[2].replace(/_/g,".")),
u&&(this.os.ios=this.os.ipad=!0,this.os.version=u[2].replace(/_/g,".")),p&&(this.os.iphone=this.os.ios=!0,
this.os.version=p[2].replace(/_/g,".")),n&&(this.os.windows=!0,this.os.version=n[2]),
t&&(this.os.Mac=!0,this.os.version=t[1]),s.indexOf("lepad_hls")>0&&(this.os.LePad=!0),
h&&(this.os.MIPAD=!0),e&&(this.browser.MQQ=!0,this.browser.version=e[1]),r&&(this.browser.MQQClient=!0,
this.browser.version=r[1]),i&&(this.browser.WeChat=!0,this.browser.version=i[1]),
a&&(this.browser.MIUI=!0,this.browser.version=a[1]),w&&(this.browser.UC=!0,this.browser.version=w[1]||0/0),
c&&(this.browser.IEMobile=!0,this.browser.version=c[2]),m&&(this.browser.AndriodBrowser=!0),
d&&(this.browser.M1=!0),v&&(this.browser.Chrome=!0,this.browser.version=v[1]),this.os.windows&&(this.os.win64="undefined"!=typeof navigator.platform&&"win64"==navigator.platform.toLowerCase()?!0:!1);
var M={
iPad7:"iPad; CPU OS 7",
LePad:"lepad_hls",
XiaoMi:"MI-ONE",
SonyDTV:"SonyDTV",
SamSung:"SAMSUNG",
HTC:"HTC",
VIVO:"vivo"
};
for(var g in M)this.os[g]=-1!==s.indexOf(M[g]);
o.os.phone=o.os.phone||/windows phone/i.test(s),this.os.getNumVersion=function(){
return parseFloat(o.os.version,"10");
},this.os.hasTouch="ontouchstart"in window,this.os.hasTouch&&this.os.ios&&this.os.getNumVersion()<6&&(this.os.hasTouch=!1),
o.browser.WeChat&&o.browser.version<5&&(this.os.hasTouch=!1),o.browser.getNumVersion=function(){
return parseFloat(o.browser.version,"10");
},o.browser.isFFCanOcx=function(){
return o.browser.firefox&&o.browser.getNumVersion()>=3?!0:!1;
},o.browser.isCanOcx=function(){
return!(!o.os.windows||!o.browser.ie&&!o.browser.isFFCanOcx()&&!o.browser.webkit);
},o.browser.isNotIESupport=function(){
return!!o.os.windows&&(!!o.browser.webkit||o.browser.isFFCanOcx());
},o.userAgent={},o.userAgent.browserVersion=o.browser.version,o.userAgent.osVersion=o.os.version,
delete o.userAgent.version;
}
var o={};
s.call(o,window.navigator.userAgent);
var e=function(){
var s=window.navigator.userAgent,e=null;
if(o.os.android){
if(o.browser.MQQ&&o.browser.getNumVersion()>=4.2)return!0;
if(-1!=s.indexOf("MI2"))return!0;
if(o.os.version>="4"&&(e=s.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/))&&e[1]>=4.2)return!0;
if(o.os.version>="4.1")return!0;
}
return!1;
}(),r=function(){
var s=document.createElement("video");
if("function"==typeof s.canPlayType){
if("probably"==s.canPlayType('video/mp4; codecs="mp4v.20.8"'))return!0;
if("probably"==s.canPlayType('video/mp4; codecs="avc1.42E01E"')||"probably"==s.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))return!0;
}
return!1;
}();
return o.canSupportVideo=r||e,o.canSupportVideoMp4=r,o.canSupportH5Video=e,o;
});define("biz_wap/jsapi/a8key.js",["biz_wap/jsapi/core.js"],function(n){
"use strict";
var e,i=n("biz_wap/jsapi/core.js"),o=!1,t={},a=function(){
"undefined"!=typeof window.pass_ticket&&window.pass_ticket?(t.onAlreadyHasA8Key&&t.onAlreadyHasA8Key.call(A),
u()):0==window.isInWeixinApp()?(t.onOutOfWeixinApp&&t.onOutOfWeixinApp.call(A),u()):(o=1,
i.ready(c));
},c=function(){
window.isWeixinCached?w(u):(t.onNoCacheFuncWeixin&&t.onNoCacheFuncWeixin.call(A),
u());
},w=function(n){
if(t.onJSAPIGetA8KeyStart&&t.onJSAPIGetA8KeyStart.call(A),window.getA8KeyUrl)t.onJSAPIGetA8KeyEnd&&t.onJSAPIGetA8KeyEnd.call(A),
n(window.getA8KeyUrl);else{
var e=!1,o=setTimeout(function(){
e=!0,t.onJSAPIGetA8KeyTimeout&&t.onJSAPIGetA8KeyTimeout.call(A),n("");
},1500);
i.on("onGetA8KeyUrl",function(i){
o&&clearTimeout(o),e||(t.onJSAPIGetA8KeyEnd&&t.onJSAPIGetA8KeyEnd.call(A,i),n(i.url));
});
}
},u=function(n){
var i=!1;
if(n){
var o=getQueryFromURL(n);
window.uin=o.uin||window.uin,window.key=o.key||window.key,window.pass_ticket=o.pass_ticket||window.pass_ticket,
i=!0;
}
e&&e(i);
},A={
isPageCached:o
};
return A.config=function(n){
return t=n||{},A;
},A.onReady=function(n){
e=n,a();
},A;
});