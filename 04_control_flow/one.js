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