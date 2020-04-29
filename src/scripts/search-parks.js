function getSelectedFeatures(){
    selectElement = document.querySelector (`#parkFeatures`);
    output = selectElement.options[selectElement.selectedIndex].value;
    searchParks()

}


document.getElementById("searchFeatures").addEventListener("click", getSelectedFeatures)

function searchParks (park) {
    getParksAPI()
    .then(parks => {
        counter=0;
        for (let i = 0; i < parks.length; i++){
            if (parks[i][output] === ("Yes"))
            console.log (parks[i].park_name, parks[i].mapped_location.human_address)
            counter++
            // dataHandler(parks[i].park_name, counter, "parks")
        }
    })
}    