let userName = "ABC"

console.log(typeof(userName));
console.log(typeof userName);

//Both of the above methods are available

let valNumber = Number(userName); 
/*
Here, technically the variable username has been converted to a datatype of number,
which is unusual as "ABC" doesn't have a numeric representation,
here rather it is converted to NaN(Not a Number), which is of datatype Number 
*/
console.log(valNumber);
console.log(typeof valNumber); 


// "33" => 33,   value when converted to Number, here datatype is number
// "33abc" => NaN , value when converted to Number, here datatype is number
//  true => 1; false => 0, similaryly u can convert Boolean value to numbers
// 1 => true; 0 => false
// "" => false
// "ABC" => true

let num = "3"
let convertNum = Number(num) //Just like Number, there are String , Boolean etc...
console.log("Converting num inside string to num and checking type          " + "{ " + convertNum + " " + typeof convertNum + " }");


let checkBoolean1 = 1
let convertBoolean1 = Boolean(checkBoolean1)
console.log("Converting num to Bool and checking type                     " + "{ " + convertBoolean1 + " " + typeof convertBoolean1 + " }");


let checkBoolean2 = 0
let convertBoolean2 = Boolean(checkBoolean2)
console.log("Converting num to Bool and checking type                     " + "{ " + convertBoolean2 + " " + typeof convertBoolean2 + " }");


let checkBoolean3 = ""// empty is equivalent to  false
let convertBoolean3 = Boolean(checkBoolean3)
console.log("Converting empty string to Bool and checking type            " + "{ " + convertBoolean3 + " " + typeof convertBoolean3 + " }");


let checkBoolean4 = "ABC" // non empty string is equivalent to true
let convertBoolean4 = Boolean(checkBoolean4)
console.log("Converting non-empty string to Bool and checking type        " + "{ " + convertBoolean4 + " " + typeof convertBoolean4 + " }");



let anyNumber = 21
let convertString = String(anyNumber)// here printing the value in terminal won't show that it has been converted to string, but u can check it's datatype using typeof
console.log("Converting number to string                                    " + "{ " + convertString + " " + typeof convertString + " }")



//Operatons

let value = 5
let negValue = -value //converts value to negative value
console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hi"
let str2 = " hello"

console.log(str1 + str2)
console.log(1+2);
console.log("2" + 2); //Basically , if string is encountered first, then the whole output will be considered as a string
console.log(2 + "2"); //But is this case , initially there isn't a string(number in this case), so the output is initially considered as a number, 
//and then when it encounters a string, considers it as a string 

console.log("2" + 3 + 3); // In this case, string is encountered first, then the whole output will be considered as a string (and any subsequent numerical calculations are considered as strings too)
console.log(2 + 3 + "3"); // In this case, Initially , string isn't encountered rather we encounter a numerical calculation , so the calculation is executed and after it we encounter a string, so the output is then considered as a string
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



console.log(true);
console.log(+true);  // considered as numerical val due to '+' being present infront of Boolean
console.log(+""); //Same as above, considered as numerical val due to '+' being present infront of Boolean, ""=>false , "non-empty-string"=>true





let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


/* 

If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid assignment targets). ++x itself evaluates to a value, not a reference, 
so you cannot chain multiple increment operators together.

*/

// Examples
// Postfix increment

let x1 = 3;
const y1 = x1++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


// Prefix increment
let x3 = 3;
const y3 = ++x3;
// x is 4; y is 4

let x4 = 3n;
const y4 = ++x4;
// x2 is 4n; y2 is 4n


let abc = 3n
let def = 3n


let abc1 = abc++;
let def1 = ++def;
console.log(abc1);
console.log(def1);


let a1 = 5
console.log(a1++);
console.log(a1);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment#try_it