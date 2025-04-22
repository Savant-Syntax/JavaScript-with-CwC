const user = {
    username: "Astrak",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);    //"this." it is used for accessing the current context
    }

}

user.welcomeMessage()