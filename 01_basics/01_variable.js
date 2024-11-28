const accountId = 415663;
let accountEmail = "vikash0012@gmail.com";
var accountPassword = "551955";
accountCity = "Jaipur";
let accountState;

accountEmail = "akash@gmail.com";
accountPassword = "5454845";
accountCity = "goa";

/*
prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// console.log(accountEmail);
