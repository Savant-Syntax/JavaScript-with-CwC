const marvel_heros = ["Ironman", "Spiderman", "Thor", "Loki"]
const dc_heros = ["Batman", "WonderWoman", "Flash", "Superman"]

//*push
marvel_heros.push(dc_heros);       //Add array inside an array
console.log(marvel_heros);         //Here, dc_heros treated as an element not an array

//To access dc_heros which is inside the marvel_heros
//Basically, It is how to access an array which is inside an array

console.log(marvel_heros[4][1]);    //WonderWoman => 2D array concept

//*concat
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//push work on existing array
//concat combine 2-array and return a new array

