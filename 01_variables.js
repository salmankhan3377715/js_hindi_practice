const accountId=122335
let accountEmail="brand@google.com"
var accountPassword="123456"
accountCity="karachi"
let accountDate;
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail="web@google.com"
accountPassword="000256"
accountCity="lahore"

//accountId=5 //not allowed

console.log(accountId);
console.table([accountId,accountEmail,accountCity,accountPassword,accountDate])
