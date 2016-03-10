/**
 * Created by Administrator on 2015/6/11.
 */


//领取奖励种子函数
function overGame(){
    var yqhy = $('.m-btn-yqhy'),
        lqlb = $('.m-btn-lqlb');
    if($('.game-zz-invalid').length == 0)
    {
        yqhy.hide();
        lqlb.show();
    }
    else
    {
        yqhy.show();
        lqlb.hide();
    }

};


//加载生成粽子样式函数
function getGame(gameNumber){
    var gameZZ = $('.game-zz');
    for(var abc=0; abc<gameNumber.length;abc++)
    {
        switch (gameNumber[abc]){
            //未打开
            case 0:
                gameZZ.eq(abc).addClass('game-zz-invalid');
                break;
            //已打开
            case 1:
                gameZZ.eq(abc).removeClass('game-zz-invalid');
                break;
            //数据错误
            default :
                alert("数据加载出错，请重新加载页面！");
                break;
        }
    }
    //执行领取奖励种子函数
    overGame();
}