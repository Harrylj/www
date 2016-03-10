/**
 * Created by Administrator on 2015/4/10.
 */
$(function(){
    //这里传值表示相应手势 石头为：0；剪刀为：1；帕子为：2，
    //赋值
    $('.g-choice-img-number').val('1');

    //通过值判断显示手势
    function choiceImg(){
        var choiceImgNumber = $('.g-choice-img-number').val(),
            gChoiceImg = $('.g-choice-img');
        if(choiceImgNumber=='0')
        {
            gChoiceImg.attr('src','images/pk-01.png');
        }
        if(choiceImgNumber=='1')
        {
            gChoiceImg.attr('src','images/pk-02.png');
        }
        if(choiceImgNumber=='2')
        {
            gChoiceImg.attr('src','images/pk-03.png');
        }
    }

    //调用函数
    choiceImg();
});