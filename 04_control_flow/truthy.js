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
if (array.length === 0) {                    //array's length = 0 then it an empty array
    console.log("Array is empty");
    
}

//How to check an object is empty or not?
const object = {}
if (Object.keys(object).length === 0) {     //Basically we are converting an object into an array then checking its length
    console.log("Object is empty");
    
}


//Some general interesting things
//false == 0 -> true
//false == "" -> true
//0 == "" -> true


// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10                             //ans =  5               
// val1 = null ?? 10                       //ans =  10           
// val1 = null ?? undefined                //ans =  undefined               
// val1 = undefined ?? 10                  //ans =  10       
// val1 = null ?? undefined ?? 10          //ans =  10       
// val1 = null ?? undefined ?? 10 ?? 15    //ans =  10        
console.log(val1);

//Terninary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");