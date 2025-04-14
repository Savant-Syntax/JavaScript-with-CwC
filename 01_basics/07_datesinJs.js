//Date
let myDate = new Date()
console.log(myDate);    //not readable format
console.log(myDate.toString());     //Indian Standard Time

//Homework
console.log(myDate.toDateString());     //Mon Apr 14 2025
console.log(myDate.toISOString());      //2025-04-14T14:56:04.688z
console.log(myDate.toJSON());       //2025-04-14T14:56:04.688z
console.log(myDate.toLocaleDateString());   //14/4/2025
console.log(myDate.toLocaleString());       //14/4/2025, 8:26:04 pm

console.log(typeof myDate);     //object


//Date Declaration
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString());
//In Js month starts from 0 (in single digit only)

let myCreatedDate_2 = new Date(2023, 0, 23, 5, 3)   //Now we can add time also
console.log(myCreatedDate_2.toLocaleString());  // 23/1/2023 5:03:00 am