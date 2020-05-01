function searchArt(searchParam) {
  API.getArt().then((art) => {
    let counter = 1;
    for (let i = 0; i < art.length; i++) {
      if (art[i].hasOwnProperty("description")) {
        if (art[i].description.includes(searchParam)) {
          dataHandler(art[i], counter, "public_art");
          counter++;
        }
      }
    }
  });
}
