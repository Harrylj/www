$(function(){
	changeImgPosition()
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

	//滚动加载数据
	window.onscroll = function(){
		//滚动的距离
		var scrollTop =  document.documentElement.scrollTop||document.body.scrollTop; 
		//当前页面高度
		var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
		//图片容器的总高度		
		var boxAllHeight = $('#wf_container').height();
		//判断加载图片
		if(boxAllHeight < scrollTop + pageHeight){
			var imgSrc = imgData.data;
			//循环加载数据
			for(var i = 0; i< imgSrc.length;i++){
				var boxContent = $('<div class="wf_box"><div class="wf_box_img"><img src="images/'+ imgSrc[i].src +'"/></div></div>')
				$('#wf_container').append(boxContent)
			}
			
			
		}
		changeImgPosition()
		
		//console.log(boxAllHeight,scrollTop,pageHeight)
	}
	
	//改变图片位置
	function changeImgPosition(){
		//图片父级
		var wfContainer = $('#wf_container');
		//图片盒子
		var wfBox = $('.wf_box');
		//图片盒子的总宽度,包括padding
		var wfBoxWidth = wfBox.eq(0).width() + parseInt(wfBox.eq(0).css("padding-left")) + parseInt(wfBox.eq(0).css("padding-right"));
		//一排有几张图片
		var numImg = Math.floor($(window).width() / wfBoxWidth);
		//一排能存放的盒子高度数组
		var wfBoxArr = [];
		//传值进盒子高度数组
		wfBox.each(function(index,value){
			
			//盒子高度数组中最小的值
			var minHeight = Math.min.apply(null,wfBoxArr); 
			//盒子高度数组中最大的值
			var maxHeight = Math.max.apply(null,wfBoxArr);
			//当前盒子的总高度,包括padding
			var wfBoxHeight = $(value).height() + parseInt(wfBox.eq(0).css("padding-top")) + parseInt(wfBox.eq(0).css("padding-bottom"));
			//一排有几张图就传入几个值
			if(index<numImg){
				wfBoxArr.push(wfBoxHeight)
			}
			//其他多余的图片就改变其位置
			else
			{
				//console.log(getMinArr(minHeight,wfBoxArr));	
				//左移动的距离
				var wfLeft = getMinArr(minHeight,wfBoxArr) * wfBoxWidth;
				//改变图片位置
				$(value).css({"position":"absolute",
							"left":wfLeft+'px',
							"top":minHeight+ 'px'
				})
				
				//更改盒子高度数组
				wfBoxArr[getMinArr(minHeight,wfBoxArr)] = minHeight + wfBoxHeight;
				
				//console.log(minHeight)
			    
			}
			
			//改变图片父级的的宽度和高度
			wfContainer.css({"width":numImg * wfBoxWidth + 'px',
							"margin":"auto",
							"height": maxHeight,
					
			})
		})
		
		
		
		//console.log(wfBoxArr)
		
		
	}
	
	//得到最小值的数组位置xxxxxxxxxxxxxxxxxxxx
	function getMinArr(minHeight,wfBoxArr){
		for(var i in wfBoxArr){
			if(wfBoxArr[i] == minHeight){
				return i;
			}
		}
	}
	

})
