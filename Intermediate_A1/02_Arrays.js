const alpha = ["ABC", "DEF", "GHI"]
const numerical = [123,456,789]

// array_name.push() is used to push another array 'within' the initial array, here 'within' is an important word as  the other array will be literally pushed inside the initial array
alpha.push(numerical) // Remember push() adds elements of the new array to the original array, thus the original array is changed
console.log(alpha);  // Output :  [ 'ABC', 'DEF', 'GHI', [ 123, 456, 789 ] ]


console.log(alpha[3][1]); // Output : 456

const alphaNumeric = alpha.concat(numerical) // Output : [ 'ABC', 'DEF', 'GHI', [ 123, 456, 789 ],{==>new added part}  123, 456, 789 ]
console.log(alphaNumeric);


// The immediate Above method (.concat()) can definitely be used to add elements in the array, but the below way is appreciated more
const all_Chars = [...alpha, ...numerical]
console.log(all_Chars); // Output : [ 'ABC', 'DEF', 'GHI', [ 123, 456, 789 ], 123, 456, 789 ]

//Another example of spread operator:
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected


// If trying to use .concat() it would look like this :
/*
let arr1 = [0, 1, 2];
const arr3 = [3, 4, 5];

Append all items from arr2 onto arr1
arr1 = arr1.concat(arr3); //output : [0, 1, 2, 3, 4, 5]]
*/

//If using spread operator, then it would look like this:
/*
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
*/
// For more info , look here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // When you encounter, 1-Depth, 2-depth, orMore_depth arrays like this, you can use the .flat() method , to covert it into a simple  & normal array
const real_another_array = another_array.flat(Infinity) // Ideally U should specifically write the depth of the array you have that you want to convert into a simple array, but u can also use Infinity,
// Btw OG array depth is 2 as [4,5] is the deepest array present inside it
console.log(real_another_array); // Output : [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



console.log(Array.isArray("Ruby")) // .isArray() finds if the input is in the Array variable, false
console.log(Array.from("Ruby")) // .from() converts the given input into array format, Output : [ 'H', 'i', 't', 'e', 's', 'h' ] 
console.log(Array.from({name: "Ruby"})) // interesting, this now doesn't give anything [], because, the .from() function doesn't know which one to convert to array, the key part or the value part
// one has to specify it when inputing objects in the .from()

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3)); // Output :  [ 100, 200, 300 ]
// .of() method generally a new array from a set of input elements
