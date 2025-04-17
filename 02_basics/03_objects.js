//Objects can be created by 2-ways:
//1. Constructor
//2. Literals

//If obejct is created from
//---constructor---> It forms singleton
//---literals---> It doesn't form singleton

//Object Literals

//const JsUser = {}   //method to create

const JsUser = {
    name: "Astrak",
    "full name": "Savant Syntax",
    age: 18,
    location: "Jaipur",
    email: "astrak@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);   //square bracket method

//console.log(JsUser.full name);    //not valid
console.log(JsUser["full name"]);   //for these string value we have to use the square bracket method



