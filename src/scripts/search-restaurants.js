function searchRestaurant(pricePoint) {
    restaurantAPI.getRestaurant()
        .then(restaurantList => {
            const listOfRestaurants = restaurantList.restaurants
            for (let index = 0; index < listOfRestaurants.length; index++) {
                if (listOfRestaurants[index].price <= pricePoint) {
                    console.log(listOfRestaurants[index].name, listOfRestaurants[index].price)
                }
            }
        })
}

searchRestaurant(2)