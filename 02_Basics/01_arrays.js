
const arr = [1,2,3,4,5,6,7,3,4,5]
const heros = ["shaktiman", "shaktigirl", "power-star"]

let myarr = new Array(0,9,8,7,6);



// Array Methods

// myarr.push(2)
// myarr.push(4)
// myarr.pop() // remoe the last element of the array

// myarr.unshift(7)
// myarr.shift()

// console.log(myarr.includes(8))
// console.log(myarr.indexOf(8))


let newaar = myarr.join() // convert all the values to a string

// console.log(myarr)
// console.log(typeof newaar)
// console.log(newaar)


// Slice , Splice 

let mainArr =  [0,1,2,3,4,6,5,6,7,9]

const sliceArr = mainArr.slice(1,4);
console.log(sliceArr)


const spliceArr = mainArr.splice(1,4); // menupulate the original array
console.log(spliceArr)
