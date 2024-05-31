function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("coffee", "coffee@fb.com", "123")
console.log(chai);

/**
 *  email: "coffee@fb.com"
    password: "123"
    username: "chai", this is possbile using .call(this(instance), parameter)

    if you rather used setusername(username), it wouldn't have worked
    It is important to give the reference of the instance as well as the parameter
 */