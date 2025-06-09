const userEmail = "mihir@gmail.com"

if(userEmail){
    console.log("Got user email!")
} else {
    console.log("Don't get user email!")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}, 

const arr = []

if (arr.length === 0){
    console.log("array is empty")
}

const obj = {}

if(Object.keys(obj).length === 0){
    console.log("object is empty")
}

console.log(false == 0)
console.log(false == "")
console.log(0 == "")

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 90
// val1 = null ?? 90
// val1 = undefined ?? 90
val1 = null ?? 90 ?? 80


console.log(val1)


// Terniary Operator

// condition ? true : false

let price = 100

price <=80 ? console.log("less than 80") : console.log("more than 80")