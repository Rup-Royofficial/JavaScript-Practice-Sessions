// here the primary discussion will beon how, singleton objects are created etc.

// const tinderUser = new Object(), way to create a new instance of Object called tinderUser, this is a singleton object

const tinderUser = {} // this is object literal

/*
Difference between singleton object and object literal is not really that significant,
 its more like how do you declare and initialize  it

 Both  (const tinderUser = {}) === (const tinderUser = new Object())
*/


// You can directly initialize values within a Object or you can initialize values to keys inside Object in the below way
tinderUser.id = "123abc" // this will make the object look like ; tinderUser = { id: "123abc" }
tinderUser.name = "Sammy" // this will make the object look like ; tinderUser = { id: "123abc", name: "Sammy" }
tinderUser.isLoggedIn = false // this will make the object look like ; tinderUser = { id: "123abc", name: "Sammy", isLoggedIn: false }

// console.log(tinderUser);


// Nested Objects or objects within objects is a pretty common thing, you can nest as many Objects you want within a Object
const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ABC",
            lastname: "def",
            username : {
                middlename : "@"
            }
        }
    }
}
regularUser.fullname.userfullname.username.alias = `${regularUser.fullname.userfullname.firstname} + ${regularUser.fullname.userfullname.username.middlename} +${regularUser.fullname.userfullname.lastname}`
regularUser.fullname.userfullname.username.renderedName = `${regularUser.fullname.userfullname.firstname + regularUser.fullname.userfullname.username.middlename + regularUser.fullname.userfullname.lastname}`
console.log(regularUser.fullname); 
/*
{
    userfullname: {
      firstname: 'ABC',
      lastname: 'def',
      username: { 
        middlename: '@', 
        alias: 'ABC + @ +def', 
        renderedName: 'ABC@def' 
      }
    }
}

*/

// Add all the keys and values to a new object or create a new object with the keys and values of a few other objects:
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

/* 
const obj3 = { obj1, obj2 } 
Output : 
{ 
    obj1: { '1': 'a', '2': 'b' }, 
    obj2: { '3': 'a', '4': 'b' } 
}

So, you can see that although technically , the objects are added in the Obj3, but the objects are not added in the way you would want it to : { keys : values }

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------------------- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj3 = Object.assign({}, obj1, obj2, obj4), this is form which you can use to get the output, in the form { keys :values }, 
Output : { 
            '1': 'a', 
            '2': 'b', 
            '3': 'a', 
            '4': 'b', 
            '5': 'a', 
            '6': 'b' 
        }

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------------------- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj3 = {...obj1, ...obj2}, using spread operator , is another way you can set the keys and values exactly similar to the above way
{ 
    '1': 'a', 
    '2': 'b', 
    '3': 'a', 
    '4': 'b', 
    '5': 'a', 
    '6': 'b' 
}

*/


const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
]

console.log(users[1].email)
// .map() can be used to access the values of an array of objects, ( generally fetched from an API )

console.log(tinderUser);                   // Output : { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser));      
// Returns the names of the enumerable string properties and methods of an object,  
//   [ 'id', 'name', 'isLoggedIn' ]


console.log(Object.values(tinderUser));    
// Returns an array of values of the enumerable properties of an object,   
//   [ '123abc', 'Sammy', false ]


console.log(Object.entries(tinderUser));   
// Returns an array of key/values of the enumerable properties of an object,  
//   [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Return boolean as per the conditional method



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ------------------------- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const course = {
    coursename: "Buy this course to get a million dollar job#absolute_domination #notfakeguru #notshowoff",
    price: "$99,999",
    courseInstructor: "Every other youtube guy"
}

// 
/*
If you want to use  'course.courseInstructor' in various areas in the file, you might be using it as console.log(course.courseInstructor) or etc
Now, although this isn't really a problem, but the quality of the code could be better, if you use the below method :

const {any_method_name_within_the_object} = name_of_object_declared_already
Ex : const {courseInstructor} = course
courseInstructor is a method nameof the object course,  course is the name of the object declared above , line : 140


**You can also declare the methodname as you want when using this technique, similar technique is used in React passing of Props **
const {method: new_method_name_but_method_notChanged} = object

*/

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(course); // Output : { coursename: 'Buy this course to get a million dollar job#absolute_domination #notfakeguru #notshowoff', price: '$99,999',courseInstructor: 'Every other youtube guy' }
console.log(instructor); // Output : Every other youtube guy, refer line : 140


// the skeleton of the type of data we get from APIs, 
[
    {},
    {},
    {}
]
