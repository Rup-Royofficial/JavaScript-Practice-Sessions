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
    [mySym]: "mykey1", // this is how you use Symbols inside objects [name_of_symbol] 
    age: 108,
    location: "Alaska",
    email: "abc@yahoo.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])// this is another way of referencing or using the keys inside an object
console.log(JsUser["full name"]) // for keys , which are larger than two words, you have to use the form of using quotes to make keys "" : ""
console.log(JsUser[mySym]) // This is the way of using symbols which are declared inside the objects

JsUser.email = "abc@chatgpt.com" // This is the way you can make changes to values within the objects

/*
Object.freeze() as the name suggests, freezes an object, which means any changes to that specific object is not possible
Object.freeze(JsUser) has freezed the object JsUser, and the next line will not account any changes
 */ 

JsUser.email = "abc@microsoft.com"
// console.log(JsUser);

// U can initialize an function within a object too, but remember to run this functions like this, u can't just simply call this function like 'JsUser.function', since it is a method now, call has to be like : 'JsUser.function()'
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); // remember the way to call this is 'Object.functionName()'


