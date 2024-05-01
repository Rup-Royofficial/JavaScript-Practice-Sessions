// General way to declare and initialize numbers
const num = 400
console.log(num);

// Creating a number object to initialize a value
const num1 = new Number(100)
const num2 = num1
num2.toFixed(3) //Just like String object, has many methods/functions that can be usable, there are a few similar functions present in Number object too
// toFixed() returns the value w.r.t 3 decimal places 

console.log(num2)              // Output : [Number: 100], since it is a form of Number object, so this is the way it is represented
console.log(num1.toFixed(3));  // Output : 100.000


//To Precison() function rounds off the number w.r.t to the numbers present after the amount of digits given as input
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));  // Output : 123.9

console.log(otherNumber.toPrecision(3));  // Output : 124

console.log(otherNumber.toPrecision(2));  // Output : 1.2e+2

console.log(otherNumber.toPrecision(1));  // Output : 1e+2

console.log(otherNumber.toPrecision(5));  // Output : 123.90

console.log(otherNumber.toPrecision(7));  // Output : 123.8966



// to localeString() helps in reading big numbers as it provides ',' within the numbers , making it more readable
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // In default the US number  format  is displayed : 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // here indian number format is displayed :  10,00,000 



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);             // Output :  Object [Math] {}
console.log(Math.abs(-4));             // Output : 4
console.log(Math.round(4.6));             // Output : 5
console.log(Math.ceil(4.2));             // Output : 5  , ceil gives an output which is the highest possible
console.log(Math.floor(4.9));             // Output : 4, floor gives an output which is the lowest possible
console.log(Math.min(4, 3, 6, 8));             // Output : 3
console.log(Math.max(4, 3, 6, 8));             // Output : 8

console.log(Math.random());             // Output : 0.4082745231689904, this will be randome , as the method name suggests
console.log((Math.random()*10) + 1); // This is done as randome always generates random numbers between 0 to 1, so multiplying by 10 will help due rounding off
// + 1 is added in the rare chance of 0 being generated , then despite 0 being generated, this number(1) will make the output greater than 0
console.log(Math.floor(Math.random()*10) + 1); // output : 2 , 




//Range from min to max , find random
const min = 10
const max = 20

/*
Math.random() * (max - min + 1) will generate a random that will be can be 0 ,1, 2,3... now these are lower than min, which is why, min is added later, so that even
when the random number generated is below minimum, 'min' will be added and thus it won't go beyond range

Math floor is used to round it off to a whole number rather than a decimal
*/
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
