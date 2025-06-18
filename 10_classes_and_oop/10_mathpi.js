const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter)

const obj = {
    name: "obj1",
    price: 250,
    isAvl: true,

    ordernow: function(){
        console.log('no order')
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "price"))

Object.defineProperty(obj, 'price', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(obj, "price"))

for (let [key,value] of Object.entries(obj)){
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}