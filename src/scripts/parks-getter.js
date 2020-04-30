function getParksAPI(parks) {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?`)
    .then( parkData => parkData.json())
}
    