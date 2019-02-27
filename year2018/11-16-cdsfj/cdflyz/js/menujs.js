// JavaScript Documentfunction $(id) { return document.getElementById(id); }

function doZoom(size){
document.all("NewsContent").style.fontSize=size+'px';
}
function setColor(color_val){
document.getElementById('NewsContent').style.backgroundColor=color_val;
}
//===================================↑视力保护色↑==================================


function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var mli=document.getElementById("main"+m).getElementsByTagName("li");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover"+n:"lm"+n;
  mli[i].style.display=i==n?"block":"none";
 }
}

function setTab2(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var mli=document.getElementById("main"+m).getElementsByTagName("li");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover":"";
  mli[i].style.display=i==n?"block":"none";
 }
}
//===================================↑页签↑==================================

/*-------------------------↓weige-js开始↓------------------------------*/

/*
 * Utility JavaScript Liberary. Created by Wang Wei (00088).
 * Version 1.0, 20100921
 */
 
/*
 * Get the number part of a style property value.
 */
function GetStyleNumber(strArg) {
	if (null == strArg || "" == strArg) {
		return 0;
	}
	var i = 0;
	for (i = 0; i < strArg.length; i++) {
		if (isNaN(strArg.charAt(i))) break;
	}
	if (0 == i) {
		return 0;
	}
	var strNum = strArg.substr(0, i);
	return parseInt(strNum, 10);
}

/*##################################################*/
 
/*
 * Class SlideTab
 */
function SlideTab(parentDiv, titleWidth, stepPercent) {

	// Container Div.
	this.container = document.getElementById(parentDiv);
	if (null == this.container) {
		alert("SlideTab.Create: The DIV '" + parentDiv + "' doesn't exist.");
		return;
	}
	this.scopeW = GetStyleNumber(this.container.style.width);
	this.scopeH = GetStyleNumber(this.container.style.height);
	this.scopeT = GetStyleNumber(this.container.style.top);
	this.scopeL = GetStyleNumber(this.container.style.left);
	
	// Title width.
	if (isNaN(titleWidth)) {
		alert("SlideTab.Create: Title width should be a number.");
		return;
	}
	this.titleW = titleWidth;
	// Slide width.
	this.slideW = 0;
	
	// Step percent.
	if (isNaN(stepPercent)) {
		alert("SlideTab.Create: Step percent should be a number.");
		return;
	}
	this.stepPer = stepPercent;
	
	// Tab List.
	this.tabNames = new Array();
	this.tabFlags = new Array();
	this.tabInitX = new Array();
	this.tabPosX = new Array();
	// On Ging.
	this.runningIdx = -1;
	this.toLeft = false;
	// Timer.
	this.timer = null;
	this.percent = 0;
	
	//--------------------------------------------------------

	// Add a tab to this slide.
	this.addTab = function (tabName) {
		this.tabNames.push(tabName);
	}
	
	// Get the tab list length.
	this.getLength = function() {
		return this.tabNames.length;
	}
	
	// Initialize.
	this.init = function() {
		this.container.style.overflow = "hidden";		
		var i = 0;
		for (i = 0; i < this.tabNames.length; i++) {			
			var item = document.getElementById(this.tabNames[i]);
			var itemL = this.scopeL + (this.titleW * i);
			this.tabInitX.push(itemL);
			this.tabPosX.push(itemL);
			item.style.left = itemL + "px";
			item.style.top = this.scopeT + "px";
			item.style.zIndex = this.container.style.zIndex + (this.tabNames.length - i);
			item.style.display = "block";
			item.style.overflow = "hidden";
			this.tabFlags.push('R');
		}
		this.slideW = this.scopeW - (this.titleW * this.tabNames.length);
	}
	
	// Find a tab.
	this.findTab = function(tabName) {
		var i = 0;
		for (i = 0; i < this.tabNames.length; i++) {
			if (this.tabNames[i] == tabName) {
				return i;
			}
		}
		return -1;
	}
	
	// Clean the playing effect.
	this.clean = function() {
		// No running tab.
		if (this.runningIdx == -1) {
			return;
		}
		
		// Stop the playing effect.
		clearInterval(this.timer);
		this.timer = null;
		this.percent = 0;
		
		// Clean the house.
		if (this.toLeft) {
			// A tab should go to the left.
			var i = 0;
			for (i = 0; i <= this.runningIdx; i++) {
				if ('L' != this.tabFlags[i]) {
					var item = document.getElementById(this.tabNames[i]);
					this.tabPosX[i] = this.tabInitX[i] - this.slideW;
					item.style.left = this.tabPosX[i] + "px";
					this.tabFlags[i] = 'L';
					this.tabInitX[i] = this.tabPosX[i];
				}
			}
		} else {		
			// A tab should go to the right.
			var i = 0;
			for (i = this.runningIdx; i < this.tabFlags.length; i++) {
				if ('R' != this.tabFlags[i]) {
					var item = document.getElementById(this.tabNames[i]);
					this.tabPosX[i] = this.tabInitX[i] + this.slideW;
					item.style.left = this.tabPosX[i] + "px";
					this.tabFlags[i] = 'R';
					this.tabInitX[i] = this.tabPosX[i];
				}
			}
		}
		this.runningIdx = -1;
	}
	
	// Show the specified tab.
	this.show = function(instName, tabName) {
		var idx = this.findTab(tabName);
		this.showByIndex(instName, idx);
		return idx;
	}
	
	// Show the specified tab by index.


	this.showByIndex = function(instName, idx) {
		this.clean();
			
		if ('R' == this.tabFlags[idx]) {
			// Now, the given tab is on the right.
			if (0 == idx) {
				// The first one is open. Do nothing.
				return;
			} else {
				// Not the first one.
				if ('L' == this.tabFlags[idx - 1]) {
					// The left tab is on the left. Do nothing.
					return;
				} else {
					// The left tab should go to the left.
					this.runningIdx = idx - 1;
					this.toLeft = true;
				}
			}
		} else { 
			// Now, the given tab is on the left. It should go to the right.
			this.runningIdx = idx;
			this.toLeft = false;
		}		
		
		this.timer = setInterval(instName + ".doSlide()", 50);
	}
	
	// Do the slide action.
	this.doSlide = function() {
		// Calculate the percent.
		this.percent = this.percent + this.stepPer;
		if (100 < this.percent) {
			this.percent = 100;
		}
		
		if (this.toLeft) {
			// A tab should go to the left.
			var i = 0;
			for (i = 0; i <= this.runningIdx; i++) {
				if ('L' != this.tabFlags[i]) {
					var item = document.getElementById(this.tabNames[i]);
					var delta = this.slideW * (this.percent / 100);
					this.tabPosX[i] = this.tabInitX[i] - delta;
					item.style.left = this.tabPosX[i] + "px";
					if (100 == this.percent) {
						this.tabFlags[i] = 'L';
						this.tabInitX[i] = this.tabPosX[i];
					}
				}
			}
		} else {			
			// A tab should go to the right.
			var i = 0;
			for (i = this.runningIdx; i < this.tabFlags.length; i++) {
				if ('R' != this.tabFlags[i]) {
					var item = document.getElementById(this.tabNames[i]);
					var delta = this.slideW * (this.percent / 100);
					this.tabPosX[i] = this.tabInitX[i] + delta;
					item.style.left = this.tabPosX[i] + "px";
					if (100 == this.percent) {
						this.tabFlags[i] = 'R';
						this.tabInitX[i] = this.tabPosX[i];
					}
				}
			}
		}
		
		// If done, clean the house.
		if (100 == this.percent) {
			this.clean();
		}
	}
	
	// Auto slide.
	this.loopSlide = function(instName) {
		var i = 0;
		var baseLine = this.tabFlags[0];
		var swap = false;
		for (i = 0; i < this.tabFlags.length; i++) {
			if (baseLine != this.tabFlags[i]) {
				swap = true;
				if (i == this.tabFlags.length - 1) {
					this.showByIndex(instName, 0);
				} else {
					this.showByIndex(instName, i + 1);
				}
				break;
			}
		}
		if (!swap) {
			this.showByIndex(instName, 1);
		}
	}
	
}

/*##################################################*/
 
/*
 * Class SwapTab
 */
function SwapTab(idPrefix) {

	this.preFix = idPrefix;
	if (null == this.preFix) {
		alert("SwapTab.Create: invalid argument.");
		return;
	}
	
	// Image URL buffer.
	this.openImgs = new Array();
	this.closeImgs = new Array();
	// Internal buffer.
	this.imgBuffer = new Array();
	
	// Add a swap tab.
	this.addTab = function(openSrc, closeSrc) {
		var img;
		
		this.openImgs.push(openSrc);
		img = new Image();
		img.src = openSrc;
		this.imgBuffer.push(img);
		
		this.closeImgs.push(closeSrc);
		img = new Image();
		img.src = closeSrc;
		this.imgBuffer.push(img);
	}
	
	this.showTab = function(idx) {
		var tabListLen = this.openImgs.length;
		var i = 0;
		for (i = 0; i < tabListLen; i++) {
			var arrowImg = document.getElementById(this.preFix + i);
			if (null == arrowImg) {
				alert("SwapTab.showTab: Image " + this.preFix + i + " not found.");
				return;
			}
			if (i == idx) {
				arrowImg.src = this.openImgs[i];
			} else {
				arrowImg.src = this.closeImgs[i];
			}
		}
	}
}


		var slide;
		var swapTab;
		
		function onPageLoad() {
			slide = new SlideTab("root", 35, 15);
			slide.addTab("fwdt");
			slide.addTab("zmhd");
			slide.init();
			
			swapTab = new SwapTab("Arrow");
			swapTab.addTab("xhtml/images/qianj_fwdt_open.jpg", "xhtml/images/qianj_fwdt_close.jpg");
			swapTab.addTab("xhtml/images/qianj_zmhd_open.jpg", "xhtml/images/qianj_zmhd_close.jpg");
			swapTab.showTab(0);
			
			
			var SDmodel = new scrollDoor();
			SDmodel.sd(["m01","m02","m03"],["c01","c02","c03"],"sd01","sd02");
			SDmodel.sd(["mm01","mm02"],["cc01","cc02"],"sd03","sd04");
		}
		
		function onShowTab(tabName) {
			var idx = slide.show("slide", tabName);
			swapTab.showTab(idx);			
		}

//===================================↑weige-js结束↑==================================

/*=========================================【font】==================================*/

//Specify affected tags. Add or remove from list:   
var tgs = new Array( 'div','td','tr','font','p','span');   
var fontsizePx = 12;  // same as font-size in body   
/* *** Adjust Font Size *** */  
function adjustFontsize(tag, sizechange) {   
  if (!document.getElementById) return;   
  var d = document,cEl = null,i,j,cTags;   
  if( sizechange == 'smaller' && fontsizePx > 12 ) fontsizePx = fontsizePx - 1;   
  else if( sizechange == 'larger' ) fontsizePx = 16;   
  else if( sizechange == 'small' ) fontsizePx = 12;  // same as font-size in body   
  else if( sizechange == 'large') fontsizePx = 14;   
     
  if ( !( cEl = d.getElementById( tag ) ) ) cEl = d.getElementsByTagName( tag )[ 0 ];   
  //debug(cEl);   
  cEl.style.fontSize = fontsizePx + "px";   
     
  for ( i = 0 ; i < tgs.length ; i++ ) {   
    cTags = cEl.getElementsByTagName( tgs[ i ] );   
    t = cEl.all.tags(tgs[ i ]);   
    //alert(tgs[i] +":" + cTags.length);   
    for ( j = 0 ; j < cTags.length ; j++ ) cTags[ j ].style.fontSize = fontsizePx + "px";   
  }   
}   
/* *** end of Adjust Font Size *** */  
				function doZoom(size1,size2,size3,size4){
				document.getElementById('zoomtitl').style.fontSize=size1+'px';
				document.getElementById('zoomsubtitl').style.fontSize=size2+'px';
				document.getElementById('zoomtime').style.fontSize=size3+'px';
				}
				
//---------------------------------友情链接links------------------------------------

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  window.open(selObj.options[selObj.selectedIndex].value+"");
  if (restore) selObj.selectedIndex=0;
}
//---------------------------------分页js------------------------------------

//_divName;_nPageCount总页数；_nCurrIndex 当前页码；_sPageName 共同前缀名；_sPageExt分页页面的文件名后缀;_nPageSum总记录数
function createPageHTML(divName,_nPageCount, _nCurrIndex, _sPageName, _sPageExt,_nPageSum){ 
 	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement("link");
	style.href = "";
	style.rel = "stylesheet";
	style.type = "text/css";

    head.insertBefore(style,head.childNodes[0]);
	
	
 
 
 var con_text = "";
  if(_nPageCount == null || _nPageCount<1){ 
   return; 
 } 
  var nCurrIndex = _nCurrIndex; 
	con_text += "<div class=\"pagination_index\" ><span class=\"arrow\"><a href=\""+_sPageName+"."+_sPageExt+"\">首页</a></span></div>";
  if(nCurrIndex>1){
    if((nCurrIndex-1)>0){
    	if((nCurrIndex-1)==1)
    		con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a href=\""+_sPageName+"."+_sPageExt+"\">上一页</a></span></div>";
  	  	else
  	  		con_text += "<div class=\"pagination_index\" ><span class=\"arrow\"><a href=\""+_sPageName+"_" + (nCurrIndex-1) +"."+_sPageExt+"\">上一页</a></span></div>";
  	  } 
  }
  var startpage=0,endpage =0;
  if(nCurrIndex > 5){
  	  startpage = nCurrIndex-2;
  	if(_nPageCount-nCurrIndex>2){
  		endpage =nCurrIndex+2;
  	}else{
  		endpage = _nPageCount;
  	}
  }else if(_nPageCount<6){
  	  startpage = 1;
      endpage = _nPageCount;
  }else{
  	  startpage = 1;
  	  endpage = 6;
  }

  for(var k=startpage; k<=endpage; k++){
     var param = "";
     if(k >1 ) param = "_" + k;
  	if(k==nCurrIndex)
  	   con_text += "<div class=\"pagination_index_num currentIndex\">"+k+"</div>";
  	else
  	   con_text += "<div class=\"pagination_index_num\"><a href=\""+_sPageName+param + "."+_sPageExt+"\">"+k+"</a></div>";
  }
 if(nCurrIndex<_nPageCount){
 	con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a href=\""+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+"\">下一页</a></span></div>";
 }
 
 con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a href=\""+_sPageName+"_" + (_nPageCount) + "."+_sPageExt+"\">末页</a></span></div>"; 
 con_text += "<div class=\"pagination_index_last\">第 "+nCurrIndex+" 页 转<input name='pagination_input' id='pagination_input' />页 <a href='#' onclick=\"pagination_go('"+_sPageName+"','"+_sPageExt+"','"+_nPageCount+"')\" >GO</a>  共 "+_nPageSum+" 条 共 "+_nPageCount+" 页</div>";
 document.getElementById(divName).innerHTML = con_text;
} 

function pagination_go(sPageName,sPageExt,nPageCount){
	var gopageID = document.getElementById('pagination_input').value;
	gopageID= gopageID.replace(" ",'');
	if(gopageID){
		if(parseInt(gopageID)<=nPageCount && parseInt(gopageID)>0){
			if(gopageID=="1"){
				window.location.href = sPageName+"."+sPageExt;
			}else{
				window.location.href = sPageName+"_" + gopageID + "."+sPageExt;
			}
		}
	}
	return false;
}
///////内容页上一篇下一篇功能;_nNowPageID当前信息ID,suffixName后缀名
function ContentUporNext(_nNowPageID,_target,_type){
   if(!content_str)return false;
   if(content_str.lastIndexOf(",")==content_str.length-1){
   	content_str = content_str.substring(0,content_str.length-1);
   }
   var tst = content_str.split(","); 
   for(var i=0;i<tst.length;i++){
      var iscan = tst[i].indexOf(_nNowPageID+":");
      if(iscan != -1){
      	if(i==0){///此时没有上一篇
      		var prevReg = /^[PREV]|[prev]$/; 
      		if("PREV" !=_type){
      			var content_tst = tst[i+1].split(":");
      			document.write("<a href='"+content_tst[2]+"' target='"+_target+"'>"+content_tst[1]+"<FONT face=Webdings>4</FONT></a>");
      		} 
      	}else if(i==tst.length-1){//此时没有下一篇
      		if("NEXT" !=_type){
      			var content_tst = tst[i-1].split(":");
      			document.write("<a href='"+content_tst[2]+"' target='"+_target+"'><FONT face=Webdings>3</FONT>"+content_tst[1]+"</a>");
      		}      
      	}else{
      		if("PREV" ==_type){
      			var content_up = tst[i-1].split(":");
      			document.write("<a href='"+content_up[2]+"' target='"+_target+"'><FONT face=Webdings>3</FONT>"+content_up[1]+"</a>&nbsp;&nbsp;&nbsp;&nbsp;");      		
      		}
      		if("NEXT" ==_type){
      			var content_next = tst[i+1].split(":");
      			document.write("<a href='"+content_next[2]+"' target='"+_target+"'>"+content_next[1]+"<FONT face=Webdings>4</FONT></a>");   		
      		} 
      	}
      	break;
      }
   }
}

/////最新新闻标志：strtime 新闻发布时间；type 比较类型；number 比较基数
function compute(strtime,type,number,htmlstyle){
	var endDate = new Date();           
	var strtimeReplace = strtime.replace(/\-/g,"/"); //转换字符串为yyyy-MM-dd HH:mi:ss格式
	var startDate= new Date(strtimeReplace); //把字符串转换为时间格式
	var isTime = (endDate.getTime()-startDate.getTime())/1000;
	var timevalue = 0;
	if(type=="DAY" || type=="D"){
		timevalue = isTime/(24*3600);  //天
	}else if(type=="WEEK" || type=="W"){
		timevalue = isTime/(7*24*3600);//周
	}else if(type="MONTH"){
		timevalue = isTime/(30*24*3600);//月
	}else if(type=="H"){
		timevalue = parseInt(isTime/3600);//小时
	}else{
		timevalue = parseInt(isTime/60); //分钟
	}
	if(number==0){
		if(timevalue<1 && timevalue>=0)
		  document.write(htmlstyle);
	}else{
		if(timevalue<=number  && timevalue>=0)
		   document.write(htmlstyle);
	}
}
//////内容分页方法，sumpage总页数
function page_content(sumpage){
	var hrefstr="";
	for(var i=0;i<sumpage;i++){
     if(sumpage>1){
         hrefstr +="<a href='javascript:void(0);' onclick='javascript:viewpage("+i+","+sumpage+");'>"+(i+1)+"</a>";
     }
  }
  if(sumpage>1){
      document.write("<div align=center>"+hrefstr+"</div>");
  }
}
///////显示内容分页,el 页码；snum总页数
function viewpage(el,snum){
  for(var i=0;i<snum;i++){
    obj = document.all("pagediv" + i);
    if (i==el) {
       obj.style.display = "block";
    }else {
      obj.style.display = "none";
    }
  }
}