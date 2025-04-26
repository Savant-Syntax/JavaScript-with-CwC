//for of loop
// for (const element of object) {
    
// }

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {                                        //object => on which item you are going to do work
    // console.log(num);                                        //num => iteration, arr => object   
}

//example
//for of loop on a string
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
    
}

//maps
const map = new Map                                             //maps holds key value pairs and remembers the original insertion order of the keys                           
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('IN', 'India')                                          //unique value only and maintain the order
// console.log(map);


//loop on map
for (const key of map) {
    // console.log(key);                                           //same previous output
    
}

//if you want something else
for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Clash of Clans',
    'game3': 'Marvel Rivals',
    'game4': 'Shadow Fight 2',
    'game5': 'Temple Run',
    'game6': 'Angry Birds',
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);                                  //Error : Object is not iterable
}