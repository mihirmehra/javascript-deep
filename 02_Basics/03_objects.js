// if we create a object with a litreal it will not create a singleton object
// if we create a object with a constructor it will create a singleton object

// singleton 

// Object.create // constructor

// object literals

let mysym = Symbol("yoho")

const jsUser = {
    name: "mihir",
    email: "mihir@gmail.com",
    "full name": "mihir mehra",
    [mysym]: "ohoho"
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])


jsUser.email = "mihir@micro.com"
// Object.freeze(jsUser)
jsUser.email = "mihir@micrasdasasdasddaso.com"
// console.log(jsUser)

jsUser.greetings = function(){
    console.log("heelo user");
}

jsUser.greetings2 = function(){
    console.log(`heelo user , ${this.email}`);
}

jsUser.greetings()
jsUser.greetings2()