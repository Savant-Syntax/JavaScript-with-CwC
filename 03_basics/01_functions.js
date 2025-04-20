//Defining a function
function sayMyName() {
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("R");
    console.log("A");
    console.log("K");
}

sayMyName                                    //reference => not executable
sayMyName()                                  //calling => executable

//Adding 2-numbers
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers()                              //NaN output => we have no parameters
addTwoNumbers(3, 7)                          //10

//some other possiblities
addTwoNumbers(4, "6")
addTwoNumbers(5, "A")
addTwoNumbers(7, "Astrak")

const result = addTwoNumbers(3, 5)           //we can store the output in a variable
console.log(result);                         //? undefined?  The function is not returing anything

function add_2_Numbers(number1, number2) {
    console.log("Astrak");                   //Astrak
    
    let resultt = number1 + number2
    return resultt
    console.log("Astrak");                   //After return no line of code will be executed => unreachable code
    
}

const resultt = add_2_Numbers(3, 7)          //Now the function is returning the value, that's why it is possible to store in the variable "resultt".
console.log(resultt);

function add_2_Numberss(number1, number2) {
    return number1 + number2                 //shortcut of using return
}

const output = add_2_Numberss(4, 8)
console.log(output);

function loginUserMessage(username) {
    return`${username} just logged in`
}

loginUserMessage("Astrak")                   //execution done but not output: reason => we never give a command to print
console.log(loginUserMessage("Astrak"));     //Astrak just logged in
console.log(loginUserMessage());