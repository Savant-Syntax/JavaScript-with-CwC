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
