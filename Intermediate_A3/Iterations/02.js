// Basic while loop
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}



let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


// Basic do-while loop
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

/*
In a do-while loop, first the do part is executed, then the condition in the while loop is checked, then again the do part is executed and this goes on until the condition is  false
!Remember in do while loop the first do part will be executed atleast once in any condition
*/