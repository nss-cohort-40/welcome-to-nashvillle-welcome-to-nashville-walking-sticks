rootElement.addEventListener("click", function (event) {
  itineraryBox = document.querySelector(".itinerary-display");
  if (event.target.id.split("-")[0] == "save") {
    number = event.target.id.split("-")[1];
    
    
    concertName = getResult(number)
    artName = getResult(number)

    if (document.getElementById("results").innerHTML == "Art Results") {
      if (itineraryBox.querySelector(".art-results").innerHTML == "") {
        document.querySelector(".art-results").innerHTML += makeItineraryComponent(artName, "art");
      } else if (itineraryBox.querySelector("#art-result") != null) {
        resetResults("art");
        document.querySelector("#art-result").innerHTML = makeItineraryComponent(artName, "art");
      }
    } else if (document.getElementById("results").innerHTML == "Concert Results") {
      if (itineraryBox.querySelector(".concert-results").innerHTML == "") {
        document.querySelector(".concert-results").innerHTML += makeItineraryComponent(concertName, "concert");
      } else if (itineraryBox.querySelector("#concert-result") != null) {
        resetResults("concert");
        document.querySelector("#concert-result").innerHTML = makeItineraryComponent(concertName, "concert");
    }
    }

  }
});

function resetResults(resultType) {
  document.querySelector(`#${resultType}-result`).innerHTML = "";
}

const getResult = (number) => {
  content = document.querySelector(`#content-${number}`).innerHTML;
  splitSentence = content.split("<button");
  return name = splitSentence[0].substr(3);
};