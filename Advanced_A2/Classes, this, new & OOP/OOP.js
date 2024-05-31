const user = {
    username: "water",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("water", 12, true)
const userTwo = new User("Coffee", 11, false)
console.log(userOne.constructor); // User function definition
console.log(userTwo); 
/*
greeting: ƒ ()
isLoggedIn: false
loginCount: 11
username: "Coffee"
*/