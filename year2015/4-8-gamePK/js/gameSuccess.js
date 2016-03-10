/**
 * Created by Administrator on 2015/4/10.
 */
$(function(){
    //这里传值表示获胜手势 石头为：0；剪刀为：1；帕子为：2，
    //赋值
    $('.success-img-number').val('1');

    //通过值判断显示手势
    function successChoiceImg(){
        var choiceImgNumber = $('.success-img-number').val(),
            successImg = $('.success-choice-img'),
            failureImg = $('.failure-choice-img');
        if(choiceImgNumber=='0')
        {
            successImg.attr('src','images/pk-01.png');
            failureImg.attr('src','images/pk-02.png');
        }
        if(choiceImgNumber=='1')
        {
            successImg.attr('src','images/pk-02.png');
            failureImg.attr('src','images/pk-03.png');
        }
        if(choiceImgNumber=='2')
        {
            successImg.attr('src','images/pk-03.png');
            failureImg.attr('src','images/pk-01.png');
        }
    }

    //调用函数
    successChoiceImg();
});