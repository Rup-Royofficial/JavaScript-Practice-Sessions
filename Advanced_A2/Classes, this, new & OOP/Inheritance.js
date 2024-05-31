class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// children(Teacher) getting accessibilty of functions inside Parent (User)
class Teacher extends User{
    constructor(username, email, password){
        super(username) // super keyword is used to pass in value to the parent, no need to write new User(username) separately
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const one = new Teacher("one", "one@number.com", "123")
console.log(one.addCourse()) // A new course was added by one


one.logMe() // USERNAME is one
const two = new User("two")
two.logMe() // USERNAME is two

console.log(one instanceof User); // true