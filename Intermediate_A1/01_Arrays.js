const myArr = [7,6,5,4,3,2,1]
const myAlphaStrings = ["ABC", "DEF"]

const myArr2 = new Array(1, 2, 3, 4) // no need to include braces, will be added automatically, here we are using the a new instance of the Array object
console.log(myArr[1]);

// Array methods

myArr.push(6)
console.log(myArr); // Output : [ 7, 6, 5, 4, 3, 2, 1, 6 ]
// myArr.push() will add the input element as the last element in the array 
// myArr.pop() deletes the last element in the array
myArr.pop()
console.log(myArr); // Output : [ 7, 6, 5, 4, 3, 2, 1 ]


// Unshift operation is generally used in rare & special cases
// myArr.unshift(9) inserts the input element in the start of the array, 
// myArr.shift(), removes the first element of the array
myArr.unshift(9)
console.log(myArr) // Output : [ 9, 7, 6, 5, 4, 3, 2, 1 ]
myArr.shift()
console.log(myArr)  // Output : [ 7, 6, 5, 4, 3, 2, 1 ]


// console.log(myArr.includes(9)) returns boolean value considering whether the input element is present in the array or not 
// console.log(myArr.indexOf(3)); returns the index of the input element, { on absence of the input element in the array, it returns -1 }
console.log(myArr.includes(9)) // Output : false
console.log(myArr.indexOf(3)); // Output : 4
console.log(myArr.indexOf(21)); // Output : -1


// const newArr = myArr.join() joins 'myArr' named array in this variable, and the type in which it is stored in this variable is 'string'
const newArr = myArr.join()
console.log(myArr);   // Output : [ 7, 6, 5, 4, 3, 2, 1 ]  Since it is a array output is in the form of an array 
console.log(newArr);  // Output : 7,6,5,4,3,2,1 ,          Since the data is stored in the form of an 'string' , thus output is in the form of a 'string'  

// slice, splice


/*
Slice is similar to substring function in Strings, here two inputs are required, one is the index from which the string will be sliced, and then the index before which it should be cut
Splice on the other hand, is pretty similar except two major differences:
1) Splice also required two input, one is the index from which the string will be sliced, other is the index to which it will be sliced 
2) After splicing the actual array is reduced as the elements that are spliced are removed from the array, and the remaining elements are left within the actual array
*/
console.log("A ", myArr);                  // Output : [ 7, 6, 5, 4, 3, 2, 1 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);                         // Output : [ 6, 5 ]
console.log("B ", myArr);                  // Output : [ 7, 6, 5, 4, 3, 2, 1 ]


const myn2 = myArr.splice(1, 3)
console.log(myn2);                         // Output : [ 6, 5, 4 ]
console.log("C ", myArr);                  // Output : [ 7, 3, 2, 1 ]

