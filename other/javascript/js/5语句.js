/**
 * Created by Administrator on 2015/6/1.
 */
window.onload = function(){
    var q=[1,2,3,4,5,6];
    for(var i=0;i< q.length;q[i++]=0) /*empty*/;
    console.log(q);

//switch
    function convert(w){
        //var aa = typeof w;
        switch(w){
            case 0:
                alert(0);
                break;
            case 1:
                alert(1);
                break;
            default:
                alert('null');
                break;
        }
    }
    //convert(1);
    /*
    var count = 0;
    while(count<5){
        console.log(count);
        count++;
    }
    */
//do while
    function printArray(a){
        var len = a.length,
            i=0;
        if(len == 0)
        {
            console.log('Empty Array');
        }
        else
        {
            do
            {
                console.log(a[i]);
            }
            while(++i < len);

        }
    }

    printArray([]);
// for, for in
    //printArray([5,6,7,8])
    var e = [1,2,3,8,9];
    var r = {x:99,y:88,z:77};
    for(var i =0; i< e.length; i++)
    console.log(e[i]);
    for(var p in r)
    console.log(r[p]);

    //

//return
    function square(x){
        return x*x;
    }
    //alert(square(2));

    var qq = true;
    document.getElementById('btn1').onclick=function(){
        if(qq)
        {
            qq = false;
            alert(true);
        }
        else
        {
            qq = true;
            alert(false);
        }
    };

//switch
    function test(u){

        switch(u){
            case "abc":
                alert(u);
                break;
            case "我":
                alert(u);
                break;
            default:
                alert('false');
                break;

        }
    };

//try/catch
    function tryCatch(){
        try
        {
            //要求用户输入一个数字
            var n =Number(prompt("请输入一个正整数",""));
            //假设输入是合法的，计算这个数的平方
            var f = factorial(n);
            //显示结果
            alert(n + " * "+ n + " = " + f);
        }
        catch(ex)
        {
            //如果输入不合法将执行这里的逻辑
            alert(ex);  //告诉用户产生了什么错误
        }
    }
    //tryCatch();









};






























