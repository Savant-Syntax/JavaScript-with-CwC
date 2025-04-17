//Objects can be created by 2-ways:
//1. Constructor
//2. Literals

//If obejct is created from
//---constructor---> It forms singleton
//---literals---> It doesn't form singleton

//Object Literals

//const JsUser = {}   //method to create

const mySym = Symbol("key1")

const JsUser = {
    name: "Astrak",
    "full name": "Savant Syntax",
    age: 18,
    location: "Jaipur",
    email: "astrak@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"],
    // mySym: "mykkey1"
    [mySym]: "mykey1"
}

console.log(JsUser.email);
console.log(JsUser["email"]);   //square bracket method

//console.log(JsUser.full name);    //not valid
console.log(JsUser["full name"]);   //for these string value we have to use the square bracket method

//console.log(JsUser.mySym);      //mykey1
//console.log(typeof JsUser.mySym);   //datatype is string not symbbol ---> wrong 

console.log(JsUser[mySym]); //correct way to use symbol as key-value pair in on abject

JsUser.email = "astrak@chatgpt.com"     //we can change value
console.log(JsUser.email);





