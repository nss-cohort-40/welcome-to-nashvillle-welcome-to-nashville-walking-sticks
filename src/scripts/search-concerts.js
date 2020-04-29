function searchConcert (query) {
    concertsAPI.concertsGetter().then(parsedEvents =>  {
        searchTerm = query.charAt(0).toUpperCase()
        for (const event of parsedEvents._embedded.events) {
            if (event.classifications["0"].genre.name.includes(searchTerm))
            console.log(`${event.name} at the ${event._embedded.venues["0"].name}`);
        }
    })
}


