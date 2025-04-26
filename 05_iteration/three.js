//for of loop
// for (const element of object) {
    
// }

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {                                        //object => on which item you are going to do work
    // console.log(num);                                           //num => iteration, arr => object   
}

//example
//for of loop on a string
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
    
}