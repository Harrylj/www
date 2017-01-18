define("a/android.js",["biz_common/dom/event.js","biz_common/utils/report.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(n){
"use strict";
function a(n){
"undefined"!=typeof d&&d.log&&d.log(n);
}
function e(n,a){
o("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+n+a.report_param);
}
function t(n){
function t(){
d.invoke("getInstallState",{
packageName:s.pkgname
},function(n){
var a=n.err_msg;
a.indexOf("get_install_state:yes")>-1&&(window.clearInterval(y),g=!0,r.innerHTML=T.installed);
});
}
function o(){
j&&d.invoke("queryDownloadTask",{
download_id:j
},function(t){
if(t&&t.state){
if("download_succ"==t.state){
a("download_succ"),e(s.is_appmsg?18:14,n),window.clearInterval(b),k=!1,I=!0,r.innerHTML=T.downloaded;
var o=document.createEvent("MouseEvents");
o.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(o);
}
if("downloading"==t.state)return;
("download_fail"==t.state||"default"==t.state)&&(a("fail, download_state : "+t.state),
window.clearInterval(b),k=!1,alert("下载失败"),r.innerHTML=T.download);
}
});
}
var r=n.btn;
if(!r)return!1;
var l={},s=n.adData,c="",u="",m=s.androiddownurl;
if(m&&m.match){
var _=/&channelid\=([^&]*)/,p=m.match(_);
p&&p[1]&&(c="&channelid="+p[1],s.androiddownurl=m.replace(_,""));
}
n.via&&(u=["&via=ANDROIDWX.YYB.WX.ADVERTISE",n.via].join("."));
var f=!1,w="com.tencent.android.qqdownloader",v=1060125,g=!1,k=!1,I=!1,j=0,b=null,y=null,T={
download:"下载",
downloading:"下载中",
downloaded:"安装",
installed:"已安装"
};
r.innerHTML=T.download,d.ready(function(){
d.invoke("getInstallState",{
packageName:w
},function(n){
var e=n.err_msg;
a("getInstallState @yingyongbao : "+e);
var t=e.lastIndexOf("_")+1,o=e.substring(t);
1*o>=v&&e.indexOf("get_install_state:yes")>-1&&(f=!0);
}),d.invoke("getInstallState",{
packageName:s.pkgname
},function(n){
var e=n.err_msg;
a("getInstallState @"+s.pkgname+" : "+e);
var t=e.lastIndexOf("_")+1,o=e.substring(t);
1*o>=s.versioncode&&e.indexOf("get_install_state:yes")>-1&&(g=!0,r.innerHTML=T.installed);
}),r.addEventListener("click",function(){
if(a("click @js_app_action"),!k){
if(g)return!1;
if(I)return d.invoke("installDownloadTask",{
download_id:j,
file_md5:s.md5sum
},function(n){
var e=n.err_msg;
a("installDownloadTask : "+e),e.indexOf("install_download_task:ok")>-1?y=setInterval(t,1e3):alert("安装失败！");
}),!1;
var m=function(){
return f?(e(s.is_appmsg?16:12,n),void(location.href="tmast://download?oplist=1,2&pname="+s.pkgname+c+u)):void d.invoke("addDownloadTask",{
task_name:s.appname,
task_url:s.androiddownurl,
extInfo:n.task_ext_info,
file_md5:s.md5sum
},function(t){
var i=t.err_msg;
a("addDownloadTask : "+i),i.indexOf("add_download_task:ok")>-1?(e(s.is_appmsg?15:11,n),
k=!0,j=t.download_id,a("download_id : "+j),r.innerHTML=T.downloading,b=setInterval(o,1e3)):alert("调用下载器失败！");
});
};
return s.rl&&s.traceid?l[s.traceid]||(l[s.traceid]=!0,i({
url:"/mp/advertisement_report?report_type=2&type="+s.type+"&url="+encodeURIComponent(s.androiddownurl)+"&tid="+s.traceid+"&rl="+encodeURIComponent(s.rl)+"&__biz="+biz+"&pt="+s.pt+"&r="+Math.random(),
type:"GET",
timeout:1e3,
complete:function(){
l[s.traceid]=!1,m();
},
async:!0
})):m(),!1;
}
});
});
}
var o=(n("biz_common/dom/event.js"),n("biz_common/utils/report.js")),i=n("biz_wap/utils/ajax.js"),d=n("biz_wap/jsapi/core.js");
return t;
});define("a/profile.js",["biz_common/dom/event.js","biz_common/utils/report.js","appmsg/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js"],function(t){
"use strict";
function o(t,o){
a("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+o.report_param);
}
function e(t){
location.href=t;
}
function n(t){
var n=t.adData,p=t.pos_type||0,l={};
t.report_param=t.report_param||"",function(){
function _(t){
{
var o=d.dataset;
"https:"==top.location.protocol?1500:1200;
}
if(o.rl&&o.url&&o.type&&o.tid){
var e=o.tid,n=o.type,i=o.url,a=o.rl;
if(!l[e]){
l[e]=!0;
var c,_,m=!!t&&t.target;
m&&(c=r.getX(m,"js_ad_link extra_link")+t.offsetX,_=r.getY(m,"js_ad_link extra_link")+t.offsetY),
s({
type:n,
report_type:2,
click_pos:0,
url:encodeURIComponent(i),
tid:e,
rl:encodeURIComponent(a),
__biz:biz,
pos_type:p,
pt:100,
pos_x:c,
pos_y:_
},function(){
l[e]=!1,f();
});
}
}else f();
}
var d=t.btnAddContact,m=t.btnViewProfile;
if(d&&d.dataset){
var u=function(i,p){
var s=i.err_msg,r=n.is_appmsg?6:1;
-1!=s.indexOf("ok")?(m.style.display="inline-block",d.style.display="none",r=n.is_appmsg?9:4):"add_contact:added"==s?r=n.is_appmsg?7:2:"add_contact:cancel"==s?r=n.is_appmsg?8:3:(--p,
p>=0?c.invoke("addContact",{
scene:scene,
webtype:"1",
username:n.usename
},function(t){
u(t,p);
}):(s="addContact:fail|msg:"+s+"|uin:"+uin+"|biz:"+biz,a("http://mp.weixin.qq.com/mp/jsreport?key=13&content="+s+"&r="+Math.random()),
e(n.url))),o(r,t);
},f=function(){
o(n.is_appmsg?10:5,t),c.invoke("addContact",{
scene:scene,
webtype:"1",
username:n.usename
},function(t){
u(t,1);
});
};
i.on(d,"click",_);
}
}(),function(){
var o=t.btnViewProfile;
o&&i.on(o,"click",function(){
return e(n.url),!1;
});
}();
}
{
var i=t("biz_common/dom/event.js"),a=t("biz_common/utils/report.js"),p=t("appmsg/a_report.js"),s=p.AdClickReport,r=(t("biz_wap/utils/ajax.js"),
t("biz_wap/utils/position.js")),c=t("biz_wap/jsapi/core.js");
"https:"==top.location.protocol?5:0,window.__report;
}
return n;
});define("a/card.js",["biz_common/dom/event.js","biz_common/utils/report.js","appmsg/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js","biz_wap/jsapi/cardticket.js"],function(t){
"use strict";
function i(t,i){
o("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+i.report_param);
}
function e(t){
var o=t.adData,r=t.pos_type||0,s=o.tid,c=o.type,_=o.url,d=o.rl,l={};
t.report_param=t.report_param||"";
var j=t.btn;
if(j){
a.on(j,"click",function(a){
if(!l[s]){
l[s]=!0;
var j,u,m=!!a&&a.target;
m&&(j=n.getX(m,"js_ad_link extra_link")+a.offsetX,u=n.getY(m,"js_ad_link extra_link")+a.offsetY),
p({
type:c,
report_type:2,
click_pos:0,
url:encodeURIComponent(_),
tid:s,
rl:encodeURIComponent(d),
__biz:biz,
pos_type:r,
pt:100,
pos_x:j,
pos_y:u
},function(){
l[s]=!1,i(37,t),e.openCardDetail(o.card_id,o.card_ext,t);
});
}
return!1;
});
}
}
var a=t("biz_common/dom/event.js"),o=t("biz_common/utils/report.js"),r=t("appmsg/a_report.js"),p=r.AdClickReport,n=(t("biz_wap/utils/ajax.js"),
t("biz_wap/utils/position.js")),s=(t("biz_wap/jsapi/core.js"),t("biz_wap/jsapi/cardticket.js"));
return e.openCardDetail=function(t,e,a){
s.openCardDetail({
card_id:t,
card_ext:e,
success:function(){
!!a&&i(38,a);
},
error:function(){
!!a&&i(39,a),alert("调起卡券错误");
},
access_denied:function(){
!!a&&i(40,a),alert("异常错误[access_denied]");
}
});
},e;
});define("biz_wap/utils/position.js",[],function(){
"use strict";
function t(e,f){
var n=e.offsetLeft;
return e.offsetParent.className!=f&&(n+=t(e.offsetParent,f)),n;
}
function e(t,f){
var n=t.offsetTop;
return t.offsetParent.className!=f&&(n+=e(t.offsetParent,f)),n;
}
return{
getX:t,
getY:e
};
});define("appmsg/a_report.js",["biz_wap/utils/ajax.js"],function(t){
"use strict";
function o(t,o){
var a="https:"==top.location.protocol?1500:1200,e="/mp/advertisement_report?r="+Math.random()+"&",p=[],s=!1;
for(var c in t)t.hasOwnProperty(c)&&p.push(c+"="+t[c]);
e+=p.join("&"),r({
url:e,
mayAbort:!0,
type:"GET",
success:function(){
n&&n(56+i);
},
error:function(){
n&&n(57+i);
},
complete:function(){
s||(s=!0,!!o&&o());
},
async:!0
}),setTimeout(function(){
s||(s=!0,window.__ajaxtest="1",!!o&&o());
},a);
}
var r=t("biz_wap/utils/ajax.js"),n=window.__report,a=top.location.protocol,i="https:"==a?5:0;
return{
AdClickReport:o
};
});define("biz_common/utils/report.js",[],function(){
"use strict";
return function(n){
var e=new Image;
e.src=n;
};
});define("biz_common/utils/huatuo.js",[],function(){
"use strict";
var t=window.performance&&window.performance.timing,n="http://report.huatuo.qq.com/report.cgi?appid=10065&speedparams=",o=t?["unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"]:[],e={
points:[],
setFlags:function(n,r,a){
e.points=["flag1="+n,"flag2="+r,"flag3="+a];
for(var d=0;d<o.length;++d)e.points.push(d+1+"="+t[o[d]]);
},
setPoint:function(t,n){
return this.points.push(t+"="+n),this;
},
report:function(){
var t=this.points.join("&");
t=encodeURIComponent(t),(new Image).src=n+t,e.points=[];
}
};
return e;
});define("biz_common/utils/cookie.js",[],function(){
"use strict";
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t,n){
var o=new Date;
return o.setDate(o.getDate()+(n||1)),n=o.toGMTString(),document.cookie=e+"="+t+";expires="+n,
!0;
}
};
return e;
});define("pages/voice_component.js",["biz_common/dom/event.js","biz_common/tmpl.js","pages/loadscript.js","pages/music_player.js","biz_common/dom/class.js","pages/report.js"],function(t){
"use strict";
function o(t){
this._o={
type:0,
comment_id:"",
src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
debug:!1,
needVioceMutex:!0,
appPlay:!0,
title:"",
singer:"",
epname:"",
coverImgUrl:"",
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
playingCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:""
},this._init(t);
}
function e(t,o,e,i){
h.num++,o.musicSupport=h.musicSupport,o.show_not_support=!1,h.musicSupport||1!=h.num||(o.show_not_support=!0);
var r=document.createElement("div"),n="";
n=i?c.render(t,o):c.tmpl(t,o),r.innerHTML=n;
var p=e.parentNode;
p&&(p.lastChild===e?p.appendChild(r.children[0]):p.insertBefore(r.children[0],e.nextSibling));
}
function i(){
"undefined"==typeof window.reportVoiceid&&(window.reportVoiceid=[]),"undefined"==typeof window.reportMid&&(window.reportMid=[]);
}
function r(){
a.on(window,"unload",n);
}
function n(){
for(var t in h.reportData)y.musicreport({
data:h.reportData[t]
});
}
function p(t){
var o="//open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id=#songid#&mid=#mid#&format=json&app_id=100311669&app_key=55d6cdaee6fb3a41275a48067f8d7638&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
o=o.replace("#mid#",t.mid).replace("#songid#",t.id),d({
url:o,
timeout:3e4,
callbackName:"get_song_info_back",
callback:function(o){
if(!o||"undefined"==typeof o.ret)return void("function"==typeof t.onError&&t.onError({
errcode:1
}));
var e=1;
1001==o.ret?e=0:1002==o.ret?e=2:1003==o.ret?e=3:1004==o.ret&&(e=4),t.onSuc({
status:e
});
},
onerror:function(o){
var e=4;
switch(1*o){
case 400:
e=2;
break;

case 500:
e=3;
break;

default:
e=4;
}
"function"==typeof t.onError&&t.onError({
errcode:e
});
}
});
}
function s(t){
return new o(t);
}
var a=t("biz_common/dom/event.js"),c=t("biz_common/tmpl.js"),d=t("pages/loadscript.js"),u=t("pages/music_player.js"),_=t("biz_common/dom/class.js"),y=t("pages/report.js"),h={
musicSupport:u.getSurportType(),
reportData:{},
posIndex:{},
qqMusiceSongId:"http://thirdparty.gtimg.com/#songId#.m4a?fromtag=38&songid=#songId#",
qqMusiceMid:"http://thirdparty.gtimg.com/C100#mid#.m4a?fromtag=38&songid=#songId#",
num:0
};
return i(),r(),o.prototype._init=function(t){
this._extend(t),this._g={
copyright:-1,
check_copyright:!1
},this._initSrc(),this._initQQmusicLyric(),this._initReportData(),this._initPlayer(),
this._playEvent();
},o.prototype._initSrc=function(){
var t=this._o;
t.src||(0==t.type||1==t.type)&&(t.mid?t.src=h.qqMusiceMid.replace("#mid#",t.mid).replace(/#songId#/g,t.songId||""):t.songId&&(t.src=h.qqMusiceSongId.replace(/#songId#/g,t.songId||"")));
},o.prototype._initQQmusicLyric=function(){
var t=this._o;
t.webUrl=0==t.type||1==t.type?t.webUrl.replace("#songId#",t.songId||"").replace("#referFrom#","music.qq.com"):t.webUrl.replace("#songId#","").replace("#referFrom#","");
},o.prototype._initReportData=function(){
var t=this._o;
2==t.type||3==t.type?window.reportVoiceid.push(t.songId):(0==t.type||1==t.type)&&window.reportMid.push(t.songId),
"undefined"==typeof h.reportData[t.type]&&(h.reportData[t.type]=y.getMusicReportData(t),
h.posIndex[t.type]=0),this._g.posIndex=h.posIndex[t.type]++;
var o=h.reportData[t.type];
o.musicid.push(t.songId),o.commentid.push(t.comment_id),o.hasended.push(0),o.mtitle.push(t.title),
o.detail_click.push(0),o.duration.push(parseInt(1e3*t.duration)),o.errorcode.push(0),
o.play_duration.push(0);
},o.prototype._initPlayer=function(){
h.musicSupport&&(this._o.onStatusChange=this._statusChangeCallBack(),this._o.onTimeupdate=this._timeupdateCallBack(),
this._o.onError=this._errorCallBack(),this.player=new u.init(this._o));
},o.prototype._playEvent=function(){
var t=this,o=this._o,e=this._g;
if(h.musicSupport){
var i=0;
2==o.type||3==o.type?i=3:(0==o.type||1==o.type)&&(i=1),a.tap(o.playArea,function(){
return _.hasClass(o.playCssDom,o.playingCss)?(t.player.stop(),y.report({
type:i,
comment_id:o.comment_id,
voiceid:o.songId,
action:5
})):3==i?t._playMusic(3):1==i&&t._checkCopyright(function(){
t._playMusic(1);
}),!1;
});
}
o.detailUrl&&o.detailArea&&a.tap(o.detailArea,function(){
t._checkCopyright(function(){
h.reportData[o.type].detail_click[e.posIndex]=1,window.location.href=o.detailUrl;
});
});
},o.prototype._checkCopyright=function(t){
var o=this,e=this._o,i=this._g;
return 1*i.copyright===1&&"function"==typeof t?void t():void(this._musicCopyrightWarnning()!==!0&&(i.check_copyright||(i.check_copyright=!0,
p({
id:e.songId,
mid:e.mid,
onSuc:function(e){
return i.check_copyright=!1,i.copyright=1*e.status,1==i.copyright?void("function"==typeof t&&t()):void(o._musicCopyrightWarnning(!0)===!0);
},
onError:function(t){
i.check_copyright=!1,o.player.monitor(1==t.errcode?"copyright_cgi_err":2==t.errcode?"copyright_net_err":3==t.errcode?"copyright_timeout":"copyright_other_err");
}
}))));
},o.prototype._musicCopyrightWarnning=function(t){
var o=this._g;
return 1*o.copyright===0?(alert("该歌曲版权已过期，无法播放"),t===!0&&this.player.monitor("no_copyright"),
!0):1*o.copyright===2?(alert("抱歉，应版权方要求，当前国家或地区暂不提供此歌曲服务"),t===!0&&this.player.monitor("overseas"),
!0):1*o.copyright===3?(alert("该歌曲版权已过期，无法播放"),t===!0&&this.player.monitor("fee"),
!0):1*o.copyright===4?(alert("抱歉，歌曲信息不正确"),t===!0&&this.player.monitor("musicid_error"),
!0):!1;
},o.prototype._playMusic=function(t){
var o=this._o,e=this._g;
this.player.play(0),h.reportData[o.type].hasended[e.posIndex]=1,y.report({
type:t,
comment_id:o.comment_id,
voiceid:o.songId,
action:4
});
},o.prototype._extend=function(t){
for(var o in t)this._o[o]=t[o];
},o.prototype._statusChangeCallBack=function(){
var t=this;
return function(o,e){
t._updatePlayerCss(this,e);
};
},o.prototype._timeupdateCallBack=function(){
var t=this,o=this._o,e=this._g;
return function(i,r){
t._updateProgress(this,r),0!=r&&(h.reportData[o.type].play_duration[e.posIndex]=parseInt(1e3*r));
};
},o.prototype._errorCallBack=function(){
var t=this,o=this._o,e=this._g;
return function(i,r){
h.reportData[o.type].errorcode[e.posIndex]=r,t._updatePlayerCss(this,3);
};
},o.prototype._updatePlayerCss=function(t,o){
var e=this._o,i=e.playCssDom,r=e.progress;
2==o||3==o?(_.removeClass(i,e.playingCss),!!r&&(r.style.width=0)):1==o&&_.addClass(i,e.playingCss);
},o.prototype._updateProgress=function(t,o){
var e=this._o,i=e.progress,r=t.getDuration();
r&&i&&(i.style.width=this._countProgress(r,o));
},o.prototype._countProgress=function(t,o){
return o/t*100+"%";
},{
init:s,
renderPlayer:e
};
});define("new_video/ctl.js",["biz_wap/utils/ajax.js"],function(i){
"use strict";
var e=top.window.user_uin,t=Math.floor(top.window.user_uin/100)%20;
e||(t=-1);
var o=function(){
return t>=0;
};
top.window.__webviewid||(top.window.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var i=top.window.mid,t=top.window.idx,o="";
o=i&&t?i+"_"+t:"";
var d=top.window.__webviewid,w=[e,o,d].join("_");
return w;
},w=function(e){
if(20>t)try{
var w=e.vid||"",n={};
n.__biz=top.window.biz||"",n.vid=w,n.clienttime=+new Date;
var r=top.window.mid,a=top.window.idx,p="";
r&&a?(n.type=1,p=r+"_"+a):(n.type=2,p=w),n.id=p,n.webviewid=d(),n.step=e.step||0,
n.orderid=e.orderid||0,n.traceid=e.traceid||0,n.ext1=e.ext1||"",n.ext2=e.ext2||"",
n.r=Math.random(),n.devicetype=top.window.devicetype,n.version=top.window.clientversion,
n.is_gray=o()?1:0;
var v=i("biz_wap/utils/ajax.js");
v({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:n
});
}catch(_){}
};
return{
report:w,
getWebviewid:d,
showAd:o
};
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
var n=[],i={};
return i.setAvg=function(t,e,u){
return n.push(t+"_"+e+"_"+u),n.push(t+"_"+(e-1)+"_1"),i;
},i.setSum=function(t,e,u){
return n.push(t+"_"+e+"_"+u),i;
},i.send=function(){
if(0!=n.length){
var i=new Image;
i.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";"),n=[];
}
},i;
});define("biz_common/utils/spin.js",[],function(){
"use strict";
function t(t,i){
var e,o=document.createElement(t||"div");
for(e in i)o[e]=i[e];
return o;
}
function i(t){
for(var i=1,e=arguments.length;e>i;i++)t.appendChild(arguments[i]);
return t;
}
function e(t,i,e,o){
var n=["opacity",i,~~(100*t),e,o].join("-"),r=.01+e/o*100,s=Math.max(1-(1-t)/i*(100-r),t),a=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";
return u[n]||(p.insertRule("@"+l+"keyframes "+n+"{0%{opacity:"+s+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+i)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",p.cssRules.length),
u[n]=1),n;
}
function o(t,i){
var e,o,n=t.style;
for(i=i.charAt(0).toUpperCase()+i.slice(1),o=0;o<d.length;o++)if(e=d[o]+i,void 0!==n[e])return e;
return void 0!==n[i]?i:void 0;
}
function n(t,i){
for(var e in i)t.style[o(t,e)||e]=i[e];
return t;
}
function r(t){
for(var i=1;i<arguments.length;i++){
var e=arguments[i];
for(var o in e)void 0===t[o]&&(t[o]=e[o]);
}
return t;
}
function s(t,i){
return"string"==typeof t?t:t[i%t.length];
}
function a(t){
this.opts=r(t||{},a.defaults,f);
}
function l(){
function e(i,e){
return t("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e);
}
p.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,o){
function r(){
return n(e("group",{
coordsize:d+" "+d,
coordorigin:-c+" "+-c
}),{
width:d,
height:d
});
}
function a(t,a,l){
i(p,i(n(r(),{
rotation:360/o.lines*t+"deg",
left:~~a
}),i(n(e("roundrect",{
arcsize:o.corners
}),{
width:c,
height:o.width,
left:o.radius,
top:-o.width>>1,
filter:l
}),e("fill",{
color:s(o.color,t),
opacity:o.opacity
}),e("stroke",{
opacity:0
}))));
}
var l,c=o.length+o.width,d=2*c,u=2*-(o.width+o.length)+"px",p=n(r(),{
position:"absolute",
top:u,
left:u
});
if(o.shadow)for(l=1;l<=o.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
for(l=1;l<=o.lines;l++)a(l);
return i(t,p);
},a.prototype.opacity=function(t,i,e,o){
var n=t.firstChild;
o=o.shadow&&o.lines||0,n&&i+o<n.childNodes.length&&(n=n.childNodes[i+o],n=n&&n.firstChild,
n=n&&n.firstChild,n&&(n.opacity=e));
};
}
var c,d=["webkit","Moz","ms","O"],u={},p=function(){
var e=t("style",{
type:"text/css"
});
return i(document.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet;
}(),f={
lines:12,
length:7,
width:5,
radius:10,
rotate:0,
corners:1,
color:"#000",
direction:1,
speed:1,
trail:100,
opacity:.25,
fps:20,
zIndex:2e9,
className:"spinner",
top:"50%",
left:"50%",
position:"absolute"
};
a.defaults={},r(a.prototype,{
spin:function(i){
this.stop();
var e=this,o=e.opts,r=e.el=n(t(0,{
className:o.className
}),{
position:o.position,
width:0,
zIndex:o.zIndex
});
if(n(r,{
left:o.left,
top:o.top
}),i&&i.insertBefore(r,i.firstChild||null),r.setAttribute("role","progressbar"),
e.lines(r,e.opts),!c){
var s,a=0,l=(o.lines-1)*(1-o.direction)/2,d=o.fps,u=d/o.speed,p=(1-o.opacity)/(u*o.trail/100),f=u/o.lines;
!function h(){
a++;
for(var t=0;t<o.lines;t++)s=Math.max(1-(a+(o.lines-t)*f)%u*p,o.opacity),e.opacity(r,t*o.direction+l,s,o);
e.timeout=e.el&&setTimeout(h,~~(1e3/d));
}();
}
return e;
},
stop:function(){
var t=this.el;
return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),
this.el=void 0),this;
},
lines:function(o,r){
function a(i,e){
return n(t(),{
position:"absolute",
width:r.length+r.width+"px",
height:r.width+"px",
background:i,
boxShadow:e,
transformOrigin:"left",
transform:"rotate("+~~(360/r.lines*d+r.rotate)+"deg) translate("+r.radius+"px,0)",
borderRadius:(r.corners*r.width>>1)+"px"
});
}
for(var l,d=0,u=(r.lines-1)*(1-r.direction)/2;d<r.lines;d++)l=n(t(),{
position:"absolute",
top:1+~(r.width/2)+"px",
transform:r.hwaccel?"translate3d(0,0,0)":"",
opacity:r.opacity,
animation:c&&e(r.opacity,r.trail,u+d*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"
}),r.shadow&&i(l,n(a("#000","0 0 4px #000"),{
top:"2px"
})),i(o,i(l,a(s(r.color,d),"0 0 1px rgba(0,0,0,.1)")));
return o;
},
opacity:function(t,i,e){
i<t.childNodes.length&&(t.childNodes[i].style.opacity=e);
}
});
var h=n(t("group"),{
behavior:"url(#default#VML)"
});
return!o(h,"transform")&&h.adj?l():c=o(h,"animation"),a;
});define("biz_wap/jsapi/pay.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var a=e("biz_wap/jsapi/core.js"),s={
getLatest:function(e){
a.invoke("getLatestAddress",{
appId:e.appId,
scope:e.scope||"jsapi_address",
signType:e.signType||"sha1",
addrSign:e.addrSign||"mphardcodeaddrSign",
timeStamp:e.timeStamp||"",
nonceStr:e.nonceStr||""
},function(a){
return a.err_msg&&"system:function_not_exist"==a.err_msg?void(e.error&&e.error()):void(e.callback&&e.callback(a));
});
},
edit:function(e){
a.invoke("editAddress",{
appId:e.appId,
scope:e.scope||"jsapi_address",
signType:e.signType||"sha1",
addrSign:e.addrSign||"mphardcodeaddrSign",
timeStamp:e.timeStamp||"",
nonceStr:e.nonceStr||""
},function(a){
e.callback&&e.callback(a);
});
}
},n=function(e){
a.invoke("getBrandWCPayRequest",{
appId:e.app_id,
timeStamp:e.time_stamp,
nonceStr:e.nonce_str,
"package":e.package,
signType:e.sign_type||"SHA1",
paySign:e.pay_sign
},function(a){
"get_brand_wcpay_request:ok"==a.err_msg?e.success&&e.success(a):e.error&&e.error(a.err_msg);
});
};
return{
pay:n,
address:s
};
});define("appmsg/reward_entry.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
function n(e){
e&&(e.style.display="block");
}
function t(e){
e&&(e.style.display="none");
}
function o(e){
var o=window.innerWidth||document.documentElement.innerWidth,r=(Math.ceil((m-188)/42)+1)*Math.floor((o-15)/42);
l="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+r+"&source=1#wechat_redirect";
var d="#wechat_redirect",w="https://mp.weixin.qq.com/bizmall/reward?__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+d,p=document.getElementById("js_reward_link");
p&&(c.on("activity:state_change",function(e){
("onResume"==e.state_change||"onResume"==e.state)&&(c.invoke("setNavigationBarColor",{
actionCode:"1"
}),location.reload());
}),s.on(p,"tap",function(e){
e.preventDefault(),c.invoke("openUrlWithExtraWebview",{
url:w
},function(e){
e.err_msg.indexOf(":ok")>-1||(location.href=w);
});
})),_=e.reward_head_imgs;
var f=a();
u.reward&&1==e.can_reward?(n(u.reward),s.on(window,"load",function(){
s.on(window,"scroll",i);
})):t(u.reward);
var g=document.getElementById("js_reward_inner");
g&&f>0&&n(g);
var h=document.getElementById("js_reward_total");
h&&(h.innerText=e.reward_total,h.setAttribute("href",l));
}
function r(e,n){
var t=document.createElement("span");
t.className="reward_user_avatar";
var o=new Image;
return o.onload=function(){
window.logs&&window.logs.reward_heads_total++,o.onload=o.onerror=null;
},o.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
o.onload=o.onerror=null;
},o.src=n,t.appendChild(o),e.appendChild(t),t;
}
function a(){
if(_.length){
var e=document.getElementById("js_reward_list"),n=0,t=document.createDocumentFragment();
if(e){
for(var o=0,a=_.length;a>o&&(n++,r(t,_[o]),n!=3*d);++o);
n>d&&(e.className+=" tl"),e.innerHTML="",e.appendChild(t);
}
return n;
}
}
function i(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+m>u.reward.offsetTop&&(w({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),s.off(window,"scroll",i),i=null);
}
var d,l,s=e("biz_common/dom/event.js"),w=e("biz_wap/utils/ajax.js"),c=e("biz_wap/jsapi/core.js"),m=window.innerHeight||document.documentElement.clientHeight,u={
reward:document.getElementById("js_reward_area")
},_=[];
return window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0),
{
handle:function(e,n){
d=n,o(e);
},
render:function(e){
d=e,a();
}
};
});define("appmsg/comment.js",["appmsg/cmt_tpl.html.js","biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/hashrouter.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js"],function(e){
"use strict";
function t(e,t){
e&&(e.style.display=t?t:"block");
}
function n(e){
e&&(e.style.display="none");
}
function m(){
setTimeout(function(){
t(U.toast);
},750),setTimeout(function(){
n(U.toast);
},1500);
}
function o(e){
return e.replace(/^\s+|\s+$/g,"");
}
function i(){
clearTimeout(N),N=setTimeout(function(){
if(!D&&-1!=z){
var e=window.innerHeight||document.documentElement.clientHeight,m=window.pageYOffset||document.documentElement.scrollTop,o=document.documentElement.scrollHeight;
if(!(z>0&&o-m-e>500)){
D=!0,n(U.tips),t(U.loading);
var i="/mp/appmsg_comment?action=getcomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id+"&offset="+z+"&limit="+M;
try{
P++,P>1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=27&content="+encodeURIComponent(i)),
F.indexOf(i)>-1&&((new Image).src="http://mp.weixin.qq.com/mp/jsreport?key=25&content="+encodeURIComponent(i)),
F.push(i);
}catch(a){}
C({
url:i,
type:"get",
success:function(e){
var t={};
try{
t=window.eval.call(window,"("+e+")");
}catch(n){}
var m=t.base_resp&&t.base_resp.ret;
0==m?c(t):T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(i)+";ret="+m+"&r="+Math.random();
},
error:function(){
T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(i)+"&r="+Math.random();
},
complete:function(){
D=!1,n(U.loading);
}
});
}
}
},50);
}
function c(e){
var m,o=document.createDocumentFragment();
Y++,Y>1&&(A.src="http://mp.weixin.qq.com/mp/jsreport?key=26&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
offset:z,
url:location.href
}))),0==z?(O=e.logo_url,H=e.nick_name,m=e.elected_comment,m&&m.length?(l(m,o,"elected"),
U.list.appendChild(o),t(U.main),t(document.getElementById("js_cmt_addbtn1")),e.elected_comment_total_cnt<=10&&(t(document.getElementById("js_cmt_statement")),
t(document.getElementById("js_cmt_qa")))):(n(U.main),1==copyright_stat&&1==need_pay&&v.addClass(document.body,"rich_media_empty_extra"),
t(document.getElementById("js_cmt_addbtn2"))),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(m=e.elected_comment,m&&m.length&&(l(m,o,"elected"),U.list.appendChild(o))),
0==e.elected_comment_total_cnt?(z=-1,I.off(window,"scroll",i),n(document.getElementById("js_cmt_loading")),
n(document.getElementById("js_cmt_statement")),n(document.getElementById("js_cmt_qa"))):z+M>=e.elected_comment_total_cnt?(z=-1,
I.off(window,"scroll",i),n(document.getElementById("js_cmt_loading")),t(document.getElementById("js_cmt_statement")),
t(document.getElementById("js_cmt_qa"))):z+=e.elected_comment.length;
}
function a(){
q.log("tag1");
var e=o(U.input.value);
if(q.log("tag2"),!v.hasClass(U.submit,"btn_disabled")){
if(q.log("tag3"),e.length<1)return p("留言不能为空");
if(q.log("tag4"),e.length>600)return p("字数不能多于600个");
q.log("tag5"),v.addClass(U.submit,"btn_disabled"),q.log("tag6");
var n=document.getElementById("activity-name");
q.log("tag7");
var i="/mp/appmsg_comment?action=addcomment&comment_id="+comment_id+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
C({
url:i,
data:{
content:e,
title:n&&o(n.innerText),
head_img:O,
nickname:H
},
type:"POST",
success:function(n){
q.log("tag8"),x.hidePannel();
var o={},c=document.createDocumentFragment();
try{
o=window.eval.call(window,"("+n+")");
}catch(a){}
switch(+o.ret){
case 0:
m(),l([{
content:e,
nick_name:H,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:O,
like_status:0,
content_id:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:o.my_id
}],c,"mine"),U.mylist.insertBefore(c,U.mylist.firstChild),t(U.mylist.parentNode),
U.input.value="";
break;

case-6:
p("你留言的太频繁了，休息一下吧");
break;

case-7:
p("你还未关注该公众号，不能参与留言");
break;

case-10:
p("字数不能多于600个");
break;

case-15:
p("留言已关闭");
break;

default:
p("系统错误，请重试");
}
0!=o.ret&&(T.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:resperr;url:"+encodeURIComponent(i)+";ret="+o.ret+"&r="+Math.random());
},
error:function(e){
q.log("shit;"+e.status+";"+e.statusText),T.src="http://mp.weixin.qq.com/mp/jsreport?key=19&content=type:ajaxerr;url:"+encodeURIComponent(i)+"&r="+Math.random();
},
complete:function(){
""!=U.input.value&&v.removeClass(U.submit,"btn_disabled");
}
});
}
}
function s(){
if(0==R){
var e="/mp/appmsg_comment?action=getmycomment&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+comment_id,m=document.getElementById("js_mycmt_loading");
R=1,t(m),C({
url:e,
type:"get",
success:function(n){
var m={};
try{
m=window.eval.call(window,"("+n+")");
}catch(o){}
var i=m.base_resp&&m.base_resp.ret;
if(0==i){
var c=m.my_comment,a=document.createDocumentFragment();
c&&c.length&&(l(c,a,"mine"),U.mylist.appendChild(a),t(U.mylist.parentNode)),R=2;
}else R=0,T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:resperr;url:"+encodeURIComponent(e)+";ret="+i+"&r="+Math.random();
},
error:function(){
R=0,T.src="http://mp.weixin.qq.com/mp/jsreport?key=18&content=type:ajaxerr;url:"+encodeURIComponent(e)+"&r="+Math.random();
},
complete:function(){
n(m);
}
});
}
}
function r(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var m=t/1e3-e,o=n/1e3-e,i=new Date(n).getFullYear(),c=new Date(1e3*e);
return 3600>m?Math.ceil(m/60)+"分钟前":86400>o?Math.floor(m/60/60)+"小时前":172800>o?"昨天":604800>o?Math.floor(o/24/60/60)+"天前":c.getFullYear()==i?c.getMonth()+1+"月"+c.getDate()+"日":c.getFullYear()+"年"+(c.getMonth()+1)+"月"+c.getDate()+"日";
}
function l(e,t,n){
var m,o="",i=document.createElement("div"),c="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
S={};
for(var a,s=0;a=e[s];++s){
a.time=r(a.create_time),a.status="",a.logo_url=a.logo_url||c,a.logo_url=-1!=a.logo_url.indexOf("wx.qlogo.cn")?a.logo_url.replace(/\/132$/,"/96"):a.logo_url,
a.content=a.content.htmlDecode().htmlEncode(),a.nick_name=a.nick_name.htmlDecode().htmlEncode(),
a.like_num_format=parseInt(a.like_num)>=1e4?(a.like_num/1e4).toFixed(1)+"万":a.like_num,
a.is_from_friend=a.is_from_friend||0,a.is_from_me="mine"==n?1:a.is_from_me||0,a.reply=a.reply||{
reply_list:[]
},a.is_mine=n?!1:!0,a.is_elected="elected"==n?1:a.is_elected,a.reply.reply_list.length>0&&(a.reply.reply_list[0].time=r(a.reply.reply_list[0].create_time),
a.reply.reply_list[0].content=(a.reply.reply_list[0].content||"").htmlEncode()),
o+=k.tmpl(b,a);
try{
var l=a.nick_name+a.content,p=!1,u=23;
S[l]&&(p=!0,u=24),L.indexOf(a.content_id)>-1&&(p=!0,u=23),L.push(a.content_id),S[l]=!0,
p&&(A.src="http://mp.weixin.qq.com/mp/jsreport?key="+u+"&content="+encodeURIComponent(JSON.stringify({
comment_id:comment_id,
content_id:a.content_id,
offset:z,
length:e.length,
url:location.href
})));
}catch(_){}
}
for(i.innerHTML=o,d(i);m=i.children.item(0);)t.appendChild(m);
}
function d(e){
q.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=x.encode(e.innerHTML);
});
}
function p(e){
return setTimeout(function(){
alert(e);
});
}
function u(){
var e="1"===E.getParam("js_my_comment");
e&&_(!0);
}
function _(e){
n(U.article),t(U.mine),window.scrollTo(0,0),s(),e||q.later(function(){
U.input.focus();
});
}
function g(){
n(U.mine),t(U.article),window.scrollTo(0,document.documentElement.scrollHeight),
U.input.blur();
}
function y(e){
var t=e.target||e.srcElement,n=null;
if(v.hasClass(t,"js_comment_praise")&&(n=t),v.hasClass(t,"icon_praise_gray")&&"i"==t.nodeName.toLowerCase()&&(n=t.parentElement),
v.hasClass(t,"praise_num")&&"span"==t.nodeName.toLowerCase()&&(n=t.parentElement),
n){
var m=parseInt(n.dataset.status),o=0==m?1:0,i=n.dataset.contentId,c="/mp/appmsg_comment?action=likecomment&&like="+o+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&content_id="+i;
f(n),C({
url:c,
type:"GET"
});
}
}
function f(e){
var t=v.hasClass(e,"praised"),n=e.querySelector(".praise_num"),m=n.innerHTML,o=m.indexOf("万"),i=parseInt(m)?parseInt(m):0;
t?(-1==o&&(n.innerHTML=i-1>0?i-1:""),v.removeClass(e,"praised"),e.dataset.status=0):(-1==o&&(n.innerHTML=i+1),
v.addClass(e,"praised"),e.dataset.status=1);
}
function h(e){
var m=e.delegatedTarget,o=m.getAttribute("data-my-id"),i="/mp/appmsg_comment?action=delete&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+comment_id+"&my_id="+o;
confirm("确定删除吗？")&&C({
url:i,
success:function(e){
var i,c=m;
try{
e=JSON.parse(e);
}catch(a){
e={};
}
if(0==e.ret){
for(;c&&(c.nodeType!=c.ELEMENT_NODE||"li"!=c.tagName.toLowerCase());)c=c.parentNode;
c&&(c.parentNode.removeChild(c),i=document.getElementById("cid"+o),i&&i.parentNode.removeChild(i),
0==U.list.children.length&&(n(U.main),n(document.getElementById("js_cmt_statement")),
n(document.getElementById("js_cmt_qa")),t(document.getElementById("js_cmt_addbtn2"))),
0==U.mylist.children.length&&n(U.mylist.parentNode));
}else alert("删除失败，请重试");
},
error:function(){
alert("网络错误，请重试");
}
});
}
function j(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var b=e("appmsg/cmt_tpl.html.js"),w=document.getElementById("js_cmt_area"),E=new j(window.location.href);
if(0!=comment_id&&uin&&key){
if(-1==navigator.userAgent.indexOf("MicroMessenger"))return void(w&&(w.style.display="none"));
w&&(w.style.display="block");
var I=e("biz_common/dom/event.js"),v=e("biz_common/dom/class.js"),C=e("biz_wap/utils/ajax.js"),k=(e("biz_common/utils/string/html.js"),
e("biz_common/tmpl.js")),B=e("biz_wap/utils/hashrouter.js"),x=e("appmsg/emotion/emotion.js"),q=e("appmsg/emotion/dom.js"),T=new Image,z=0,M=50,D=!1,N=null,O="",H="我",R=0,U={
article:document.getElementById("js_article"),
more:document.getElementById("js_cmt_more"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading")
},L=[],S={},A=new Image,F=[],P=0,Y=0;
!function(){
i(),u(),x.init();
}(),B.get("comment",function(){
_();
}),B.get("default",function(e){
"comment"==e&&g();
}),I.on(U.input,"input",function(){
var e=o(U.input.value);
e.length<1?v.addClass(U.submit,"btn_disabled"):v.removeClass(U.submit,"btn_disabled");
}),I.on(U.more,"touchend",y),I.on(U.list,"touchend",y),I.on(U.mylist,"touchend",y),
I.on(U.list,"tap",".js_del",h),I.on(U.mylist,"tap",".js_del",h),I.on(U.submit,"tap",a);
}
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js"],function(require,exports,module){
"use strict";
function like_report(e){
var tmpAttr=el_like.getAttribute("like"),tmpHtml=el_likeNum.innerHTML,isLike=parseInt(tmpAttr)?parseInt(tmpAttr):0,like=isLike?0:1,likeNum=parseInt(tmpHtml)?parseInt(tmpHtml):0;
ajax({
url:"/mp/appmsg_like?__biz="+biz+"&mid="+mid+"&idx="+idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
type:"POST",
success:function(res){
var data=eval("("+res+")");
0==data.base_resp.ret&&(isLike?(Class.removeClass(el_like,"praised"),el_like.setAttribute("like",0),
likeNum>0&&"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum-1==0?"赞":likeNum-1)):(el_like.setAttribute("like",1),
Class.addClass(el_like,"praised"),"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum+1)));
},
async:!0
});
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),el_toolbar=document.getElementById("js_toobar3");
if(el_toolbar&&el_toolbar.querySelector){
var el_like=el_toolbar.querySelector("#like3"),el_likeNum=el_toolbar.querySelector("#likeNum3"),el_readNum=el_toolbar.querySelector("#readNum3");
DomEvent.on(el_like,"click",function(e){
return like_report(e),!1;
});
}
});define("appmsg/a.js",["biz_common/dom/event.js","biz_common/utils/url/parse.js","appmsg/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","a/card.js","biz_wap/jsapi/core.js","a/profile.js","a/android.js","a/ios.js","a/gotoappdetail.js"],function(require,exports,module){
"use strict";
function ad_click(e,t,a,i,o,n,p,r,s,d,_,l,c,m){
if(!has_click[o]){
has_click[o]=!0;
var u=document.getElementById("loading_"+o);
u&&(u.style.display="inline"),AdClickReport({
click_pos:1,
report_type:2,
type:e,
url:encodeURIComponent(t),
tid:o,
rl:encodeURIComponent(a),
__biz:biz,
pos_type:d,
pt:s,
pos_x:c,
pos_y:m
},function(){
if(has_click[o]=!1,u&&(u.style.display="none"),"5"==e)location.href="/mp/profile?source=from_ad&tousername="+t+"&ticket="+n+"&uin="+uin+"&key="+key+"&__biz="+biz+"&mid="+mid+"&idx="+idx+"&tid="+o;else{
if("105"==s&&l)return void Card.openCardDetail(l.card_id,l.card_ext,l);
if(0==t.indexOf("https://itunes.apple.com/")||0==t.indexOf("http://itunes.apple.com/")){
var a=require("biz_wap/jsapi/core.js");
return a.invoke("downloadAppInternal",{
appUrl:t
},function(e){
e.err_msg&&-1!=e.err_msg.indexOf("ok")||(location.href="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(t)+"&ticket="+n+"&uin="+uin);
}),!1;
}
if(-1==t.indexOf("mp.weixin.qq.com"))t="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(t);else if(-1==t.indexOf("mp.weixin.qq.com/s")&&-1==t.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var i={
source:4,
tid:o,
idx:idx,
mid:mid,
appuin:biz,
pt:s,
aid:r,
ad_engine:_,
pos_type:d
},p=window.__report;
if("104"==s&&l||-1!=t.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var c="",m="";
l&&(c=l.pkgname&&l.pkgname.replace(/\./g,"_"),m=l.channel_id||""),i={
source:4,
traceid:o,
mid:mid,
idx:idx,
appuin:biz,
pt:s,
channel_id:m,
aid:r,
engine:_,
pos_type:d,
pkgname:c
};
}
t=URL.join(t,i),(0==t.indexOf("http://mp.weixin.qq.com/promotion/")||0==t.indexOf("https://mp.weixin.qq.com/promotion/"))&&(t=URL.join(t,{
traceid:o,
aid:r,
engine:_
})),!r&&p&&p(80,t);
}
location.href=t;
}
});
}
}
var js_bottom_ad_area=document.getElementById("js_bottom_ad_area"),js_top_ad_area=document.getElementById("js_top_ad_area"),pos_type=window.pos_type||0,adDatas=window.adDatas,__report=window.__report,total_pos_type=2,el_gdt_areas={
pos_1:js_top_ad_area,
pos_0:js_bottom_ad_area
},gdt_as={
pos_1:js_top_ad_area.getElementsByClassName("js_ad_link"),
pos_0:js_bottom_ad_area.getElementsByClassName("js_ad_link")
};
if(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger"))return js_top_ad_area.style.display="none",
js_bottom_ad_area.style.display="none",!1;
var has_click={},DomEvent=require("biz_common/dom/event.js"),URL=require("biz_common/utils/url/parse.js"),AReport=require("appmsg/a_report.js"),AdClickReport=AReport.AdClickReport,ajax=require("biz_wap/utils/ajax.js"),position=require("biz_wap/utils/position.js"),Card=require("a/card.js"),ping_apurl={
pos_0:!1,
pos_1:!1
},ping_test_apurl={
pos_0:[],
pos_1:[]
},ping_test_apurl_random=Math.random()<.3,innerHeight=window.innerHeight||document.documentElement.clientHeight,ad_engine=0;
if(adDatas.num>0){
var onScroll=function(){
for(var scrollTop=window.pageYOffset||document.documentElement.scrollTop,i=0;total_pos_type>i;++i)!function(i){
var pos_key="pos_"+i,gdt_a=gdt_as[pos_key];
if(gdt_a=!!gdt_a&&gdt_a[0],gdt_a&&gdt_a.dataset&&gdt_a.dataset.apurl){
var gid=gdt_a.dataset.gid,tid=gdt_a.dataset.tid,apurl=gdt_a.dataset.apurl,pos_type=adDatas.ads[pos_key].a_info.pos_type,gdt_area=el_gdt_areas[pos_key],offsetTop=gdt_area.offsetTop;
adDatas.ads[pos_key].ad_engine=0,-1!=apurl.indexOf("ad.wx.com")&&(adDatas.ads[pos_key].ad_engine=1),
function(){
try{
var e=window.__report,t=ping_test_apurl[pos_key],a=new Date,i=a.getHours(),o=ping_test_apurl_random&&i>=12&&18>=i&&0==pos_type;
!t[0]&&o&&scrollTop+innerHeight>offsetTop&&(t[0]=!0,e(81)),!t[1]&&o&&scrollTop+innerHeight>offsetTop+40&&(t[1]=!0,
e(82));
}catch(n){}
}(),ping_apurl[pos_key]||(0==pos_type&&scrollTop+innerHeight>offsetTop||1==pos_type&&(10>=scrollTop||scrollTop-10>=offsetTop))&&(ping_apurl[pos_key]=!0,
ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl)+"&__biz="+biz+"&pos_type="+pos_type+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret?ping_apurl[pos_key]=!1:ping_apurl.pos_0&&ping_apurl.pos_1&&DomEvent.off(window,"scroll",onScroll);
},
async:!0
}));
}
}(i);
};
DomEvent.on(window,"scroll",onScroll),onScroll();
}
for(var keyOffset="https:"==top.location.protocol?5:0,i=0;total_pos_type>i;++i)!function(e){
var t="pos_"+e,a=el_gdt_areas[t];
if(!a.getElementsByClassName)return a.style.display="none",!1;
var i=a.getElementsByClassName("js_ad_link")||[],o=adDatas.ads[t];
if(o){
for(var n=o.adData,p=o.a_info,r=p.pos_type,s=o.ad_engine,d=0,_=i.length;_>d;++d)!function(e,t){
var a=i[e],o=a.dataset;
if(o){
var n=o.type,p=o.url,d=o.rl,_=o.apurl,l=o.tid,c=o.ticket,m=o.group_id,u=o.aid,g=o.pt;
DomEvent.on(a,"click",function(e){
var a=!!e&&e.target;
if(!a||!a.className||-1==a.className.indexOf("js_ad_btn")){
var i,o;
return i=position.getX(a,"js_ad_link extra_link")+e.offsetX,o=position.getY(a,"js_ad_link extra_link")+e.offsetY,
ad_click(n,p,d,_,l,c,m,u,g,r,s,t,i,o),!1;
}
},!0);
}
}(d,n);
if(n){
n.adid=window.adid||n.adid;
var l="&tid="+n.traceid+"&uin="+uin+"&key="+key+"&ticket="+(n.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+n.adid+"&ad_engine="+s+"&pos_type="+r+"&r="+Math.random();
if(n.report_param=l,"100"==n.pt){
var c=require("a/profile.js");
return void new c({
btnViewProfile:document.getElementById("js_view_profile_"+r),
btnAddContact:document.getElementById("js_add_contact_"+r),
adData:n,
pos_type:r,
report_param:l
});
}
if("102"==n.pt){
var m=require("a/android.js"),u=15,g=n.pkgname&&n.pkgname.replace(/\./g,"_");
return void new m({
btn:document.getElementById("js_app_action_"+r),
adData:n,
report_param:l,
task_ext_info:[n.adid,n.traceid,g,source,u,s].join("."),
via:[n.traceid,n.adid,g,source,u,s].join(".")
});
}
if("101"==n.pt){
var f=require("a/ios.js");
return void new f({
btn:document.getElementById("js_app_action_"+r),
adData:n,
ticket:n.ticket,
report_param:l
});
}
if("103"==n.pt||"104"==n.pt){
var y=require("a/gotoappdetail.js"),u=15,g=n.pkgname&&n.pkgname.replace(/\./g,"_");
return void new y({
btn:document.getElementById("js_appdetail_action_"+r),
js_app_rating:document.getElementById("js_app_rating_"+r),
adData:n,
report_param:l,
pos_type:r,
via:[n.traceid,n.adid,g,source,u,s].join("."),
ticket:n.ticket,
appdetail_params:["&aid="+n.adid,"traceid="+n.traceid,"pkgname="+g,"source="+source,"type="+u,"engine="+s,"appuin="+biz,"pos_type="+r,"ticket="+n.ticket,"scene="+scene].join("&")
});
}
if("105"==n.pt)return void new Card({
btn:document.getElementById("js_card_action_"+r),
adData:n,
report_param:l,
pos_type:r
});
}
}
}(i);
});