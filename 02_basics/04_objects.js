//object can be define by literal and constructors
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

//object nesting
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
