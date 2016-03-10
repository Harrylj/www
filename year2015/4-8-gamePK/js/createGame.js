/**
 * Created by Administrator on 2015/4/9.
 */
$(function(){
    //初始赋值0，表示未拳头,选中拳头，添加边框
    $('.my-checked-number').val('0');
    $('.cg-choice').children('li').eq(0).addClass('cg-choice-true border-focus');

    //点击’确定‘按钮，进行相应操作
    $('.cg-btn-qd').on('click',function(){
       var cgInputNumber = $('.cg-input-number'),
           ts = $('.cg-p4'),
           jdNumber = $('.jd-number');
       //判断不能为空
        if(cgInputNumber.val()==''||cgInputNumber.val()==cgInputNumber[0].defaultValue)
       {
            ts.show()
                .html('擂台PK金豆数不能为空');
            cgInputNumber.addClass('border-false');
       }
       //金豆余额是否充足
       else if(parseInt(jdNumber.html()) < parseInt(cgInputNumber.val()))
       {
           ts.show()
               .html('金豆的余额不足');
           cgInputNumber.addClass('border-false');
       }
       //搭建成功
       else
       {
           ts.hide();
           cgInputNumber.removeClass('border-false');
           //提示选择的金豆数=输入的金豆数
           $('.ts-checked-number').html($('.cg-input-number').val());
           $('.border-box').show();
           $('.index-zzc').show();
           //石头为：0；剪刀为：1；布为：2
           var mcNumber = $('.my-checked-number').val(),
               tcZs = $('.ts-checked-zs');
           if(mcNumber=='0')
           {
               tcZs.html('拳头');
           }
           else if(mcNumber=='1')
           {
               tcZs.html('剪刀');
           }
           else
           {
               tcZs.html('布');
           }
       }
   });

    //限制只能输入数字
    $(".cg-input-number").keyup(function(){
        var tmptxt=$(this).val();
        $(this).val(tmptxt.replace(/\D|^0/g,''));
    }).bind("paste",function(){
        var tmptxt=$(this).val();
        $(this).val(tmptxt.replace(/\D|^0/g,''));
    }).css("ime-mode", "disabled");

    //选中相应手势,改变相应值
    $('.cg-choice').children('li').on('click',function(){
        var mcNmuber = $('.my-checked-number'),
            ccImg = $('.cg-checked-img');
        //添加选中状态
        $(this).addClass('cg-choice-true border-focus')
            .siblings()
            .removeClass('cg-choice-true border-focus');
        //改变值
        mcNmuber.val($(this).index());

        if($(this).index()=='0')
        {
            ccImg.attr('src','images/pk-01.png')
        }
        if($(this).index()=='1')
        {
            ccImg.attr('src','images/pk-02.png')
        }
        if($(this).index()=='2')
        {
            ccImg.attr('src','images/pk-03.png')
        }


    });


    //参加擂台点击确认
    $('.ig-btn-qd').on('click',function(){
        $('.ts-checked-number').html($('.ig-jg-number').html());
        $('.border-box').show();
        $('.index-zzc').show();
    });

});