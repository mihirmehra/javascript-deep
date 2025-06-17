class User {
    constructor(username) {
        this.username = username
    }

    login(){
        console.log(`User is Logged in: ${this.username.toUpperCase()}`)
    }

    static createId(){
        return `123`
    }
}

const userOne = new User("Mihir")

// console.log(userOne.createId())

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const userTwo = new User("Mihir", "123")

// console.log(userTwo.createId())