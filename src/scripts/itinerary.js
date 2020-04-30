const itinObj = {
  park: "",
  art: "",
  concert: "",
  restaurant: ""
}

rootElement.addEventListener("click", function (event) {
  itineraryBox = document.querySelector(".itinerary-display");
  if (event.target.id.split("-")[0] == "save") {
    number = event.target.id.split("-")[1];
    
    
    concertName = getResult(number)
    artName = getResult(number)
    parkName = getResult(number)

    if (document.getElementById("results").innerHTML == "Art Results") {
      if (itineraryBox.querySelector(".art-results").innerHTML == "") {
        document.querySelector(".art-results").innerHTML += makeItineraryComponent(artName, "art");
        itinObj.art = artName;
      } else if (itineraryBox.querySelector("#art-result") != null) {
        resetResults("art");
        document.querySelector("#art-result").innerHTML = makeItineraryComponent(artName, "art");
        itinObj.art = artName;
      }
    } else if (document.getElementById("results").innerHTML == "Concert Results") {
      if (itineraryBox.querySelector(".concert-results").innerHTML == "") {
        document.querySelector(".concert-results").innerHTML += makeItineraryComponent(concertName, "concert");
        itinObj.concert = concertName;
      } else if (itineraryBox.querySelector("#concert-result") != null) {
        resetResults("concert");
        document.querySelector("#concert-result").innerHTML = makeItineraryComponent(concertName, "concert");
        itinObj.concert = concertName;
    }
    } else if (document.getElementById("results").innerHTML == "Parks Results") {
      if (itineraryBox.querySelector(".parks-results").innerHTML == "") {
        document.querySelector(".parks-results").innerHTML += makeItineraryComponent(parkName, "parks");
        itinObj.park = parkName;
      } else if (itineraryBox.querySelector("#parks-result") != null) {
        resetResults("parks");
        document.querySelector("#parks-result").innerHTML = makeItineraryComponent(parkName, "parks");
        itinObj.park = parkName;
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

document.getElementById("save-itin").addEventListener("click", function () {
  fetch("http://localhost:8088/itinerary", {
    method: "POST",
    body: JSON.stringify(itinObj),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(res => res.json())
    // .then(res => console.log(res))
})