const restaurantAPI = {
    getRestaurant() {
        return fetch("http://opentable.herokuapp.com/api/restaurants?city=Nashville&per_page=100")
        .then(restaurants => restaurants.json())
    }
}

