//Object is not iterable
//let's fix it

const myObject = {
    js: 'javasript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//we have to use "for in loop"
for (const key in myObject) {
    // console.log(key);                           //keys
    // console.log(myObject[key]);                 //values
    // console.log(`${key} shortcut for ${myObject[key]}`);
    
    
    }


//Is for in loop will work on Arrray
const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programming) {
    // console.log(key);                               //keys
    // console.log(programming[key]);               //values
    
}   //yes, it works


//Is for in loop will on map?
const map = new Map
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const key in Map) {
    console.log(key);
    
}
//Output: nothing
//But also no error => Reason: Map is not iterable here