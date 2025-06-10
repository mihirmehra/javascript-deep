

const obj = {
    js: "javascript",
    cpp: "c++",
    py: "Python",
    ts: "typescript"
}

for (const key in obj) {
    // console.log(`${key} : ${obj[key]} `)
}

const arr = [1,2,3,4,5,6,7]

for (const key in arr) {
    // console.log(`${arr[key]} is at ${key} position`)
} 

const map = new Map()

map.set("IN", "india")
map.set("US", "usa")
map.set("FR", "france")


for(const key in map){
    // console.log(key)
}

