// Getters and Setters are present by default in the classes, even if you don't use it

// Remember : Getters always returns and Setters never returns

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}securePassword`
    }

    set password(value){
        this._password = value
    }
}

const test = new User("lenovo.ai", "abc") // this User() calls the constructor and passes in the arguments for this instance 
console.log(test.email); // LENOVO.AI

console.log(test.password); // abcsecurepassword