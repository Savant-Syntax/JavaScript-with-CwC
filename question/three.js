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

