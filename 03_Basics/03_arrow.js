// this is refered to the current context of the scope

const user = {
    username: "mihir",
    price: 2098,

    message: function(){
        console.log(`${this.username} has entered in the lobby`)
    }
}

// user.message()
// user.username = "kaju"
// user.message()

// console.log(this)

function one(){
    let name = "mihir"
    // console.log(this)
    console.log(this.name)
}

// one()

const two = function(){
    let name = "mihir"
    console.log(this.name)
}

// two()

const three = () => {
    let name = "mihir"
    console.log(this.name)
}

// three()


// explicent return
const addtwo = (num1,num2) => {
    return num1 + num2                        
}

// implicent return
// const addtwo2 = (num1,num2) => num1 + num2
// const addtwo2 = (num1,num2) => (num1 + num2)

let username = "mihir"

const addtwo2 = (num1,num2) => ({username})

console.log(addtwo2(2,6))