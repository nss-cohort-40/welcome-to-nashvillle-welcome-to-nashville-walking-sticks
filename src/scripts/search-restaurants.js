function searchRestaurant(pricePoint) {
    restaurantAPI.getRestaurant()
        .then(restaurantList => {
            const listOfRestaurants = restaurantList.restaurants
            counter = 1;
            for (let index = 0; index < listOfRestaurants.length; index++) {
                if (listOfRestaurants[index].price == pricePoint) {
                    restaurantPrice = listOfRestaurants[index].price
                    var myData = `${listOfRestaurants[index].name}` + " " + "$".repeat(restaurantPrice)
                    dataHandler(myData, counter, "restaurant")
                    counter++;
                }
            }
        })
}
