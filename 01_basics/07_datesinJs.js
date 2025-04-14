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
