function getName(){
	var gName = document.getElementsByName('nameP');
	console.log(gName)
	console.log(gName.length);
	console.log(gName[4].innerHTML);
}
getName();

function getTagName(){
	var gTag = document.getElementsByTagName('p');
	console.log(gTag);
	console.log(gTag.length);
	console.log(gTag[2].innerHTML)
}
getTagName();

function  getAttr(){
	var div = document.getElementById('father-div');
	console.log(div.getAttribute('id'));
}
getAttr();

function setAttr(){
	var div = document.getElementById('father-div')
	div.setAttribute('class','addClassName')
	console.log(div.getAttribute('class'))
}
setAttr();

function getNode(){
	var ul_01 = document.getElementsByClassName('ul-01')[0];
		ul_02 = document.getElementsByClassName('ul-01')[1];
	//空格字符串也占节点元素
	console.log(ul_01.childNodes.length)
	console.log(ul_01.childNodes)
	console.log(ul_01.childNodes[1].innerHTML)
	console.log(ul_02.childNodes.length)
	console.log(ul_02.childNodes)
	console.log(ul_02.childNodes[1].innerHTML)
	console.log(ul_01.parentNode.getAttribute('id'));
}
getNode()

function createE(){
	var div = document.getElementById('father-div');
	var newP = document.createElement('p');
	
	//这里为什么不能写
	//var newP = document.createElement('p').createTextNode('创建的文本节点内容');
	console.log(newP)
	//newP.innerHTML="这里是新建的ppppppppppppp";
	var newText = document.createTextNode('创建的文本节点内容');
	newP.appendChild(newText);
	//div.appendChild(newP);
	var ul_02 = document.getElementsByClassName('ul-01')[1];
	console.log(ul_02)
	//insertBefore()必须要有2个参数，但是第二个参数可为null
	div.insertBefore(newP,null);
}
createE();

function  deleteChild(){
	var ul_01 = document.getElementsByClassName('ul-01')[0];
	var li_01 = document.getElementById('li-01');
	ul_01.removeChild(ul_01.childNodes[1])
}
deleteChild();

function getHeight(){
	var height_01 = document.body.offsetHeight;
	var height_02 = document.body.scrollHeight;
	var width_01 = document.body.offsetWidth;
	var width_02 = document.body.scrollWidth;
	alert('offsetHeight = '+ height_01 + ', scrollHeight = ' + height_02 + ', offsetWidth = ' +width_01 + ', scrollWidth = ' + width_02)
}
getHeight();
