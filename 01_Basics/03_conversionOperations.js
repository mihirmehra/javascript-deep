let score = "33abc" // NaN
// let score = 33; // 33
// let score = null; // 0
// let score = undefined; // NaN
// let score = true; // 1
// let score = false; // 0

// console.log(typeof score);
// console.log(typeof (score));

let scoreString = Number(score);

// console.log(typeof scoreString);
// console.log(scoreString);


// let isLoggedin = 1; // 1 or 0, true or false
// let isLoggedin = ""; //false
let isLoggedin = "mihir"; //false
 
let booleanValue = Boolean(isLoggedin);

// console.log(booleanValue);


let desimalNumber = 12.34; // 12.34
let integerNumber = Boolean(desimalNumber); // 12

// console.log(typeof desimalNumber);
// console.log(integerNumber); //true
// console.log(typeof integerNumber); 


// ******************** operations ********************


let num1 = 10;

let negalue = -num1; // -10
let positiveValue = +num1; // 10


// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32


let gameScore = 100;
// gameScore++; // postfix increment - the value is used before it is incremented
// ++gameScore; // prefix increment - the value is incremented before it is used

console.log(gameScore); // undefined