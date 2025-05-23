//Object can be define by literal and constructors
//Here, we gonna learn how to create object from constructors

const tinderUser1 = new Object();
console.log(tinderUser1);    //empty obj => singleton

const tinderUser2 = {}
console.log(tinderUser2);   //empty obj => non-singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

//*Object nesting
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
//optional chaning
//console.log(regularUser.fullname?.userfullname.firstname);

//*object combination
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);      //one large object has the whole other data like an array method

//*Object.assign()
//const obj_3 = Object.assign(obj1, obj2)     //not a proper way
const obj_3 = Object.assign({}, obj1, obj2, obj4)     //proper way => target, sourceS
console.log(obj_3)      //{} => act as target, others => act as source
//If you are not writing {} then the whole value is getting stored in obj1

//spread method
const obj5 = { ...obj1, ...obj2 };      //easy and latest way
console.log(obj5);

console.log(tinderUser);

console.log(Object.keys(tinderUser));       //all keys comes in an array
console.log(Object.values(tinderUser));     //all value comes in an array
console.log(Object.entries(tinderUser));    //all key-value comes in a big array with some separated arrays

//what if the value does exist or not?
console.log(tinderUser.hasOwnProperty('isLoggedIn'))    //true
console.log(tinderUser.hasOwnProperty('name'))          //true
console.log(tinderUser.hasOwnProperty('age'))           //false

//object part2 is completed now

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Astrak"
}


//Destructuring of Object
course.courseInstructor     //basic way to access
const { courseInstructor } = course     //value is extracted
console.log(courseInstructor);          //no need to write whole thing like: course.codeinstructor

const { courseInstructor: crInst } = course     //we can give short names also
console.log(crInst)