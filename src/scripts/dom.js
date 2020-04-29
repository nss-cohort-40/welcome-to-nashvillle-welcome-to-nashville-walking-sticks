let rootElement = document.querySelector("body");

rootElement.addEventListener("click", function (event) {
  let targetElement = event.target;
  if (targetElement.id == "button1") {
  } else if (targetElement.id == "button2") {
    document.querySelector(".search-results").innerHTML = "<h2>Results</h2>";
    resultsController.resetResults();
    searchParam = document.getElementById("art-input").value;
    if (searchParam == "") {
      resultsController.resetResults();
      window.alert("Please enter a search term.");
    } else {
      searchArt(searchParam);
    }
  } else if (targetElement.id == "button3") {
    resetResults();
  } else if (targetElement.id == "button4") {
    resultsController.resetResults();
    document.querySelector(".search-results").innerHTML = "<h2>Results</h2>";
    searchParam = document.getElementById("concert-input").value;
    if (searchParam == "") {
      resetResults();
      window.alert("Please enter a search term.");
    } else {
      searchConcert(searchParam);
    }
  }
});

function dataHandler(data, counter, searchType) {
  if (searchType == "concerts") {
    content = makeConcertComponent(data, counter);
    resultsController.renderResults(content);
  }
  else if (searchType == "public_art") {
    content = makeArtComponent(data, counter)
    resultsController.renderResults(content);
  }
}

