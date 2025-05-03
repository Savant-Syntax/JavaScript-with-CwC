//? Symbol as a key
// Symbols are unique and immutable primitive values in JavaScript, often used as property keys to avoid naming collisions.

//? Creating Symbols
const sym1 = Symbol("description1");
const sym2 = Symbol("description2");

// console.log(sym1 === sym2);     //false

//? Using symbols as a key
const symKey = Symbol("uniqueKey");
const person = {};

// Adding a symbol key
person[symKey] = "Symbol Value";

// console.log(person);
// console.log(person[symKey]);

//? Why Bracket Notation Is Required?
// Unlike string keys, dot notation (object.key) doesn’t work for symbols because symbols aren’t valid JavaScript identifiers.

//Imcorrect way -> Error
// console.log(person.symKey);     //undefined

//Correct way
// console.log(person[symKey]);

//? Object Methods in JavaScript

//? this method
// Use the this keyword to refer to other properties within the same object.
// this refers to the object in which the method is defined.
// It gives you access to other properties of the same object.
const person9 = {
    firstName: "Savant",
    lastName: "Syntax",
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  // console.log(person9.fullName()); // Output: "Alice Doe"
  