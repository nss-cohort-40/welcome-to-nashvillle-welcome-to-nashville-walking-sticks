function getParksAPI(parks) {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?/park_name`)
    .then( parkData => parkData.json() )
}

