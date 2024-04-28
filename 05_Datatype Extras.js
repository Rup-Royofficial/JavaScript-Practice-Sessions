// Primarily there are two types of Datatypes in JS : Primitive & Non-Primitive
// Type of val	Result
// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const score = 100 //Don't need to specify the datatype here in JS
const scoreValue = 100.3 //Don't need to specify the datatype here in JS

const isLoggedIn = false //Don't need to specify the datatype here in JS
const outsideTemp = null //Don't need to specify the datatype here in JS, btw here the datatype is Object, you can check using typeof null
let userEmail; // without initialization it's value will be undefined, and the datatype of undefined is undefined

const id = Symbol('123') //This will primarily be used in library etc...
const anotherId = Symbol('123')

console.log(id === anotherId); // output: false, as Symbol makes sure the values are unique in its own way, research for more info

const bigNumber = 3456543576654356754n // U can specify a variable as bigInt by using 'n' at the last of the number/value inside the variable


// Reference (Non primitive)

// Array, Objects, Functions
const alpha = ['ABC', 'DEF', 'DEF'] // form of an array, datatype of array is object

//Below are two forms of Objects 

// u can initialize an object inside a variable, the form is below
const obj = {
    name: 'Roy',
    age: 21
}

//Or u can just initialize & declare an object
{
    school: 'ABC';
    home: 'unknown';
}

//datatype of object is 'object'

//form of a function: 
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);
// datatype of function is function object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// STACK v/s HEAP
// All the Primitive  Datatypes use STACK Memory
let userName = "ABC@gmail.com"
let profileName = userName // we get a copy of the actual value("ABC@gmail.com"), rather than getting reference

profileName  = "DEF@gmail.com" //So now, when we make changes to the variable, 
//it doesn't affect as the intial value was just a copy, and the main value is still intact

console.log(userName);    // ABC@gmail.com
console.log(profileName); // DEF@gmail.com



// Non-Primitive Datatypes use HEAP Memory, here a reference of the actual value is passed thus changes can be made to the actual value
let userOne = {
    name: "XYZ",
    age: 21
}

let userTwo = userOne  // Pass by reference

// userOne => {} <= userTwo

userTwo.name = "Hello world!"  // Changes done to the actual value in Heap Memory

console.log(userOne);  // { name: 'Hello world!', age: 21 }
console.log(userTwo);  // { name: 'Hello world!', age: 21 }