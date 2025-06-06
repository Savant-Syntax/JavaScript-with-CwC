//Questions

//? 1. What are the two ways to create an object in JavaScript?
// Contructor
// with constructor we have to use function to create objects.
function Car(model, color) {
    this.model = model; 
    this.color = color;
}

const car1 = new Car("Tesla", "Red");
const car2 = new Car("BMW", "Black");

// console.log(car1);
// console.log(car2); 

//Literals
const obj1 = { name: "John" };
const obj2 = { name: "Jane" }; 
// console.log(obj1);
// console.log(obj2);


//? 2. Why can't we access full name using dot notation?
// Dot notation retrieves the value assigned to the property. Since fullName is a function, its value is the function itself. To execute it and get the result, you need ().

const person = {
    firstName: "Johnny",
    lastName: "Deep",
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
// console.log(person.fullName);
// console.log(person.fullName()); //Right way
  

//? 3. What is the purpose of using a Symbol as a key in an object?
// This prevents accidental overwriting or collision of object properties.

const sym1 = Symbol("id");
const sym2 = Symbol("id");

const obj = {};
obj[sym1] = "First ID";
obj[sym2] = "Second ID";

// console.log(obj[sym1]);
// console.log(obj[sym2]);


//? 4. Write the code to create an object with a symbol key and access its value correctly.

const mySymbol = Symbol("uniqueKey");
const obj3 = {
  [mySymbol]: "This is the value for the symbol key",
};
// console.log(obj3[mySymbol]);
// console.log(obj3.mySymbol);     //dot notation will not work here


//? 5. If Object.freeze() is used on an object, what happens when you try to update a property?
//It makes the object immutable, meaning its properties cannot be added, updated, or deleted.

const obj4 = { name: "John", age: 25 };
// Freeze the object
Object.freeze(obj4);
// Attempt to modify properties
obj4.age = 30; 
// console.log(obj4.age);

// Attempt to add new properties
obj4.city = "New York"; 
// console.log(obj4.city);
// Attempt to delete properties
delete obj4.name; 
// console.log(obj4.name);

"use strict";
obj4.age = 30; // Throws TypeError


//? 6. Write a method in an object that logs all key-value pairs of the object.

const myObject = {
    name: "Astrak",
    age: 20,
    job: "Engineer",
    logKeyValuePairs: function () {
      Object.entries(this).forEach(([key, value]) => {
        if (typeof value !== "function") {
          console.log(`${key}: ${value}`);
        }
      });
    },
  };
  
  //myObject.logKeyValuePairs();
  

//? Explain the difference between using a singleton object and a non-singleton object in terms of application behavior.

// A singleton object is a design pattern where only one instance of the object is created and shared across the entire application.
// Characteristic: 1. Single Instance, 2. Global Access, 3. State Sharing
const singleton = {
  appName: "MyApp",
  version: "1.0",
  log: function (message) {
    //console.log(`[${this.appName} v${this.version}]: ${message}`);
  },
};

singleton.log("Starting application...");

// A non-singleton object is a design where multiple instances of the object can be created. Each instance is independent and maintains its own state.
// Characteristic: 1. Multiple Instances, 2. Encapsulation, 3. No Shared State
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  };
}

const personX = createPerson("Alice", 25);
const personY = createPerson("Bob", 30);

// personX.greet();
// personY.greet();

//? How can you check if an object is frozen?
// By try to do:
// 1. adding new property
// 2. removing existing property
// 3. updating existing property

const objt = {
  name: "Alice",
};
// Freeze the object
Object.freeze(objt);
// Check if the object is frozen
console.log(Object.isFrozen(objt));

const objZ = {
  name: "Bob",
};
// Check if the object is frozen
console.log(Object.isFrozen(objZ));
