//DIANA - SERVICES START

$(document).ready(function() {
    $(".image").on("mouseenter", function() {
        $(".button").addClass("showBtn");
    });
     
});


//CAROUSEL TEST 
$(function() {
    new Dragdealer('image-carousel', {
      steps: 4,
      speed: 0.3,
      loose: true
    });
  })
  

//DIANA - SERVICES END   