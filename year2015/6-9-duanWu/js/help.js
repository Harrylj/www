/**
 * Created by Administrator on 2015/6/11.
 */
$(function(){
    //0表示没有帮好友拆过  1表示帮好友拆过
    $('.h-user-number').val(0);

    //默认获取粽子数组 1表示已打开，0表示未打开
    var gameNumber = [1,1,0,1,0,1,1,0];

    //载入调用粽子样式函数
    getGame(gameNumber);
    
    //点击粽子函数
    function openGame(){
        var openZZ= $('.game-zz-invalid');
        var userNumber = $('.h-user-number');
        //点击操作
        openZZ.on('click',function(){
            switch (userNumber.val()){
                //未帮助好友拆过
                case '0':
                    $(this).removeClass('game-zz-invalid');
                    $('.zzc').show();
                    $('.public-game-ts').html('亲爱的小伙伴，谢谢你哦！');
                    $('.h-ts-box').show();
                    userNumber.val(1);
                    break;
                //已帮助好友拆过
                case '1':
                    $('.zzc').show();
                    $('.public-game-ts').html('亲爱的小伙伴，太感谢你了，不过你只能帮助我一次哦！');
                    $('.h-ts-box').show();
                    break;
                default :
                    alert('数据加载出错，请重新加载页面！');
                    break;
            }

        });

    }

    //点击“帮好友拆”按钮
    $('.b-btn-bhyc').on('click',function(){
        var zzLength = $('.game-zz-invalid').length,
            invalid =$('.game-zz-invalid'),
            zzTS = $('.public-game-ts'),
            zzc = $('.zzc'),
            boxTS = $('.h-ts-box'),
            userNumber = $('.h-user-number');

        //存在可拆的粽子
        if(zzLength>0)
        {
            switch (userNumber.val()){
                //未帮助好友拆过
                case '0':
                    invalid.eq(0).removeClass('game-zz-invalid');
                    $('.zzc').show();
                    $('.public-game-ts').html('亲爱的小伙伴，谢谢你哦！');
                    $('.h-ts-box').show();
                    userNumber.val(1);
                    break;
                //已帮助好友拆过
                case '1':
                    $('.zzc').show();
                    $('.public-game-ts').html('亲爱的小伙伴，太感谢你了，不过你只能帮助我一次哦！');
                    $('.h-ts-box').show();
                    break;
                default :
                    alert('数据加载出错，请重新加载页面！');
                    break;
            }

        }
        //不存在可拆的粽子
        else
        {
            zzc.show();
            zzTS.html("亲爱的小伙伴，谢谢你哦！不过我的粽子已经拆完啦O(∩_∩)O~");
            boxTS.show();
        }
    });

    //载入调用点击粽子函数
    openGame();

});