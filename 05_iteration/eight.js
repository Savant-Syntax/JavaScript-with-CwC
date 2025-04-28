//reduce

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
//1st iteration of loop => accumulator = initialValue, acculamulator + currentValue (1st element of the array)
//2nd iteration of loop => accumulator (which is intitialValue + currentValue) + initialValue (2nd element of the array)
//3rd and further more iteration of loop => accumulator = accumulator + currentValue

console.log(sumWithInitial);
// Expected output: 10

//Easy example
const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 3)
console.log(myTotal);

//arrow function
const myTotals = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotals);

