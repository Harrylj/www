/**
 * Created by Administrator on 2015/5/18.
 */
$(function(){
    //j-user-sc:值为0表示未上传，1表示已上传
    //这里我默认值为0：未上传
    $('.j-user-sc').val('0');

    //判断上传显示函数
    function userSC(){
         var scNumber = $('.j-user-sc').val(),
             scBtn = $('.j-btn-sc'),
             cUl = $('.j-c-ul'),
             btnShow = $('.j-btn-fbxxyhl'),
             scWrite = $('.j-write'),
             scPreview = $('#preview');
        if(scNumber=='0')
        {
            scBtn.show();
            cUl.show();
            btnShow.show();
            scWrite.removeAttr("disabled");
        }
        if(scNumber=='1')
        {
            scBtn.hide();
            cUl.hide();
            btnShow.hide();
            scWrite.attr('disabled','disabled');
            scPreview.show();
        }

    }
    //运行上传显示函数
    userSC();

    //点击上传图片
    $('.j-btn-sc').on('click',function(){
        $('.j-file').click();
        $('#preview').show();
    });

    //显示确认上传按钮
    $('.j-btn-fbxxyhl').on('click',function(){

    });

    //点击上传“确定”按钮
    $('.j-btn-qdsc').on('click',function(){
        $('.j-user-sc').val('1');
        //运行上传显示函数
        userSC();
        alert('恭喜您上传成功')
    });

    //放大图片
    /*
    $('#preview').children('public-bg-img').on('click',function(){
        var thisSRC = $(this).attr('src');
        $('.public-bg-box').attr('src',thisSRC).show();
        return false;
    });
    */
    $('#preview').on('click','.public-bg-img',function(){
        var thisSRC = $(this).attr('src');
        $('.public-bg-box').attr('src',thisSRC).show();
        return false;
    });


});