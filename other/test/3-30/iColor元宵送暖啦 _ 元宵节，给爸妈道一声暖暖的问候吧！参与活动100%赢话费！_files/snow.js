window.addEventListener('DOMContentLoaded', function(){
  var canvas = document.getElementById("snow");
  if(!canvas) return;
  var ctx = canvas.getContext("2d");
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var mp = 25;
  var particles = [];
  var img=new Image();
        img.src="/images/sweet/now.gif";
  for(var i = 0; i < mp; i++){
    particles.push({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*10+2,
      d: Math.random()*mp
    })
  }
  function draw(){
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();
    for(var i = 0; i < mp; i++){
      var p = particles[i];
      ctx.moveTo(p.x, p.y);
          ctx.drawImage(img,p.x,p.y,p.r,p.r);
     // ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    update();
  }
  var angle = 0;
  function update(){
    angle += 0.01;
    for(var i = 0; i < mp; i++){
      var p = particles[i];
      p.y += Math.cos(angle+p.d) + 1 + p.r/2;
      p.x += Math.sin(angle) * 2;
      if(p.x > W+5 || p.x < -5 || p.y > H){
        if(i%3 > 0) {
          particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
        }
        else {
          if(Math.sin(angle) > 0){
            particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
          }
          else{
            particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
          }
        }
      }
    }
  }
  setInterval(draw, 33);

}, false)
