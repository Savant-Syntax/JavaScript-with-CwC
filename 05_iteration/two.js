//while and do while loop

//while loop
// while (condition) {
    
// }
let index = 0
while (index <= 10) {                                               //intialization
    // console.log(`value of index is ${index}`);
    index = index + 2                                               //termination
}

//example with an array
let myArray = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr = arr + 1                                                   //arr = arr + 1 === shortform ===> arr++
}

//do while loop
// do {
    
// } while (condition);
// let score = 1                                                    //normal case
let score = 11                                                      //feature => implemetation first then check the condition (at first time)
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);