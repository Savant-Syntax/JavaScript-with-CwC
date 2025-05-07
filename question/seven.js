//? Basic Function

//Questions
// 1. Write a function greetUser that takes a user's name as input and prints a greeting message. If no name is provided, it should print "Hello, Guest!"

function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

//greetUser("Astrak");
//greetUser();


//2. Create a function subtractNumbers that takes two numbers as arguments and returns their difference. Handle cases where the arguments are not numbers.

function subtractNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Both arguments must be numbers.";
    }
    return a - b;
}

// console.log(subtractNumbers(10, 5));
// console.log(subtractNumbers(7, "3"));
// console.log(subtractNumbers(20));


//3. Write a function printPattern that prints a pattern like:
// *
// **
// ***
// ****
// *****

function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

// printPattern(5);


//? Parameter and Return values

// Modify the function addTwoNumbers to check if both parameters are numbers before adding them. If not, return an error message.

function addTwoNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Both arguments must be numbers.";
    }
    return a + b;
}

// console.log(addTwoNumbers(5, 10));
// console.log(addTwoNumbers(5, "10"));
// console.log(addTwoNumbers(5));


// Write a function multiplyNumbers that multiplies all the numbers passed as arguments using the rest operator.

function multiplyNumbers(...numbers) {
    if (numbers.some(num => typeof num !== "number")) {
        return "All arguments must be numbers.";
    }
    return numbers.reduce((product, num) => product * num, 1);
}

// Example usage:
// console.log(multiplyNumbers(2, 3, 4));  
// console.log(multiplyNumbers(5, 10));   
// console.log(multiplyNumbers(2, "3"));   
// console.log(multiplyNumbers());        