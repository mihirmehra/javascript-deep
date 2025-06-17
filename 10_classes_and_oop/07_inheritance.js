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

class Admin extends User {
    constructor(username,password,email) {
        super(username,password)
        this.email = email
    }

    changeEmail(){
        console.log(`${this.email}.jumba`)
    }
}

const admin1 = new Admin("mihir","passwrd","mihir@gmail")
const admin2 = new Admin("mihir","passwrd")

admin1.encryptPassword()
admin1.changeUsername()
admin1.changeEmail()

admin2.encryptPassword()
// admin2.changeEmail()