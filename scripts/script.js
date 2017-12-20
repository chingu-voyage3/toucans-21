//DIANA - SERVICES START
$(document).ready(function() {
    $(".image").on("mouseenter", function() {
        $(".button").addClass("showBtn");
    });
     

    var allowAnimations = function () {
        $(".items").removeClass("disableAnimation");
    };


    $(".burger").on("click", function() {
        allowAnimations();
        $(".burger-menu").toggleClass("hide");
        $(".burger-x").toggleClass("show");
        $(".items").toggleClass("animateItems");
    });
});
//DIANA - SERVICES END   