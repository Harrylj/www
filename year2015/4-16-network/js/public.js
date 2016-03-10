/**
 * Created by Administrator on 2015/4/17.
 */
$(function(){
    //点击“输入所在地址”，弹出选择框
    $('.ord-btn').on('click',function(){
        $(this).children('.add-select').show();
        $(this).addClass('add-btn-address-b');

    });
    //点击地址选择框，选中相应样式，
    $('.add-select').children('li').on('click',function(){
        $(this).parents('.ord-btn').removeClass('add-btn-address-b');
        $(this).parent().siblings('.add-address-val').html($(this).html());
        $(this).parent().hide();
        return false;
    });
});