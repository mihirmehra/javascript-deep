let name = "mihir"

let position = `developer`


let string_interpolation = `my name is ${name} and i am a ${position}`;

console.log(string_interpolation)


let str = new String("arushi-jain")


console.log(str[3]);
console.log(str.__proto__);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(5));
console.log(str.indexOf('i'));
console.log(str.substring(0,5)); // can't use negetive values in sub string
console.log(str.slice(-6,5)); // can use negetive values

const newStr = str.substring(0,7);
console.log(newStr)

const anotherStr = str.slice(-6,7);
console.log(anotherStr)

const trimStr = "    str     yo yo   "
console.log(trimStr.trim());

const url = "https://mihir.com/mihir%20mehra"
console.log(url.replace("%20","-"));
console.log(url.includes("hir"));

const spliStr = str.split("-")
console.log(spliStr)

