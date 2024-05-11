const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values  :  false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values :  "0", 'false', " ", [], {}, function(){}



if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // way to check if object is empty 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// Basically if it encounters a null value then it will replace it with the immediate  value provided 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // Output : 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1); // Output : 10

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")