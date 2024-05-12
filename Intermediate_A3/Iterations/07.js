const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// u can use as many .map() and .filter()   functions as needed, here the following functions will act upon the result got from the previos function call
const newNums = myNumers
                .map((num) => num * 10 )          // [10,20,30 ...]
                .map( (num) => num + 1)         // [11,21,31 ...]
                .filter( (num) => num >= 40)  // [41, 51,  61, 71,81, 91, 101]

console.log(newNums);