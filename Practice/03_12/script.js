/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Vehicle from "./Vehicle.js";

const Car = new Vehicle(
    "Hondacity",
    "Silver",
    2021,
    "ict1205"
);

console.log("vehicle object:",Vehicle);
console.log("Vehicle name:", Car.Name);
console.log("Vehicle color:", Car.color);
console.log("Vehicle model:", Car.model);
console.log("Vehicle number:", Car.number);


