$(".itinerary-display").css({opacity: "0"})
$(".results").css({opacity: "0"})
$(".search-results-container").css({opacity: "0"})
$(".search-results").css({opacity: "0"})
$("h1:first").hide().fadeIn(4000)
$("p:first").hide().fadeIn(5000)
$("hr:first").hide().fadeIn(6000).animate({
    width: "+=30em"
}, 2000)
$("h2:first").hide().fadeIn(8000)
$(".search-container").hide().fadeIn(7500)

$(".btn").click(function (){
    $(".search-results-container").fadeTo(4000, 1)
    $(".search-results").fadeTo(4500, 1)
})