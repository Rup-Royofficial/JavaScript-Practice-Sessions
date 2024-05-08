//Scope of a variable is the life span or the boundary within which it lives/is_valid, scope is defined by braces '{}'

//var c = 300 , var is an exception in JS, which doesn't really follow the conventions of scopes and thus contributes to errors,
// which is why it is better to avoid var and appreciated too
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a); // Output : 10
    
}



console.log(a); // Output : 300
// console.log(b);
// console.log(c);



//The below function codes are pretty self explanatory
function one(){
    const username = "abc"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); , if you let this line to be executed, then it will lead to an error due to the scope of website being inside two()
     two()
}

// one()

if (true) {
    const username = "abc"
    if (username === "abc") {
        const website = " @protonmail.com"
        console.log(username + website);
    }
    // console.log(website); // this line will lead to an error due to the scope of website being inside the if statement braces
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

/*
If you have declared a function , then you can call the function from anywhere you want, 
you may call it above the line where the function is declared or you can call it below the function declaration

But in a scenario like this  : , 
const addTwo = function(num){
    return num + 2
}

where you are storing the function in a variable, you cannot call the function before its declaration as it will lead to error
You need to call it after function declaration

*/

console.log(addone(5)) // Output  : 6
function addone(num){
    return num + 1
}
console.log(addone(6)) // Output  : 7



console.log(addTwo(9)) // leads to error
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(9)) // Output : 11