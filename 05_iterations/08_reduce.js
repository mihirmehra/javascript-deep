const myNums = []

// function getRandomNumber(){
//     let min = 10;
//     let max = 100;

//     const newMin = Math.ceil(min) 
//     const newMax = Math.floor(max)

//     let generatedNumber = Math.floor(Math.random() * (newMax - newMin) + min )
//     return generatedNumber
// }

for(let i = 1; i <= 20; i++){

    let min = 10;
    let max = 100;

    const newMin = Math.ceil(min) 
    const newMax = Math.floor(max)

    let generatedNumber = Math.floor(Math.random() * (newMax - newMin) + min )

    let PusedNumber = generatedNumber + i
    myNums.push(PusedNumber)
}

// console.log(myNums)

// const sum = myNums.reduce((adder , num) => {
//     console.log(`accum : ${adder}  val : ${num}`)
//     return adder + num
// }, 0)


const sum = myNums.reduce((adder , num) => adder + num, 0)

console.log("sum of the number in that array is :",sum)


const shoppingCart = [
    {
        item: "js course",
        price: 987
    },
    {
        item: "python course",
        price: 1962
    },
    {
        item: "mobile course",
        price: 2999
    },
    {
        item: "data course",
        price: 11999
    },
]

const TotalShop = shoppingCart.reduce((acc , item) => {
    return acc + item.price
},0) 

console.log(TotalShop)