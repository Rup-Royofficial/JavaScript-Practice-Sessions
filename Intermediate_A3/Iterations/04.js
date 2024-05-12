// for-in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
Output: js shortcut is for javascript
        cpp shortcut is for C++
        rb shortcut is for ruby
        swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]); // Output : js,rb,py,java,cpp
}


// Below won't work, as Maps don't work with for-in loops
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

/*
When you use a for...in loop with a Map object in JavaScript, it doesn't iterate over the key-value pairs as you might expect. 
Instead, it iterates over the keys of the object, but since Map is an instance of an object, it does not behave as you would anticipate.
To iterate over the key-value pairs in a Map, you should use the for...of loop
*/