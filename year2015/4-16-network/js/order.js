/**
 * Created by Administrator on 2015/4/17.
 */
$(function(){
    //点击“立即登记”,进行验证操作
    $('.o-btn-ljdj').on('click',function(){
        var oInput = $('.o-input'),
            myreg = /^0?1[3|4|5|8][0-9]\d{8}$/,
            oPhone = $('.o-input-phone'),
            oName = $('.o-input-name'),
            oTs = $('.o-ts'),
            tsName = '请输入联系人名称',
            tsPhone = '请输入联系电话',
            tsOne = '联系人不能为空！',
            tsTwo = '电话号码不能为空！',
            tsThree = '电话号码格式不对！',
            tsFour = '联系人和电话号码都不能为空!',
            tsFive = '联系人不能为空，电话号码格式不对！';

        if(oName.val()==tsName && oPhone.val()==tsPhone)
        {
            oTs.html(tsFour);
        }
        else if(!myreg.test(oPhone.val()) && oName.val()==tsName)
        {
            oTs.html(tsFive)
        }
        else if( oPhone.val()==tsPhone)
        {
            oTs.html(tsTwo);
        }
        else if(!myreg.test(oPhone.val()))
        {
            oTs.html(tsThree);
        }
        else if(oName.val()==tsName)
        {
            oTs.html(tsOne);
        }
        //登记成功
        else
        {
            oTs.html('');
            alert('登记成功')
        }

    });
    //输入框获取焦点
    $('.o-input').on('focus',function(){
        var thisVal = $(this)[0].defaultValue;
        if($(this).val()==thisVal)
        {
            $(this).val('');
        }

    });
    //输入框失去焦点
    $('.o-input').on('blur',function(){
        var thisVal = $(this)[0].defaultValue;
        if($(this).val() =='')
        {
            $(this).val(thisVal);
        }
    });



});