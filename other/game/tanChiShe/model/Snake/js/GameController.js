function GameController(context) {
    Context.call(this, context);
    this.snakes = [];
    this.food = null;
    this.timer = null;
    this.delay = 100;
    this.start = false;
    this.restart = false;
    this.score = 0;
    this.level = 1;
    this.sound = $("sound");
    this.colors = ["#6c0","#f00","orange"];
}
GameController.prototype = {
    refresh: function() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.context.clearRect(0, 0, 420, 400);
        this.drawMap();
        this.createFood();
        for (var m = this.snakes.length - 1; m >= 0; m--) {
            if (m === 0) {
                this.checkSnakeHitFood(this.snakes[m].run());
            } else {
                this.snakes[m].x = this.snakes[m - 1].x;
                this.snakes[m].y = this.snakes[m - 1].y;
                this.snakes[m].direction = this.snakes[m - 1].direction;
                this.checkSnakeHitFood(this.snakes[m].draw());
            }
        }
        
        var me = this;
        this.timer = setTimeout(function() {
            me.refresh();
        }, this.delay);
        this.checkSnakeHitBody();
        this.checkSnakeHitFloor();
        this.updateLevel();
    },
    startGame: function() {
        this.refresh();
        this.start = true;
        $("background-music").play();
    },
    stopGame: function() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.start = false;
        $("background-music").pause();
    },
    restartGame: function() {
        this.snakes = [];
        this.timer = null;
        this.start = true;
        this.restart = false;
        this.score = 0;
        this.level = 1;
        this.delay = 100;
        this.food = null;
        $("score").innerHTML = 0;
        $("level").innerHTML = 1;
        this.createSnakeHeader();
        this.refresh();
        $("background-music").play();
    },
    drawMap: function() {
        for (var i = 0; i < 41; i++) {
            for (var j = 0; j < 41; j++) {
                this.context.lineWidth = 1;
                this.context.strokeStyle = "#222";
                this.context.strokeRect(i * 20, j * 20, 20, 20);
            }
        }
    },
    createSnakeHeader: function() {
        var snakeHeader = new Snake(this.context, 200, 400, "up", "blue");
        this.snakes.push(snakeHeader);
    },
    createSnakeBody: function(color) {
        var last = this.snakes[this.snakes.length - 1];
        switch (last.direction) {
            case "up":
                this.snakes.push(new Snake(this.context, last.x, last.y + 20, last.direction, color));
                break;
            case "down":
                this.snakes.push(new Snake(this.context, last.x, last.y - 20, last.direction, color));
                break;
            case "left":
                this.snakes.push(new Snake(this.context, last.x + 20, last.y, last.direction, color));
                break;
            case "right":
                this.snakes.push(new Snake(this.context, last.x - 20, last.y, last.direction, color));
                break;
        }
    },
    createFood: function() {
        if (!this.food) {
            var x = Math.round(Math.random() * 20) * 20;
            var y = Math.round(Math.random() * 19) * 20;
            this.food = new Food(this.context, x, y, this.colors[Math.round(Math.random() * 2)]);
        }
        this.food.draw();
    },
    checkSnakeHitFood: function(snake) {
        if (this.food) {
            if (this.food.x === snake.x && this.food.y === snake.y) {
                this.sound.play();
                this.createSnakeBody(this.food.color);
                this.food = null;
                $("score").innerHTML = ++this.score;
            }
        }
    },
    checkSnakeHitBody: function() {
        var snakeHeader = this.snakes[0];
        for (var n = 1, len = this.snakes.length; n < len; ++n) {
            if (snakeHeader.x === this.snakes[n].x && snakeHeader.y === this.snakes[n].y) {
                this.stopGame();
                this.restart = true;
                $("btnStart").setAttribute("value", "重新开始");
                $("mask")["style"]["display"] = "block";
                var styleObj = {
                    display: "block",
                    left: "50%",
                    top: "50%"
                };
                for (var item in styleObj) {
                    $("over-box")["style"][item] = styleObj[item];
                }
            }
        }
    },
    checkSnakeHitFloor: function() {
        var snakeHeader = this.snakes[0];
        if (snakeHeader.x < 0 || snakeHeader.y < 0 || snakeHeader.x > 400 || snakeHeader.y > 380) {
            this.stopGame();
            this.restart = true;
            $("btnStart").setAttribute("value", "重新开始");
            $("mask")["style"]["display"] = "block";
            var styleObj = {
                display: "block",
                left: "50%",
                top: "50%"
            };
            for (var item in styleObj) {
                $("over-box")["style"][item] = styleObj[item];
            }
        }
    },
    updateLevel: function () {
        if (this.score > 0) {
            if (this.score % (10 * this.level) === 0) {
                showUpdateLevel();
                $("level").innerHTML = ++this.level;
                this.snakes = [];
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.delay -= 30;
                this.createSnakeHeader();
                this.refresh();
            }
        }
    }
};
