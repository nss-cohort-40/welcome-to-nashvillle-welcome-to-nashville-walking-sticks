function searchConcert (query) {
    concertsAPI.concertsGetter().then(parsedEvents =>  {
        searchTerm = query.charAt(0).toUpperCase()
        events = parsedEvents._embedded.events
        counter = 0;
        for (const event of events) {
            if (event.classifications["0"].genre.name.includes(searchTerm)) {
                counter++
                dataHandler(event, counter, "concerts")
            }
        }
})
}