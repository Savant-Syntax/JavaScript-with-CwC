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
