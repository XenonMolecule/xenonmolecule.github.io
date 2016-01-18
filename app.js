// JavaScript File
var width = window.innerWidth+8;
var height = window.innerHeight-78;
var mX = 0;
var mY = 0;
var lastEvent;
var mouseDown;
var mouseStillTime = 0;
var onCanvas = true;
var color = $(".selected").css("background-color");

$(window).resize(function(){
    height = window.innerHeight-78;
    width = window.innerWidth+8;
    $("canvas"[0]).attr("id","mouseParticles");
    $("canvas"[1]).attr("id","paintCanvas");
    $("#mouseParticles").attr("height",height);
    $("#paintCanvas").attr("height",height);
    $("#mouseParticles").attr("width", width);
    $("#paintCanvas").attr("width", width);
    setTimeout($(".exitPaint").css("margin-left",(window.innerWidth-55)),100);
    setTimeout($(".drawIcon").css("margin-left",(window.innerWidth-65)),100);
});

function initCanvas(){
    height = window.innerHeight-78;
    width = window.innerWidth+8;
    canvas.attr("id","mouseParticles");
    $("#mouseParticles").attr("height",height);
    $("#mouseParticles").attr("width", width);
}

function initCanvas2(){
    height = window.innerHeight-78;
    width = window.innerWidth+8;
    paintCanvas.attr("id","paintCanvas");
    $("#paintCanvas").attr("height",height);
    $("#paintCanvas").attr("width", width);
    $("#paintCanvas").attr("hidden", true);
}

//Problem: Particles don't follow the user mouse
//Solution: Add a canvas with and make particles appear around the mouse when it moves

//create canvas to cover the screen
var canvas = $("<canvas></canvas>");
canvas.attr("id","junk");
$(".header").before(canvas);
initCanvas();
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

//Problem: People cannot vandalize the website if they so choose
//Solution: Add a vandalize button with a color selection pallet

//init draw icon
setTimeout($(".drawIcon").css("margin-left",(window.innerWidth-65)),100);

//prepare x button
setTimeout($(".exitPaint").css("margin-left",(window.innerWidth-55)),100);

//init paint canvas
var paintCanvas = $("<canvas></canvas>");
paintCanvas.attr("id","junk");
$(".header").before(paintCanvas);
initCanvas2();
var paintContext = $("canvas")[0].getContext("2d");

//bring up color pallet
$(".drawIcon").click(function(e){
     e.preventDefault();
     $(".colorPallet").attr("hidden",false);
     $("#paintCanvas").attr("hidden",false);
});

//close down color pallet
$(".exitPaint").click(function(e){
    e.preventDefault();
    $(".colorPallet").attr("hidden",true);
    $("#paintCanvas").attr("hidden",true);
    paintContext.clearRect(0,0,width,height);
});

//switch the selected color
$(".colorPallet ul li").each(function(){
   $(this).click(function(){
       $(".colorPallet ul li").each(function(){
            if($(this).hasClass("selected")){
                $(this).removeClass("selected");
            }
       });
       $(this).addClass("selected");
       color = $(".selected").css("background-color");
   });
});

//enable drawing on the canvas
$("#paintCanvas").mousedown(function(e){
    lastEvent = e;
    mouseDown = true;
}).mouseup(function(e){
    mouseDown = false;
}).mousemove(function(e){
    if(mouseDown){
        paintContext.beginPath();
        paintContext.strokeStyle = color;
        paintContext.moveTo(lastEvent.offsetX,lastEvent.offsetY);
        paintContext.lineTo(e.offsetX,e.offsetY);
        paintContext.stroke();
        lastEvent = e;
    }
})

