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