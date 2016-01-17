// JavaScript File
var width = window.innerWidth+8;
var height = window.innerHeight-78;

$(window).resize(function(){
    height = window.innerHeight-78;
    width = window.innerWidth+8;
    $("#mouseParticles").attr("height",height);
    $("#mouseParticles").attr("width", width);
});

$(".header ul .textLinks a li").on("mouseenter",function(){
    $(this).addClass("hover");
}).on("mouseleave",function(){
    $(this).removeClass("hover");
})

//Problem: Particles don't follow the user mouse
//Solution: Add a canvas with and make particles appear around the mouse when it moves

//create canvas to cover the screen
var canvas = $("<canvas height=height width=width id='mouseParticles'></canvas>");
$(".header").before(canvas);
$(window).resize();
//add event listeners for the mouse moved
    //make particles in the direction that the mouse moved from
    //set timeout for them to disappear

//delete old particles