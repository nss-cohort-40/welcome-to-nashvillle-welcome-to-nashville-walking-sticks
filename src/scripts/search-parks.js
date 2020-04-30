
function searchParks (searchParam) {
    getParksAPI()
    .then(parks => {
        counter=0;
        for (let i = 0; i < parks.length; i++){
            if (parks[i][searchParam]===("Yes")){
                var myObject = JSON.parse(parks[i].mapped_location.human_address)
                var myData = `${parks[i].park_name} at ${myObject.address}`
                counter++
                dataHandler(myData, counter, "parks")
            }
        }
    })
    
}    