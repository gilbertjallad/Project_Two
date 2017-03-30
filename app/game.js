$(document).ready(function() { 

var renderOptions = {
antialiasing: false,
transparent: false,
resolution: window.devicePixelRatio,
// autoResize: true,it tells it when it changes size
}


var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, renderOptions);

document.body.appendChild(renderer.view);

renderer.view.style.position = "absolute";
renderer.view.style.top = "0px";
renderer.view.style.left = "0px";

window.onresize = resize;
resize();


var cat = new PIXI.Sprite.fromImage("images/cat.jpg");
cat.y = 96;
cat.x = 0;
cat.vx = 0;
cat.vy = 0;
cat.scale.set(0.1,0.1);
stage.addChild(cat);


function resize() {
var w = window.innerWidth;
var h = window.innerHeight;
renderer.view.style.width = w + 'px';
renderer.view.style.height = h + 'px';
}

requestAnimationFrame(animate);
function animate() {
requestAnimationFrame(animate);
cat.x += cat.vx;
cat.y += cat.vy;
renderer.render(stage);
}



});