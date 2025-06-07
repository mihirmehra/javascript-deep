

let date = new Date();

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toJSON());
// console.log(typeof date);

let myCrestedDate = new Date(2023 , 11 , 2)
// console.log(myCrestedDate.toDateString())

let myCrestedDate2 = new Date(2023 , 11 , 2 , 5, 7)
// console.log(myCrestedDate2.toLocaleString())

let myCrestedDate3 = new Date("01-23-2008")
// console.log(myCrestedDate3.toLocaleString())

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCrestedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
newDate.toLocaleString('default', {
    weekday: "long",
})