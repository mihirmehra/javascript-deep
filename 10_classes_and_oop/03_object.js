// in javascript the function gives a refrence to object 

function mb5 (num) {
    return num*5
}

mb5.power = 4;

// console.log(mb5(5))
// console.log(mb5.power)
// console.log(mb5.prototype)


function CreateUser(username,score){
    this.username = username 
    this.score = score
};

CreateUser.prototype.increment = function(){
    return this.score++;
};

CreateUser.prototype.printMe = function(){
    console.log(`Username ; ${this.username}`);
};

const userOne = new CreateUser("mihir", 100)
const userTwo = new CreateUser("mihir2", 200)

console.log(userOne.increment());
userTwo.printMe()