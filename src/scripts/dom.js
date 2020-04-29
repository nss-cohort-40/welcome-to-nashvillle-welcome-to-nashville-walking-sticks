let rootElement = document.querySelector("body");

// Bubbling event listener
rootElement.addEventListener("click", function(event) {
    let targetElement = event.target
    console.log(targetElement.id);
    
    if (targetElement.parentElement.nodeName == "SEARCH-FIELD") {
        if (targetElement.id == "btn1") {
            // Call search function
            
        } else if (targetElement.id == "btn2") {

        } else if (targetElement.id == "btn3") {

        } else if (targetElement.id == "btn4") {
        }
    } 
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
