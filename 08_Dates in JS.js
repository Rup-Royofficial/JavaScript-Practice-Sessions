// Dates

let myDate = new Date()  // declaration of myDate and creating a new instance of Date() object
console.log(myDate);  // output : 2024-05-01T16:13:40.461Z, here 05(month) , 01(day)
console.log(myDate.toString()); // output : Wed May 01 2024 21:43:40 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // output : Wed May 01 2024, only dates will be included, while time will be excluded
console.log(myDate.toLocaleString()); // output : 5/1/2024, 9:43:40 PM, here localestring is used to convert the date value to form generally used by current / specified locale 
console.log(typeof myDate); // output : object

let myCreatedDate1 = new Date(2023, 0, 23) // Output : 1/23/2023, 12:00:00 AM, here  0 is given as input, which is the monthIndex, and since considered as an array, counting starts from 0,(which is month 1(jan)), 
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)  // Output : 1/23/2023, 5:03:00 AM , here 5 is hours input and 3 is the minutes input
let myCreatedDate3 = new Date("2023-01-14")  // Output : 1/14/2023, 5:30:00 AM, since the input is in the format of a string,
// thus, here 01 is considered as the month unlike above, when a specialized input was given which cated as the index for months 


let myCreatedDate4 = new Date("01-14-2023") // Output : 1/14/2023, 12:00:00 AM
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); // Output : 1714580696978

console.log(myCreatedDate1.getTime()); // Output : 1674412200000
// above the outputs are given in milliseconds Form, and are used for comparisons in websites where there are necessities for comparison of TimeRanges, like bookings websites etc


console.log(Math.floor(Date.now()/1000));// Output : 1714580696, converts from milliseconds to seconds

let newDate = new Date()
console.log(newDate); // Output : 2024-05-01T16:27:24.695Z, gives a whole value
console.log(newDate.getMonth() + 1); // Output : 5, remember unless a specified string input is given for month, 
//it will be generated in the form of a indexedArray, so counts will start from 0, so it is ideal to +1 in the output, to avoid errors


console.log(newDate.getDay()); // Output : 3, gets the day of the week using local time

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))
// Output: Wednesday , and today is actually wednesday

// Basically localeString a input er format eta('', { weekday: "long", ... add more as per usage, refer MDN Docs }), that how do you want to print the value
