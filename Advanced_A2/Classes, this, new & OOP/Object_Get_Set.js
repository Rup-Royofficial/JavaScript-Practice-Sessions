// Getters & Setters in Objects
/*
    This is an alternate form of using Classes, this format is rarely used
*/

// _ is imp 
const User = {
    _email: 'a@ac.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const coffee = Object.create(User)
console.log(coffee.email);