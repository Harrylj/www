//挡板
var Paddle = function() {
	var images = imagesFromPath('images/block.png');
	var o = {
		image: images,
		x: 10,
		y: 270,
		w: 80,
		h: 20,
		speed: 10,
	}
	o.x = 100
    o.y = 250
    o.speed = 15
	var paddle = o
	o.move = function(x){
		log(o.w)
		if(x < 0){
		   x = 0
		}
		if(x > 400 - o.w){
		   x = 400 - o.w
		}
		o.x = x
	}
	
	o.moveLeft = function() {
		//o.x -= o.speed;
		o.move(paddle.x - paddle.speed)
	}
	o.moveRight = function() {
		//o.x += o.speed;
		o.move(paddle.x + paddle.speed)
	}
	o.collide = function(ball) {
		if(ball.y + ball.image.height > o.y) {
			if(ball.x > o.x && ball.x < o.x + o.w) {
				log('相撞')
				return true
			}
		}
		return false
	}
	return o
}