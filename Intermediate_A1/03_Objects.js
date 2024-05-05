/*
There are two ways to create , declare and initialize object :
1) through constructors, ' Object.create()'
2) through object literals let variable = {}
*/

// singleton is created when you create Objects from a constructor function Object.create()


const mySym = Symbol("key1")


// Remember that when you declare in the below way, then there are this key & value pairs, here, the keys are internally stored or referred as strings 
// Like the name : "Your_Name", is stored as "name" : "Your_Name"
const JsUser = {
    name: "ABC",
    "full name": "ABC DEF",
    [mySym]: "mykey1",
    age: 108,
    location: "Alaska",
    email: "abc@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])// this is another way of referencing or using the keys inside an object
console.log(JsUser["full name"]) // for keys , which are larger than two words, you have to use the form of using quotes to make keys "" : ""
console.log(JsUser[mySym]) // This is the way of using symbols

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


