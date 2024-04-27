/*
There is a old JS version and a new JS version:

In default , nowadays, we always get to use the newer version,
but if u want, u can use "use strict" for specifying, more distinctively
*/

"use strict"; // not necessary anymore as in default, we use "use strict"

// alert(3+3) 
// if one tries to use this in nodeJs, then this will generate an error as this will primarily work in the browser
//To make it compatible and work in Node.js, one needs to use proper properties provided by Node for this functionality

// console.log(3 + 3) console.log(3 + 4)
/*

Although ';' is not important in JS, why does the above line, generate an error?
This is technically due to the code readability issues, It is important that the code written is readable by devs,
and writing in this format might create issues, better to properly indent it in the next line,
and use ';' when trying to increase code readability in certain specific situations

 */

console.log(3 + 3)
console.log(3 + 4)
console.log("ABC")

let name = "ABC" // string => ""
let age = 21    // number, other possible similar datatypes inc. (bigint)
let isLoggedIn = true // boolean => true/false
let state;            // undefined => not defined any value, thus datatype of it is undefined
let willPower = null  // null => standalone value, this is a special case, which is used to define a value when it is neither/nor of a data, 
//example: while fetching the temp from a database/server, there can be an error , if I put the a conditional error value to be 0,
//then on encountering error, it will produce 0, which is a form of a temperature itself, so better to use null as it is way more precise and relevant to understand


console.log(typeof name +" "+ typeof age +" "+ typeof isLoggedIn +" "+ typeof state +" "+ typeof willPower);

/*
datetype of "ABC" is String
datetype of 21 is Number
datetype of true/false is Boolean
datetype of undefined is undefined
datetype of null is Object
*/