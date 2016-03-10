//用户可以调整参数
var wxData = {
	"ready":"false",
    "link": "http://www.heitao8.cn/appleSoldier/index.php",
    "title": "分享标题",
    "desc": '分享描述',
    "imgUrl": "http://www.heitao8.cn/appleSoldier/images/_logo.png"
};
var gameTime=1000;//游戏时间
var bgColor="#FFFFFF";//加载时的背景色
var dotColor="#81B721";//加载时圆点的颜色
var dotNum = 12;//进度点个数
var banJing = 80;//进度半径
var nextDelay=500;//自动下一步需要等待的时间
var debug=false;//调试模式
//
var state="ready";//
var growSpeed=0.02;
var minScale=0.1;//最小比例
var maxScale=1.2;//最小比例
var bridgeLen=500;//原始桥长
var carLen=100;//车长
var zhuLen=100;//支柱原始长度
var zhuArr;//支柱数组
var actionRes;//操作结果
var jiao=0;
var speedX=-10;//屏幕左移动速度
var carSpeedY=10;//汽车掉落速度
var carTargetX;//汽车的目标值，停止的位置
var carX0=0;
var carY0=727;

//游戏参数
var stageW=640;
var stageH=1008;
var screenFix = true//固定屏幕和滚动屏幕
var posYMax;//底部切线
var dir; //苹果和安卓的重力值相反
var enterType=0;//打开方式 0进入首页  1进入分享结果页. 后期需要修改此值
var lineColor="rgba(255,255,255,0.1)";//线条颜色和透明度
var jsonObj;
var tweenTime = 300;
var platform;
var canvas, stage, exportRoot;
var pageID=0;
var screenTip_mc;
var ticker;
var perTxt;
var loader0;
var loader;
var dragTime;
var curPage;
var images0; //loading资源
var images;
var gameStartTime;
var playTime = 0;
var pageMoveDir;
var perMc;
var pages;
var pageArr;
var tweenArr;
var dragingPage, dragingPageDownY;
var loadingMc;
var loadDotArr = [];
var zhongLiX, zhongLiY;
var log_txt;
var initCompleted = false;
var laBa_mc;
var zhongLiID = 0;
var jianTou_mc;
var downMouseY, downMouseX;
var tuYaBan;
var tweenIng=false;
var share_mc;
//苹果个数
var score=0;
//阳光值
var level=0;
//-------------------
var pHome_mc,pRule_mc,pGame_mc,pEnd_mc;
var gameLoop;
var loopTimes=0;
var djsTimes;

function init() {
	
    //禁止滑动屏幕
    document.addEventListener("touchmove",function(e){e.preventDefault();e.stopPropagation();});        
    platform = navigator.platform;
    
    if (platform == "iPad" || platform == "iPhone") {
        platform = "IOS";
        dir = 1;
    }else{
        dir=-1;   
    }

    canvas = document.getElementById("gameCanvas");
    images0 = images0 || {};
    var manifest0 = [
        {src: "images/_logo.png", id: "logo" }
	];
     
    stage = new createjs.Stage(canvas);
    if (document.hasOwnProperty("ontouchstart")) {
        enTouch = true;
        stage.enableDOMEvents(false);
    };

    if (screenFix) {
        createjs.Touch.enable(stage); //固定屏模式  
    } else {
        createjs.Touch.enable(stage, false, true); //可以滚屏模式,苹果手机在这个模式下摇晃可能会弹出“可能键入的对话框.
    }
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true;
    pages = new createjs.MovieClip();
    stage.addChild(pages);
    var loadingBg=new createjs.Shape();
    loadingBg.graphics.beginFill(bgColor);
    loadingBg.graphics.drawRect(0,0,stageW,stageH);
    loadingBg.graphics.endFill(); 
    pages.addChild(loadingBg);
    loader0 = new createjs.LoadQueue(false);
    loader0.loadManifest(manifest0);
    loader = new createjs.LoadQueue(false);
    
    loader0.addEventListener("complete", handleComplete0);
    loader0.addEventListener("fileload", handleFileLoad0);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener("progress", loadPro);
    window.onorientationchange = resizeCanvasDelay;
    ticker = createjs.Ticker;
    ticker.addEventListener("tick", stage);
    stage.update();
    resizeCanvas();
    
}

function soundLoadComplete(e){
	laBa_mc.visible=true;
    stage.addChild(laBa_mc);
	laBa_mc.gotoAndStop(1);
    laBaClick();
}
function LoadingDot(){
    this.skin=new createjs.Shape();
    this.flag=false;
    this.setSkin=function(__w,__color){
        var gra=this.skin.graphics;
        gra.beginFill(__color);
        gra.drawCircle(0,0,__w);
        gra.endFill(); 
    }
}
function handleFileLoad0(evt) {
	if (evt.item.type == "image") { images0[evt.item.id] = evt.result; }
}
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function laBaClick(e){
    if(laBa_mc.currentFrame==0){
        laBa_mc.gotoAndStop(1); 
        createjs.Sound.stop("bgSound");
    }else{
        laBa_mc.gotoAndStop(0); 
        createjs.Sound.play("bgSound", createjs.Sound.INTERRUPT_EARLY, 0, 0,999);
    }
}
 
function handleComplete0() {
    var logo = new createjs.Bitmap(images0.logo);
    logo.regX = 150/2;
    logo.regY = 150/2;
    logo.x = stageW / 2
    logo.y = 330;
    //文字进度
    perTxt = new createjs.Text("00%", "20px Arial", "#FFFFFF");
    perTxt.x = stageW / 2;
    perTxt.y = 380;
    perTxt.textAlign = "center";

    //水平进度
    var perW = 200;
    var perBg = new createjs.Shape();
    perBg.graphics.beginFill("#DDDDDD");
    perBg.graphics.drawRect(0, 0, perW, 5);
    perBg.graphics.endFill();
    perMc = new createjs.Shape();
    perMc.graphics.beginFill("#FFFFFF");
    perMc.graphics.drawRect(0, 0, perW, 5);
    perMc.graphics.endFill();
    perBg.x = perMc.x = (stageW - perW) / 2;
    perBg.y = perMc.y = stageH / 2;
    
    //时钟进度
    loadingMc = new createjs.Container();
    loadingMc.x = stageW / 2;
    loadingMc.y = 330;
    for (var i = 0; i < dotNum; i++) {
        var boxObj = new LoadingDot();
        //boxObj.setSkin(5, dotColor);
        loadDotArr.push(boxObj);
        var hd = Math.PI * 2 / dotNum * i - Math.PI / 2;
        boxObj.skin.x = Math.cos(hd) * banJing;
        boxObj.skin.y = Math.sin(hd) * banJing;
        boxObj.skin.rotation = hd * 180 / Math.PI;
        loadingMc.addChild(boxObj.skin);
    }
    pages.addChild(logo, loadingMc);
    loader.loadManifest(lib.properties.manifest);
}

function loadPro(e) {
    var per = loader.progress * 100 | 0;
    perTxt.text = per + "%";
    perMc.scaleX = per / 100;
    for (var i = 0; i < dotNum; i++) {
        var boxObj = loadDotArr[i];
        if (i / dotNum * 100 < per && boxObj.flag == false) {
            boxObj.setSkin(5, dotColor);
            boxObj.flag = true;
            var hd = Math.PI * 2 / dotNum * i - Math.PI / 2;
            var posx = Math.cos(hd) * banJing * 2;
            var posy = Math.sin(hd) * banJing * 2;
            EaseTween.to(boxObj.skin, { scaleX: 3, scaleY: 3, x: posx, y: posy }, 0.3, null);
        }
    }
}

function handleComplete(){
    relayout();
    setTimeout(main,400);
}

function main() {
    //图片加载完成后加载声音
    createjs.Sound.addEventListener("fileload", soundLoadComplete);
    //createjs.Sound.registerSound({src:"sounds/bgSound.mp3", id:"bgSound"}); 
    exportRoot = new lib.UI();
    log_txt = exportRoot.log_txt;
    jianTou_mc=exportRoot.jianTou_mc;
    screenTip_mc = exportRoot.screenTip_mc;
    laBa_mc = exportRoot.laBa_mc;
    laBa_mc.alpha = 0.5;
    laBa_mc.stop();
    laBa_mc.addEventListener("mousedown", laBaClick);
	
    setShare();
    setPHome();
    setPRule();
    setPGame();
    setPEnd();
    pageArr=[pHome_mc,pRule_mc,pGame_mc,pEnd_mc];
    tweenArr=["alpha","alpha","alpha"];
    initCompleted = true;
    pages.removeAllChildren();
    //rukou入口页面   
     
    if (enterType==0) {
        curPage=pHome_mc;
        //curPage=pGame_mc;
    }else{
        curPage=pEnd_mc;
        showHomeBtn(true);     
    }
    pages.addChild(curPage);
    curPage.active(); 
    resizeCanvas();
}


function showHomeBtn(boo){
    pEnd_mc.home_btn.visible=boo;
    pEnd_mc.share_btn.visible=!boo;
    pEnd_mc.send_btn.visible=!boo;  
    pEnd_mc.replay_btn.visible=!boo;   
}
function setPHome() {
    pHome_mc = exportRoot.pHome_mc;
    pHome_mc.init = function () {
        //设置动画循环
        this.dh_mc.loop=false;
        this.dh_mc.gotoAndStop(0);
        
        //添加点击事件
        this.gogo_btn.addEventListener("mousedown",gogo);        
        this.moreGame_btn.addEventListener("mousedown",moreGame);        
        this.rule_btn .addEventListener("mousedown",ruleClick);        
    }

    pHome_mc.sleep = function () {
        //停止动画
        this.dh_mc.stop();
        this.gogo_btn.alpha=0; 
        //删除非点击事件
    }

    pHome_mc.active = function () {
        this.dh_mc.gotoAndPlay(0);
        djsTimes=0;
        createjs.Tween.get(pHome_mc.gogo_btn).wait(1000).to({ alpha:1}, tweenTime, createjs.Ease.quadOut); 
    }
    pHome_mc.init();
    pHome_mc.sleep();
}

function moreGame(e){
	window.location.href="http://www.baidu.com";
}

function ruleClick(){
    //showPage(pRule_mc,"alpha", 1);
    //跳转到活动规则页面
    window.location.href="rule.html"
    var thisWidth = document.getElementById('gameCanvas').width;
	//alert(thisWidth)
}

function setPRule() {
    pRule_mc = exportRoot.pRule_mc;
    pRule_mc.init = function () {
        this.dh_mc.loop=false;
        this.dh_mc.stop();
		this.back_btn.addEventListener("mousedown",goHome);
    }

    pRule_mc.sleep = function () {
        this.dh_mc.gotoAndStop(0);
    }

    pRule_mc.active = function () {
		this.dh_mc.gotoAndPlay(0);
    }
    pRule_mc.init();
    pRule_mc.sleep();
}


function setPGame() {
    pGame_mc = exportRoot.pGame_mc;
    pGame_mc.init = function () {
		this.bridge_mc.scaleY=0;
        this.addChild(this.bar_mc);
		zhuArr=[this.zhu0,this.zhu1,this.zhu2];
		this.addEventListener("mousedown",screenDown);
    }

    pGame_mc.sleep = function () {
        clearInterval(gameLoop);
    }

    pGame_mc.active = function () {
		state="ready";
		this.bridge_mc.scaleY=0;
		this.bar_mc.score_txt.text=score+"";
		this.bar_mc.level_txt.text=level+"";
        gameStartTime=ticker.getTime();
        playTime=ticker.getTime() - gameStartTime;
        gameLoop=setInterval(run,30);
        loopTimes=0;
    }
    pGame_mc.init();
    pGame_mc.sleep();
}

function screenDown(e){
	if(state!="ready"){
		return;
	}
	pGame_mc.bridge_mc.x=zhuArr[0].x+zhuArr[0].scaleX*zhuLen;
	pGame_mc.bridge_mc.rotation=0;
	pGame_mc.bridge_mc.scaleY=minScale;
	state="grow";
	e.addEventListener("mouseup",screenUp);
}

function screenUp(e){
	state="down";
	var headX=pGame_mc.bridge_mc.x+bridgeLen*pGame_mc.bridge_mc.scaleY;//桥头坐标
	if(headX>zhuArr[1].x && headX<=zhuArr[1].x+zhuArr[1].scaleX*zhuLen){
		actionRes="yes";
		carTargetX=zhuArr[1].x+zhuArr[1].scaleX*zhuLen-carLen;
		zhuArr[2].scaleX=Math.random()*0.5+0.5;
		zhuArr[2].x=stageW+zhuArr[1].x*Math.random()*0.8;
		
	}else{
		actionRes="no";
		carTargetX=headX-carLen;
	}	
	e.removeEventListener("mouseup",screenUp);
}

function djs(){
    pHome_mc.dh_mc.gotoAndStop(djsTimes)
    djsTimes++;
    if(djsTimes<4){
        setTimeout(djs,1000);
        pHome_mc.dh_mc.scaleX=pHome_mc.dh_mc.scaleY=0;
        createjs.Tween.get(pHome_mc.dh_mc).to({ scaleX:1,scaleY:1}, 300, createjs.Ease.quadOut); 
    }else{
        gogo(null);   
    }    
}


function run(){	
    loopTimes++;
	/*
	//倒计时
    playTime=ticker.getTime() - gameStartTime;
    var sec=(gameTime*1000-playTime)/1000;
    if(sec<=0){
        sec=0;
        gameOver();
    }
    pGame_mc.bar_mc.playTime_txt.text=sec.toFixed(1);
	*/
	if(state=="grow"){
		if(pGame_mc.bridge_mc.scaleY>maxScale || pGame_mc.bridge_mc.scaleY<minScale) {
			growSpeed*=-1;	
		}
		pGame_mc.bridge_mc.scaleY+=growSpeed;
	}else if (state=="down"){
		jiao=90-pGame_mc.bridge_mc.rotation;
		pGame_mc.bridge_mc.rotation+=jiao/5;
		if(Math.round(jiao)==0){
			state="runing";		
			pGame_mc.bridge_mc.rotation=90;
		}
	}else if(state=="runing"){		
		if(pGame_mc.car_mc.x<carTargetX){
			pGame_mc.car_mc.x+=20;
		}else{
			if(actionRes=="yes"){
				state="yes";
				score+=1;
				//苹果个数
				//alert(score)
				pGame_mc.bar_mc.score_txt.text=score+"";
				pGame_mc.bar_mc.level_txt.text=level+"";
			}else{
				state="no";	
			}
		}
	}else if(state=="yes"){
		//操作正确，屏幕左移动
		if(pGame_mc.car_mc.x>-0){
			speedX=(-150-pGame_mc.car_mc.x)/10;
			pGame_mc.car_mc.x+=speedX;
			zhuArr[0].x+=speedX;
			zhuArr[1].x+=speedX;
			zhuArr[2].x+=speedX;
			pGame_mc.bridge_mc.x+=speedX;
		}else{
			//停止屏幕滚动
			state="ready";
			zhuArr.push(zhuArr.shift());
		}
	}else if(state=="no"){
		jiao=180-pGame_mc.bridge_mc.rotation;
		pGame_mc.bridge_mc.rotation+=jiao/5;
		pGame_mc.car_mc.y+=carSpeedY;
		pGame_mc.car_mc.x+=2;
		pGame_mc.car_mc.rotation+=5;
		if(Math.round(jiao)==0){
			state="loss";		
			gameOver();
		}	
	}
}


function gameOver(){
	alert('游戏结束');
    clearInterval(gameLoop);
	
	if(wxData.ready==true){
		setMenuShare();
        wxData.title="我的得分是："+score;
	}
	
    pEnd_mc.tip_txt.text="您已经得到"+score+"苹果\n\n可以进入微信奖品兑换页面兑换奖品。";
    //pEnd_mc.paiMing_txt.text="总排名：100     好友排名：20";
    pEnd_mc.paiMing_txt.text="不要气馁          你可以走的更远哦！"
    showPage(pEnd_mc,"alpha", 1);
}

function setPEnd() {
    pEnd_mc = exportRoot.pEnd_mc;
    pEnd_mc.init = function () {
        //设置动画循环
        this.dh_mc.loop=false;
        //添加点击事件		
        this.share_btn.addEventListener("mousedown",share);
        this.home_btn.addEventListener("mousedown",goHome);       
        this.duiJiang_btn .addEventListener("mousedown",duiJiang); 
        this.gameRank_btn .addEventListener("mousedown",gameRank);  
    }

    pEnd_mc.sleep = function () {
        //停止动画
        this.dh_mc.stop();
        //删除非点击事件
    }

    pEnd_mc.active = function () {
        this.dh_mc.gotoAndPlay(0);
        //this.addChild(jianTou_mc);//注释这里隐藏箭头
    }
    pEnd_mc.init();
    pEnd_mc.sleep();
}

function goEnd(e){
    showPage(pEnd_mc,"alpha");
}

function duiJiang(e){
    alert("duiJiang1111");
}
function gameRank(e){
	alert('排名')
}

//我要参与事件
//重新玩
function goHome(e){
	alert('再玩一次');
	$('.hdgz').hide();
    pHome_mc.dh_mc.gotoAndStop(0);
	showPage(pHome_mc, "alpha", 1);
	
	
	score=0;
	pGame_mc.car_mc.rotation=0;
	pGame_mc.car_mc.x=carX0;
	pGame_mc.car_mc.y=carY0;
	pGame_mc.bridge_mc.x=zhuLen;
	pGame_mc.bridge_mc.rotate=0;
	pGame_mc.bridge_mc.scaleY=0;
	zhuArr[0].x=0;
	zhuArr[1].x=stageW/2-zhuLen/2;
	zhuArr[2].x=stageW;
	zhuArr[0].scaleX=zhuArr[1].scaleX=zhuArr[2].scaleX=1;
	
}


function goGame(e){
    show1();
    reEdit=true
    showPage(pGame_mc, "alpha", 1);
}

//开始按钮事件
function gogo(e){
    showPage(pGame_mc, "alpha", 1);
}

function setShare() {
    share_mc = exportRoot.share_mc;
    share_mc.init = function () {
        //设置动画循环
        //添加点击事件
        this.back_btn.addEventListener("mousedown",hideShare);
    }
    
    share_mc.sleep = function () {
        //停止动画
        //删除非点击事件
    }

    share_mc.active = function () {
    }
    share_mc.init();
    share_mc.sleep();
}


function hideShare(e){
    console.log("点击隐藏分享按钮");    
    curPage.removeChild(share_mc);
}

function shareFinish(){
    showHomeBtn(true);
}

function share(e){
    console.log("点击分享按钮");
    curPage.addChild(share_mc);
}

//end dragPage
function resizeCanvasDelay() {
    setTimeout(resizeCanvas, 300);
}

function resizeCanvas() {
    resize();
    relayout();
};

function relayout(){
    posYMax=640/window.innerWidth*window.innerHeight;
    if(posYMax>stageH){
        posYMax=stageH;   
    }
}

function showPage(page, type, pageMoveDir) {
    curPage = page;
    tweenIng= true
    stage.mouseChildren = stage.mouseEnabled =false;
    var pageOld = pages.getChildAt(0);
    pageOld.sleep();
    pages.addChild(page);
    if (type == "none") {
        page.x = 0;
        page.y = 0;
        page.alpha = 1;
        pageInTweenEnd();
    } else if (type == "x") {
        createjs.Tween.get(pageOld).to({ y: -stageH * pageMoveDir }, tweenTime, createjs.Ease.quadOut);
        page.x = -stageW * pageMoveDir;
        page.y = 0;
        page.alpha = 1;
        createjs.Tween.get(page).
        to({ y: 0, alpha: 1 }, tweenTime * 1, createjs.Ease.quadOut).call(pageInTweenEnd);
    } else if (type == "y") {
        createjs.Tween.get(pageOld).to({ y: -stageH * pageMoveDir }, tweenTime, createjs.Ease.quadOut);
        page.y = stageH * pageMoveDir;
        page.x = 0;
        page.alpha = 1;
        createjs.Tween.get(page).to({ y: 0, alpha: 1 }, tweenTime*1, createjs.Ease.quadOut).call(pageInTweenEnd);
    } else if (type == "alpha") {
        page.alpha = 0;
        page.x = 0;
        page.y = 0;
        createjs.Tween.get(page).to({ alpha: 1 }, tweenTime * 1, createjs.Ease.quadOut).call(pageInTweenEnd);
    }
}

function pageInTweenEnd() {
    while (pages.getNumChildren() > 1) {
        pages.removeChildAt(0);
    }
    tweenIng=false;
    stage.mouseChildren = stage.mouseEnabled = true;
    curPage.active();
    curPage.addChild(log_txt);
}

function myLog(str) {
    return;
    //log_txt.text += str + "\n";
    log_txt.text = str;
}

function telClick(e) {
    window.location.href = 'tel://4008232213';
}

function zhongLi(evt) {
    var xx;
    var yy;
    zhongLiID++;
    xx = event.accelerationIncludingGravity.x;
    yy = event.accelerationIncludingGravity.y;
    //myLog(Math.floor(pHome_mc.b0.x0)+"---"+Math.floor(pHome_mc.b0.dis)+"---"+Math.floor(xx));
    if (zhongLiID % 3 == 0 && zhongLiID > 40) {
       EaseTween.to(obj,{x:xx*obj.dis*dir},0.3,null);
       //window.removeEventListener('devicemotion', zhongLi, false);
    }
}