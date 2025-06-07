// according to the process of save the data and assess the data the datatypes are categorized into two categories: 
// primitive and reference types(non-primitive).

// Primitive 

// 7 types of primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

let myNumber = 42; // Number
let myString = "Hello, World!"; // String
let myBoolean = true; // Boolean
let myUndefined; // Undefined (declared but not assigned)
let myNull = null; // Null (intentional absence of value)
let mySymbol = Symbol("unique"); // Symbol (unique and immutable value)
let myBigInt = 123456789012345678901234567890n; // BigInt (arbitrary precision integer)


console.log(typeof myNumber); // "number"
console.log(typeof myString); // "string"
console.log(typeof myBoolean); // "boolean"
console.log(typeof myUndefined); // "undefined"
console.log(typeof myNull); // "object" (this is a known quirk in JavaScript)
console.log(typeof mySymbol); // "symbol"
console.log(typeof myBigInt); // "bigint"


// Reference (Non-Primitive)

// 1. Object
// 2. Array
// 3. Function


const myArray = [1, 2, 3, 4, 5];

let myObject = {
    name: "Mihir",
    age: 25,
    isStudent: false,
    hobbies: ["reading", "gaming", "coding"]
};

const myFunction = function() {
    console.log("This is a function");
};


console.log(typeof myArray); // "object"
console.log(typeof myObject); // "object"
console.log(typeof myFunction); // "function"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory

// stack (primitive) , heap (reference)

let memory = "mihirmehra"
let assignedmemory = memory

assignedmemory = "shaktiman"

console.log(memory);
console.log(assignedmemory);


let user = {
    email: "mihir@gmail.com",
    upi: "mihir@123"
}

let usertwo = user

usertwo.email = "kiara@gmail.com"

console.log(user.email)
console.log(usertwo.email)