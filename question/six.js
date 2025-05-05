//? Object Creation:
//? Create an object student using both new Object() and object literal syntax. Add properties name, age, and grade, then log both objects.

//construuctor
const student1 = new Object();
student1.name = "John";
student1.age = 20;
student1.grade = "A";

//console.log(student1);

//Literals
const student2 = {
    name: "Jane",
    age: 22,
    grade: "B"
  };
  
//console.log(student2);


//? Object Nesting:
//? Create an object team with a nested captain object containing firstName and lastName. Access and log the captain.lastName.

const team = {
    name: "Dream Team",
    captain: {
      firstName: "Michael",
      lastName: "Jordan"
    }
  };
  
//console.log("Captain's last name:", team.captain.lastName);


//? Combining Objects:
//? Combine two objects, {a: 1, b: 2} and {c: 3, d: 4}, into a new object using: Object.assign(), Spread operator (...).

//Object.assign():
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedUsingAssign = Object.assign({}, obj1, obj2);
//console.log("Combined using Object.assign():", combinedUsingAssign);

//Spread operator (...)
const combinedUsingSpread = { ...obj1, ...obj2 };
//console.log("Combined using spread operator:", combinedUsingSpread);


//? Object Keys and Values:
//? Create an object movie with properties title, director, and releaseYear. Log: All keys using Object.keys(), All values using Object.values(), All key-value pairs using Object.entries()

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010
  };
  
// Log all keys
console.log("Keys:", Object.keys(movie));

// Log all values
console.log("Values:", Object.values(movie));

// Log all key-value pairs
console.log("Entries:", Object.entries(movie));
  

