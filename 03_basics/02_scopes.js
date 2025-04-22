let a = 10
const b = 20
var c = 30

if (true) {
    let a = 50
    const b = 60
    console.log("Inner: ", a);     //output => 50
    console.log("Inner: ", b);     //output => 60
    console.log("Inner: ", c);     //output => 30
    
}

console.log(a);     //output => 10
console.log(b);     //output => 20
console.log(c);     //output => 30

//What is scope? => {} this is called a scope, the code inside it only valid inside it.
//According to those previous outputs
//let and const are scope based but var is not
//This things creates bugs in code bases when on a single project multiple person works together. And they assign same variable for multiple purpose.
//var only holds the last updated value. No matter where it has been changed

//for let a = 50. Inside the {} is block scope.
//outside the {} it is global scope



//+++++++++++++++Nested Scope++++++++++++++++//

function one() {
    const username = "Astrak"
    console.log("one() is executed");
    
    function two() {
        const website = "youtube"
        console.log(username);
        console.log("two() is executed"); 
        
    }
    // console.log(website);    //Error
    two()
    
}
one()

//Both function is executed but inner function can retrive data from outer function but outer function cannot retrive data from inner function.
//Reason: The outer function act as global scope for the inner function.

//practice question: To find error

if (true) {
    const username = "Astrak"
    if (username === "Astrak") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);    //Error
    
}
// console.log(username);   //Error

// ++++++++++++++++++++++ Interesting ++++++++++++++++++++ //

//function declaration and call
function addOne(num1) {
    return(num1 + 1)
}
console.log(addOne(5));

