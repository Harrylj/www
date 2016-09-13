
//http://www.cnblogs.com/xiaowei0705/archive/2011/04/19/2021372.html

//stringify()用于从对象中解析出字符串
//parse()用于从字符串中解析出json对象
//setItem()
//浏览器运行时储存：sessionStorage
//本地储存:localStorage

function saveStorage(){
	var data = new Object;
	//var data = new Array;

	data.name = document.getElementById("name").value;
	data.email = document.getElementById("email").value;
	data.tel = document.getElementById("tel").value;
	data.memo = document.getElementById("memo").value;

	var str = JSON.stringify(data);
	//localStorage.setItem(data.name,str);
	sessionStorage.setItem(data.name,str);
	alert("数据已经保存");
}

function findStorage(id){
	var find = document.getElementById('find').value;
	var str = sessionStorage.getItem(find);
	var data = JSON.parse(str);
	var result = "姓名: " + data.name + "<br>";
		result += "邮箱： " + data.email + "<br>";
		result += "电话号码：" + data.tel + "<br>";
		result += "备注：" + data.memo + "<br>";
	var target = document.getElementById(id);
	target.innerHTML = result;
}
