const score = 400
console.log(score); //automatically detect it is a number

const balance = new Number(100)
console.log(balance);   //specifically we defined the datatype is number

console.log(balance.toString());    //coverting number into string
console.log(typeof (balance));      //datatype is object
console.log(balance.toFixed(2));    //100.00 => to avoid unneccessary output
console.log(balance.toString().length);     //3

const otherNumber = 123.567
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000000
console.log(hundreds.toLocaleString());     //Expected => American stqndard: but they changed so it is now in Indian standard
console.log(hundreds.toLocaleString('en-AM'));     //Now it will follow the American standard


//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-69)); //Absolute value => Change -ve value to +ve value, +ve remains
console.log(Math.round(68.79345868));   //Round off 
console.log(Math.ceil(4.2));    //Ceiling value => Upper value: 4.1, 4.2 => 5
console.log(Math.floor(4.9));   //Floor value => Lower value: 4.9, 4.8 => 4
console.log(Math.min(4, 6, 8, 10, 2, 3));   //Min value => 2
console.log(Math.max(4, 6, 8, 10, 2, 3));   //Min value => 10

console.log(Math.random()); //value always lie between 0 and 1
console.log(Math.random()*10);  //for getting value above decimal
console.log((Math.random()*10)+1);  //correct way

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //We want value which has min value is 10 
//floor and ceil method we can use with random method

 

