

function getArt(searchTerm) {
    return fetch("https://data.nashville.gov/resource/eviu-nxp6.json")
    .then(response => response.json())
    .then(art => {
       for (let i = 0; i < art.length; i++) {
           if (art[i].description.includes("searchTerm") === true {
               return 
           }
       } 
    })
}
