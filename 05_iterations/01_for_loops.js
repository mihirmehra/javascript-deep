// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++){
    let element = i 
    if (element == 5){
        // console.log("this is about to 5")
    }
    // console.log(element)
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`)
    for (let o = 1; o <= 10; o++) {
        // console.log(`${o} * ${i} = ${o*i}`)
    }
}

let arr = ["flash", "batman", "superman", "wonderwoman"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element)
}

// break & continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is detected")
//         break;
//     }
//     console.log(`the value of index is ${index}`)
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected")
        continue; // skips one condition
    }
    console.log(`the value of index is ${index}`)
}

