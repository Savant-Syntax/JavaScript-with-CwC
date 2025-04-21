let a = 10
const b = 20
var c = 30

if (true) {
    let a = 50
    const b = 60
    console.log(a);     //output => 50
    console.log(b);     //output => 60
    console.log(c);     //output => 30
    
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

