// JavaScript File

var dataRequest = $.getJSON("projects.json").done(function(data){
    for(var label in data){
        var creation = '<div id="project"><img src="'+data[label].thumbnail+'"><a href="'+data[label].link+'"><p>'+label+'</p></a><p id="description">'+data[label].description+'</p></div>'
        creation = $(creation);
        $(".projects").append(creation);
    }
});

$(document).ready(function(){
  $('.carousel').slick({
    autoplay:true,
    dots:true
  });
});