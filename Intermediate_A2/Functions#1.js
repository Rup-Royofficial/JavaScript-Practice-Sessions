
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
    console.log("E");
    console.log("F");
}

// sayMyName , when you call function in this form, you are just referencing the function and not necessarily executing the function
// sayMyName() , when you call the function in this form, the function gets executed

/* 
function addTwoNumbers(number1, number2){ , here number1 and number2 are name of the parameters of the function 
    console.log(number1 + number2);
} 


addTwoNumbers(12,13), here 12,13 are the arguements
*/

function addTwoNumbers(number1, number2){
    return number1 + number2 //, return a value, 
}

const result1 = addTwoNumbers(3, 5)
const result2 = addTwoNumbers(3, "abc")
const result3 = addTwoNumbers(3, '')

/*
Output :    Result1: 8 , 
            Result2: 3abc , 
            Result3: 3


            Here comes the scenario, where you could see that the arguements passed in result2 and result3 are not of the same type, 
            which resulted in the output getting converted to string, 
            here it is the duty of the dev to check the type and form of arguements that are being passed on

            Check if the typeof arguement1 and the typeof arguement2, before doing calculations  
*/



console.log(`Result1: ${result1} , Result2: ${result2} , Result3: ${result3}`);



// here 'abc' is a default name that will be used in case the user doesn't enter any name, during the call of the function
function loginUserMessage(username = "abc"){ 
    if(!username){ // checking if the username is empty, '' results in false, !operator converts it to true
        console.log("PLease enter a username");
        return // after execution of this return statement, the below lines won't get executed
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // here the the function will use 'abc' as the default username 
console.log(loginUserMessage("DEF")) 





/*
The spread operator ( ...variable_name ) is also known as the rest operator, calling it rest or spread operator depends on its usage

function calculateCartPrice(...num1){   
    num1 is the name of the parameter,
    Here the ...operator is a rest operator , 
    basically if you call this function with a series of arguements, 
    then that seires is considered in that ...operator paramter, and it is the input is considered as an array of elements



    return num1
}



suppose in a scenario, there are multiple parameters as well as a rest operator, 
there from the input arguements, 
the intial ones are considered for the initial parameters and the rest are considered for the rest operator

function calculateCartPrice(val1, val2, ...num1){   here as per the function call, val1 will be 200, val2 will be 400, and ...num1 = [500, 2000]
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))


*/
function calculateCartPrice(val1, val2, ...num1){
    return num1 // output : [ 500, 2000 ]
}

console.log(calculateCartPrice(200, 400, 500, 2000))





const user = {
    username: "abc@yahooo.com",
    prices: 999
}

function handleObject(anyobject){ // here the parameter is an object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // you can just pass in an object and then you will be able to use the methods of that input object
}

// handleObject(user) , here you can call the function and pass an Object as an input
handleObject({ // If you don't have any declared objects to pass in the function, you can create a new object onspot while passing it as input  
    username: "Damn",
    price: 599
})




const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // you can pass in an array, that you have already declared before
console.log(returnSecondValue([299, 499, 599, 1099])); // or you can create a new array and pass it as input onspot