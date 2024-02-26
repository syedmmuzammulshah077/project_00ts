/*44. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly.*/

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
  const car: Car = {
      manufacturer,
      model
  };

  // Assign any additional properties passed as key-value pairs
  options.forEach(([key, value]) => {
      car[key] = value;
  });

  return car;
}

// Example usage
const myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

console.log(myCar);
