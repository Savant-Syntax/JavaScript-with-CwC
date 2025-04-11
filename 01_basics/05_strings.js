// We can denote string by using '' or ""

const name = "Astrak"   //Declaration method1
const repoCount = 50

//Concat
console.log(name + repoCount + "Value"); //you can add existing things and also can add new things
// Astrak50Value

//New syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Declaration method 2
const gameName = new String('Astrak')    //check the output in console of browser

//length
console.log(gameName.length);   //6

//upperCase
console.log(gameName.toUpperCase());    //ASTRAK

//Position checking by key value/index value
console.log(gameName.charAt(2));        //t

//Position checking by character
console.log(gameName.indexOf('r'));     //3

//Substring 
const newString = gameName.substring(0, 4);
console.log(newString);     //Astr
//last value is not included
//-ve value doesn't work here. If you put here it will use as 0

//slice
const gameName2 = "My friend is a good person"
const anotherString = gameName2.slice(3, 9);
console.log(anotherString);     //friend
//-ve values are also acceptable

//trim
const newStringOne = "   astrak   "
console.log(newStringOne);      //   astrak
console.log(newStringOne.trim());   //astrak

//replace
const url = "https://astrak.com/savant%20syntax"
console.log(url.replace('%20', '-'));   //https://astrak.com/savant-syntax



