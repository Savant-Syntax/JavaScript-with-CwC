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

//*spread
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
//concat ---> adds two things
//spread ---> adds multiple things ---> more useable

//*flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity);    //open every array inside inside the main array
console.log(real_another_array);

//some other method

console.log(Array.isArray("Astrak"));           //false
console.log(Array.from("Astrak"));              //['A', 'S', 'T', 'R', 'A', 'K']
console.log(Array.from({name: "Astrak"}));      //[] => empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  //[100, 200, 300]
