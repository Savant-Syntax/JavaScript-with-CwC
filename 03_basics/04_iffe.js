// Immediately Invoked Function Expression (IFFE)
//uses: 1. Immediate call, keep the global object free from scope pollution

//Normal way
// function chai() {
//     console.log("DB CONNECTED");
// }
// chai()

//IFFE
(function chai() {
    console.log(`DB CONNECTED`);
})();   //we have to end this line explicitly by using ";" at the end of the code so next line of code will get executed

(function aurcode() {
    console.log(`DB CONNECTED`);
})();

//use iffe in arrow function
(() => {
    console.log(`DB CONNECTED TWO`);
    
})();

//passing argument and parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Astrak");