const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values); // Output : undefined
/*
The output is undefined because the forEach() method in JavaScript does not return anything. 
It iterates over each element of the array and applies the provided function to each element, but it doesn't create a new array or return any value.
*/



//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Filter function returns the elements of an array that meet the condition specified in a callback function.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4 // Output : [ 5, 6, 7, 8, 9, 10 ]
// } )

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num) 
    }
} )

console.log(newNums); // Output : [ 5, 6, 7, 8, 9, 10 ]




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History') // Filter function returns the elements of an array that meet the condition specified
// u can use as many nested filter() and maps() us want
// .filter().filter().map()
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History" // Filter function returns the elements of an array that meet the condition specified
})
  console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]

*/

