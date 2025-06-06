const accountID = 12345
let accountName = "mihir"
var accountEmail = "mihir@gmail.com"
accountCity = "Delhi"
let accountState;


// accountID = 123456 // not allowed

accountName = "mihhir"
accountEmail = "mihirrrr@gmail.com"
accountCity = "Deeeelhi"

console.log(accountID);

/*
preffer not to use var
because of issue in block scope and function scope
*/

console.table([accountID,accountName,accountEmail,accountCity,accountState]);