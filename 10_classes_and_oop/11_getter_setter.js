// Class Getter Setter

class User {
    constructor(username, password){
        this.username = username
        this.password = password
    }

    set username(value){
        this._username = value
    }

    get username(){
        if (this._username !== "mihir"){
            return 'you cant access the username'
        } else {
            return this._username
        }

    }

    set password(value){
        this._password = value
    }

    get password(){
        return `${this._password}2436253`
    }

}

const user = new User("mihir", 123)

// console.log(user.username)
// console.log(user.password)


// =====================================
// Propeties Get Set
// =====================================

function encryptHello(value){
  const visiblePart = value.slice(0, 3);
  return visiblePart.padEnd(value.length, '*');
}


function NewUser(email, password){
    this.email = email
    this.password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return encryptHello(email)
        },
        set: function(val){
            email = val
        }
    })

} 

const newUser = new NewUser("mihir@gmail.com", "1234")

console.log(newUser.email)


// =====================================
// Object Get Set
// =====================================


const ObjUser = {
    _email: "mihirmehrajio@gmail.com",
    _password: 123,

    set email(value){
        this._email = value
    },

    get email(){
        return this._email.toUpperCase()
    }

}

console.log(ObjUser.email)
console.log(ObjUser._password)

const tea = Object.create(ObjUser)

console.log(tea.email)