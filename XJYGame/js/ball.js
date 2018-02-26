//球
var Ball = function() {
	var images = imagesFromPath('images/ball.jpg');
	var o = {
		image: images,
		x: 100,
		y: 150,
		w: 20,
		h: 20,
		speedX: 4,
		speedY: 4,
	}
	o.fire = function() {
		o.fired = true
	}
	o.move = function() {
		if(o.fired) {
			//log('move')
			if(o.x < 0 || o.x > 400 - o.w) {
				o.speedX = -o.speedX
			}
			if(o.y < 0 || o.y > 300) {
				o.speedY = -o.speedY
			}
			//move
			o.x += o.speedX
			o.y += o.speedY
		}
	}
	o.returnB = function(){
		o.speedY *= -1
	}
	return o
}