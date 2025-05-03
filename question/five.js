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
