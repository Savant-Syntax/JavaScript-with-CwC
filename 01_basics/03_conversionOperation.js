let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score))

let valueNumber = Number(score)
// console.log(typeof valueNumber)
// console.log(valueNumber)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = "Astrak"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)


// 1 =>> true; 0 =>> false
// "" => false
// "Astrak" => true


let somenumber = 33

let stringNumber = String(somenumber)
// console.log(typeof stringNumber)
// console.log(stringNumber)


// ************************* Operators ************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);   // add  => 4
// console.log(2-2);   // substract    => 0
//console.log(2*2);   // multiple    => 4
//console.log(2/2);   // divide   => 1
//console.log(2**3);  // power    => 8
//console.log(2%3);   // modulus => remainder => ans = 2 => 3 cannot divide 2 without going into decimal and here we don't use the decimal conversion.

let str1 = "hello"
let str2 = " Astrak"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);   // expected => 14; real => 122
console.log(1 + 2 + "2");   // expected => 122; real => 32
// Reason => If the first datatype is string it will treate all of these as string
// Reason => If the string is at the last then the first operation will be performed normally after that it will treated as string



