const accountId = 144553
let accountEmail = "ankit.chaubey@gmail.com"
var accountPassword = "12345"
accountCity       = "Delhi"

let accountState

// accountId = 343423 // not allowed


accountEmail = "abc@gmail.com"
accountPassword = "dsadssd"
accountCity    = "Nainital"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var
because of issue in block and functional scope
*/