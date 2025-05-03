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
  
