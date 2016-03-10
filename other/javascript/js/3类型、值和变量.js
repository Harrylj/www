/**
 * Created by Administrator on 2015/5/27.
 */
window.onload=function(){
    var a = {x:1},
        b = {x:1};
    /*
    if(a == b)
    {
        alert(true)
    }
    else
    {
        alert(false)
    }
    */

    var c = [];
    var d = c;
    d[0] = 1;
    if(c===d)
    {
        //alert(true)
    }
    else
    {
        //alert(false)
    }


    //比较两个数组的大小
    var q=[2,3,4,5,6,88,9,90,10];
    var w =[22,3,4,555,66,777,888,999,2222,3];
    var e = 0;
    var y;
    if(q.length> w.length)
    {
       y= q.length;
    }
    else
    {
        y= w.length
    }
    for(var i =0; i < y; i++)
    {
        if(w[i]>=e)
        {
            e=w[i];
        }
        if(q[i]>=e)
        {
            e=q[i];
        }
    }
    //alert(e);
    var u = new Date(2011,0,1);
    var o1 ='0';
    function abc(){

         o1='1';
    }
    abc();
    //alert(o1);









};