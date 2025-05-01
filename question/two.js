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

//? What is the purpose of the flat method in arrays? How does the Infinity argument affect it?
//flat => simplify the complex nested array to one level down. depth = 1
//infinity => In flat the depth is set at infinity it simplify all level of complex nested array

const arrayOne = [1, 2, 3, 4, 5, [6, 7, [8, 9, [10]]]]
const arrayTwo = [1, 2, 3, 4, 5, [6, 7, [8, 9, [10]]]]

const flat = arrayOne.flat()
// console.log(flat);

const infinity = (arrayTwo.flat(Infinity));
// console.log(infinity);

//? What is the difference between Array.isArray() and Array.from()?
// Arrow.isArray() => checks the given value is an array or not. Output is a boolean form.
// Arrow.fromArray() => creates a new array from a pre-existing value.

// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray('hello'));  // false
// console.log(Array.isArray({}));       // false

// console.log(Array.from('hello'));          // ['h', 'e', 'l', 'l', 'o']
// console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]
// Alternative
// console.log(Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (x) {
//    return x * 2
// }));

const set = new Set([1, 2, 3]);
// console.log(Array.from(set));             // [1, 2, 3]

//Questions

//? Declare two arrays, teamA = ["Player1", "Player2"] and teamB = ["Player3", "Player4"]. Use the push method to add teamB into teamA. Access and log the second player of teamB from the nested array.
const teamA = ["Player1", "Player2"]
const teamB = ["Player3", "Player4"]

teamA.push(teamB)
// console.log(teamA[2][1]);       //2D array concept

//? Create two arrays: fruits = ["Apple", "Banana"] and vegetables = ["Carrot", "Tomato"]. Combine them using: The concat method, The spread operator.
const fruits = ["Apples", "Banana"]
const vegetables = ["Carrot", "Tomato"]

// console.log(fruits.concat(vegetables));
//Alternative
const eatablesConcat = fruits.concat(vegetables)
// console.log(eatablesConcat);


const eatablesSpread = [...fruits, ...vegetables]
// console.log(eatablesSpread);

// Noticed: We can concat fruits and vegetables into fruits but cannot spread fruits and vegetables into fruits. We need a new variable to store their value while using spread method.

//? Declare an array nested = [1, [2, [3, [4]]]]. Use the flat method with Infinity to create a flat array. Log the result.
const nested = [1, [2, [3, [4]]]]
// console.log(nested.flat());             //[1, [2, [3, [4]]]]
// console.log(nested.flat(Infinity));     //[1, 2, 3, 4]

//? Check if "Hello" is an array using Array.isArray(). Log the result. Convert the string "World" into an array of characters using Array.from(). Log the result. Create an array with the numbers 5, 10, and 15 using Array.of(). Log the array.
console.log(Array.isArray("Hello"));       // false
console.log(Array.from("World"));          // ['W', 'o', 'r', 'l', 'd']
console.log(Array.of(5, 10, 15));          // [5, 10, 15]


