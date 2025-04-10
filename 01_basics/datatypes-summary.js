//Datatypes are defind in 2-types: Primitive and Non-pritive

//Primitive => Call by value => Change done in copy of code not reflected in actual code.
//7 types: string, number, boolean, null, undefined, symbol, bigInt

//Non-premitive => Call by reference => Change done in here reflected in the actual code.
//tyles: array, object, functions

//2 Types of languages: Static and Dynamic

//Static => datatypes need to be defined while declaring the variables.

//dyamic => we don't need this
const age = 20; //here age acan be number, string etc
//* That's why Javascript is a dyanimcally typed language

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')    //Symbol use to make things unique
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3876127463784673836708936n    //bigInt
// console.log(typeof bigNumber);


//array
const heros = ["shaktiman", "naagraj", "doga"];
//object
let myObj = {
    name: "astrak",
    age: 20,
}

//function
const myFunction = function() {
    console.log("Hello world");
    
}

// myFunction()

// console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => Do not chage in original.
// Heap (Non-Primitive) => Changes occured in real one.


let myName = "Astrak"
// age = 20

let nameOne = "Rohan"
let nameTwo = nameOne
nameTwo = "Ankit"

//console.log(nameTwo);
//console.log(nameOne); //No change: Reason => It provides a copy to nameTwo so that changes in nameTwo will not reflect in nameOne

//Advanced
let userOne = {
    email: "unknownuserOne@google.com",
    upi: "user@upi"
}

let userTwo = userOne
userTwo.email = "someone@google.com"

//console.log(userOne.email);
//console.log(userTwo.email);
//Changes occured in the real one.
 



