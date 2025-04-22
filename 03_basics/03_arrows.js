const user = {
    username: "Astrak",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);    //"this." it is used for accessing the current context
        console.log(this);      //prints the whole current context of the given object.
        
    }

}

user.welcomeMessage()   //Default value => Astrak
user.username = "Sam"   //Changing the value.
user.welcomeMessage()   //Changed value => Sam
//How did we access the changed value?
//=> this. used to access the current value so when we changed the value the changed value became the current value for the context.

console.log(this);  // {} => empty object, but why? In node it refers to an empty object because now, there is no context inside global object.
