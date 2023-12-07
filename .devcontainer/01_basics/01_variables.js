const accountId=144553
let accountEmail="prasannadukhi01@gmail.com"
var accountPassword="Dukhi@123"
accountCity="Jeypore"

//accountId=2 // not allowed

accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="Bengaluru"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

