//最后一张图片出现前加载数据


//容器ID
var wfParent = 'wf_container',	
//图片盒子class
	wfBox = 'wf_box',
//图片父级class
	wfBoxImg = 'wf_box_img';
window.onload = function(){
	//改变图片所处位置
	imgLoacation(wfParent,wfBox)
	
	//模拟数据
	var imgData ={"data":[{"src":'0.jpg'},
						  {"src":'1.jpg'},
						  {"src":'2.jpg'},
						  {"src":'3.jpg'},
						  {"src":'4.jpg'},
						  {"src":'5.jpg'},
						  {"src":'6.jpg'},
						  {"src":'7.jpg'},
						  {"src":'8.jpg'},
						  {"src":'9.jpg'},
						  {"src":'10.jpg'},
						  {"src":'11.jpg'},
						  {"src":'12.jpg'},
						  {"src":'13.jpg'},
						  {"src":'14.jpg'},
						  {"src":'15.jpg'},
						  {"src":'16.jpg'},
						  {"src":'17.jpg'},
						  {"src":'18.jpg'},
						  {"src":'19.jpg'},
						  {"src":'20.jpg'},
						  {"src":'21.jpg'},
						  {"src":'22.jpg'},
						  {"src":'23.jpg'},
						  {"src":'24.jpg'},
	]}
	
	
	//滚动加载
	window.onscroll = function(){
		if(checkFlag()){
			var cparent = document.getElementById(wfParent);
			//循环生成加载数据,包括加载数据的结构
			for(var i = 0; i < imgData.data.length;i++){
				var ccontent = document.createElement("div");
				ccontent.className = wfBox;
				cparent.appendChild(ccontent);
				var boximg = document.createElement("div");
				boximg.className = wfBoxImg;
				ccontent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = "images/" + imgData.data[i].src;
				boximg.appendChild(img);
				
			}
			imgLoacation(wfParent,wfBox)
		}
	}
}
//判断是否加载数据
function checkFlag(){
	var cparent = document.getElementById(wfParent);
	var ccontent = getChildElement(cparent,wfBox);
	//得到最后一个图片距离顶部的高度---------加载数据的零界点
	var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
	//获取滚动高度
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop; 
	//当前页面高度
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	console.log(lastContentHeight,pageHeight,scrollTop)
	//当滚动高度+页面高度>最后一个图片距离顶部的高度 时，加载数据
	if(scrollTop + pageHeight > lastContentHeight){
		return true;
	}
}


//改变图片所处位置
function imgLoacation(parent,content){
	//将parent下的content全部取出
	var cparent = document.getElementById(parent);
	//获取图片所在盒子的数组
	var ccontent = getChildElement(cparent,content);
	//获取图片宽度，因为每个图片是一样的，所以只用获取其中一个
	var imgWidth = ccontent[0].offsetWidth;
	//屏幕一行所能存放图片的个数
	var num = Math.floor(document.documentElement.clientWidth / imgWidth) 
	//设置父级盒子的宽度，并居中
	cparent.style.cssText = "width:" + imgWidth * num + "px;margin:0 auto;";

	//定义数组，存放盒子的高度
	var  BoxHeightArr = [];
	//改变图片所在位置
	for(var i = 0; i < ccontent.length;i++){
		//第一排的盒子高度
		if(i < num){
			BoxHeightArr[i] = ccontent[i].offsetHeight;
			console.log(BoxHeightArr[i])
		}
		else{
			//获取最小的盒子高度
			var minHeihgt = Math.min.apply(null,BoxHeightArr);
			//获取当前最低高度的盒子
			var minIndex = getminheightLocaltion(BoxHeightArr,minHeihgt);
			//设置盒子的位置
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minHeihgt + "px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
			//数据添加到盒子高度数组
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
			
		}

		//父级高度等于最高盒子的高度
		cparent.style.height = Math.max.apply(null,BoxHeightArr) + 'px';
	}
}

//获取当前最低高度的盒子
function getminheightLocaltion(BoxHeightArr,minHeight){
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] == minHeight){
			return i;
		}
	}
}

//获取图片数组
function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByClassName(content);
	for(var i = 0; i<allcontent.length; i++){
		contentArr.push(allcontent[i])
	}
	return contentArr;
}
