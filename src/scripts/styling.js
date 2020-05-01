$(".itinerary-display")
$("h1:first").hide().fadeIn(4000).animate({
    letterSpacing: "2px"
}, 2000, "swing")
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

$(".search-results-container").hide()
$(".search-results").hide()

// $(".search-container").animate({
//     right : "+=200px"
// }, 2000)

$(".btn").click(function (){
    $(".search-results-container").hide().fadeIn(3000),
    $(".search-results").hide().fadeIn(3500)
})
