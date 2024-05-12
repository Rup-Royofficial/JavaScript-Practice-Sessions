// Reduce function Calls the specified callback function for all the elements in an array. 
// The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// acc  = acc + currentValue

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


//* here 0 at the end of the reduce function is the initial value of the accumulator, u can put any number, you want the accumulator to have in the beginning *

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // this is similar to the above function, just more precise
console.log(myTotal); // Output : 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // 0  initial price of acc, item is each object element of the shoppingCart array
console.log(priceToPay);