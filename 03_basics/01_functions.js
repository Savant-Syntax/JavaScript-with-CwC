//Defining a function
function sayMyName() {
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("R");
    console.log("A");
    console.log("K");
}

sayMyName                                                //reference => not executable
sayMyName()                                              //calling => executable

//Adding 2-numbers
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers()                                          //NaN output => we have no parameters
addTwoNumbers(3, 7)                                      //10

//some other possiblities
addTwoNumbers(4, "6")
addTwoNumbers(5, "A")
addTwoNumbers(7, "Astrak")

const result = addTwoNumbers(3, 5)                      //we can store the output in a variable
console.log(result);                                    //? undefined?  The function is not returing anything

function add_2_Numbers(number1, number2) {
    console.log("Astrak");                              //Astrak
    
    let resultt = number1 + number2
    return resultt
    console.log("Astrak");                              //After return no line of code will be executed => unreachable code
    
}

const resultt = add_2_Numbers(3, 7)                     //Now the function is returning the value, that's why it is possible to store in the variable "resultt".
console.log(resultt);

function add_2_Numberss(number1, number2) {
    return number1 + number2                            //shortcut of using return
}

const output = add_2_Numberss(4, 8)
console.log(output);

function loginUserMessage(username) {
    if (username === undefined) {                       //to check the value is filled or not
        console.log("Please enter an username");
        return
        
    }
    return`${username} just logged in`
}

loginUserMessage("Astrak")                              //execution done but not output: reason => we never give a command to print
console.log(loginUserMessage("Astrak"));                //Astrak just logged in
console.log(loginUserMessage());

function loginUserMessages(usernames) {
    if (!usernames) {                                   //Alternative method to check the value is filled or not
        console.log("Please enter an username");
        return
        
    }
    return`${usernames} just logged in`
}

console.log(loginUserMessages());


function loginUserMessagess(usernamess = "sam") {       //"sam" as default value is added
    if (!usernamess) {                      
        console.log("Please enter an username");
        return
        
    }
    return`${usernamess} just logged in`
}

console.log(loginUserMessagess("Astrak"));              //If user enter the value, the value overwrite the default value

//+++++++++++++++Function part 2++++++++++++++++++++//

//shopping cart
//unknown number of arguments
function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(2));                     //output => 2
console.log(calculateCartPrice(200, 300, 400));         //expected => 200, 300, 400 but actual output is 200

//How to solve this?
//We have to rest operator "..."
// ... => it's purpose is to pack the data into bundle
//Basically it pass multiple values in a function

function calculateCartPrice_2(...num1) {
    return num1
}

console.log(calculateCartPrice_2(200, 300, 400));       //[ 200, 300, 400 ]

function calculateCartPrice_3(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice_3(200, 300, 400, 500));  // [ 400, 500 ] => 200, 300 value got stored in val1, val2 respectively and rest of the value stored in num1

//Using object
//How to pass an object in function

const user = {
    username: "Astrak",
    price: 199,
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
    console.log(`User name is ${anyobject.username} and price is ${anyobject.prics}`);      //prices become undefined: type checking is very important
}

handleObject(user)

//Other method to pass an object in function
handleObject({
    username: "Sam",
    price: 399
})

//Passing array in function
const myNewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));          //300 => Use variable
console.log(returnSecondValue([100, 200, 300, 400, 500, 600]));     //200 => without variable