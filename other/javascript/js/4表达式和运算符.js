/**
 * Created by Administrator on 2015/5/21.
 */
window.onload=function(){

    var o = {x:1,y:{z:3},f:[7,8,9]};
    var a = [o,5,[5,6],{b:1,d:1}];
    document.getElementById('val-01').innerHTML="a[0]";
    document.getElementById('val-01-result').innerHTML=a[0];
    document.getElementById('val-02').innerHTML="a[2]";
    document.getElementById('val-02-result').innerHTML=a[2];
    document.getElementById('val-03').innerHTML="a['2']";
    document.getElementById('val-03-result').innerHTML=a['2'];
    document.getElementById('val-04').innerHTML="a[2][1]";
    document.getElementById('val-04-result').innerHTML=a[2][1];
    document.getElementById('val-05').innerHTML="a[3].d";
    document.getElementById('val-05-result').innerHTML=a[3].d;
    document.getElementById('val-06').innerHTML="o.x";
    document.getElementById('val-06-result').innerHTML=o.x;
    document.getElementById('val-07').innerHTML="o.y.z";
    document.getElementById('val-07-result').innerHTML=o.y.z;
    document.getElementById('val-08').innerHTML="o.f[0]";
    document.getElementById('val-08-result').innerHTML=o.f[0];
    var q = {x:1.2,l:3.2};
    var p = {};
    p.x = 1.2;
    p.l = 3.2;
    console.log(p);

    var aa = 1;
    var bb = aa++;
    var cc = '5';
    var dd = cc + 2;
    var ff = 'asb\u0020fff\u0020fff';
    var gg = Math.min(1,2,3);
    var hh = true + true + false + true;
    var jj = Math.random()*10;
    var kk = 90 + Math.floor(jj);

    //随机输出30至34的整数

    var ll = Math.round(Math.random()*14) + 30;
    //alert(ll);


//in运算符
    var point = {x:1,y:1}; //定义一个对象
    var a1 = "x" in point;   // tuee ：对象有一个名为“X”的属性
    var a2 = "z" in point;   //false : 对象中不存在名为“Z”的属性
    var a3 = "toString" in point; //true: 对象继承了toString()方法
    //alert(a1+','+a2+','+a3)
    var data =[7,8,9];   //拥有三个元素的数组
    var b1 = "0" in data;   // true ：数组中包含元素"0"
    var b2 = 1 in data; //  true : 数字转换为字符串
    var b3 = 3 in data; //  false : 数组中未含有3序列号
    //alert(b1+','+b2+','+b3 );

//instanceof运算符
    var c1 = new Date();    //通过Date()构造函数来创建一个新对象
    var c2 = c1 instanceof Date;    //true：c1是由Date()创建的
    var c3 = c1 instanceof Object;  //true： 所有对象都是Objec实例
    var c4 = c1 instanceof  Number; //false：c1不是一个数组对象
    //alert(c2+','+c3+','+c4);
    var d1 = [1,2,3];       //通过数组直接量的写法创建一个数组
    var d2 = d1 instanceof Array;   //true： d1是一个数组
    var d3 = d1 instanceof Object;  //true: 所有的数组都是对象
    var d4 = d1 instanceof RegExp;  //false： 数组不是正则表达式
    //alert(d2+','+ d3+','+ d4);

    var w1 = 0x1234 & 0x00ff;
    //alert(w1);

    /*
    if(1 == true)
     {
        alert('true');
     }
    else
    {
        alert('false');
    }
    */
    var e1 = "test";
    e1.length = 5;
    var r1 = e1.length;
    // alert(r1);

//eval()
    var x5 ="global";
    function f(){
        var x5 =" local";
        eval("x5 += 'changed';");
        return x5;
    }
    console.log(f(),x5);
    //alert(x)

//?:运算符
    var y5 = -1;
    //alert(y5>0?y5:-y5);
    var x4 = 5;
    //alert(x4==5?y4=6:y4=-6)
    //alert(1111);
//typeof运算符
    //(typeof 'value' == "string")?1: 2
    //alert((x4 == '5')? 2 :3)
//delete运算符
    var d3 =[1,2,3,4,5];
    delete  d3[0];
    //alert(d3[0]+','+ (0 in d3) + ','+ d3.length);    // undefined,false,5   删除了数据的第一个元素，但是数组位置还是存在的，且数足长度不变



};





















