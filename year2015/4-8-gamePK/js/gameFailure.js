/**
 * Created by Administrator on 2015/4/10.
 */
$(function(){
    //这里传值表示失败的手势 石头为：0；剪刀为：1；布为：2，
    //赋值
    $('.failure-img-number').val('2');

    //通过值判断显示手势
    function failureChoiceImg(){
        var choiceImgNumber = $('.failure-img-number').val(),
            successImg = $('.success-choice-img'),
            failureImg = $('.failure-choice-img');
        if(choiceImgNumber=='0')
        {
            successImg.attr('src','images/pk-03.png');
            failureImg.attr('src','images/pk-01.png');
        }
        if(choiceImgNumber=='1')
        {
            successImg.attr('src','images/pk-01.png');
            failureImg.attr('src','images/pk-02.png');
        }
        if(choiceImgNumber=='2')
        {
            successImg.attr('src','images/pk-02.png');
            failureImg.attr('src','images/pk-03.png');
        }
    }

    //调用函数
    failureChoiceImg();
});