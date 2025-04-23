// Immediately Invoked Function Expression (IFFE)
//uses: 1. Immediate call, keep the global object free from scope pollution

//Normal way
// function chai() {
//     console.log("DB CONNECTED");
// }
// chai()

//IFFE
(function chai() {
    console.log("DB CONNECTED");
})()