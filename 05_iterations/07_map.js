const mynums = [1,2,3,4,5,6,7,8,9,10]

// const upNums = mynums.map((num) => {
//     return num = num + 10
// })

const upNums = mynums
                .map((num) => num = num * 10)
                .map((num) => num = num + 1)
                .filter((num) => num >= 40)

console.log(upNums)
