
function add(num1,num2){
    console.log(num1 + num2)
}

function add(num1,num2){
    return num1 + num2
}

// add(1,2)

// const res = add(9,5)

// console.log(res)


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    } else {
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage())

// function calculateCartPrice(...num1){ //rest operator
//     return num1
// }
function calculateCartPrice(val1, val2,...num1){ //rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,200))

const user = {
    username: "mihir",
    price: 3000
}

function handleObj(obj){
    console.log(`username: ${obj.username} price: ${obj.price}`)
}


handleObj(user)

const points = [1,2,4,5,3,5]

function handleArr(arr){
    return arr[1]
}

console.log(handleArr(points))
