
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async Function 1")
        resolve()
    }, 1000)
});

promiseOne.then(function(){
    console.log("Async Function 1 consumed")
})

// ======================================================================================

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Function 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async Function 2 consumed")
})


// ======================================================================================

const promiseThree = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve({
            username: "mihir",
            email: "mihir@gmail.com"
        })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})


// ======================================================================================

const promiseFour = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username: "mihir",
                email: "mihir@gmail.com",
                pass: 123
            })
        } else {
            reject('Error : somthing went wrong')
        }
    }, 1000)
});

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("the request either resoled or rejected")
})

// ======================================================================================


const promiseFive = new Promise((resolve , reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username: "javascript",
                pass: 123
            })
        } else {
            reject('Error : js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// ======================================================================================

// async function allUsersData(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// allUsersData()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data[1]);
})
.catch((error)=> console.log(error))