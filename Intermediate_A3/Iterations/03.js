// for-of loops

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);  ....[1, 2, 3, 4, 5]
}

const greetings = "Hello world!"
// iterator can be of any name, although better to name it something relevant
for (const greet of greetings) {
    console.log(`Each char is ${greet}`) // every char is  printed:- h, e ,l ...
}




// **********************************************************************************************************************************
// Maps

// maps only register unique elements , and wont store any duplicate elements

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/



for (const [key, value] of map) { // destructing the parameters to refer to the keys and values in a map (which has a resemblence of an object)
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// this will return error as myObject is not iterable
// for (const [key, value] of myObject) { // destructing the parameters to refer to the keys and values in an object
//     console.log(key, ':-', value); 
// }


// So to iterate we have to use this method, here entries returns an array of keys and values
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
}

//another way
for (const key of Object.keys(myObject)) {
    const value = myObject[key];
    console.log(key, ':-', value);
}