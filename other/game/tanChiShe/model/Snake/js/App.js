var timer = null;
    
function $(id) {
    return document.getElementById(id);
}

function hideMsg() {
    if (timer) {
        clearTimeout(timer);
    }
    var msgContent = $("msg-content"), top = parseInt(msgContent["style"]["top"]);
    if (top < -110) {
        $("mask")["style"]["display"] = "none";
    } else {
        top -= 20;
        msgContent["style"]["top"] = top + "px";
        timer = setTimeout(function () {
            hideMsg();
        }, 100);
    }

}

function addListener(element, event, fn) {
    if (document.all) {
        element.attachEvent("on" + event, function(e) {
            fn.call(element, e);
        });
    } else {
        element.addEventListener(event, function (e) {
            fn.call(element, e);
        }, false);
    }
}

function removeListener(element, event, fn) {
    if (document.all) {
        element.detachEvent("on" + event, fn);
    } else {
        element.removeEventListener(event, fn,false);
    }
}

window.onload = function () {
    setTimeout(function () {
        hideMsg();
    }, 2000);
    var canvas = $("gamemap"), context;
    if (canvas.getContext) {
        context = canvas.getContext("2d");
    } else {
        alert("您的浏览器不支持本游戏!");
        return;
    }
    var controller = new GameController(context);
    controller.drawMap();
    controller.createSnakeHeader();

    addListener(document.body, "keydown", function (event) {
        switch (event.keyCode) {
            case 87:
                if (controller.snakes.length > 1 && controller.snakes[0].direction === "down") return;
                controller.snakes[0].direction = "up";
                break;
            case 83:
                if (controller.snakes.length > 1 && controller.snakes[0].direction === "up") return;
                controller.snakes[0].direction = "down";
                break;
            case 65:
                if (controller.snakes.length > 1 && controller.snakes[0].direction === "right") return;
                controller.snakes[0].direction = "left";
                break;
            case 68:
                if (controller.snakes.length > 1 && controller.snakes[0].direction === "left") return;
                controller.snakes[0].direction = "right";
                break;
            case 27:
                if (controller.start) {
                    controller.stopGame();
                    $("btnStart").setAttribute("value", "继续游戏");
                }
                break;   
        }
    });
    addListener($("btnStart"), "click", function () {
        if (controller.restart) {
            controller.restartGame();
            this.setAttribute("value", "暂停游戏");
            return;
        }       
        if (!controller.start) {
            controller.startGame();
            this.setAttribute("value", "暂停游戏");
        } else {
            controller.stopGame();
            this.setAttribute("value", "继续游戏");
        }
    });
    addListener($("move"), "mousedown", function (event) {
        var posX, posY, me = this.parentNode;
        posX = event.clientX - me.offsetLeft - 105;
        posY = event.clientY - me.offsetTop - 70;
        document.onmousemove = function (e) {
            me["style"]["left"] = (e.clientX - posX) + "px";
            me["style"]["top"] = (e.clientY - posY) + "px";
        };
        document.onmouseup = function() {
            document.onmousemove = null;
        };
    });
    addListener($("close"),"click", function() {
        this.parentNode.parentNode["style"]["display"] = "none";
        $("mask")["style"]["display"] = "none";
    });
};

function showUpdateLevel() {
    if (timer) {
        clearTimeout(timer);
    }
    var level = $("level-upate"),
    top = parseInt(level["style"]["top"]);
    if (top === 0) {
        setTimeout(function () {
            closeUpdateLevel();
        }, 2000);
        return;
    }
    top += 20;
    level["style"]["top"] = top + "px";
    timer = setTimeout(function () {
        showUpdateLevel();
    },100);
}

function closeUpdateLevel() {
    if (timer) {
        clearTimeout(timer);
    }
    var level = $("level-upate"),
    top = parseInt(level["style"]["top"]);
    if (top === -100) return;
    top -= 20;
    level["style"]["top"] = top + "px";
    timer = setTimeout(function () {
        closeUpdateLevel();
    }, 100);
}
