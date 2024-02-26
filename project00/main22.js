/*22. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // true
console.log("Is car != 'suzuki'? I predict True.");
console.log(car != 'suzuki'); // true
console.log("Is car > 'honda'? I predict False.");
console.log(car > 'honda'); // false
console.log("Is car < 'toyota'? I predict True.");
console.log(car < 'toyota'); // true
console.log("Is car.length > 4? I predict False.");
console.log(car.length > 10); // true
console.log("Is car.toLowerCase() == 'Subaru'? I predict False.");
console.log(car.toLowerCase() == 'Subaru'); // true
console.log("Is car[0] == '0'? I predict False.");
console.log(car[0] == '0'); // true
console.log("Is car[1] == 'b'? I predict False.");
console.log(car[1] == 'b'); // true
console.log("Is car[2] == 'u'? I predict False.");
console.log(car[2] == 'u'); // false (should be 'b', but it's 'B')
