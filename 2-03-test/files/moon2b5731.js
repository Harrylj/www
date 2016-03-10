!function(){
"object"!=typeof JSON&&(window.JSON={
stringify:function(){
return"";
},
parse:function(){
return{};
}
});
var e=function(){
!function(){
var e={},t={},o={};
e.COMBO_UNLOAD=0,e.COMBO_LOADING=1,e.COMBO_LOADED=2;
var n=function(e,o,n){
if(!t[e]){
t[e]=n;
for(var r=3;r--;)try{
moon.setItem(moon.prefix+e,n.toString()),moon.setItem(moon.prefix+e+"_ver",moon_map[e]);
break;
}catch(i){
moon.clear();
}
}
},r=function(e){
if(!e||!t[e])return null;
var n=t[e];
return"function"!=typeof n||o[e]||(n=t[e]=n(r),o[e]=!0),n;
};
e.combo_status=e.COMBO_UNLOAD,e.run=function(){
var t=e.run.info,o=t&&t[0],n=t&&t[1];
if(o&&e.combo_status==e.COMBO_LOADED){
var i=r(o);
n&&n(i);
}
},e.use=function(t,o){
e.run.info=[t,o],e.run();
},window.define=n,window.seajs=e;
}(),function(){
function e(e){
return"[object Array]"===Object.prototype.toString.call(e);
}
function t(e){
return"[object Object]"===Object.prototype.toString.call(e);
}
function n(e){
var t=e.stack?e.stack:"";
try{
t=t.replace(/http(s)?:\/\/res\.wx\.qq\.com/g,"");
for(var n=/\/([^.]+)\/(\S+?)\.js(\,|:)?/g;n.test(t);)t=t.replace(n,"$2$3");
}catch(e){
t=e.stack?e.stack:"";
}
var r=[];
for(o in _reportOpt)_reportOpt.hasOwnProperty(o)&&r.push(o+":"+_reportOpt[o]);
return r.push("STK:"+t.replace(/\n/g,"")),r.join("|");
}
function r(e){
if(!e){
var t=window.onerror;
window.onerror=function(){},e=setTimeout(function(){
window.onerror=t,e=null;
},50);
}
}
function i(e){
var t;
if(window.ActiveXObject)try{
t=new ActiveXObject("Msxml2.XMLHTTP");
}catch(o){
try{
t=new ActiveXObject("Microsoft.XMLHTTP");
}catch(n){
t=!1;
}
}else window.XMLHttpRequest&&(t=new XMLHttpRequest);
t&&(t.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),t.setRequestHeader("cache-control","no-cache"),
t.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.send(e));
}
function a(e){
return function(t,o){
if("string"==typeof t)try{
t=new Function(t);
}catch(n){
throw n;
}
var i=[].slice.call(arguments,2),a=t;
return t=function(){
try{
return a.apply(this,i.length&&i||arguments);
}catch(e){
throw e.stack&&console&&console.error&&console.error("[TryCatch]"+e.stack),s&&window.__moon_report&&(window.__moon_report([{
offset:w,
log:"timeout_error;host:"+top.location.host,
e:e
}]),r(l)),e;
}
},e(t,o);
};
}
var c=/MicroMessenger/i.test(navigator.userAgent);
if(/mp\.weixin\.qq\.com\/s\?/.test(location.href)&&!(Math.random()>.5)&&c){
var s,u,f,l,p=window.define,m=0,w=9;
window.__initCatch=function(e){
s=e.idkey,u=e.startKey||0,f=e.limit||1,_reportOpt=e.reportOpt||"",_extInfo=e.extinfo||"";
},window.__moon_report=function(o){
if(t(o)&&(o=[o]),e(o)&&""!=s){
for(var r="",a=[],c=[],l=[],p=[],m=0;m<o.length;m++){
var w=o[m]||{};
if(!(w.offset>f)&&"number"==typeof w.offset){
var d=u+w.offset;
a[m]="[moon]"+s+"_"+d+";"+w.log+";"+n(w.e||{})||"",c[m]=d,l[m]=1;
}
}
for(var _=0;_<c.length;_++)p[_]=s+"_"+c[_]+"_"+l[_],r=r+"&log"+_+"="+a[_];
p.length>0&&i("idkey="+p.join(";")+"&lc="+a.length+r);
}
},window.setTimeout=a(window.setTimeout),window.setInterval=a(window.setInterval),
window.seajs&&p&&(window.define=function(){
for(var e,t=[],o=0,n=arguments.length;n>o;o++){
var i=e=arguments[o];
"function"==typeof e&&(e=function(){
try{
return i.apply(this,arguments);
}catch(e){
throw e.stack&&console&&console.error&&console.error("[TryCatch]"+e.stack),s&&window.__moon_report&&(window.__moon_report([{
offset:m,
log:"define_error",
e:e
}]),r(l)),e;
}
},e.toString=function(e){
return function(){
return e.toString();
};
}(arguments[o])),t.push(e);
}
return p.apply(this,t);
});
}
}(),function(e){
function t(e,t,n){
if("object"==typeof e){
var r=Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1");
if(n=n||e,"Array"==r){
for(var i=0,a=e.length;a>i;++i)if(t.call(n,e[i],i,e)===!1)return;
}else{
if("Object"!==r&&o!=e)throw"unsupport type";
if(o==e){
for(var i=e.length-1;i>=0;i--){
var c=o.key(i),s=o.getItem(c);
if(t.call(n,s,c,e)===!1)return;
}
return;
}
for(var i in e)if(e.hasOwnProperty(i)&&t.call(n,e[i],i,e)===!1)return;
}
}
}
var o=e.localStorage,n=document.head||document.getElementsByTagName("head")[0],r=1,i={
prefix:"__MOON__",
loaded:[],
unload:[],
hit_num:0,
mod_num:0,
version:1e3,
init:function(){
i.loaded=[],i.unload=[];
var n,r,a;
if(o){
var c="_moon_ver_key_",s=o.getItem(c);
s!=i.version&&(i.clear(),o.setItem(c,i.version));
}
if(-1!=location.search.indexOf("no_moon=1")&&i.clear(),o){
var u=1*o.getItem(i.prefix+"clean_time"),f=+new Date;
if(f-u>=1296e6){
i.clear();
try{
!!o&&o.setItem(i.prefix+"clean_time",+new Date);
}catch(l){}
}
}
t(moon_map,function(t,c){
if(r=i.prefix+c,a=!!t&&t.replace(/^http(s)?:\/\/res.wx.qq.com/,""),n=!!o&&o.getItem(r),
version=!!o&&(o.getItem(r+"_ver")||"").replace(/^http(s)?:\/\/res.wx.qq.com/,""),
i.mod_num++,n&&a==version)try{
var s="//# sourceURL="+c+"\n//@ sourceURL="+c;
e.eval.call(e,'define("'+c+'",[],'+n+")"+s),i.hit_num++;
}catch(u){
i.unload.push(a.replace(/^http(s)?:\/\/res.wx.qq.com/,""));
}else i.unload.push(a.replace(/^http(s)?:\/\/res.wx.qq.com/,""));
}),i.load(i.genUrl());
},
genUrl:function(){
var e=i.unload;
if(!e||e.length<=0)return[];
for(var t,o,n="",r=[],a={},c=-1!=location.search.indexOf("no_moon=2"),s=0,u=e.length;u>s;++s)/^\/(.*?)\//.test(e[s]),
RegExp.$1&&(o=RegExp.$1,n=a[o],n?(t=n+","+e[s],t.length>1e3||c?(r.push(n+"?v="+i.version),
n=location.protocol+"//res.wx.qq.com"+e[s],a[o]=n):(n=t,a[o]=n)):(n=location.protocol+"//res.wx.qq.com"+e[s],
a[o]=n));
for(var f in a)a.hasOwnProperty(f)&&r.push(a[f]);
return r;
},
load:function(e){
if(!e||e.length<=0)return seajs.combo_status=seajs.COMBO_LOADED,void seajs.run();
seajs.combo_status=seajs.COMBO_LOADING;
var o=0;
t(e,function(t){
var i=document.createElement("script");
i.src=t,i.type="text/javascript",i.async=!0,i.onerror=function(e){
if(window.__moon_report){
var o=new Error(e);
window.__moon_report([{
offset:r,
log:"load_script_error: "+t,
e:o
}]);
}
},"undefined"!=typeof moon_crossorigin&&moon_crossorigin&&i.setAttribute("crossorigin",!0),
i.onload=i.onreadystatechange=function(){
!i||i.readyState&&!/loaded|complete/.test(i.readyState)||(o++,i.onload=i.onreadystatechange=null,
o==e.length&&(seajs.combo_status=seajs.COMBO_LOADED,seajs.run()));
},n.appendChild(i);
});
},
setItem:function(e,t){
!!o&&o.setItem(e,t);
},
clear:function(){
o&&t(o,function(e,t){
~t.indexOf(i.prefix)&&o.removeItem(t);
});
}
};
window.moon=i;
}(window),window.moon.init();
};
e(),moon.setItem(moon.prefix+"biz_wap/moon.js",e.toString());
}();