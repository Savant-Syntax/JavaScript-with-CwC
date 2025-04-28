const coding = ['js', 'ruby', 'java', 'python', 'cpp']
//Can we store those values in a variable?
const values = coding.forEach((item) => {                   //yes
    // console.log(item);
    return item                                             //it return nothing 
})

// console.log(values);                                        //undefined


//filter
//It also takes call-function
//It retruns values
//We have to give it a condition to use it
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNum.filter((num) => num > 4)
// const newNums = myNum.filter((num) => {
//     num > 4
// })                                                           //it will not return anything only a empty array
// const newNums = myNum.filter((num) => {
//     return num > 4
// })                                                           //value return
console.log(newNums);

