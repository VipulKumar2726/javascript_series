const accountId = 12122
let accountEmail = "kewat123@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"

// accountId = 2   //not allowed


accountEmail = "k@gmail.com"
accountPassword = "2222"
accountCity = "Satna"

console.log(accountId);

/*

Prefer not to use var 
because of issue in block scope and functional scope

*/



console.table([accountId, accountEmail, accountPassword, accountCity ])
