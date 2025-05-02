//? Symbol as a key
// Symbols are unique and immutable primitive values in JavaScript, often used as property keys to avoid naming collisions.

//? Creating Symbols
const sym1 = Symbol("description1");
const sym2 = Symbol("description2");

// console.log(sym1 === sym2);     //false