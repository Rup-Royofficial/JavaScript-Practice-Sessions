// const abc = "ABC"
// console.log(abc.);

// const adc = new String("ADB")
// console.log(adc.);
//The above code is used to see the methods available normally and while using a instance of a string object

const name = "ABC"
const repoCount = 20

/*

Below is the old format of displaying or working on strings
  console.log(name + repoCount + " Value"); 
But this format is not accepted now , neither is it appropriate nor is it appreciated, try to avoid it
Rather use the format below instead

*/


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //This is the current format and is appreciated currently

//Another format of declaring and initializing strings :
const str1 = new String("Hello-World-com")
//Now this above format allows us to use various methods/functions available in the String object,{but these are not available in string datatype}, 
//(remember, String's datatype is an object, while string datatype is string)
console.log(typeof str1, typeof name);


/*

The data is stored in the String datatype in somewhat this way:
const name = new String("ABC") , a new space in initialized for the new value/data
Form of storing is similar to an object :

{
    0:'A',
    1:'B',
    2:'C'
}
length: 3
alongwith length, a huge number of methods/functions are provided, which can be used directly

*/

console.log(str1[0]);
console.log(str1.__proto__); //output: {}, this object output contains all the methods/function that can be used with this String datatype
// U don't necessarily need to use __proto__ to use the methods/functions of the String datatype, 
// u have the accessibility of using the methods without using __proto__
// u can write it in a simple manner : str1.length

//The below few lines are self-explanatory
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.charAt(2));
console.log(str1.indexOf('t'));
console.log(str1.indexOf('e'));
console.log(str1.split('-')); // splits the string from the places where there is the character '-', and returns a array, separately containing all the parts of the string, except the '-' 


const newString = str1.substring(0, 4)// output from 0 to the last character before index 4
console.log(newString);



const anotherString = str1.slice(-8, 4) // kinda reverses the string
console.log(anotherString);



const newStringOne = "   ABC    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trims/removes all the white spaces from the string ,output: 'ABC'



const url = "https://google.com/google%20cloudfare"

console.log(url.replace('%20', '-')) // replaces the '%20' in the string with '-' , output : 
console.log(url.includes('sundar')) // returns a boolean value , checking whether the given search value is present or not in the string
