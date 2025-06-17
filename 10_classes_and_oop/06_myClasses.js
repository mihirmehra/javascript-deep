class User {
    constructor(username,password) {
        this.username = username
        this.password = password
    }

    encryptPassword(){
        console.log(`${this.password}123`)
    }

    changeUsername(){
        console.log(`${this.username.toUpperCase()}`)
    }
}

const user = new User("mihir","123")

user.encryptPassword()
user.changeUsername()

//======================================================
//======================================================
// behind the scene
//======================================================
//======================================================

function NewUser(username,password) {
    this.username = username
    this.password = password
}

NewUser.prototype.encryptPassword = function(){
    console.log(`${this.password}123`)
}
NewUser.prototype.changeUsername = function(){
    console.log(`${this.username.toUpperCase()}`)
}

const user2 = new NewUser("mihir","123")

user2.encryptPassword()
user2.changeUsername()
