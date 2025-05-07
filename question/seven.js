//? Basic Function

//Questions
// 1. Write a function greetUser that takes a user's name as input and prints a greeting message. If no name is provided, it should print "Hello, Guest!"

function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetUser("Astrak"); 
greetUser();         