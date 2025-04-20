//Defining a function
function sayMyName() {
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("R");
    console.log("A");
    console.log("K");
}

sayMyName       //reference => not executable
sayMyName()     //calling => executable

//Adding 2-numbers
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers()     //NaN output => we have no parameters
addTwoNumbers(3, 7)  //10

//some other possiblities
addTwoNumbers(4, "6")
addTwoNumbers(5, "A")
addTwoNumbers(7, "Astrak")
