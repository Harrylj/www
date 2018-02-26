		var log = console.log.bind(console);
		
		//获取图片路径
		var imagesFromPath = function(path){
			var images = new Image();
			images.src = path;
			return images;
		}
		
		var rectIntersects = function(a, b){
			var o = a
			if(b.y > o.y && b.y < o.y + o.image.height){
				if(b.x > o.x && b.x < o.x + o.image.width){
					return true
				}
			}
			return false
		}
