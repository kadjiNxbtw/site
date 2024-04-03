var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.hight = window.innerHeight;
var waves = ["rgba(157,187,210,0.3)"]
var i = 0;

function draw() {
    canvas.width = canvas.width;

    var offset = i + 1 * Math.PI * 12;
    ctx.fillStyle = "#138CCB";

    var randomLeft = (Math.sin(offset / 100) + 1) / 2 * 150;
    var randomRight = (Math.sin((offset / 100) + 10) + 1) / 2 * 150;
    var randomLeftConstraint = (Math.sin((offset / 60) + 2) + 1) / 2 * 150;
    var randomRightConstraint = (Math.sin((offset / 60) + 1) + 1) / 2 * 150;

    ctx.beginPath();
    ctx.moveTo(0, randomLeft + 150);

    //ctx.lineTo(canvas.width, randomRight + 100); 
    ctx.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 3 * 2, randomRightConstraint, canvas.width, randomRight + 150);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(0, randomLeft + 150);

    ctx.closePath();
    ctx.fill();

    i = i + 3;
}

setInterval("draw()", 50);