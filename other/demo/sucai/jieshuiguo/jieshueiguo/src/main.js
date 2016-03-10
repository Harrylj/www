(function(){
	window.onload = function(){
		game.init();
	};

var game = {
	res:[
	{id:"splash",size:450,src:"Image/BG_main_320.png"},
	{id:"btns",size:77,src:"Image/ui_bar_main.png"},
	{id:"bg",size:450,src:"Image/bg_3_2.png"},
	{id:"bar",size:100,src:"Image/UI_bar.png"},
	{id:"cloud",size:100,src:"Image/clouds.png"},
	{id:"Boy",size:100,src:"Image/basket.png"},
	{id:"Num",size:100,src:"Image/num.png"},
	{id:"fruit1",size:40,src:"Image/fruit/fruit1.png"},
	{id:"fruit2",size:40,src:"Image/fruit/fruit2.png"},
	{id:"fruit3",size:40,src:"Image/fruit/fruit3.png"},
	{id:"fruit4",size:40,src:"Image/fruit/fruit4.png"},
	{id:"fruit5",size:40,src:"Image/fruit/fruit5.png"},
	{id:"fruit6",size:40,src:"Image/fruit/fruit6.png"},
	{id:"fruit7",size:40,src:"Image/fruit/fruit7.png"},
	{id:"fruit8",size:40,src:"Image/fruit/fruit8.png"},
	{id:"fruit9",size:40,src:"Image/fruit/fruit9.png"},
	{id:"fruit10",size:40,src:"Image/fruit/fruit10.png"},
	{id:"fruit11",size:40,src:"Image/fruit/fruit11.png"},
	{id:"fruit12",size:40,src:"Image/fruit/fruit12.png"},
	{id:"fruit13",size:40,src:"Image/fruit/fruit13.png"},
	{id:"fruit14",size:40,src:"Image/fruit/fruit14.png"},
	{id:"fruit15",size:40,src:"Image/fruit/fruit15.png"},
	{id:"fruit16",size:40,src:"Image/fruit/fruit16.png"},
	{id:"fruit17",size:40,src:"Image/fruit/fruit17.png"},
	{id:"fruit18",size:40,src:"Image/fruit/fruit18.png"},
	{id:"fruit19",size:40,src:"Image/fruit/fruit19.png"},
	{id:"fruit20",size:40,src:"Image/fruit/fruit20.png"},
	{id:"fruit21",size:40,src:"Image/fruit/fruit21.png"},
	{id:"fruit22",size:40,src:"Image/fruit/fruit22.png"},
	{id:"fruit23",size:40,src:"Image/fruit/fruit23.png"},
	{id:"fruit24",size:40,src:"Image/fruit/fruit24.png"},
	{id:"fruit25",size:40,src:"Image/fruit/fruit25.png"},
	{id:"fruit26",size:40,src:"Image/fruit/fruit26.png"},
	{id:"fruit27",size:40,src:"Image/fruit/fruit27.png"},
	{id:"fruit28",size:40,src:"Image/fruit/fruit28.png"},
	{id:"fruit29",size:40,src:"Image/fruit/fruit29.png"},
	{id:"fruit30",size:40,src:"Image/fruit/fruit30.png"},
	{id:"fruit31",size:40,src:"Image/fruit/fruit31.png"},
	{id:"fruit32",size:40,src:"Image/fruit/fruit32.png"},
	{id:"fruit33",size:40,src:"Image/fruit/fruit33.png"},
	{id:"fruit34",size:40,src:"Image/fruit/fruit34.png"},
	{id:"fruit35",size:40,src:"Image/fruit/fruit35.png"},
	{id:"fruit36",size:40,src:"Image/fruit/fruit36.png"},
	{id:"fruit37",size:40,src:"Image/fruit/fruit37.png"},
	{id:"fruit38",size:40,src:"Image/fruit/fruit38.png"},
	{id:"fruit39",size:40,src:"Image/fruit/fruit39.png"},
	{id:"fruit40",size:40,src:"Image/fruit/fruit40.png"},
	{id:"fruit41",size:40,src:"Image/fruit/fruit41.png"},
	{id:"fruit42",size:40,src:"Image/fruit/fruit42.png"},
	{id:"fruit43",size:40,src:"Image/fruit/fruit43.png"},
	{id:"fruit44",size:40,src:"Image/fruit/fruit44.png"},
	{id:"fruit45",size:40,src:"Image/fruit/fruit45.png"},
	{id:"fruit46",size:40,src:"Image/fruit/fruit46.png"},
	{id:"fruit47",size:40,src:"Image/fruit/fruit47.png"},
	{id:"fruit48",size:40,src:"Image/fruit/fruit48.png"},
	{id:"fruit49",size:40,src:"Image/fruit/fruit49.png"},
	{id:"fruit50",size:40,src:"Image/fruit/fruit50.png"},
	{id:"fruit",size:100,src:"Image/fruit1.png"},
	{id:"fruit_old",size:100,src:"Image/fruit_old.png"},
	{id:"num1", size:15, src:"Image/num1.png"},
	{id:"num2", size:29, src:"Image/num2.png"},
	{id:"btn",size:100,src:"Image/btn2.png"},
	{id:"life",size:100,src:"Image/life.png"},
	{id:"gameover",size:100,src:"Image/effect_gameover.png"}
	],
	container:null,
	width:0,
	height:0,
	frames:0,
	params:null,
	
	fps:40,
	timer: null,
	eventTarget: null,
	state: null,
	
	Boy: null,
	fruits: [],
	maxfruits: 50,
	receivefruit: null,
	
	time: {total:120, current:120},
	score: 0,
	scoreNum: null,
	lifeNum:null
};

var STATE = 
{
	MENU: 0,
	MAIN: 1,
	OVER: 2
};

var ns = window.game = game;

game.init = function(){
	//加载进度信息
	var container = Q.getDOM("container");
	var div = document.createElement("div");
	var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.width = container.clientWidth + "px";
	div.style.left = "0px";
	div.style.top = (container.clientHeight >> 1) + "px";
	div.style.textAlign = "center";
	div.style.color = "#fff";
	div.style.font = Q.isMobile ?  'bold 16px 黑体' : 'bold 16px 宋体';
	div.style.textShadow = Q.isAndroid ? "0 2px 2px #111" : "0 2px 2px #ccc";
	container.appendChild(div);
	this.loader = div;
	//隐藏导航栏
	setTimeout(game.hideNavBar,10);
	if(Q.supportOrient)
    {
        window.onorientationchange = function(e)
        {
            game.hideNavBar();
            game.calcStagePosition();
        };
    }    
	
	//加载图片信息
	var loader = new Q.ImageLoader();
	loader.addEventListener("loaded",Q.delegate(this.onLoadLoaded,this));
	loader.addEventListener("complete",Q.delegate(this.onCompleteLoaded,this));
	loader.load(this.res);
};

//正在加载
game.onLoadLoaded = function(e){
    this.loader.innerHTML = "正在加载资源中，请稍候...<br>";
	this.loader.innerHTML += "(" + Math.round(e.target.getLoadedSize()/e.target.getTotalSize()*100) + "%)";
};
//加载完成
game.onCompleteLoaded = function(e){
	e.target.removeAllEventListeners();
	Q.getDOM("container").removeChild(this.loader);
	this.loader = null;
	this.images = e.images;
	//初始化一些类
	ns.Fruit.init();
	ns.Num.init();
	this.StartUp();
};

//取出对应图片
game.getImage = function(id){
	return this.images[id].image;
};

//启动游戏
game.StartUp = function(){
//手持设备的特殊webkit设置
	if(Q.isWebKit && Q.supportTouch)
	{
		document.body.style.webkitTouchCallout = "none";
		document.body.style.webkitUserSelect = "none";
		document.body.style.webkitTextSizeAdjust = "none";
		document.body.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
	}
	
	//初始化容器设置
	var colors = ["#00c2eb", "#cbfeff"];
	this.container = Q.getDOM("container");
	this.container.style.overflow = "hidden";
	this.container.style.background = "-moz-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
	this.container.style.background = "-webkit-gradient(linear, 0 0, 0 bottom, from("+ colors[0] +"), to("+ colors[1] +"))";
	this.container.style.background = "-o-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
	this.container.style.background = "-ms-linear-gradient(top, "+ colors[0] +", "+ colors[1] +")";
	this.container.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr="+ colors[0] +", endColorstr="+ colors[1] +")";
	this.width = this.container.clientWidth;
	this.height = this.container.clientHeight;
	
	this.params = Q.getUrlParams();
	this.maxfruits = this.params.fruits || 5;
    this.time = this.params.time ? {total:this.params.time, current:this.params.time} : {total:120, current:120};
    this.fps = this.params.fps || 40;
	//初始化 context
	this.context = null;
	if(this.params.canvas){
		var canvas = Quark.createDOM("canvas", {width:this.width, height:this.height, style:{position:"absolute"}});
		this.container.appendChild(canvas);
		this.context = new Quark.CanvasContext({canvas:canvas});
	}else{
		this.context = new Quark.DOMContext({canvas:container});
	}
	
	//创建舞台
	this.stage = new Q.Stage({context:this.context, width:this.width, height:this.height, update:Q.delegate(this.update,this)});
	
	//初始化计时器
	var timer = new Q.Timer(1000/this.fps);
	timer.addListener(this.stage);
	timer.start();
	this.timer = timer;
	
	//注册事件
	var me = this;
	var em = new Q.EventManager();
	var events = Q.supportTouch ? ["touchstart", "touchmove", "touchend"] : ["mousedown", "mousemove", "mouseup"];
	em.register(this.context.canvas, events, function(e)
	{
		var ne = (e.touches && e.touches.length > 0) ? e.touches[0] : 
			(e.changedTouches && e.changedTouches.length > 0) ? e.changedTouches[0] : e;
		//确保touchend事件的类型正确
        if(Q.supportTouch) ne.type = e.type;

		var x = ne.pageX - me.stage.stageX, y = ne.pageY - me.stage.stageY;
		var obj = me.stage.getObjectUnderPoint(x, y);
		if(me.eventTarget != null && me.eventTarget != obj)
		{
			if(me.eventTarget.onEvent != null) me.eventTarget.onEvent({type:"mouseout"});
			me.eventTarget = null;
		}
		if(obj != null)
		{
			me.eventTarget = obj;
			if(obj.useHandCursor) me.context.canvas.style.cursor = "pointer";
			if(obj.onEvent != null) obj.onEvent(ne);
		}
		
	}, true, true);
	
	//按键事件
	em.register(document, ["keydown", "keyup"], function(e)
	{
		var key = e.keyCode;
		if(me.state != STATE.MAIN) return;		
		if(key == Q.KEY.A || key == Q.KEY.LEFT)
		{
			if(e.type == "keydown") me.Boy.leftmove(-1);
			else if(e.type == "keyup") me.Boy.stopMove();
		}else if(key == Q.KEY.D || key == Q.KEY.RIGHT)
		{
			if(e.type == "keydown") me.Boy.rightmove(1);
			else if(e.type == "keyup") me.Boy.stopMove();
		}
	}, false, false);
	
	//显示开始菜单
	this.showMenu();
	
};

//显示开始菜单
game.showMenu = function(){
	
	if(this.splash == null){
		//启动画面
		var splash = new Q.Bitmap({id:"splash", image:this.getImage("splash")});
		splash.scaleX = splash.scaleY = 1.0;
		splash.x = 0;
		splash.y = 0;
		this.splash = splash;
		
		//开始按钮
		var playBtn = new Q.Button({id:"playBtn", image:this.getImage("btns")});
		playBtn.setUpState({rect:[0,0,166,50]});
		playBtn.setOverState({rect:[0,50,166,50]});
		playBtn.regX = playBtn.width >> 1;
		playBtn.regY = playBtn.height >> 1;
		playBtn.x = this.width +150>> 1;
		playBtn.y = (this.height >> 1) - 120;
		this.playBtn = playBtn;
		playBtn.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this, e);
		if(e.type == "mouseup" || e.type == "touchend")
		{
			game.stage.removeAllChildren();
			game.context.canvas.style.cursor = "";
			if(game.state == STATE.MENU)
			{				
				trace("game start");
				setTimeout(Q.delegate(game.showMain, game), 100);
			}
		}else if(e.type == "mouseout"){
			game.context.canvas.style.cursor = "";
		}
		}
		
		//游戏结束按钮
		var gameoverBtn = new Q.Button({id:"gameoverBtn", image:this.getImage("gameover")});
		gameoverBtn.setUpState({rect:[0,78,255,100]});
		gameoverBtn.setOverState({rect:[0,78,255,100]});
		gameoverBtn.regX = gameoverBtn.width >> 1;
		gameoverBtn.regY = gameoverBtn.height >> 1;
		gameoverBtn.x = this.width >> 1;
		gameoverBtn.y = (this.height >> 1) - 80;
		this.gameoverBtn = gameoverBtn;
		gameoverBtn.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this, e);
		if(e.type == "mouseup" || e.type == "touchend")
		{
			game.stage.removeAllChildren();
			game.context.canvas.style.cursor = "";
		    if(game.state == STATE.OVER)
			{
				trace("game restart");
				game.overlay.parentNode.removeChild(game.overlay);
				game.stage.removeAllChildren();			
				game.timer.paused = false;
				game.score = 0;
				game.state = STATE.MENU;
				setTimeout(Q.delegate(game.showMenu, game), 100);
			}
		}else if(e.type == "mouseout"){
			game.context.canvas.style.cursor = "";
		}
		}
		
		//游戏结束配图
		var gameoverPng = new Q.Button({id:"gameoverPng", image:this.getImage("gameover")});
		gameoverPng.setUpState({rect:[255,0,274,170]});
		gameoverPng.setOverState({rect:[255,0,274,170]});
		gameoverPng.regX = gameoverPng.width >> 1;
		gameoverPng.regY = gameoverPng.height >> 1;
		gameoverPng.x = this.width >> 1;
		gameoverPng.y = (this.height >> 1) + 40;
		this.gameoverPng = gameoverPng;
		gameoverPng.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this, e);
		if(e.type == "mouseup" || e.type == "touchend")
		{
			game.stage.removeAllChildren();
			game.context.canvas.style.cursor = "";
		    if(game.state == STATE.OVER)
			{
				trace("game restart");
				game.overlay.parentNode.removeChild(game.overlay);
				game.stage.removeAllChildren();			
				game.timer.paused = false;
				game.state = STATE.MENU;
				setTimeout(Q.delegate(game.showMenu, game), 100);
			}
		}else if(e.type == "mouseout"){
			game.context.canvas.style.cursor = "";
		}
		}
		
		//其它按钮1（就没有做那么多功能了）
		var otherBtn1 = new Q.Button({id:"otherBtn1", image:this.getImage("btns")});
		otherBtn1.setUpState({rect:[167,0,166,50]});
		otherBtn1.setOverState({rect:[167,50,166,50]});
		otherBtn1.regX = otherBtn1.width >> 1;
		otherBtn1.regY = otherBtn1.height >> 1;
		otherBtn1.x = this.width +150>> 1;
		otherBtn1.y = (this.height >> 1) - 70;
		this.otherBtn1 = otherBtn1;
		otherBtn1.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this,e);
		if(e.type == "mouseup" || e.type == "touchend"){
			alert("木有该功能哟>.<");
		}else if(e.type == "mouseout"){
		}
		}
		
		//其它按钮2（就没有做那么多功能了）
		var otherBtn2 = new Q.Button({id:"otherBtn2", image:this.getImage("btns")});
		otherBtn2.setUpState({rect:[334,0,166,50]});
		otherBtn2.setOverState({rect:[334,50,166,50]});
		otherBtn2.regX = otherBtn2.width >> 1;
		otherBtn2.regY = otherBtn2.height >> 1;
		otherBtn2.x = this.width +150>> 1;
		otherBtn2.y = (this.height >> 1) - 20;
		this.otherBtn2 = otherBtn2;
		otherBtn2.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this,e);
		if(e.type == "mouseup" || e.type == "touchend"){
			alert("木有该功能哟>.<");
		}else if(e.type == "mouseout"){
		}
		}
		
		//其它按钮3（就没有做那么多功能了）
		var otherBtn3 = new Q.Button({id:"otherBtn3", image:this.getImage("btns")});
		otherBtn3.setUpState({rect:[501,0,166,50]});
		otherBtn3.setOverState({rect:[501,50,166,50]});
		otherBtn3.regX = otherBtn3.width >> 1;
		otherBtn3.regY = otherBtn3.height >> 1;
		otherBtn3.x = this.width +150>> 1;
		otherBtn3.y = (this.height >> 1) +30;
		this.otherBtn3 = otherBtn3;
		otherBtn3.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this,e);
		if(e.type == "mouseup" || e.type == "touchend"){
			alert("木有该功能哟>.<");
		}else if(e.type == "mouseout"){
		}
		}
		
		//其它按钮4（就没有做那么多功能了）
		var otherBtn4 = new Q.Button({id:"otherBtn4", image:this.getImage("btns")});
		otherBtn4.setUpState({rect:[670,0,166,50]});
		otherBtn4.setOverState({rect:[670,50,166,50]});
		otherBtn4.regX = otherBtn4.width >> 1;
		otherBtn4.regY = otherBtn4.height >> 1;
		otherBtn4.x = this.width +150>> 1;
		otherBtn4.y = (this.height >> 1) +80;
		this.otherBtn4 = otherBtn4;
		otherBtn4.onEvent = function(e){
		Q.Button.prototype.onEvent.call(this,e);
		if(e.type == "mouseup" || e.type == "touchend"){
			alert("木有该功能哟>.<");
		}else if(e.type == "mouseout"){
		}
		}
		
		//帮助提示
		var tip = new Q.createDOM("div",{id:"tip", style:
		{
			position: "absolute",
			width: this.width + "px",
			height: "50px",
			top: (this.height-60) + "px",
			textAlign: "center",
			color: "#000",
			font: Q.isMobile ?  'bold 24px 黑体' : 'bold 24px 宋体',
			textShadow: Q.isAndroid ? "0 2px 2px #111" : "0 2px 2px #ccc"
			
		}});
		tip.innerHTML = "操作提示：A或←键向左，D或→键向右跃。";
		this.tip = tip;
	}
	this.state = STATE.MENU;
	this.stage.addChild(this.splash,this.playBtn,this.otherBtn1,this.otherBtn2,this.otherBtn3,this.otherBtn4);
	this.container.appendChild(this.tip);
};

//游戏主场景
game.showMain = function(e){
	var me = this;var StartLifeNum = this.StartLifeNum = 3;
	this.state = STATE.MAIN;
	if(this.tip.parentNode) this.tip.parentNode.removeChild(this.tip);
	if(this.bg == null){
	    //新的游戏背景
		var bg = new Q.Bitmap({id:"bg",image:this.getImage("bg")});
		bg.scaleX = bg.scaleY = 1.0;
		bg.x = 0;
		bg.y = 0;
		this.bg = bg;
		
		//游戏bar
		var bar = new Q.Bitmap({id:"bar",image:this.getImage("bar")});
		bar.y = 425;
		this.bar = bar;
		
		//云彩
		var cloud = new Q.Bitmap({id:"cloud",image:this.getImage("cloud")});
		cloud.y = 80;
		cloud.regX = 200;
		cloud.speedX = 0.3;
		cloud.dirX = 1;
		this.cloud = cloud;
		
		//Boy
		var Boy = new ns.Boy({id:"Boy"});
		Boy.scaleX = Boy.scaleY = 1.0;
		this.Boy = Boy;
		
		//创建下落的水果数组
		this.createFruit();
		/*alert(this.fruits[0].type.id+"|"+this.fruits[1].type.id+"|"+this.fruits[2].type.id+"|"+this.fruits[3].type.id+"|"+this.fruits[4].type.id+"|ff");*/
		this.changeCloudDirection();
		this.timer.addListener({step:function()
		{
			me.moveCloud(me.cloud);
		}});
		
		//每隔一段时间改变云层的运行方向
		var delay = function()
		{
			me.timer.delay(function()
			{
				game.changeCloudDirection();
				delay();
			}, 5000);
		}
		delay();
		
		
	}
	//初始化Boy
	this.Boy.x = this.width - this.Boy.getCurrentWidth() >> 1;
	this.Boy.y = this.height - this.Boy.getCurrentHeight() - 48;
	this.Boy.dirX = 0;
	this.Boy.dirY = 0;
	this.Boy.avatar.gotoAndStop("static");
	
	//暂停按钮
    var pauseBtn = new Q.Button({id:"pauseBtn", image:this.getImage("btn")});
	pauseBtn.setUpState({rect:[61,0,61,59]});
	pauseBtn.setDownState({rect:[0,0,61,59]});
	pauseBtn.regX = pauseBtn.width >> 1;
	pauseBtn.regY = pauseBtn.height >> 1;
	pauseBtn.x = 25;
	pauseBtn.y = 25;
	this.pauseBtn = pauseBtn;
	pauseBtn.onEvent = function(e){
	Q.Button.prototype.onEvent.call(this, e);
	if(game.state == STATE.OVER) return;
	if(e.type == "mouseup" || e.type == "touchend")
	{
		game.context.canvas.style.cursor = "";
		var paused = game.timer.paused;
		game.timer.paused = !paused;
		pauseBtn.gotoAndStop( paused ? 0 : 1);
		game.stage.step();
	}else if(e.type == "mouseout"){
		game.context.canvas.style.cursor = "";
	}
	}
	
	//初始化得分
	var StartScore = new Q.DisplayObjectContainer({id:"StartScore",width:200,height:48});
	var num0 = new ns.Num({id:"num0", type:ns.Num.Type.num2});
	var num1 = new ns.Num({id:"num1", type:ns.Num.Type.num2});
	var num2 = new ns.Num({id:"num2", type:ns.Num.Type.num2});
	var num3 = new ns.Num({id:"num3", type:ns.Num.Type.num2});
	num1.x = 50;
	num2.x = 100;
	num3.x = 150;
	StartScore.addChild(num0, num1, num2, num3);
	StartScore.scaleX = StartScore.scaleY = 0.35;
	StartScore.x = 60;
	StartScore.y = 425;
	this.StartScore = StartScore
	
	//初始化最高分
	var StartHighestScore = new Q.DisplayObjectContainer({id:"StartHighestScore",width:200,height:48});
	var nums0 = new ns.Num({id:"nums0", type:ns.Num.Type.num2});
	var nums1 = new ns.Num({id:"nums1", type:ns.Num.Type.num2});
	var nums2 = new ns.Num({id:"nums2", type:ns.Num.Type.num2});
	var nums3 = new ns.Num({id:"nums3", type:ns.Num.Type.num2});
	nums1.x = 50;
	nums2.x = 100;
	nums3.x = 150;
	StartHighestScore.addChild(nums0, nums1, nums2, nums3);
	StartHighestScore.scaleX = StartHighestScore.scaleY = 0.35;
	StartHighestScore.x = 60;
	StartHighestScore.y = 445;
	this.StartHighestScore = StartHighestScore;
	var str = this.getScore().toString(), len = str.length;
	str = len > 4 ? str.slice(len - 4) : str;
	while(str.length < 4) str = "0" + str;
	for(var i = 0; i < str.length; i++)
	{
		this.StartHighestScore.getChildAt(i).setValue(Number(str[i]));
	}
	
	//初始化生命值（三个）
	var Life = new Q.DisplayObjectContainer({id:"Life",width:150,height:40});
	var life0 = new ns.Num({id:"life0",type:ns.Num.Type.life1});
	var life1 = new ns.Num({id:"life1",type:ns.Num.Type.life1});
	var life2 = new ns.Num({id:"life2",type:ns.Num.Type.life1});
	/*var life3 = new ns.Life({id:"life3",type:ns.Life.Type.life1});
	var life4 = new ns.Life({id:"life4",type:ns.Life.Type.life1});*/
	life0.x = 10;
	life1.x = 45;
	life2.x = 80;
/*	life3.x = 115;
	life4.x = 150;*/
	Life.addChild(life0,life1,life2);
	Life.scaleX = Life.scaleY = 0.6;
	Life.x = 194;
	Life.y = 441;
	this.Life = Life;
	
	this.stage.addChild(this.bg,this.bar,this.cloud,this.Boy,this.pauseBtn,this.StartScore,this.Life,this.StartHighestScore);
	for(var i = 0; i < this.fruits.length; i++) 
	{
		var fruit = this.fruits[i];
		fruit.reset(ns.Fruit.getRandomType());
		this.stage.addChild(fruit);
	}
};

//创建下落的水果数组
game.createFruit = function(){
  var minX = 100, maxX = this.width-100, minY = -500, maxY = 0;
  for(var i = 0; i < this.maxfruits; i++)
	  {
		  var fruit = new ns.Fruit({id:"fruit"+i, type:ns.Fruit.getRandomType()});
		  fruit.scaleX = fruit.scaleY = 1.0;
		  this.fruits.push(fruit);
	  }
};

var sortFruitFunc = function(a, b){return a.y < b.y;}
//检测水果和篮子是否碰撞
game.checkCollide = function(){
var me = this, fruits = this.fruits, Boy = this.Boy;
	//根据水果的Y轴排序
	fruits.sort(sortFruitFunc);
	
	for(var i = 0; i < fruits.length; i++)
	{
		var fruit = fruits[i];
		if(fruit.fading || fruit.bouncing) continue;
		var gapH = fruit.getCurrentWidth()*0.5, gapV = fruit.getCurrentHeight()*0.5;
		var dx = fruit.x - Boy.x, dy = Boy.y - fruit.y + 20;		
		
		if(dx <= Boy.getCurrentWidth() && dx >= 0 && dy <= gapV && dy >= -gapV-20)
		{
			fruit.getCollide();//判断是否装到红苹果，装一个加一个生命值知道加满生命值
			this.addScore(fruit,fruit.currentScore);
			if(fruit.updatelife){
				this.StartLifeNum += fruit.addLife;
				if(this.StartLifeNum < 0){
			    this.StartLifeNum = 0
				}else if(this.StartLifeNum >5){
				this.StartLifeNum = 5;
				}
			    this.updateLife();
			}
		}
	}
};

//加积分
game.addScore = function(fruit,score){
	var me = this;var str = Math.abs(score).toString(), len = str.length;
	if(this.addNum == null)
	{
		var container = new Q.DisplayObjectContainer({id:"addNum", width:140, height:65});
		var plus = new ns.Num({id:"plus", type:ns.Num.Type.num1});
		if(score < 0){
			plus.setValue(10);
		}else{
		    plus.setValue(11);
		}
		plus.x = 25;
		var num = new ns.Num({id:"num", type:ns.Num.Type.num1});
		num.x = 55;
		var num2 = new ns.Num({id:"num2",type:ns.Num.Type.num1});
		num2.x = 85;
		container.addChild(plus,num,num2);
		this.addNum = container;
	}	
	this.stage.addChild(this.addNum);
	if(score < 0){
		this.addNum.getChildAt(0).setValue(10);
	}else{
		this.addNum.getChildAt(0).setValue(11);
	}
	if(len > 1){
		this.addNum.getChildAt(1).setValue(Number(str[0]));
		this.addNum.getChildAt(2).setValue(Number(str[1]));
		
	}else{
		this.addNum.getChildAt(1).setValue(0);
		this.addNum.getChildAt(2).setValue(Math.abs(score));
	}
	if(fruit.x >= 280){
	this.addNum.x = fruit.x - 120;
	}else{
	this.addNum.x = fruit.x - 60;
	}
	this.addNum.y = fruit.y - 45;
	this.addNum.alpha = 1;
	
	this.score += score;
	this.updateScore();
	
	/*Q.Tween.to(me.addNum, {me.addNum.alpha:0}, {time:500});*/
	setTimeout(function(){me.addNum.alpha = 0;},500);
};

//更新总得分
game.updateScore = function()
{
	this.stage.removeChild(this.StartScore);
	if(this.scoreNum == null)
	{
		var container = new Q.DisplayObjectContainer({id:'score', width:200, height:48});
		var num0 = new ns.Num({id:"num0", type:ns.Num.Type.num2});
		var num1 = new ns.Num({id:"num1", type:ns.Num.Type.num2});
		var num2 = new ns.Num({id:"num2", type:ns.Num.Type.num2});
		var num3 = new ns.Num({id:"num3", type:ns.Num.Type.num2});
		num1.x = 50;
		num2.x = 100;
		num3.x = 150;
		container.addChild(num0, num1, num2, num3);
		container.scaleX = container.scaleY = 0.35;
		container.x = 60;
		container.y = 425;
		this.scoreNum = container;
	}	
	this.stage.addChild(this.scoreNum);
	var str = this.score.toString(), len = str.length;
	str = len > 4 ? str.slice(len - 4) : str;
	while(str.length < 4) str = "0" + str;
	for(var i = 0; i < str.length; i++)
	{
		this.scoreNum.getChildAt(i).setValue(Number(str[i]));
	}
	/*****************/
	/****************/
}

//更新生命值
game.updateLife = function()
{
	this.stage.removeChild(this.Life);

		var container = new Q.DisplayObjectContainer({id:'Lifes', width:200, height:40});
		var Life0 = new ns.Num({id:"life0",type:ns.Num.Type.life1});
		var Life1 = new ns.Num({id:"life1",type:ns.Num.Type.life1});
		var Life2 = new ns.Num({id:"life2",type:ns.Num.Type.life1});
		var Life3 = new ns.Num({id:"life3",type:ns.Num.Type.life1});
		var Life4 = new ns.Num({id:"life4",type:ns.Num.Type.life1});
		Life0.x = 10;
		Life1.x = 45;
		Life2.x = 80;
		Life3.x = 115;
		Life4.x = 150;
		if(this.StartLifeNum == 0){
		this.stage.removeChild(this.lifeNum);
		this.Boy.avatar.gotoAndStop("eatoldfruit");
		game.gameOver();
		}else if(this.StartLifeNum == 1){
		this.stage.removeChild(this.lifeNum);
		container.addChild(Life0);
		}else if(this.StartLifeNum == 2){
	    this.stage.removeChild(this.lifeNum);
		container.addChild(Life0,Life1);
		}else if(this.StartLifeNum == 3){
		this.stage.removeChild(this.lifeNum);
		container.addChild(Life0,Life1,Life2);
		}else if(this.StartLifeNum == 4){
		this.stage.removeChild(this.lifeNum);
		container.addChild(Life0,Life1,Life2,Life3);
		}else if(this.StartLifeNum == 5){
		this.stage.removeChild(this.lifeNum);
		container.addChild(Life0,Life1,Life2,Life3,Life4);
		}
		container.scaleX = container.scaleY = 0.6;
		container.x = 194;
		container.y = 441;
		this.lifeNum = container;
	this.stage.addChild(this.lifeNum);
}

//游戏结束
game.gameOver = function()
{
	trace("game over:", this.score);
	this.timer.pause();
	if(this.context.context == null)
	{
		if(this.overlay == null)
		{
			this.overlay = Q.createDOM("div", {id:"overlay", style:
			{
				position: "absolute",
				width: this.width + "px",
				height: this.height + "px",
				background: "#000",
				opacity: 0.4
			}});
		}
		this.container.lastChild.appendChild(this.overlay);
	}
	this.state = STATE.OVER;
	this.gameoverBtn.setState(Q.Button.state.OVER);
	this.gameoverPng.setState(Q.Button.state.OVER);
	this.stage.addChild(this.gameoverBtn,this.gameoverPng);
	this.stage.step();
	//保存最高分
	this.SaveHighestScore(this.score);
	
}

//保存最高分
game.SaveHighestScore = function(score){
    var key = "highestscore";
	if(Q.supportStorage)
	{
		/*if(localStorage.hasOwnProperty(key)){*/
			var oldscore = Number(this.getScore());
			var newscore = Number(score);
			if(oldscore < newscore){
				localStorage.removeItem(key);
				localStorage.setItem(key, score);
		}
		/*}else{
			localStorage.setItem(key, score);
		}*/
		
	}
}

//取得分
game.getScore = function(){
	var key = "highestscore";
	if(Q.supportStorage)
	{
		if(localStorage.getItem("highestscore") == null){
			return 0;
		}else{
			var score = Number(localStorage.getItem("highestscore"));
			return score;
		}
	}
	return 0;
}

//随机改变波浪的方向
game.changeCloudDirection = function()
{
	this.cloud.dirX = Math.random() > 0.5 ? 1 : -1;
}

//移动云彩
game.moveCloud = function(cloud)
{
	var dx = cloud.speedX * cloud.dirX;
	if(dx <= 0) 
	{
		cloud.x += dx;
	}else
	{
		cloud.x += dx;
	}
}


//更新舞台
game.update = function(timeInfo)
{
	this.frames++;
	if(this.state == STATE.MAIN){
		this.UpdateBoy();
		this.UpdateFruit();	/*alert(this.fruits[0].type.id+"|"+this.fruits[1].type.id+"|"+this.fruits[2].type.id+"|"+this.fruits[3].type.id+"|"+this.fruits[4].type.id);*/
	}
};

//更新小人的位置
game.UpdateBoy = function(){
	if(this.Boy.dirX != 0){
		this.Boy.x += this.Boy.currentSpeedX * this.Boy.dirX;
		if(this.Boy.x < 0) this.Boy.x = 0;
		else if(this.Boy.x > this.width - 100 ) this.Boy.x = this.width - 100;
    }
	this.checkCollide();
};

//更新水果
game.UpdateFruit = function()
{
	var me = this, fruits = this.fruits, minBottom = 80;
	for(var i = 0; i < fruits.length; i++)
	{
		var fruit = me.fruits[i];
		if(fruit.delay > 0)
		{
			fruit.delay -= 1;
			continue;
		}
		if(fruit.currentSpeedY > 0) fruit.currentSpeedY += 0.05;
		else if(fruit.currentSpeedY < 0) fruit.currentSpeedY += 0.15;
		fruit.y += fruit.currentSpeedY;
		fruit.x += fruit.currentSpeedX;
		if(fruit.bouncing)
		{
			if(fruit.currentSpeedY >= 0)
			{
				fruit.stopBounce();
				return;
			}
		}
		if(fruit.y > me.height - minBottom && fruit.alpha > 0)
		{
			fruit.alpha -= 0.1;
			fruit.fading = true;
		}
		if(fruit.y > me.height)
		{
			fruit.reset(ns.Fruit.getRandomType());
		}
	}
}

//隐藏浏览器顶部导航
game.hideNavBar = function()
{
    window.scrollTo(0, 1);
}

//重新计算舞台stage在页面中的偏移
game.calcStagePosition = function()
{
    if(game.stage) 
    {
        var offset = Q.getElementOffset(game.stage.context.canvas);
        game.stage.stageX = offset.left;
        game.stage.stageY = offset.top;
    }
}
})();