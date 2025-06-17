const user = {
    username: "mihir",
    password: 1234,
    email: "mihirmehrajio@gmail.com",

    getUserDetails: function(){
        // console.log(this.username)
        console.log(this)
    }
}

// user.getUserDetails()
// this.user1 = "mihir"
// console.log(this)


function User(username,password,isLoggedIn){
    this.username = username;
    this.password = password;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = User("mihir", "strongPass", true)
// const userTwo = User("mihir", "strongPass", false)

// new is a constructor which is allowing us to create a new instance insted of overwriting the current
const userOne = new User("mihir", "strongPass", true)
const userTwo = new User("mihir", "strongPass", false)

// when the new keyword is called:
// 1. first it create a empty object which is called a new instance
// 2. constructor function was called because of the "new" keyword it pack all the arguments 
// 3. all the arguments pack is injected to the empty object
// 4. we recieve the new object with new arguments

// console.log(userOne)
console.log(userOne.constructor) // it give the refrance of the fuction/method which is called with that
console.log(userTwo)
console.log(userTwo instanceof User)

