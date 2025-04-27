const coding = ['js', 'ruby', 'java', 'python', 'cpp']
coding.forEach(function (val) {                                 //val can be any name
    console.log(val);
    
})                                                              //In call back function we donot have to write the name of the function


//with arrow function
coding.forEach((item) => {                                      //item can be anyname
    console.log(item);
    
})