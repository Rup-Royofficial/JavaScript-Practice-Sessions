// Arrow functions in JS
const user = {
    username: "abc",
    price: 999,

    // this keyword refers to the current relevant context or scope within which code is executing, ( in this case, it is the user object )
    // When used within an object method, this refers to the object itself.
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // Output : abc , welcome to website
        console.log(this); 
        /* 
        Output : {
            username: 'abc',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }

}
// console.log(user.welcomeMessage());
user.welcomeMessage()
user.username = "Ahem!" // Manipulating the data inside the object
user.welcomeMessage() // Output : ...username: "Ahem!"...

console.log(this); // Output : {}

/*
Global Context:
                When you use console.log(this) outside any function or method (i.e., in the global context), 
                it refers to the global object. In a browser environment, the global object is usually the window object.
                Example: JavaScript
                    console.log(this); // Outputs: Window {...} (referring to the global window object)


Inside a Function:
                When you use console.log(this) inside a function, its behavior depends on whether the function is in strict mode or not.
                
            Strict Mode:
                In strict mode, the default binding for this inside a function is undefined.
                Example: JavaScript

                    "use strict"; not necessary to use nowadays, as it is default
                    function myFunction() {
                    console.log(this); // Outputs: undefined
                    }
                    myFunction();



            Non-Strict Mode:
                In non-strict mode, the default binding for this inside a function is the global object (usually window in a browser).
                Example: JavaScript

                    function myFunction() {
                    console.log(this); // Outputs: Window {...} (referring to the global window object)
                    }
                    myFunction();
*/



// function chai(){
//     let username = "def"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "ghi"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "abc"
    console.log(this.username);
}
console.log(chai);

chai()

// If you use a {} in the return part of a function, then it is necessary to user return  
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//Below are the forms of single line return of functions
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "abc", addNum: num1+num2 })

console.log(addTwo(3, 4)) // Output : { username: 'abc', addNum: 7 }


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()