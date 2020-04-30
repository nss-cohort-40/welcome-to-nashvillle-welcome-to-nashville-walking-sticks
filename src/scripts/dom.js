let rootElement = document.querySelector("body");

rootElement.addEventListener("click", function (event) {
  let targetElement = event.target;
  if (targetElement.id == "button1") {
    searchParam = document.querySelector (`#park-search-input`).value;
    resultsController.resetResults();
    //  = searchParam.options[selectElement.selectedIndex].value;
    if (searchParam == "") {
        resetResults();
        window.alert("Please enter a search term.");
      } else {
        searchParks(searchParam);
      }

  } else if (targetElement.id == "button2") {
    resultsController.resetResults();
    document.querySelector(".search-results").innerHTML = "<h2 id=\"results\">Art Results</h2>";
    searchParam = document.getElementById("art-search-input").value;
    if (searchParam == "") {
      resultsController.resetResults();
      window.alert("Please enter a search term.");
    } else {
      // debugger
      searchArt(searchParam);
    }
  } else if (targetElement.id == "button3") {
    resetResults();
  } else if (targetElement.id == "button4") {
    // debugger
    resultsController.resetResults();
    document.querySelector(".search-results").innerHTML = "<h2 id=\"results\">Concert Results</h2>";
    searchParam = document.getElementById("concert-search-input").value;
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
  else if (searchType == "parks") {
    content = makeParkComponent(data, counter)
    resultsController.renderResults(content);
  }
}

