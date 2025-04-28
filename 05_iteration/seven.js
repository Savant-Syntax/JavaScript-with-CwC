const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Q1. Add 10 value each element of the given array
// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums);           //map return the value so it is easy to use

//if you open scope the output will be undefined
//for that you have to write the return


//Chaining
//1. Using multiple method in a continuous manner
const newNums = myNumbers
                .map((num) => num * 5)      //its production will pass on the second chain
                .map((num) => num + 1)
                .filter((num) => num >= 40)
                
                
console.log(newNums);
