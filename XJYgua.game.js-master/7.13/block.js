var Block = function(position) {
    // positon 是 [0, 0] 格式
    var p = position
    var image = imageFromPath('block.png')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
        lifes: p[2] || 1,  //p[2]为undefined时，lifes值为1
    }
    o.kill = function() {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    o.collide = function(b) {
        // log('block', o.alive, b)
        //返回boolean，第一个值为true，并且括号内的任意一个值为true，则返回true，否则为false
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    
    return o
}
