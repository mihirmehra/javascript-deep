

const arr = [1,2,3,4,5,6]


for (const i of arr) {
    // console.log(i)
}

const greetings = "hello world!"

for(const i of greetings){
    if (i == " "){
        // console.log("here is a space")
        continue;
    }
    // console.log(`each letter of ${i}`)
}

// Maps

const map = new Map()

map.set("IN", "india")
map.set("US", "usa")
map.set("FR", "france")

// console.log(map)

for (const [ key , value ] of map) {
    console.log(key , ":-" , value)
}

let obj = {
    name : "mihir",
    age : 18,
    website: "youtube"
}

// for (const [key , value] of obj) {
//     console.log(key , ":-" , value)
// }