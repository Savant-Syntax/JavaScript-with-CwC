const userEmail = "Astrak.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
    
}

//Basically there are some values we assume that they represent false.
//falsy values
//false, 0, -0, BigIng 0n, "", null, undefined, NaN

//Interesting truthy values
// "0", "false", " ", [], {}, function(){}

//How to check an array is empty or not?
const array = []
if (array.length === 0) {
    console.log("Array is empty");
    
}

//How to check an object is empty or not?
const object = {}
if (object.keys(object).length === 0) {     //we converted our object inot array and then check the length of the array
    console.log("Object is empty");
    
}