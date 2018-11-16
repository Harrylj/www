//_divName;_nPageCount总页数；_nCurrIndex 当前页码；_sPageName 共同前缀名；_sPageExt分页页面的文件名后缀;_nPageSum总记录数
function createPageHTML(divName,_nPageCount, _nCurrIndex, _sPageName, _sPageExt,_nPageSum){ 
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
 
 con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a onclick=\"dis('"+_sPageName+"','"+_nPageCount+"','"+_sPageExt+"')\">末页</a></span></div>"; 
 con_text += "<div class=\"pagination_index_last\">第 "+nCurrIndex+" 页 转<input name='pagination_input' id='pagination_input' />页 <a href='#' onclick=\"pagination_go('"+_sPageName+"','"+_sPageExt+"','"+_nPageCount+"')\" >GO</a>  共 "+_nPageSum+" 条 共 "+_nPageCount+" 页</div>";
 document.getElementById(divName).innerHTML = con_text;
} 

function dis(sPageName,nPageCount,sPageExt){
			if(nPageCount==1){
				window.location.href = sPageName+"."+sPageExt;
			}else{
				window.location.href = sPageName+"_" + nPageCount + "."+sPageExt;
			}
	return false;
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