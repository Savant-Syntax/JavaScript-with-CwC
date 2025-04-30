// ? What happens when you use the push method to add an array inside another array?
// When you use the push method to add an array inside another array, the entire array being added is treated as a single element and is appended to the end of the first array. It does not merge the arrays; instead, it nests the second array within the first.

let arr_1 = [1, 2, 3, 4, 5]
let arr_2 = ["Ironman", "Captain America", "Hulk", "Thor"]
//arr_1.push(arr_2)
// console.log(arr_1);

//? How does the concat method differ from the push method when combining arrays?
// combine the given array into a new array
let arr_3 = arr_1.concat(arr_2)
//console.log(arr_3);

//? Explain the difference between concat and the spread operator (...) for combining arrays.

// Concat
// Combines two or more arrays and returns a new array. Does not modify the original arrays. Can be used to merge arrays or add individual elements.

// Spread
// Spreads the elements of one array into another array or a new array. Allows greater flexibility by enabling you to add elements or arrays at any position. Does not modify the original arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray1 = array1.concat(array2);

//console.log(combinedArray1);     // Output: [1, 2, 3, 4, 5, 6]
//console.log(array1);             // Output: [1, 2, 3] (unchanged)
//console.log(array2);             // Output: [4, 5, 6] (unchanged)

const combinedArray2 = [...array1, ...array2];

//console.log(combinedArray2);    // Output: [1, 2, 3, 4, 5, 6]
//console.log(array1);            // Output: [1, 2, 3] (unchanged)
//console.log(array2);            // Output: [4, 5, 6] (unchanged)

//* ++++++++++ Interestiong ++++++++++
const combinedArray = [...array1, "extra", ...array2];      //* Adding something extra is possible
//console.log(combinedArray);     // Output: [1, 2, 3, "extra", 4, 5, 6]
