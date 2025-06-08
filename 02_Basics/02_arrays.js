let marvel_heros = ['thor', 'ironman', 'spiderman']

let dc_heros = ['superman', 'batman', 'flash']

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);


// let conactHeros = marvel_heros.concat(dc_heros);
// console.log(conactHeros);

// let allHeros = [...marvel_heros,...dc_heros] // this is the spread operator 
// console.log(allHeros)

// let multiArr = [1,2,2,[3,4,52], 3 ,[1,2,3,4, [3,59,83]]]

// let flatarr = multiArr.flat(Infinity)
// console.log(flatarr)

console.log(Array.isArray("mihir"))
console.log(Array.from("mihir"))
console.log(Array.from({name:"mihir"})) // its return the empty array -not the key we have to tell it to do that

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))