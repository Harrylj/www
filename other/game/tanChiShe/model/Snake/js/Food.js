function Food(context, x, y, color) {
    Parent.call(this, context, x, y, color);
    this.draw = function () {
        this.context.lineWidth = 1;
        this.context.fillStyle = color;
        this.context.fillRect(this.x, this.y, 20, 20);
    };
}