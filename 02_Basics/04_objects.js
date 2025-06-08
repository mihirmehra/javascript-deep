const tinderuser = new Object()

tinderuser.id = "12abs"
tinderuser.name = "mihir"
tinderuser.isLoggedIn = true

// console.log(tinderuser.id)

const regUser = {
    email: "regular@gmail.com",
    fullname: { 
        userFullName:{
            firstName: "mihir",
            lastName: "mehra"
        }
    }
}

console.log(regUser.fullname)


let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "b"}
let obj3 = {5: "a", 6: "b"}

let obj4 = {obj1,obj2}
let obj5 = Object.assign({}, obj1, obj2)

let obj6 = [
    {
        user: "mihir",
        email: "mihir@gmail.com"
    },
    {
        user: "mihir",
        email: "mihir@gmail.com"
    },
    {
        user: "mihir",
        email: "mihir@gmail.com"
    }
]

console.log(obj4)
console.log(obj5)
console.log(obj6[2].email)

console.log(tinderuser)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('isloggedin'))