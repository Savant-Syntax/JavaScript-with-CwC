// Objects
// We can create object by 2-methods
// 1. Contructors       2. Literals
// In contructor ---> singleton forms by default
// In literals ---> singleton doesnot form by default

//Constructor
function Car(model, color) {
    this.model = model;  // `this` refers to the object being created.
    this.color = color;
}

const car1 = new Car("Tesla", "Red");
const car2 = new Car("BMW", "Black");

// console.log(car1);
// console.log(car2); 

//Literals
const obj1 = { name: "John" };
const obj2 = { name: "Jane" }; // obj1 and obj2 are distinct objects.
//console.log(obj1);
//console.log(obj2);


//? Object literals
// Use curly braces {}.
// Keys can be strings, symbols, or variables.
// Values can be any type (primitive, array, function, etc.).

const person1 = {
    name: "Astrak",
    age: 20,
    isEmployed: true,
};
// console.log(person1); 

const key = "job";
const person2 = {
    "full-name": "Astrak",  // String key
    [key]: "Developer",       // Variable key
    [Symbol("id")]: 1234,     // Symbol key -> makes things unique
};
// console.log(person2); 

const person3 = {
    name: "Alice",
    age: 25,
    skills: ["JavaScript", "CSS", "HTML"],  // Array
    greet: function() {                     // Function
        console.log("Hello!");
    },
    address: {                              // Nested Object
        city: "Delhi",
        zip: 10001,
    },
};
//Person3.greet();
// console.log(person3.address.city);

//? Dot notation
// Simplest way to access object properties when the key is a valid identifier (letters, numbers, underscores, no spaces or special characters).

const person = { name: "Astrak", age: 20 };
// console.log(person.name);
// console.log(person.age);

//? Bracket notation
// Useful when:
// 1. The key has spaces or special characters.
// 2. The key is stored in a variable.
// 3. You need to compute the key dynamically.

const person4 = { "full name": "Astrak", age: 20 };
// console.log(person4["full name"]); 
const key2 = "age";
// console.log(person4[key2]);

// ? Symbol-based keys
// Symbols are unique identifiers. Even if two symbols have the same description, they are treated as different keys.

const id = Symbol("id");
const person5 = { [id]: 101, name: "Astrak" };
console.log(person5[id]); 
