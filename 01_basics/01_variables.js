const accountId = 144553
let accountEmail = "ronit@google.com"
var accounPassword = "12345"
accountCity = "Delhi"

// accountId = 2

accountEmail = "hc@hc.com"
accounPassword = "21212121"
accountCity = "Mumbai"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accounPassword, accountCity])

