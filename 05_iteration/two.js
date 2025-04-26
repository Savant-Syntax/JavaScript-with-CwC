//while and do while loop

//while loop
// while (condition) {
    
// }
let index = 0
while (index <= 10) {                                               //intialization
    console.log(`value of index is ${index}`);
    index = index + 2                                               //termination
}

//example with an array
let myArray = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1                                                   //arr = arr + 1 === shortform ===> arr++
}