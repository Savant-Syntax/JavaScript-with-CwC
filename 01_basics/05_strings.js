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
console.log(gameName.charAt(2));

//Position checking by character
console.log(gameName.indexOf('r'));

