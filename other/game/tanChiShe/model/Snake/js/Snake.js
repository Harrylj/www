function Snake(context, x, y, direction, color) {
    Parent.call(this, context, x, y, color);
    this.direction = direction;
}

Snake.prototype = {
    draw: function() {
        this.context.lineWidth = 1;
        this.context.fillStyle = this.color;
        this.context.fillRect(this.x, this.y, 20, 20);
        return this;
    },
    run: function () {
        switch (this.direction) {
            case "up":
                this.y -= 20;
                break;
            case "down":
                this.y += 20;
                break;
            case "left":
                this.x -= 20;
                break;
            case "right":
                this.x += 20;
                break;
        }
        this.draw();
        return this;
    }
};