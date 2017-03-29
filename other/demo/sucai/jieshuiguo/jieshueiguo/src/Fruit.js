
(function(){

var Fruit = game.Fruit = function(props)
{
	props = props || {};
	this.type = props.type;
	Fruit.superClass.constructor.call(this, this.type);
	this.id = props.id || Q.UIDUtil.createUID("fruit");
    this.reset(this.type);
};
Q.inherit(Fruit, Q.MovieClip);

Fruit.prototype.init = function()
{
	
};

Fruit.prototype.update = function(timeInfo)
{
	this.rotation += 0.5;
};

Fruit.prototype.reset = function(type)
{
	this.setType(type);
	this.currentScore = this.type.score;
	this.addLife = 0;
	this.alpha = 1;
	this.fading = false;
	this.bouncing = false;
	this.updatelife = false;
	this.currentSpeedY = this.speedY;
	this.currentSpeedX = 0;
	this.delay = Math.floor(Math.random()*50);
   // alert(this.type.id);
	this.setRandomPosition();
}

Fruit.prototype.setRandomPosition = function()
{
	var minX = 100, maxX = game.width, minY = -100, maxY = 0;
	this.x = Math.floor(Math.random()*maxX);
	//this.y = Math.floor(Math.random()*(maxY-minY)+minY);
	this.y = -50;
}

Fruit.prototype.setType = function(type)
{
	this.type = type;
	this._frames.length = 0;
	this.addFrame(type.frames);
	this.currentFrame = 0;
}
Fruit.getRandomType = function()
{
	var list = this.TypeList;
	var r = Math.floor(Math.random()*list.length);
	return list[r];
};

Fruit.prototype.getCollide = function()
{
	/*var i = 0;
	this.currentScore += this.type.scoreStep;
	if(this.currentScore > this.type.maxScore) {
	   this.currentScore = this.type.maxScore;
	   i ++;
	}
	if( i > 2){
	   this.currentScore = this.type.score;
	   i = 0;
	}*/
	if(this.type.tag == "oldfruit"){
	this.currentScore = -Math.round(Math.random()*Math.abs(this.type.score));
		if(this.currentScore > this.type.maxScore){
			this.currentScore = this.type.maxScore;
		}
	this.currentScore = 0;
	}else{
		this.currentScore = Math.round(Math.random()*this.type.maxScore);//取当前水果允许的最大值中的随机正整数座位当前分数
		if(this.currentScore < this.type.score){
			this.currentScore = this.type.score;
		}
	}
	if(this.type.tag == "redapple"){//红苹果 加一个生命值
	    this.addLife = 1;
		this.updatelife = true;
	}else if(this.type.tag == "oldfruit"){//坏的水果 减一个生命值
	    this.addLife = -1;
		this.updatelife = true;
	}
	this.bouncing = true;
	this.fading = true;
	this.alpha += -1;
}

Fruit.prototype.stopBounce = function()
{
	this.bouncing = false;
}

Fruit.init = function() 
{
	this.Type = {};
	
	this.Type.fruit1 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 21,
		width: 40,
		height: 42,
		score: 2,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[0,0,40,42]}
			]
	};
	
	this.Type.fruit2 = 
	{
		image:game.getImage("fruit"),
		regX: 22,
		regY: 20,
		width: 45,
		height: 40,
		score: 1,
		scoreStep: 1,
		maxScore: 3,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[39,0,45,40]}
			]
	};
	
	this.Type.fruit3 = 
	{
		image:game.getImage("fruit"),
		regX: 21,
		regY: 21,
		width: 42,
		height: 42,
		score: 2,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[81,0,42,42]}
			]
	};
	
	this.Type.fruit4 = 
	{
		image:game.getImage("fruit"),
		regX: 17,
		regY: 20,
		width: 34,
		height: 40,
		score: 3,
		scoreStep: 2,
		maxScore: 10,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[128,0,34,40]}
			]
	};
	
	this.Type.fruit5 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 21,
		width: 41,
		height: 42,
		score: 1,
		scoreStep: 1,
		maxScore: 2,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[162,0,41,42]}
			]
	};
	
	this.Type.fruit6 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 21,
		width: 40,
		height: 42,
		score: 4,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[205,0,40,42]}
			]
	};
	
	this.Type.fruit7 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 20,
		width: 38,
		height: 40,
		score: 5,
		scoreStep: 1,
		maxScore: 9,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[0,42,38,40]}
			]
	};
	
	this.Type.fruit8 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 20,
		width: 38,
		height: 40,
		score: 2,
		scoreStep: 1,
		maxScore: 3,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[41,42,38,40]}
			]
	};
	
	this.Type.fruit9 = 
	{
		image:game.getImage("fruit"),
		regX: 16,
		regY: 20,
		width: 31,
		height: 40,
		score: 1,
		scoreStep: 2,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[86,42,31,40]}
			]
	};
	
	this.Type.fruit10 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 19,
		width: 40,
		height: 38,
		score: 3,
		scoreStep: 1,
		maxScore: 7,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[122,42,40,38]}
			]
	};
	
	this.Type.fruit11 = 
	{
		image:game.getImage("fruit"),
		regX: 22,
		regY: 20,
		width: 44,
		height: 40,
		score: 2,
		scoreStep: 3,
		maxScore: 10,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[163,42,44,40]}
			]
	};
	
	this.Type.fruit12 = 
	{
		image:game.getImage("fruit"),
		regX: 16,
		regY: 20,
		width: 32,
		height: 40,
		score: 6,
		scoreStep: 1,
		maxScore: 7,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[213,42,32,40]}
			]
	};
	
	this.Type.fruit13 = 
	{
		image:game.getImage("fruit"),
		regX: 18,
		regY: 19,
		width: 37,
		height: 39,
		score: 2,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[0,83,37,39]}
			]
	};
	
	this.Type.fruit14 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 19,
		width: 41,
		height: 39,
		score: 2,
		scoreStep: 1,
		maxScore: 4,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[39,83,41,39]}
			]
	};
	
	this.Type.fruit15 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 17,
		width: 40,
		height: 35,
		score: 1,
		scoreStep: 2,
		maxScore: 3,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[81,83,40,35]}
			]
	};
	
	this.Type.fruit16 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 19,
		width: 39,
		height: 39,
		score: 3,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[121,83,39,39]}
			]
	};
	
	this.Type.fruit17 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 20,
		width: 38,
		height: 40,
		score: 3,
		scoreStep: 1,
		maxScore: 6,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[164,83,38,40]}
			]
	};
	
	this.Type.fruit18 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 19,
		width: 38,
		height: 38,
		score: 1,
		scoreStep: 1,
		maxScore: 4,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[207,83,38,38]}
			]
	};
	
	this.Type.fruit19 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 18,
		width: 38,
		height: 37,
		score: 2,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[0,123,38,37]}
			]
	};
	
	this.Type.fruit20 = 
	{
		image:game.getImage("fruit"),
		regX: 21,
		regY: 19,
		width: 43,
		height: 39,
		score: 6,
		scoreStep: 1,
		maxScore: 7,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[37,123,43,39]}
			]
	};
	
	this.Type.fruit21 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 18,
		width: 41,
		height: 37,
		score: 1,
		scoreStep: 1,
		maxScore: 9,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[81,123,41,37]}
			]
	};
	
	this.Type.fruit22 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: 2,
		scoreStep: 3,
		maxScore: 12,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[122,123,40,40]}
			]
	};
	
	this.Type.fruit23 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 41,
		score: 6,
		scoreStep: 5,
		maxScore: 20,
		speedY: 1,
		tag:"redapple",
		frames:[
			{rect:[164,123,40,41]}
			]
	};
	
	this.Type.fruit24 = 
	{
		image:game.getImage("fruit"),
		regX: 21,
		regY: 19,
		width: 43,
		height: 38,
		score: 2,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[204,123,43,38]}
			]
	};
	
	this.Type.fruit25 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 20,
		width: 39,
		height: 40,
		score: 2,
		scoreStep: 1,
		maxScore: 14,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[0,164,39,40]}
			]
	};
	
	this.Type.fruit26 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 19,
		width: 40,
		height: 38,
		score: 7,
		scoreStep: 2,
		maxScore: 18,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[40,164,40,38]}
			]
	};
	
	this.Type.fruit27 = 
	{
		image:game.getImage("fruit"),
		regX: 18,
		regY: 19,
		width: 37,
		height: 38,
		score: 2,
		scoreStep: 1,
		maxScore: 9,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[82,164,37,38]}
			]
	};
	
	this.Type.fruit28 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 20,
		width: 38,
		height: 39,
		score: 3,
		scoreStep: 2,
		maxScore: 13,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[123,164,38,39]}
			]
	};
	
	
	
	this.Type.fruit29 = 
	{
		image:game.getImage("fruit"),
		regX: 21,
		regY: 18,
		width: 42,
		height: 37,
		score: 2,
		scoreStep: 1,
		maxScore: 5,
		speedY: 1,
		tag:"custom",
		frames:[
			{rect:[203,164,40,35]}
			]
	};
	
	this.Type.fruit31 = 
	{
		image:game.getImage("fruit"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -20,
		scoreStep: 1,
		maxScore: 0,
		speedY: 1,
		tag:"oldfruit",
		frames:[
			{rect:[0,204,40,40]}
			]
	};
	
	this.Type.fruit32 = 
	{
		image:game.getImage("fruit"),
		regX: 21,
		regY: 20,
		width: 42,
		height: 40,
		score: -10,
		scoreStep: 4,
		maxScore: -2,
		speedY: 1,
		tag:"oldfruit",
		frames:[
			{rect:[45,204,42,40]}
			]
	};
	
	this.Type.fruit33 = 
	{
		image:game.getImage("fruit"),
		regX: 19,
		regY: 21,
		width: 39,
		height: 42,
		score: -6,
		scoreStep: 1,
		maxScore: 0,
		speedY: 1,
		tag:"oldfruit",
		frames:[
			{rect:[83,204,39,42]}
			]
	};
	
	this.Type.fruit34 = 
	{
		image:game.getImage("fruit"),
		regX: 17,
		regY: 21,
		width: 35,
		height: 43,
		score: -12,
		scoreStep: 1,
		maxScore: -5,
		speedY: 1,
		tag:"oldfruit",
		frames:[
			{rect:[125,204,35,43]}
			]
	};
	
	this.Type.fruit35 = 
	{
		image:game.getImage("fruit"),
		regX: 21,
		regY: 21,
		width: 42,
		height: 42,
		score: -12,
		scoreStep: 3,
		maxScore: -2,
		speedY: 1,
		tag:"oldfruit",
		frames:[
			{rect:[162,204,42,42]}
			]
	};
	
	this.Type.fruit36 = 
	{
		image:game.getImage("fruit"),
		regX: 22,
		regY: 21,
		width: 44,
		height: 43,
		score: -24,
		scoreStep: 5,
		maxScore: -10,
		speedY: 1,
		tag:"oldfruit",
		frames:[
			{rect:[204,204,44,43]}
			]
	};
	
	this.Type.fruit37 = 
	{
		image:game.getImage("fruit37"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -19,
		scoreStep: 1,
		maxScore: -8,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit38 = 
	{
		image:game.getImage("fruit38"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -8,
		scoreStep: 2,
		maxScore: 0,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit39 = 
	{
		image:game.getImage("fruit39"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -21,
		scoreStep: 7,
		maxScore: -2,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit40 = 
	{
		image:game.getImage("fruit40"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -9,
		scoreStep: 1,
		maxScore: -5,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit41 = 
	{
		image:game.getImage("fruit41"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -12,
		scoreStep: 1,
		maxScore: -7,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit42 = 
	{
		image:game.getImage("fruit42"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -25,
		scoreStep: 5,
		maxScore: 0,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit43 = 
	{
		image:game.getImage("fruit43"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -2,
		scoreStep: 1,
		maxScore: 0,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit44 = 
	{
		image:game.getImage("fruit44"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -1,
		scoreStep: 1,
		maxScore: 0,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit45 = 
	{
		image:game.getImage("fruit45"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -8,
		scoreStep: 3,
		maxScore: 0,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit46 = 
	{
		image:game.getImage("fruit46"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -7,
		scoreStep: 7,
		maxScore: 0,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit47 = 
	{
		image:game.getImage("fruit47"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -2,
		scoreStep: 1,
		maxScore: 0,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit48 = 
	{
		image:game.getImage("fruit48"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -4,
		scoreStep: 1,
		maxScore: -1,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit49 = 
	{
		image:game.getImage("fruit49"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -8,
		scoreStep: 1,
		maxScore: -1,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	
	this.Type.fruit50 = 
	{
		image:game.getImage("fruit50"),
		regX: 20,
		regY: 20,
		width: 40,
		height: 40,
		score: -28,
		scoreStep: 4,
		maxScore: -7,
		speedY: 1,
		frames:[
			{rect:[0,0,40,40]}
			]
	};
	this.TypeList = [this.Type.fruit1, this.Type.fruit2, this.Type.fruit3,this.Type.fruit4,this.Type.fruit5,this.Type.fruit6,
	this.Type.fruit7,this.Type.fruit8,this.Type.fruit9,this.Type.fruit10,this.Type.fruit11,this.Type.fruit12,
	this.Type.fruit13,this.Type.fruit14,this.Type.fruit15,this.Type.fruit16,this.Type.fruit17,this.Type.fruit18,
	this.Type.fruit19,this.Type.fruit20,this.Type.fruit21,this.Type.fruit22,this.Type.fruit23,this.Type.fruit24,
	this.Type.fruit25,this.Type.fruit26,this.Type.fruit27,this.Type.fruit28,this.Type.fruit29,
	this.Type.fruit31,this.Type.fruit32,this.Type.fruit33,this.Type.fruit34,this.Type.fruit35,this.Type.fruit36
					];
};

})();