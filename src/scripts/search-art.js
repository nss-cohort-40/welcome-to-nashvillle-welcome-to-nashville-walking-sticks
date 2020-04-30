function searchArt(searchTerm) {
    API.getArt()
    .then(art => {
        let counter = 0;
        for (let i = 0; i < art.length; i++) {
            if (art[i].description.includes(searchTerm)) {
                counter++;
                dataHandler(art[i], counter, "public_art");
            }
        }
    })
}
