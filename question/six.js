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
// console.log("Keys:", Object.keys(movie));

// Log all values
// console.log("Values:", Object.values(movie));

// Log all key-value pairs
// console.log("Entries:", Object.entries(movie));



//? Check Property Existence:
//? Create an object user with properties username, email, and isLoggedIn. Check if isLoggedIn and password exist in the object.

const user = {
    username: "ayano123",
    email: "ayano@example.com",
    isLoggedIn: true
  };
  
  // Check if 'isLoggedIn' exists
  //console.log("isLoggedIn exists:", 'isLoggedIn' in user); // Using 'in' operator
  //console.log("isLoggedIn exists:", user.hasOwnProperty('isLoggedIn')); // Using hasOwnProperty()
  
  // Check if 'password' exists
  //console.log("password exists:", 'password' in user); // Using 'in' operator
  //console.log("password exists:", user.hasOwnProperty('password')); // Using hasOwnProperty()
  


//? Object Destructuring:
//? Create an object course with title, price, and instructor. Destructure title and instructor, then log them.

const course = {
    title: "JavaScript Essentials",
    price: 49.99,
    instructor: "John Doe"
  };
  
  // Destructure title and instructor
  const { title, instructor } = course;
  
  // Log the destructured properties
  //console.log("Title:", title);
  //console.log("Instructor:", instructor);
  

//? Rename During Destructuring:
//? Using the course object from the previous question, give an alias coursePrice to price and log it.

const course2 = {
    title: "JavaScript Essentials",
    price: 49.99,
    instructor: "John Doe"
  };
  
  // Destructure price with alias coursePrice
  const { price: coursePrice } = course2;
  
  // Log the alias property
  //console.log("Course Price:", coursePrice);
  


//? Object Nesting and Optional Chaining:
//? Create an object company with a nested ceo object containing name and age. Use optional chaining to access ceo.name.

const company = {
    name: "Tech Innovations",
    ceo: {
      name: "Alice Smith",
      age: 45
    }
  };
  
  // Use optional chaining to access ceo.name
  //console.log("CEO's Name:", company.ceo?.name);
  


//? Spread Operator for Combining:
//? Create two objects: {x: 5, y: 10} and {z: 15, w: 20}. Combine them using the spread operator and log the result.

const objOne = { x: 5, y: 10 };
const objTwo = { z: 15, w: 20 };

// Combine using the spread operator
const combinedObject = { ...objOne, ...objTwo };

//console.log("Combined Object:", combinedObject);



//? Dynamic Property Addition:
//? Create an object book with properties title and author. Dynamically add a new property yearPublished and log the updated object.

const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling"
};


book.yearPublished = 1997;

// console.log("Updated Book Object:", book);


//? Modify Object Properties:
//? Create an object person with properties name and age. Update the age property to a new value and add a new property hobby. Log the updated object.

const person = {
  name: "Emma",
  age: 25
};
person.age = 26;    //update property
person.hobby = "Reading";   //add new property
console.log("Updated Person Object:", person);
