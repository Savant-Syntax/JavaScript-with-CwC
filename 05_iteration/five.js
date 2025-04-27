const coding = ['js', 'ruby', 'java', 'python', 'cpp']
coding.forEach(function (val) {                                 //val can be any name
    // console.log(val);
    
})                                                              //In call back function we donot have to write the name of the function


//with arrow function
coding.forEach((item) => {                                      //item can be anyname
    // console.log(item);
    
})


//++++++++ Interesting +++++++++
function printMe(item) {
    // console.log(item);
    
}

// coding.forEach(printMe);                                        //We are not calling the function we are refering the function


//So can we take anyother parameters too?
coding.forEach((item,index, arr)=> {
    // console.log(item, index, arr);
    
})
//yes we can


//We can access object inside an array
const myCoding = [
    {
        languageName: "javascript",
        langueFileName: "js",
    },
    {
        languageName: "java",
        langueFileName: "java",
    },
    {
        languageName: "python",
        langueFileName: "py",
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})