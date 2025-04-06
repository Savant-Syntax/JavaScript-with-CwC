//Basic comparision

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


//Tricky comparision

console.log("2" > 1);   //true => converted string to number automatically,
console.log("02" > 1);  //true => converted string to number automatically,


console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true => converted into zero and then performed the comparision


console.log(undefined == 0);    //false => undefined means empty so we can not cmopare a empty thing to something
console.log(undefined > 0);     //false => undefined means empty so we can not cmopare a empty thing to something
console.log(undefined < 0);     //false => undefined means empty so we can not cmopare a empty thing to something


console.log("2" === 1);     //false => "===" it checks the datatype and value both
console.log("2" !== 2);     //true => "!==" it gives opposite output of "==="

