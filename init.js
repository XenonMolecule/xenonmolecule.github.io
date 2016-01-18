// JavaScript File

var width = window.innerWidth+8;
var height = window.innerHeight-78;

$(window).resize(function(){
    height = window.innerHeight-78;
    width = window.innerWidth+8;
    $("#mouseParticles").attr("height",height);
    $("#mouseParticles").attr("width", width);
});
