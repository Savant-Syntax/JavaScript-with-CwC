const marvel_heros = ["Ironman", "Spiderman", "Thor", "Loki"]
const dc_heros = ["Batman", "WonderWoman", "Flash", "Superman"]

marvel_heros.push(dc_heros);       //Add array inside an array
console.log(marvel_heros);         //Here, dc_heros treated as an element not an array

//To access dc_heros which is inside the marvel_heros
//Basically, It is how to access an array which is inside an array

console.log(marvel_heros[4][1]);    //WonderWoman => 2D array concept
