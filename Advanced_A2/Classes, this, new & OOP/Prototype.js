// let myName = "UserName     "
// let mychannel = "Error     "

// console.log(myName.trueLength); //creating a custom function that will be automatically be available to the user via prototype


let myHeros = ["thor", "spiderman"]

let meh = {}

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// this is present in the prototype of any object all around
Object.prototype.practicePrototype = function(){
    console.log(`practicePrototype is present in all objects`);
}
// heroPower will have access to practicePrototype by default as well as obj meh(above line:9) will also have access to practicePrototype()


Array.prototype.practicePrototype2 = function(){
    console.log(`practicePrototype2 will be present in the prototype of all array objects`);
}


heroPower.getSpiderPower() // Spidy power is sling
// heroPower.practicePrototype() // practicePrototype is present in all objects
// myHeros.practicePrototype()
// myHeros.practicePrototype2()
// heroPower.practicePrototype2()





// inheritance
//older sybntax
const User = {
    name: "abc",
    email: "abc@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User
Object.setPrototypeOf(TeachingSupport, Teacher)



// modern syntax
let anotherUsername = "Understanding_Prototype     "

// Adding custom user function to the String obj 
String.prototype.trueLength = function(){
    console.log(`${this}`);// here this keyword refers to the specific instance which is calling it, like : anotherUsername, "coffee" ... etc
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"coffee".trueLength()
"iceTea".trueLength()