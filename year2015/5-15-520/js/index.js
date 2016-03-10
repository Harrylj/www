/**
 * Created by Administrator on 2015/5/15.
 */
$(function(){

    //添加排名函数
    function indexRank(){
        $('.i-o-rank').each(function(){
            var fatherIndex = $(this).parents('.i-option').index();
            $(this).html(fatherIndex+1);
        })
    }
    //载入排名函数
    indexRank();

    //搜索
});
