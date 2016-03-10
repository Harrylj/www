/**
 * Created by Administrator on 2015/6/16.
 */
window.onload=function(){
//delete
    var book={x:1,y:2,z:3};
    delete book.x;
    delete book["y"];
    console.log(book);
//hasOwnProperty
    //alert(book.hasOwnProperty("z"));


// !==与in
    var q={x:1,z:undefined};
    console.log(q.x!==undefined,q.y!==undefined, q.z!==undefined);
    console.log("x" in q,"y" in q, "z" in q);

//

    var name = "The Window";
    var obj = {
        name:"The Obj",
        getNameFn:function(){
            alert("1."+this.name);
            return function(){
                return this.name
            }
        }
    };
//创建对象并赋值    
    var test1 = new Object;
    test1.name = 'ls';
    test1['book'] = 'thiscao';
    console.log(test1.book);
    
    /*
    var getFn = obj.getNameFn();
    alert("2."+getFn());
    alert("3."+getFn.call(obj));
    alert("4."+getFn.apply(obj));
	console.log('The obj,null,The obj,The obj');
	*/
//通过原型继承创建一个新对象
	function inherit(p){
		if(p == null) throw TypeError();
		if (Object.create) return Object.create(p);
		var t = typeof p;
		if (t !== 'object' && t !== 'function')
			throw TypeError();
		function f() {};
		f.prototype =p;
		return new f();
	}
	
	var abc = {x:1,b:2,c:9,d:2};
	var  i = {xx:1,x:2}
	//把对象abc的属性复制到对象i中，如i中存在对象abc的属性，则不覆盖
	/*
	for(o in abc)
	{
		if(i.hasOwnProperty(o))
		{
			alert(1)
		}
		else
		{
			i[o] =abc[o]
		}	
	}
	*/
	//输出对象abc和对象i中相同的属性和值
	for(o in abc)
	{
		if(i.hasOwnProperty(o))
		{
			console.log(o+':'+ i[o]);
		}
	}
	
	console.log(i);
	
	
	//测试return		运行getReturn函数，会得到值{x:1,y:2,z:3}
	function getReturn(){
		var getObject = {x:1,y:2,z:3}
		return getObject;
	}
	console.log(getReturn());
	
	
	

};