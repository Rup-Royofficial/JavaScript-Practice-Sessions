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

