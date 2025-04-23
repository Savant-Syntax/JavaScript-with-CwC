const user = {
    username: "Astrak",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);    //"this." it is used for accessing the current context
        console.log(this);      //prints the whole current context of the given object.
        
    }

}

user.welcomeMessage()   //Default value => Astrak
user.username = "Sam"   //Changing the value.
user.welcomeMessage()   //Changed value => Sam
//How did we access the changed value?
//=> this. used to access the current value so when we changed the value the changed value became the current value for the context.

console.log(this);  // {} => empty object, but why? In node it refers to an empty object because now, there is no context inside global object.

function chai() {
    let username = "Astrak"
    //console.log(this)               //many functions
    console.log(this.username)      //undefined

}

chai()  //In function and object "this" works differently


// ++++++++++++++++++ Arrow Function ++++++++++++++++++++ //

const juice = () => {
    let username = "Astrak"
    console.log(this)               
    console.log(this.username)  
}

juice() //same output

//*Syntax
//const arrowFunctionName = (parameter1, parameter2) => {
    //code...............
//}

//arrowFunctionName(argument1, argument2)

//Example
const add2 = (num1, num2) => {
    return num1 + num2
}

console.log(add2(5, 5));

//Implicit way to write arrow function
const addTwoNum = (num1, num2) => num1 + num2   //no need to write return
console.log(addTwoNum(6, 8));

//Other way to write arrow function
const addnum = (num1, num2) => (num1 + num2)    //mostly used in react
console.log(addnum(10, 2));

//Access object in arrow function in inplicit way
const accessObj = () => ({username: "Astrak"})
console.log(accessObj());


