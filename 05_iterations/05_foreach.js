
let myObject = [
    {alpha: "a",},
    {alpha: "b",},
    {alpha: "c",},
    {alpha: "d",},
]

myObject.forEach(function(val){
    console.log(val.alpha)
})

console.log("===============================")

myObject.forEach( (item) => {console.log(item)} )

function printme(item){
    console.log(item, "yoho")
}

console.log("===============================")

myObject.forEach(printme)

console.log("===============================")

myObject.forEach((item, index, arr) => {
    if(index == 2){
        console.log("this is 2")
    }
    console.log(index, item, arr) 
})

