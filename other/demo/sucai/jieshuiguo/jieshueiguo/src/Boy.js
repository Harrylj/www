
(function(){

var Boy = game.Boy = function(props)
{
	props = props || {};
	Boy.superClass.constructor.call(this, props);
	this.id = props.id || Q.UIDUtil.createUID("Boy");
	
	this.avatar = null;	
	this.leftmoving = false;
	this.rightmoving = false;
	this.init();
}
Q.inherit(Boy, Q.DisplayObjectContainer);

Boy.prototype.init = function()
{
	var avatar = new Q.MovieClip({id:"Boy", image:game.getImage("Boy"), interval:120});
	avatar.addFrame([
	{rect:[0,0,100,80],label:"static"},
	{rect:[100,0,100,80],label:"left"},
	{rect:[200,0,100,80],label:"right"},
	{rect:[503,0,100,80],label:"eatoldfruit"}
	]);
	
	this.width = 100;
	this.height = 80;
	this.currentSpeedX = this.speedX = 5;
	this.dirX = 0;
	this.dirY = 0;
	this.oldY = 0;
	
	this.avatar = avatar;
	this.addChild(avatar);
};

Boy.prototype.leftmove = function(dir)
{
	if(this.leftmoving) return;
	this.dirX = dir;
	this.currentSpeedX = this.speedX;
	this.leftmoving = true;
	this.rightmoving = false;
	this.avatar.gotoAndStop("left");
}

Boy.prototype.rightmove = function(dir)
{
	if(this.rightmoving) return;
	this.dirX = dir;
	this.currentSpeedX = this.speedX;
	this.rightmoving = true;
	this.leftmoving = false;
	this.avatar.gotoAndStop("right");
}

Boy.prototype.stopMove = function()
{
	this.dirX = 0;
	this.currentSpeedX = this.speedX;
	this.leftmoving = false;
	this.rightmoving = false;
	this.avatar.gotoAndStop("static");
}

})();