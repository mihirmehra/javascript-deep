// if

let tempature = 98

if (tempature === 98){
    console.log("temp is 98")
} else {
    console.log("temp is not 98")
}

console.log("execute")

// < , > , <= , >= , == , != , ===, !==


const score = 200;

if(score > 170){
    const power = "fly"
    console.log(`user power ${power}`)
} 
// console.log(`user power ${power}`)

if (score > 100) console.log("test1");

const bal = 1000

if(bal < 500){
    console.log("less than 500")
} else if(bal < 750){
    console.log("less than 750")
} else if(bal < 900){
    console.log("less than 900")
} else{
    console.log("less than 1200")
}

// (&&), (||)

const userLoggedin = true
const card = true
const loggedinGoogle = false
const loggedinEmail = true


if (userLoggedin && card){
    console.log("allowed")
}

if(loggedinGoogle || loggedinEmail){
    console.log("login")
} 


