
function add(num1,num2){
    console.log(num1 + num2)
}

function add(num1,num2){
    return num1 + num2
}

add(1,2)

const res = add(9,5)

console.log(res)


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    } else {
        return `${username} just logged in`
    }
}

console.log(loginUserMessage())