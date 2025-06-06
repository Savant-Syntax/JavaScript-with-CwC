//array
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);

const myHeros = ["Iron-man", "Spider-man", "Hulk"]  //Anytypes of element can be fit in an array
const Box1 = ["Falcon", 3, 6.88, 40]
console.log(myHeros);
console.log(Box1);

//Elements can be any type
//Collection of mutiple items in a single element
//Resizeable (in Js)
//Accessable by index
//0 base indexing ---> 0,1,2,3,4,5,6...

//Other Declaration method
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2);

//Array Methods

//push => Add value at the end of the array
console.log(myArr);
myArr.push(1, 6);   //can insert mutiple item at once
console.log(myArr);

//pop => Deleted value from the end of the array
console.log(myArr);
myArr.pop();        //one item deletion at a time
myArr.pop();
console.log(myArr);

//unshift => Insert value at the starting of the array
//This increase the workload on system ot shift the other elements according to the new one
myArr.unshift(4);
console.log(myArr);

//shift => Remove value from the starting of the array
//This increase the workload on system ot shift the other elements according to the new one
myArr.shift(4);
console.log(myArr);

//includes => check the value: answer in boolean datatype
console.log(myArr.includes(8));     //fasle
console.log(myArr.includes(3));     //true

console.log(myArr.indexOf(9));      //-1 => It means it doesn't exist
console.log(myArr.indexOf(4));      //4 => index value

//join
const newArr = myArr.join();
console.log(myArr);
console.log(newArr);                //converts array into string
console.log(typeof newArr);         //string

//splice, slice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);     //slice used
console.log(myn1);                  //end value is not included
console.log("B ", myArr);           //original array is not changed

const myn2 = myArr.splice(1, 3);    //splice used
console.log(myn2);                  //end value is included
console.log("C ", myArr);           //original array is changed





