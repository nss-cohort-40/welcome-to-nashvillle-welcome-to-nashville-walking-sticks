let parksInput = document.querySelector("#parksInput")

getParksAPI(parksInput.value)
.then( (parksData) => {
    console.log (parksData)

})