// if

if (true) {
    //code will be executed
}
if (false) {
    //code will not be executed
}

//How we will know the condition is true or false? => By comparison

const isUserloggedIn = true
if (2 == "2") {
    console.log("executed");  
}
if (2 === "2") {
    console.log("executed");  
}

//some operator for comparison => "<, >, <=, >=, ==, !=, ===, !=="
//"=" single equal to use assign value "==" double equal is use to check the value is equal.

const isTempt = 45
if (isTempt <= 50) {
    console.log("temperature is greater that 40");
    
} else {
    console.log("temperature is less that 40");
    
}
console.log("executed");    //no matter the condition satisfied or not

// +++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++
const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);   
}
//console.log(`User power: ${power}`);   //outside the scope it will not work

//short notation
const balance = 1000
if(balance>500) console.log("test");    //this is ok
//if(balance>500) console.log("test"), console.log("test2");  //this is not a good a practice
;

//if-else => for multiple condition
if (balance < 500) {
    console.log("less than 500");
    
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
    
}

//something interesting to use in real life
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInEmail = true

if (userLoggedIn && debitCard) {        //"&&" => AND operator. All condition must be true for making the final outcome true
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInEmail) {      // "||" => OR operator. one true condition is enough to make the final output true
    console.log("User logged in");
    
}