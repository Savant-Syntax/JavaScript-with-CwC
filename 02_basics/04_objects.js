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