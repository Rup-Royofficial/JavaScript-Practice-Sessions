//Use const to avoid changing values after initialization
const accountId = 12345
//accountId = 2324 //not possible

let accountName = "ABC"
var accountEmail="ABC@gmail.com"//Using Var to declare variables and initialize values is a pretty old technique, not recommended now
/*
why? 
Cause using var would/might result in scope related issues, so it is recommended to not use it at all, rather use the common and ideal solution : let

All let, var can be modified later
*/
let accountDelete;


accountType = "Guest"
accountName = "DEF"
accountEmail = "DEF@gmail.com"
accountType = "Pro"// not recommended to declare in this fashion, but will still work

console.log(accountId);
console.table([accountName, accountEmail, accountType, accountDelete])


/*
Semicolons doesn't have a whole lot of an importance in JS, dewao jai, abr na dewao jai
*/