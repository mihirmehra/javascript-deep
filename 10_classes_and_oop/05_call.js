function setUsername(username){

    this.username = username
    console.log(this.username)
}

function createUser(username, email, password){
    setUsername.call(this,username)

    this.email = email;
    this.password = password
}

const userOne = new createUser("mihir", "mihir@gmail.com", "123")

console.log(userOne)