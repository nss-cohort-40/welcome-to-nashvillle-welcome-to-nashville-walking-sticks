
function searchParks (searchParam) {
    getParksAPI()
    .then(parks => {
        counter=0;
        for (let i = 0; i < parks.length; i++){
            if (parks[i][searchParam]===("Yes")){
                console.log (parks[i].mapped_location.human_address.address)
                var myObject = JSON.parse(parks[i].mapped_location.human_address)
                var myData = `${parks[i].park_name} at ${myObject.address}`
                // var ul = document.getElementById("list")
                // var li = document.createElement("li")        
                // li.setAttribute('id', parks[i].park_name + myObject.address)
                // li.appendChild(document.createTextNode(parks[i].park_name +"(" +myObject.address+")"))
                // ul.appendChild(li)
                counter++
                dataHandler(myData, counter, "parks")
            }
        }
    })
    
}    