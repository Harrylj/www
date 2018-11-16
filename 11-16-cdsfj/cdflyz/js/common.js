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
  
 if(_nPageCount>1)
	con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a href=\""+_sPageName+"_" + (_nPageCount) + "."+_sPageExt+"\">末页</a></span></div>"; 
 else
	con_text += "<div class=\"pagination_index\"><span class=\"arrow\">末页</span></div>"; 
 //con_text += "<div class=\"pagination_index\"><span class=\"arrow\"><a href=\""+_sPageName+"_" + (_nPageCount) + "."+_sPageExt+"\">末页</a></span></div>"; 
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