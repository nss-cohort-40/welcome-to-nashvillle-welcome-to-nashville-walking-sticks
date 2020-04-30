rootElement.addEventListener("click", function (event) {
  itineraryBox = document.querySelector(".itinerary-display");
  if (event.target.id.split("-")[0] == "save") {
    number = event.target.id.split("-")[1];
    
    
    concertName = getConcertResult(number)

    if (itineraryBox.querySelector(".concert-results").innerHTML == "") {
      document.querySelector(".concert-results").innerHTML += makeItineraryComponent(concertName, "concert");
    } else if (itineraryBox.querySelector("#concert-result") != null) {
      resetResults("concert");
      document.querySelector("#concert-result").innerHTML = makeItineraryComponent(concertName, "concert");
    }
  }
});

function resetResults(resultType) {
  document.querySelector(`#${resultType}-result`).innerHTML = "";
}

const getConcertResult = (number) => {
  content = document.querySelector(`#content-${number}`).innerHTML;
  splitSentence = content.split("<button");
  return name = splitSentence[0].substr(3);
};

