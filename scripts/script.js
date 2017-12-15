$(document).ready(function() {
    //DIANA - SERVICES START
    $(".image").on("mouseenter", function() {
        $(".button").addClass("showBtn");
    });
    //DIANA - SERVICES END



      
});


//CAROUSEL TEST 
$(function() {
    new Dragdealer('image-carousel', {
        steps: 4,
        speed: 0.3,
        loose: true
    });
})