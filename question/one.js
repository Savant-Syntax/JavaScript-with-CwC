//? What is the purpose of an array in JavaScript?
// To store multiple items in a single variable with multiple datatypes and manipulation of data can be done by their index value, which starts from 0.

//? Explain the difference between the push and unshift methods.
// unshift => add value at the starting of the array
// shift => remove value from the starting of the array

const myArr_1 = [1, 2, 3, 4, 5, 6, 7]
myArr_1.unshift(8)
//console.log(myArr_1);
myArr_1.shift()
//console.log(myArr_1);

//? What happens when you use the splice method on an array?
// splice is used to add, remove and replace the values of an array.
// After modifiction the old array got changed

const myArr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myArr_2.splice(1, 6)    //remove
// console.log(myArr_2);
myArr_2.splice(1, 0, 2, 3, 4, 5, 6, 7)
// console.log(myArr_2);   //add        0 -> remove nothing
myArr_2.splice(1, 3, "a", "b", "c")
//console.log(myArr_2);   //replace

//? What if I wanted the removed value?
console.log(myArr_2);   //[1. 'a', 'b', 'c', 5, 6, 7, 8, 9, 10]
let removed_arr = myArr_2.splice(1, 3)
console.log(`Removed array's values: ${removed_arr}`);
console.log(myArr_2);

//? How does the slice method differ from splice?
// slice                                           |    splice
// 1. Cuts a portion of an array                   |    1. Perform add, remove, replace operation on the original array
// 2. Original array is remain unchanged           |    2. Original array getting changed after those operations
// 3. Returns the extracted value in a new array   |    3. Returns original array with modifications


let myArr_3 = [1, 2, 3, 4, 5]
let sliced = myArr_3.slice(1, 4)
// console.log(sliced);     //new array
// console.log(myArr_3);    //orginal remain unchanged

let myArr_4 = ['a', 'b', 'c', 'd', 'e']
let spliced = myArr_4.splice(1, 4)
// console.log(spliced);    //extracted portion
// console.log(myArr_4);    //orginal got modified

//? Declare an array named colors with elements "Red", "Blue", and "Green". Access the second element of the array and log it to the console.

let colors = ["Red", "Blue", "Green"]
//console.log(colors[1]);     //Blue


