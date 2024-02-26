/*12. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
// Define an array of favorite modes of transportation
var favoriteTransportation = ["car", "motorcycle", "bicycle", "scooter"];
// Print statements about each item in the array
favoriteTransportation.forEach(function (item) {
    console.log("I would like to own a ".concat(item, "."));
});
favoriteTransportation.forEach(function (name) { return console.log("I would like to own a ".concat(name, ".")); });
