// global scope - it can be access anywhere in the code
// block scope - it can be ony accessed in the block{} where it is declared


let a = 100
const b = 2
// var c = 3

if (true) {
    let a = 1
    const b = 2
    // console.log(a)
}

// console.log(a)
// console.log(b)


function one(){
    let name = "mihir"

    function two(){
        let web = "youtube"
        console.log(name)
    }
    // console.log(web)

    two()

}

// one()

if(true){
    const name = "mihir"
    if(name === "mihir"){
        const web = "webssite"
        // console.log(name + web)
    }
    // console.log(web)
}

// console.log(name)


// ++++++++++++++++++ intresting ++++++++++++++++++++++++++++

console.log(addone(5)) // you can access the function anywhere

function addone(num){
    return num + 1
}

// addtwo() // you can initialize the function that you have put in a veriable before the decalaration of the function

const addtwo = function(num){
    return num + 2
}