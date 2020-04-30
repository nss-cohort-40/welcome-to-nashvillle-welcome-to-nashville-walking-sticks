function getSelectedFeatures(){
    selectElement = document.querySelector (`#parkFeatures`);
    output = selectElement.options[selectElement.selectedIndex].value;
    document.getElementById("list").innerHTML = ""; 
    searchParks()
}


document.getElementById("button1").addEventListener("click", getSelectedFeatures)
// let getList = document.querySelector(`#list`)
function searchParks (park) {
    getParksAPI()
    .then(parks => {
        counter=0;
        for (let i = 0; i < parks.length; i++){
            if (parks[i][output]===("Yes")){
                var myObject = JSON.parse(parks[i].mapped_location.human_address)
                var ul = document.getElementById("list")
                var li = document.createElement("li")        
                li.setAttribute('id', parks[i].park_name + myObject.address)
                li.appendChild(document.createTextNode(parks[i].park_name +"(" +myObject.address+")"))
                ul.appendChild(li)
            counter++
            }
        }
    })
    
}    