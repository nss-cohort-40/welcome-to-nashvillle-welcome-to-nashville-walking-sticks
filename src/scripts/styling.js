$(".itinerary-display").css({opacity: "0"})
$(".search-results-container").css({opacity: "0"})
$(".search-results").css({opacity: "0"})
$("h1:first").hide().fadeIn(4000)
$("p:first").hide().fadeIn(5000)
$("hr:first").hide().fadeIn(6000).animate({
    width: "+=30em"
}, 2000)
$("h2:first").hide().fadeIn(8000)
// $("p:last").hide().fadeIn(7500)
// $("hr:last").hide().fadeIn(8000).animate({
//     width: "+=20em"
// }, 2000)
$(".search-container").hide().fadeIn(7500)
// $(".search-container").animate({
//     right : "+=200px"
// }, 2000)

$(".btn").click(function (){
    $(".search-results-container").fadeTo(4000, 1)
    $(".search-results").fadeTo(4500, 1)
})

$(".submit,.save-button").click(function () {
    console.log("success!");
    
})