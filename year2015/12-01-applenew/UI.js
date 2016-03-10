(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1008,
	fps: 24,
	color: "#333333",
	manifest: [
		{src:"images/alphaBitMap.png", id:"alphaBitMap"},
		{src:"images/appleNumBg.png", id:"appleNumBg"},
		{src:"images/b1.png", id:"b1"},
		{src:"images/b2.png", id:"b2"},
		{src:"images/b3.png", id:"b3"},
		{src:"images/b4.png", id:"b4"},
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/endBg.jpg", id:"endBg"},
		{src:"images/gameBg.jpg", id:"gameBg"},
		{src:"images/grass.png", id:"grass"},
		{src:"images/headbg.png", id:"headbg"},
		{src:"images/homeBg.jpg", id:"homeBg"},
		{src:"images/homeTitle.png", id:"homeTitle"},
		{src:"images/levelBg.png", id:"levelBg"},
		{src:"images/player.png", id:"player"},
		{src:"images/rule.jpg", id:"rule"},
		{src:"images/ruleTitle.png", id:"ruleTitle"},
		{src:"images/zhu1.png", id:"zhu1"},
		{src:"images/zhu2.png", id:"zhu2"}
	]
};



// symbols:



(lib.alphaBitMap = function() {
	this.initialize(img.alphaBitMap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.appleNumBg = function() {
	this.initialize(img.appleNumBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,56);


(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);


(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);


(lib.b3 = function() {
	this.initialize(img.b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);

(lib.b4 = function() {
	this.initialize(img.b4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);

(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,500);


(lib.endBg = function() {
	this.initialize(img.endBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.gameBg = function() {
	this.initialize(img.gameBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.grass = function() {
	this.initialize(img.grass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,158);


(lib.headbg = function() {
	this.initialize(img.headbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,83);


(lib.homeBg = function() {
	this.initialize(img.homeBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.homeTitle = function() {
	this.initialize(img.homeTitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,614,374);


(lib.levelBg = function() {
	this.initialize(img.levelBg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,56);


(lib.player = function() {
	this.initialize(img.player);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,150);


(lib.rule = function() {
	this.initialize(img.rule);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.ruleTitle = function() {
	this.initialize(img.ruleTitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,257);


(lib.zhu1 = function() {
	this.initialize(img.zhu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,386);


(lib.zhu2 = function() {
	this.initialize(img.zhu2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,387);


(lib.Zhang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.player();
	this.instance.setTransform(-52.9,-117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-117.9,213,150);


(lib.TitleTxt = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.homeTitle();
	this.instance.setTransform(-79.6,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.6,0,614,374);


(lib.ShareBtn = function() {
	this.initialize();
	
	// 图层 4
	this.instance = new lib.b3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);


(lib.RuleTitleMc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ruleTitle();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,323,257);


(lib.ZhiDaoLeBtn = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ah2BXIAYgUIAAhEIgXAAIAAgiIA3AAIAABmQAPAWApAAQBUAAA2gCIgMAiIhXgBIg2gBQgPAAgPgGQgOgGgLgMIgcAggAmRBeQAogfALgzIgvAAIAAgeIAzAAIAAgpIgKAAQgKAVgLASIgXgdQAVggAKgrIAhAFIgIAcIBBAAIAAAgIghAAIAAApIAoAAIAAAeIgrAAIgCANQAaAaAYAbIgbAZQgRgXgSgUQgRAlghAdQgMgUgKgMgAkKB4IAAjeIBuAAIAADdIgjAAIAAgWIgoAAIAAAXgAjnBAIAoAAIAAiFIgoAAgADYB4QgDgTgGgUQAZACAQAAQAPAAAEgGQAFgGAAgKIAAhVQAfgVAogeIiuAAIAAgjIDpAAIAAAjIhaBDIAABQQAAAYgMAMQgNALgYABgAgmBKIAAiCIAyAAIADgOIg/AAIAAgbIAlAAIgPgVIAfgIIAQAdIAcAAQAIgPAFgNIAkAGIgPAWIApAAIAAAbIhKAAIgEAOIBEAAIAACCgAgHAxIBaAAIAAgOIhaAAgAgHAPIBaAAIAAgOIhaAAgAgHgSIBaAAIAAgOIhaAAgAhzhpIAbgSQAYAcAMASIgeAUQgSgcgPgUg");
	this.shape.setTransform(100.4,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#CCCCCC").ss(1,1,1).rr(-100,-39.95,200,79.9,10);
	this.shape_1.setTransform(100,40,1,1.002);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,82);


(lib.AlphaBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.alphaBitMap();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.alphaBg = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("Egx/BOwMAAAidfMBj+AAAMAAACdfg");
	this.shape.setTransform(320,504);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.LandscapeNotice = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(245.6,358.7,1,0.705);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D1D1").s().p("Egi2AXBQiIAAhghgQhghgAAiIMAAAgjxQAAiIBghgQBghgCIAAMBFuAAAQCHAABgBgQBgBgAACIMAAAAjxQAACIhgBgQhgBgiHAAgA6uR5MAywAAAMAAAgjxMgywAAAgEgh7AFlIBZAAIAArJIhZAAgAeninQhFBGAABhQAABiBFBFQBGBGBiAAQBjAABFhGQBGhFABhiQgBhhhGhGQhFhGhjAAQhiAAhGBGgAq2JcQjyjxABlWQgBlUDyjyQDyjxFVAAIAXAAIAAjGIFwFbIlwFWIAAjaIgXgBQjlAAiiCiQiiCiAADjQAADkCiCiQCiCiDlAAQDiAACiiiQCViUANjMIERAAQgNE9jlDkQjxDylUAAQlVAAjyjyg");
	this.shape_1.setTransform(256,147.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,511.9,379.3);


(lib.JianTouM = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEAjIjvBeIAAg0IDvhdIDoBdIAAA0gAAEhMIjvBdIAAgzIDvheIDoBeIAAAzg");
	this.shape.setTransform(-0.9,-4.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-17.9,47.3,26);


(lib.HomeBtn = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.b1();
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);


(lib.Glow2Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj1D1IAAnpIHrAAIAAHpg");
	this.shape.setTransform(31.5,-46.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,-70.9,49.2,49.2);


(lib.DuiJiang = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.b2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);

(lib.gameRank = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.b4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,312,74);


(lib.Bridge = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,500);


(lib.Box = function() {
	this.initialize();

	// zhu1.png
	this.instance = new lib.zhu1();
	this.instance.setTransform(-15.6,-28.8);

	// zhu2.png
	this.instance_1 = new lib.zhu2();
	this.instance_1.setTransform(0,-11.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.6,-28.8,158,404);


(lib.BarMc = function() {
	this.initialize();

	// 图层 1
	var username = '我是神';
	//this.nickName_txt = new cjs.Text("昵称", "20px 'Arial'", "#FFFFFF");
	this.nickName_txt = new cjs.Text(username, "20px 'Arial'", "#FFFFFF");
	this.nickName_txt.name = "nickName_txt";
	this.nickName_txt.textAlign = "center";
	this.nickName_txt.lineHeight = 22;
	this.nickName_txt.lineWidth = 111;
	this.nickName_txt.setTransform(230.5,117.7);

	this.level_txt = new cjs.Text("00", "20px 'Arial'", "#FFFFFF");
	this.level_txt.name = "level_txt";
	this.level_txt.textAlign = "center";
	this.level_txt.lineHeight = 22;
	this.level_txt.lineWidth = 42;
	this.level_txt.setTransform(180,190.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AERBAIAAgfIAaAAIAAAfgAAoAuIAAhsIAWAAIAAAPQAMgBAFgDQAFgDACgIIAWAAQgFAPgJAKQgIAGgKADIgOACIAABIgAijAuQgMgBgHgHQgIgHAAgMIAAg4QAAgKAIgHQAHgIAMABIBSAAIAAATIhJAAQgIAAgDADQgDACAAAFIAAAnQAAAMACACQACAEAJAAIBKAAIAAAVgACTAtQgOAAgEgEQgMgIAAgOIAAg1QAAgPAHgHQAJgGAPAAIAwAAQAOgBAKAJQAGAGAAANIAAANQAAAKgGAHQgGAGgMAAIg9AAIAAAOQgBAGACABQADADAIAAIBGAAIAAAUgACQgpQgEABABAHIAAAQIAzAAQAMAAAAgKIAAgFQgBgGgCgCQgCgBgGgBIgqAAIgHABgAgoAtQgPAAgHgIQgIgIAAgNIAAgzQAAgLAIgIQAIgGAOAAIAoAAQANAAAHAGQAIAIAAALIAAAzQAAANgIAIQgHAIgNAAgAgsgmQgDADAAAGIAAApQAAAMAKAAIAjAAQAIAAAAgMIAAgpQAAgLgKgBIggAAQgFAAgDADgAkqAtIAAgUIBBAAQAJgBgBgHIAAgJQABgIgJAAIglAAQgOAAgGgGQgJgIABgKIAAgKQgBgMAJgHQAGgIAMAAIBEAAIAAAUIg+AAQgEAAgDACQgDACAAAEIAAAIQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAQADADAHAAIAiAAQANAAAJAHQAGAIABAGIAAAQQgBALgHAHQgIAIgOAAgAERABIAAgeIAaAAIAAAeg");
	this.shape.setTransform(36.6,-27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABuBCIAfAAQAMAAAAgLIAAhxIhKAAIAAgYIBkAAIAACLQAAAOgEAHQgFAJgKACQgKADgiAAQgCgOgEgMgAAIBbIAAidIAaAAIAACdgAhYA/IAeAAQANAAAAgNIAAhTIg3AAIAAgYIA3AAIAAggIAbAAIAAAgIAQAAIAAAYIgQAAIAABbQAAAPgHAIQgHAJgNAAIgkAAQgDgRgEgKgAizBSIAAifIBKAAIAACeIgZAAIAAgNIgYAAIAAAOgAiaArIAYAAIAAglIgYAAgAiagQIAYAAIAAglIgYAAgAA0A+IAAhqIBTAAIAABgIg7AAIAAAKgABMAgIAkAAIAAgSIgkAAgABMgFIAkAAIAAgRIgkAAgAhmgKIATgMQAMAPAWAcIgXAOIgegtgAAfhSIAYgJIASAeIgaALQgIgSgIgOg");
	this.shape_1.setTransform(529.9,-31.6);

	this.score_txt = new cjs.Text("00", "20px 'Arial'", "#FFFFFF");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "center";
	this.score_txt.lineHeight = 22;
	this.score_txt.lineWidth = 38;
	this.score_txt.setTransform(300.3,190.5);

	this.playTime_txt = new cjs.Text("0     ", "20px 'Arial'", "#FFFFFF");
	this.playTime_txt.name = "playTime_txt";
	this.playTime_txt.lineHeight = 22;
	this.playTime_txt.lineWidth = 80;
	this.playTime_txt.setTransform(554.4,-41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("Egx/ACzIAAlmMBj+AAAIAAFmg");
	this.shape_2.setTransform(320,-27);

	this.addChild(this.shape_2,this.playTime_txt,this.score_txt,this.shape_1,this.shape,this.level_txt,this.nickName_txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-45,640,259.5);


(lib.RuleTitleDh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.RuleTitleMc();
	this.instance.setTransform(161.5,-106.5,1,1,0,0,0,161.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:128.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-235,323,257);


(lib.RulePage = function() {
	this.initialize();

	// Layer 1
	this.back_btn = new lib.AlphaBtn();
	this.back_btn.setTransform(466.5,52.4,1.735,1.232);
	new cjs.ButtonHelper(this.back_btn, 0, 1, 2, false, new lib.AlphaBtn(), 3);

	this.dh_mc = new lib.RuleTitleDh();
	this.dh_mc.setTransform(320,85,1,1,0,0,0,161.5,128.5);

	this.instance = new lib.rule();

	this.addChild(this.instance,this.dh_mc,this.back_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-278.5,640,1286.5);


(lib.ShareMc = function() {
	this.initialize();

	// back_btn
	this.back_btn = new lib.ZhiDaoLeBtn();
	this.back_btn.setTransform(325.5,629.1,1,1,0,0,0,100,40);

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ARMiqQEWh+B/klQAnhYAQhdAOICYQCNhzAwixQAEgPADgPQgiAMgjAGQhwATgXhZQgPg7A6gVQC4hAgXDEAOICYQBXADBYAIQDRAVAmC7QAzD5j/ApQk9AxlCACQkjABkdAeQkzAfk1gDQkTgDkTgWQlYgYAyliQAJg/A3gbQD0h6EbAEQFFAQFEADQEjACEiABQFAACE8ggg");
	this.shape.setTransform(441,85.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3BuQAqgQATgeQANgXACgjIgxAAIAAgRICnAAIgEBTQgDAvgqAAQgUAAgVgBIgEgWQATADAXAAQAaABACgfIADg/IhMAAQgDAqgPAaQgTAigtATIgPgRgAOzBpQhVADg+AFQgIAAgOAEIgLgVQANgFAIgIQAbgdAbgoIhgAAIAAgRIBxAAIAAg5IhcAAIAAgUIBcAAIAAgsIAWAAIAAAsIBeAAIAAAUIheAAIAAA5IByAAIAAARIh+AAQgbAngjAnICAgEIgkguIAQgLQAiApAgAqIgTAMIgPgVgAsVB8IAAgLIizAAIAAhWIAWAAIAABDIBDAAIAAhZIhyAAIAAgRIByAAIAAguIhfAAIAAgTIBfAAIAAguIAWAAIAAAuIBgAAIAAATIhgAAIAAAuIBxAAIAAARIhxAAIAABZIBEAAIAAhDIAWAAIAABhgA0EBvQAQgWASgeIARAKQgTAjgPATgADpB6IgDgUQAUACARAAQAPAAAAgOIAAgRIh2AAIAAgSIB2AAIAAgNIA+gRIidAAIAAgRIDAAAIAAAWIhNAXIAAACIBxAAIAAASIhxAAIAAAUQAAAeggAAIglgBgAw9BCIARgJQAUAfANAYIgUALQgMgagSgfgAKZB6IAAgKIi/AAIAAhbIAVAAIAABIIBJAAIAAhhIhYAAIAAhcIAWAAIAABIIBCAAIAAhfIAWAAIAABfIBDAAIAAhIIAWAAIAABjIgWAAIAAgHIhDAAIAABhIBLAAIAAhIIAVAAIAABlgArBBlIAgggIAAhTIgeAAIAAgTIAyAAIAABqQAPAZAlABICVgBIgHAUIiRgBQgqgBgSgcQgLAJgUAZgAy5BAIATgGQALAZAJAdIgUAHQgIgcgLgbgAx8A/IASgHQANAZAKAbIgVAIQgHgXgNgegASNB0QghAAAAggIAAjCICGAAIAAB7IgSAAIAAgJIhhAAIAABMQAAASASAAIBMAAQAQAAACgRIADgpIATAHIgEApQgEAcgcAAgAS5gMIAnAAIAAhQIgnAAgAR/gMIAnAAIAAhQIgnAAgAmeBwIAAgSIBzAAIAAghIhkAAIAAgSIBkAAIAAghIhGAAIAAAJIgUAAIAAiAIDKAAIAACAIgUAAIAAgJIhHAAIAAAhIBkAAIAAASIhkAAIAAAhIB0AAIAAASgAkWgGIBHAAIAAgiIhHAAgAlxgGIBGAAIAAgiIhGAAgAkWg5IBHAAIAAgjIhHAAgAlxg5IBGAAIAAgjIhGAAgAp7BEQAvgUAggfIg8gyIAMgNIA+AwQAYgbAPglIATAJQgRAogaAcIA8AzIgPARIg7g1QgiAjgwAUIgMgRgAQUBPIAAiuIBAAAIAAClIgSAAIAAgSIgbAAIAAAbgAQnAjIAbAAIAAhxIgbAAgAw6AzIAAgLIiVAAIAAALIgVAAIAAhfIBQAAIAAhQIAVAAIAAAfIByAAIAAASIhyAAIAAAfIBaAAIAABfgAzPAWICVAAIAAgwIiVAAgAFlAAIAAgIIiIAAIAAAIIgUAAIAAg8ICvAAIAAA8gADdgYICIAAIAAgUIiIAAgAh+gTQA0glAlhAIASAKQgmBDg2ApQgGgIgJgJgAALh0IATgIQAcBEBGAiQgMAMgFAHQhGgogehJgAqyhrIARgLIAjAwIgSANQgVghgNgRgAp2hBIAAgSICsAAIAAASgACnhMIAAgRIBxAAIgPgWIATgLIATAbIgJAGIB2AAIAAARgAo5h0IASgIQAIALAKAUIgSAJQgJgTgJgNg");
	this.shape_1.setTransform(430.7,128.4);

	// alphaBg
	this.instance = new lib.alphaBg();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance,this.shape_1,this.shape,this.back_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.ScreenTip = function() {
	this.initialize();

	// 图层 4
	this.instance = new lib.LandscapeNotice();
	this.instance.setTransform(320,325.9,1,1.556,0,0,0,256,147.3);

	// alphaBg
	this.instance_1 = new lib.alphaBg();
	this.instance_1.setTransform(320,505,1,1,0,0,0,320,505);
	this.instance_1.alpha = 0.801;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.LaBa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// alphaBtn
	this.instance = new lib.AlphaBtn();
	this.instance.setTransform(-30,-24.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.AlphaBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AisisIFYFY");
	this.shape.setTransform(25.9,27.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("AgThQQBRBYhRBJ");
	this.shape_1.setTransform(37.9,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjADAQhPhQAAhwQAAhwBPhQQBQhPBwAAQBwAABQBPQBQBQAABwQAABwhQBQQhQBQhwAAQhwAAhQhQgAiiijQhEBEgBBfQABBfBEBEQBDBEBfAAQBfAABEhEQBFhEAAhfQAAhfhFhEQhEhEhfAAQhfAAhDBEgAhPBLIg8AAIAAiVIA8AAIB4hkIAAFdg");
	this.shape_2.setTransform(27.3,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-24.2,100,100);


(lib.JianTou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.JianTouM();
	this.instance.setTransform(326.8,978.7,1,1,0,0,0,20.5,13);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:949.3,alpha:1},49,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(281.7,947.7,47.3,26);


(lib.homeDh1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// 图层 1
	this.instance = new lib.TitleTxt();
	this.instance.setTransform(271.2,-297.3,1,1,0,0,0,180,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:303.6},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.5,-368.8,614,374);


(lib.GamePage = function() {
	this.initialize();

	// bridge_mc
	this.bridge_mc = new lib.Bridge();
	this.bridge_mc.setTransform(90.1,758,1,1,0,0,0,0,500);

	// levelBg.png
	this.instance = new lib.levelBg();
	this.instance.setTransform(104.1,176);

	// bar_mc
	this.bar_mc = new lib.BarMc();
	this.bar_mc.setTransform(320,47.5,1,1,0,0,0,320,47.5);

	// headbg.png
	this.instance_1 = new lib.headbg();
	this.instance_1.setTransform(100.6,91.3);

	// appleNumBg.png
	this.instance_2 = new lib.appleNumBg();
	this.instance_2.setTransform(229.5,177.6);

	// grass.png
	this.instance_3 = new lib.grass();
	this.instance_3.setTransform(0,916.9);

	// zhu0
	this.zhu1 = new lib.Box();
	this.zhu1.setTransform(299.7,758);

	this.zhu2 = new lib.Box();
	this.zhu2.setTransform(660,758);

	this.zhu0 = new lib.Box();
	this.zhu0.setTransform(0.1,758);

	// car_mc
	this.car_mc = new lib.Zhang();
	this.car_mc.setTransform(0,727);

	// gameBg.jpg
	this.instance_4 = new lib.gameBg();

	this.addChild(this.instance_4,this.car_mc,this.zhu0,this.zhu2,this.zhu1,this.instance_3,this.instance_2,this.instance_1,this.bar_mc,this.instance,this.bridge_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.9,-45,855.4,1178.2);


(lib.EndPage = function() {
	this.initialize();

	// dh_mc
	this.dh_mc = new lib.Glow2Mc();

	// home_btn
	this.home_btn = new lib.HomeBtn();
	this.home_btn.setTransform(164.3,857.7);
	new cjs.ButtonHelper(this.home_btn, 0, 1, 1);

	// duiJiang_btn
	this.duiJiang_btn = new lib.DuiJiang();
	this.duiJiang_btn.setTransform(320.3,678.4,1,1,0,0,0,156,37);
	new cjs.ButtonHelper(this.duiJiang_btn, 0, 1, 1);
	
	// gameRank_btn
	this.gameRank_btn = new lib.gameRank();
	this.gameRank_btn.setTransform(320.3,572.4,1,1,0,0,0,156,37);
	new cjs.ButtonHelper(this.gameRank_btn, 0, 1, 1);
	
	// share_btn
	this.share_btn = new lib.ShareBtn();
	//this.share_btn.setTransform(231.3,769.5,1,1,0,0,0,67,19.9);
	this.share_btn.setTransform(231.3,769.5,1,1,0,0,0,67,19.9);
	new cjs.ButtonHelper(this.share_btn, 0, 1, 1);

	// paiMing_txt
	this.paiMing_txt = new cjs.Text("总排名：100     好友排名：20", "30px 'Arial'");
	this.paiMing_txt.name = "paiMing_txt";
	this.paiMing_txt.textAlign = "center";
	this.paiMing_txt.lineHeight = 32;
	this.paiMing_txt.setTransform(322.9,462.1);

	// tip_txt
	this.tip_txt = new cjs.Text("您已经得到xxx苹果\n\n可以进入微信奖品兑换页面兑换奖品。", "24px 'Arial'", "#FF9544");
	this.tip_txt.name = "tip_txt";
	this.tip_txt.textAlign = "center";
	this.tip_txt.lineHeight = 26;
	this.tip_txt.lineWidth = 408;
	this.tip_txt.setTransform(316.2,268.1);

	// endBg.jpg
	this.instance = new lib.endBg();

	this.addChild(this.instance,this.tip_txt,this.paiMing_txt,this.share_btn,this.gameRank_btn,this.duiJiang_btn,this.home_btn,this.dh_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-70.9,640,1079);


(lib.HomePage = function() {
	this.initialize();

	// gogo_btn
	this.rule_btn = new lib.AlphaBtn();
	this.rule_btn.setTransform(41.3,725.7,1.463,1.145);
	new cjs.ButtonHelper(this.rule_btn, 0, 1, 2, false, new lib.AlphaBtn(), 3);

	this.moreGame_btn = new lib.AlphaBtn();
	this.moreGame_btn.setTransform(-349.8,936.7,2.037,0.713);
	new cjs.ButtonHelper(this.moreGame_btn, 0, 1, 2, false, new lib.AlphaBtn(), 3);

	this.gogo_btn = new lib.AlphaBtn();
	this.gogo_btn.setTransform(400.8,725.7,2.037,1.72);
	new cjs.ButtonHelper(this.gogo_btn, 0, 1, 2, false, new lib.AlphaBtn(), 3);

	// dh_mc
	this.dh_mc = new lib.homeDh1();
	this.dh_mc.setTransform(180,278.4,1,1,0,0,0,180,278.4);

	// bg
	this.instance = new lib.homeBg();

	this.addChild(this.instance,this.dh_mc,this.gogo_btn,this.moreGame_btn,this.rule_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-349.8,-368.8,989.8,1376.9);


// stage content:
(lib.UI = function() {
	this.initialize();

	// jianTou_mc
	this.jianTou_mc = new lib.JianTou();
	this.jianTou_mc.setTransform(13.5,6);

	// log_txt
	this.log_txt = new cjs.Text("", "40px 'Helvetica'");
	this.log_txt.name = "log_txt";
	this.log_txt.textAlign = "center";
	this.log_txt.lineHeight = 42;
	this.log_txt.lineWidth = 474;
	this.log_txt.setTransform(322.6,50,1.15,1.558);

	// laBa_mc
	this.laBa_mc = new lib.LaBa();
	this.laBa_mc.setTransform(597.2,51.4,1,1,0,0,0,27.2,27.2);

	// screenTip_mc
	this.screenTip_mc = new lib.ScreenTip();

	// share_mc
	this.share_mc = new lib.ShareMc();
	this.share_mc.setTransform(188.1,220.8,1,1,0,0,0,188.1,220.8);

	// pEnd_mc
	this.pEnd_mc = new lib.EndPage();

	// pGame_mc
	this.pGame_mc = new lib.GamePage();

	// Layer 1
	this.pRule_mc = new lib.RulePage();

	// pHome_mc
	this.pHome_mc = new lib.HomePage();

	this.addChild(this.pHome_mc,this.pRule_mc,this.pGame_mc,this.pEnd_mc,this.share_mc,this.screenTip_mc,this.laBa_mc,this.log_txt,this.jianTou_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.8,135.1,1152.2,1502.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;