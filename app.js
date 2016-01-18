// JavaScript File
var width = window.innerWidth+8;
var height = window.innerHeight-78;
var mX = 0;
var mY = 0;
var mouseStillTime = 0;
var onCanvas = true;

$(window).resize(function(){
    height = window.innerHeight-78;
    width = window.innerWidth+8;
    var realCanvas = canvas[0];
    $("canvas"[0]).attr("id","mouseParticles");
    $("#mouseParticles").attr("height",height);
    $("#mouseParticles").attr("width", width);
});

//Problem: Particles don't follow the user mouse
//Solution: Add a canvas with and make particles appear around the mouse when it moves

//create canvas to cover the screen
var canvas = $("<canvas></canvas>");
canvas.attr("id","junk");
$(".header").before(canvas);
$(window).resize();
var context = $("canvas")[0].getContext("2d");

//find mouse position
$("#mouseParticles").mousemove(function(e){
    console.log("mouse moved");
    mX = e.offsetX;
    mY = e.offsetY;
    mouseStillTime = 0;
}).mouseleave(function(){
    onCanvas = false;
}).mouseenter(function(){
    onCanvas = true;
    setTimeout(drawParticle,10);
});

//draw circles at the mouse at with a specified delay between them
function drawParticle(){
    if(onCanvas){
        mouseStillTime++;
        context.globalCompositeOperation="source-over";
        context.beginPath();
        context.fillStyle = "#FFF";
        context.arc(mX,mY,8,0,(2*Math.PI));
        context.fill();
        setTimeout(drawParticle,10);
        var currentX = mX;
        var currentY = mY;
        //set timeout for them to disappear
        setTimeout(deleteParticle,100,currentX,currentY);
    }
}
//delete old particles
function deleteParticle(x,y){
    if(mouseStillTime<20){
        context.clearRect(x-8,y-8,16,16);
    }
}

drawParticle();
$("#junk").detach();