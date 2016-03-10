$(function(){

//join()，分割数组
	var a = [1,2,3,4,5];
	console.log(a.length);
	a.length = 2;
	console.log(a)
	a[10]=1;
	console.log(a.length);
	a.push('one');
	console.log(a[a.length-1])
	console.log(a.join('-'));
	var b = '1sdarfgdfgdgdfklgk';
	b.split()
	console.log(b);
	
	
//reverse(),倒序数组	
	var c= ['a','b','c','d','e','f','g'];
	console.log(c)
	console.log(c.reverse());
	
//sort()排序数组
	var d = new Array('apple','copy','3','5','11','10','banana','delete');
	//默认字母顺序排列，若有undefined元素，它们会被排到数组的尾部。
	console.log(d.sort());
	var f =[3,4,2,11];
	//字母表顺序：11，2，3，4
	console.log(f.sort());
	//数值顺序：根据顺序：返回负数，0，正数：2，3，4，11
	console.log(f.sort(function(a,b){return a-b;}))
	var g =['ant','Bug','cat','Dog']
	//区分大小写的排序：大写字母优先显示
	console.log(g.sort())
	//不区分大小写的排序
	console.log(g.sort(function(c,d){
		var a = c.toLowerCase(),
			b = d.toLowerCase();
		if(a < b) return -1;
		if(a > b) return 1;
		return 0;
	}));

//filter()
	var  h =[4,4,3,2,1,3,3]
	j = h.filter(function(x,i){
		return i%2 == 0;
	})
	console.log(j);
	
	


});
