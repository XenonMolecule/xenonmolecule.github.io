// JavaScript File
var info;
var dataRequest = $.getJSON("projects.json").done(function(data){
    for(var label in data){
        var creation = '<div id="project"><img src="'+data[label].thumbnail+'"><a href="'+data[label].link+'"><p>'+label+'</p></a><p id="description">'+data[label].description+'</p></div>'
        creation = $(creation);
        $(".projects").append(creation);
    }
    info = data;
    setTimeout(initLightBoxes,100);
});

$(document).ready(function(){
  $('.carousel').slick({
    autoplay:true,
    dots:true
  });
});

//Problem:  The User cannot yet get more information on the projects
//Solution: Add a lightbox to display extra information
function initLightBoxes(){
  $(".projects").children("div").on("click",function(){
    var name = $(this).children("a").children("p").html();
    var creation = '<div class="carousel">';
    for(var i=0; i < info[name].lightbox.carousel.length; i ++){
      creation+='<div><img src="'+info[name].lightbox.carousel[i]+'"></div>'
    }
    creation+='</div><a href="'+info[name].link+'"><p>'+name+'</p></a>';
    creation+='<p id="longerDesc">'+info[name].lightbox.longDesc+'</p>';
    creation+='<a href="'+info[name].lightbox.github+'"><img id="github" src="../../resources/github.png"></a>'
    $(".carousel").slick('unslick');
    $(".lightbox").empty().append(creation);
    $(".carousel").slick({
      autoplay:true,
      dots:true
    });
    $(".lightbox").fadeIn(1000);
    $("#background").fadeIn(1000);
  });
}

$("#background").on("click",function(){
  $(".lightbox").fadeOut(1000);
  $("#background").fadeOut(1000);
})