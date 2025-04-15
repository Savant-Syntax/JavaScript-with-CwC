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

//pull => Deleted value from the end of the array
console.log(myArr);
myArr.pop();    //one item deletion at a time
myArr.pop();
console.log(myArr);

