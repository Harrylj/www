
//函数表达式又是定以后立即调用
var tensquared = (function(x){return x* x;}(100));
console.log(tensquared)


var o = {'a':1,'b':7,'6': 'c'}
//输出o的每个属性的名称和值，并返回undefined
function printprops(o){
	for(var i in o){
		console.log(i + ':' + o[i])
	}
}
printprops(o)

//定义并调用一个函数来确定当前脚本运行时是否为严格模式
var strict = (function(){
	return !this;
}());

function max(){
	//max等于负的最大值 
	var max =Number.NEGATIVE_INFINITY;
	//循环参数值进行比较大小，并取最大值
	for( var i = 0; i<arguments.length; i++)
		if(arguments[i] > max) max =arguments[i];
	return max;
}
var largest = max(1,20,100,2,3,1000,44,5,10000,6);
console.log(largest);

function arguments(x){
	console.log(x);
	arguments[0] = null;
	console.log(x);
}
arguments(10);


function arraycopy(from,index,to,to_start,length){
	
}
function easycopy(args){
	arraycopy(args.from,
	args.form_start || 0 ,
	args.to,
	args.to_start || 1, args.length);
}
var a =[1,2,3,4],
	b = [];
console.log(easycopy({from:a,to:b,length:4}));


//这个方法尽可能的在抛出异常之前将非数字转换为数字
function flexisum(a){
	var total = 0;
	for(var i = 0; i < arguments.length; i++){
		var element = arguments[i], n;
		if(element == null) continue;
		if(isArray(element))
			n = flexisum.apply(this,element);
		else if(typeof element === "function")
			n = Number(element());
		else 
			n = Number(element);
		if(isNaN(n))
			throw Error("flexisum():can't convert" + element + "to number");
		total += n ;
	}
	return total;
}
function isArray(arr) 
{ 
	return arr instanceof Array; 
} 
console.log(flexisum([2,56,34]));

function square(x){
	return x*x;
}
var s = square;
console.log(square(4))
console.log(s(4));

var o = {abcd: function(x){return x*x}};
var y = o.abcd(10);
console.log(y)

var a = [function(x){return x*x;},20];
var b = a[0](a[1]);
console.log(b);

var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f(){return scope}
	return f;
}
console.log(checkscope()())

function counter(){
	var n = 0;
	return n++;
	
}
console.log(counter())


function constfunc(v){ return function(){return v;}}
var funcs = [];
for(var i = 0; i < 10; i++) funcs[i] = constfunc(i);
console.log(funcs[4]())


/*为什么i等于10*/
function  constfuncs(){
	var funcs = [];
	for(var i = 0; i < 10; i++)
		funcs[i] = function(){ return i;}
	return funcs;
	
}

var funcs = constfuncs();
console.log(funcs[5]())

function f(y) { return this.x + y;}
var o = {x:1};
var g = f.bind(o)
console.log(g(2))

/*
function bind(f,o){
	if(f.bind) return  f.bind(o);
	else  return function(){
		return f.apply(o,arguments)
	}
}
*/

var a = [1,2,3,4,5,6];
var b = 0;
for(var i = 0; i<a.length;i++)
{
	b= a[i] + b;
}
var sum = function(x,y){
	return x+y;
}
var c = a.reduce(sum)/a.length;

var map = Array.prototype.map
	? function(a,f) { return a.map(f);}		//如果已经存在map()方法，就直接使用它
	: function(a,f) {						//否则，自己实现一个
		var results = [];
		for(var i = 0,len = a.length; i < len;i++ ){
			if(i in a) results[i] = f.call(null,a[i],i,a);
		}
		return results;
	};
	
function mapper(f){
	return function(a){ return map(a,f);};
}
var increment = function(x){ return x + 1;}
var incrementer = mapper(increment);
console.log(incrementer([1,2,3]));



var a = Math.floor(Math.random()*10);
var i = 0;
for(i; a>5; i++)
{
	
	a = Math.floor(Math.random()*10);
}
//alert('a=' + a + ' ,i=' + i)
function cat(){
}
cat.prototype={
	food:"fish",
	say: function(){
	console.log("I love "+this.food);
	}
}
var blackCat = new cat;
blackCat.say();
var bigDog = {food: 'meat'}
blackCat.say.call(bigDog)
