const accounId = 1383753
let accountEmail = "astrak@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.log(accounId);
console.log(accountEmail);
console.table([accounId, accountEmail, accountPassword, accountCity]);
