/**
 * Created by Administrator on 2015/4/10.
 */
$(function(){
    $('.gc-nav').children().on('click',function(){
        var thisIndex = $(this).index(),
            gcTable = $('.gc-table');
        $(this).addClass('gc-nav-xz')
            .siblings()
            .removeClass('gc-nav-xz');
        //胜利：gc-td-01 ;失败：gc-td-02; 平手：gc-td-03;等待：gc-td-04;
        if(thisIndex=='0')
        {
            gcTable.children().children().show();
        }
        if(thisIndex=='1')
        {
            gcTable.children().children().hide();
            $('.gc-td-01').show();
        }
        if(thisIndex=='2')
        {
            gcTable.children().children().hide();
            $('.gc-td-02').show();
        }
        if(thisIndex=='3')
        {
            gcTable.children().children().hide();
            $('.gc-td-03').show();
        }
        if(thisIndex=='4')
        {
            gcTable.children().children().hide();
            $('.gc-td-04').show();
        }
    });
});