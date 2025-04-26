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
    console.log(`${key} shortcut for ${myObject[key]}`);
    
    
    }
