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
