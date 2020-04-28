let rootElement = document.querySelector("body");

rootElement.addEventListener("click", function(event) {
    let targetElement = event.target
    console.log(targetElement.parentElement.nodeName);
    if (targetElement.parentElement.nodeName == "searchFieldCHANGEME") {
    } 
    else if (targetElement.parentElement.nodeName)
})

// const makeComponent = element => {
//     if (element == "button1") {
//         `<el>${counter}. ${parks.search().name}: ${parks.search().address}</el>
//         <saveButton></saveButton>`
//     } else 
// }


// function renderResults () {
    
// }

// function renderItinerary() { 
// }

// function handler(element, section) {
//     counter = 1;
//     if (element == "button1" && section == "search") {
//         makeComponent(element)
//     }
// }

// function buttonSelect (id) {
//     if (id == "button1") {

//     } else if (id == "") {
        
//     } else if (id == "") {

//     } else if (id == "") {

//     }
// }

// document.body.addEventListener("click", buttonSelect)

// // variables 
// let park = park.search().name
// let art = art.search().name