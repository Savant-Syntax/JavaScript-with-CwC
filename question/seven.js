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