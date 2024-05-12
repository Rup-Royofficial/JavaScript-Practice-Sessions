const coding = ["js", "ruby", "java", "python", "cpp"]


//below are three forms of using forEach loops, you just need to make sure that a function is necessary for this loop,
coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//forEach provides you this three default parameters, that can be used : 1) item, which is the element, 2) index of this specific item/element, 3) the whole array itself
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
/*
Output : 
            js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
            cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

//!++++++++++++++++++++++++=+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

/*
Believe this is pretty self-explanatory, as the coding array contains objects elements and using the forEach function u r calling each object one by one
Now if you want to display something specific to the object, then use the '.' method to refer to that key within that specific object ELEMENT 
*/
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

/*
Output : 
javascript
java
python
*/