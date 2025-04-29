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
myArr_2.splice(1, 2, 2, 3, 4, 5, 6, 7)
//console.log(myArr_2);   //add
myArr_2.splice(1, 3, "a", "b", "c")
//console.log(myArr_2);   //replace

