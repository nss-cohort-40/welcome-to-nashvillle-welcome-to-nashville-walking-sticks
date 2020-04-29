searchResults = document.getElementById("itinerary-display")
rootElement.addEventListener("click", function (event) {
    let targetElement = event.target
    console.log(targetElement.innerHTML.split(" "[0]));
    // element = makeInineraryComponent()
    // document.querySelector(".itinerary-display")
  });