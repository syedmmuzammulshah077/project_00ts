/*23. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
var car = 'subaru';
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // true
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // true
console.log("Is car.toLowerCase() === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru'); // true
console.log("Is car.toLowerCase() !== 'toyota'? I predict True.");
console.log(car.toLowerCase() !== 'toyota'); // true
var age = 25;
console.log("Is age === 25? I predict True.");
console.log(age === 25); // true
console.log("Is age !== 30? I predict True.");
console.log(age !== 30); // true
console.log("Is age > 20? I predict True.");
console.log(age > 20); // true
console.log("Is age < 30? I predict True.");
console.log(age < 30); // true
console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // true
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // true
console.log("Is (car === 'subaru') && (age === 25)? I predict True.");
console.log((car === 'subaru') && (age === 25)); // true
console.log("Is (car !== 'toyota') || (age !== 30)? I predict True.");
console.log((car !== 'toyota') || (age !== 30)); // true
var cars = ['toyota', 'honda', 'subaru'];
