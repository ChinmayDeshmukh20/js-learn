const accountId = 14456
let accountEmail = "chinmay@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"     // this is also the way to declare variable , but should be avoided
let accountState ;   // by default , accountState will be undefined


accountEmail = "asfs@yahoo.com"
accountPassword = "24425"
accountCity="Bengaluru"

//NOTE
//PREFER NOT TO USE VAR ,  USE LET INSTEAD


console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity])