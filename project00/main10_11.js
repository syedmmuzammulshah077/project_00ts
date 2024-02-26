/*10. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/
/*11. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/
var names = ["Alice", "Bob", "Charlie"];
names.forEach(function (name) { return console.log(name); });
names.forEach(function (name) { return console.log("Hello, ".concat(name, "! I hope you're having a great day.")); });
