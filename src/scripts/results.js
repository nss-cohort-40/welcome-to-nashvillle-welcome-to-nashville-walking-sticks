const resultsController = {
    renderResults: function (element) {
        document.querySelector(".search-results").innerHTML += element;
    },
    resetResults: function () {
        document.querySelector(".search-results").innerHTML = "";
    }
}
