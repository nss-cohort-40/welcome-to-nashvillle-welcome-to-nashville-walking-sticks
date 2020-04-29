const API = {
    getArt() {
        return fetch("https://data.nashville.gov/resource/eviu-nxp6.json?")
        .then(response => response.json())
    }
}

