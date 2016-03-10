/**
 * Created by Administrator on 2015/3/26.
 */

$(function(){
        //头部点击切换影视状态
        $('.clearfix').children('li')
                .on('click',function(){
                    var thisIndex = $(this).index(),
                            orderList = $('.order-list');
                    $(this).addClass('current')
                            .siblings()
                            .removeClass('current');
                    if(thisIndex=='0')
                    {
                        $('.order-list').children()
                                .show();
                    }
                    else if(thisIndex=='1')
                    {
                        orderList.children().hide();
                        orderList.children('.movie-valid').show();
                    }
                    else
                    {
                        orderList.children().hide();
                        orderList.children('.movie-expired').show();
                    }

                });
    });