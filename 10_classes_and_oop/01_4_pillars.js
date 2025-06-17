//============================================================================
//============================== Abstraction =================================
//============================================================================


// Using a function factory for abstraction (before ES6 private fields)
function createCounter() {
    let count = 0; // This is a "private" variable due to closure

    return {
        increment: function() {
            count++;
            console.log("Count after increment:", count);
        },
        decrement: function() {
            count--;
            console.log("Count after decrement:", count);
        },
        getCount: function() {
            return count;
        }
    };
}

const myCounter = createCounter();
myCounter.increment(); // Calls the exposed method
myCounter.increment();
console.log("Current count:", myCounter.getCount());
// console.log(myCounter.count); // This would be undefined, demonstrating abstraction


// Using ES6 Classes with private fields (more direct abstraction)
class SecureBankAccount {
    #balance; // Private class field (starts with #)
    #accountNumber; // Another private field

    constructor(accountNumber, initialBalance) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance >= 0 ? initialBalance : 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else {
            console.log(`Insufficient funds. Current balance: $${this.#balance}`);
        }
    }

    // Public method to get the balance (controlled access)
    get balance() { // Getter for balance
        return this.#balance;
    }

    get accountNumber() { // Getter for account number
        return this.#accountNumber;
    }
}

const userAccount = new SecureBankAccount("987654321", 500);
userAccount.deposit(100);
userAccount.deposit(100);
userAccount.deposit(500);
// console.log(userAccount.#balance); // Syntax error: Private field '#balance' must be declared in an enclosing class
console.log("Account Balance:", userAccount.balance);

console.log("================================================")
console.log("================================================")
console.log("================================================")

//============================================================================
//============================== Encapsulation ===============================
//============================================================================

// Encapsulation using an ES6 Class
class Product {
    constructor(id, name, price) {
        this.id = id; // Public property
        this.name = name; // Public property
        this.price = price; // Public property
    }

    // Method to display product info - bundled with data
    displayInfo() {
        console.log(`Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`);
    }

    // Method to apply discount - operates on internal data
    applyDiscount(percentage) {
        if (percentage > 0 && percentage <= 100) {
            this.price = this.price * (1 - percentage / 100);
            console.log(`Discount applied. New price: $${this.price.toFixed(2)}`);
        } else {
            console.log("Invalid discount percentage.");
        }
    }
}

const laptop = new Product("LPT001", "Gaming Laptop", 1200.00);
laptop.displayInfo();
laptop.applyDiscount(10);
laptop.displayInfo();

// The data (id, name, price) and methods (displayInfo, applyDiscount)
// are encapsulated within the Product class.
// While 'price' is directly accessible, encapsulation implies
// that the *intended* way to modify it (for discounts) is through applyDiscount.
// (Note: Using private fields like in the Abstraction example for price
// would strengthen the encapsulation by making direct access impossible).


console.log("================================================")
console.log("================================================")
console.log("================================================")

//============================================================================
//============================== Inheritance =================================
//============================================================================


// Superclass
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Subclass inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the superclass constructor
        this.breed = breed;
    }

    bark() {
        console.log(`<span class="math-inline">\{this\.name\}</21\> \(</span>{this.breed}) says Woof! Woof!`);
    }

    // Dog can also use eat() and sleep() from Animal
}

// Another subclass
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log(`<span class="math-inline">\{this\.name\} \(</span>{this.color}) says Meow!`);
    }

    // Cat can also use eat() and sleep() from Animal
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.eat();    // Inherited method
myDog.bark();   // Dog-specific method

const myCat = new Cat("Whiskers", "Calico");
myCat.sleep();  // Inherited method
myCat.meow();   // Cat-specific method

console.log(`${myDog.name} is a ${myDog.breed}.`);
console.log(`${myCat.name} is a ${myCat.color} cat.`);


console.log("================================================")
console.log("================================================")
console.log("================================================")

//============================================================================
//============================== polymorphism =================================
//============================================================================



// Superclass
class Shape {
    constructor(name) {
        this.name = name;
    }

    // Common method that will be overridden by subclasses
    calculateArea() {
        console.log(`${this.name} does not have a specific area calculation defined.`);
        return 0;
    }

    displayInfo() {
        console.log(`This is a ${this.name}.`);
    }
}

// Subclass 1
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    // Overriding the calculateArea method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Subclass 2
class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    // Overriding the calculateArea method
    calculateArea() {
        return this.width * this.height;
    }
}

// Subclass 3
class Triangle extends Shape {
    constructor(base, height) {
        super("Triangle");
        this.base = base;
        this.height = height;
    }

    // Overriding the calculateArea method
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

// Polymorphic usage:
const shapes = [];
shapes.push(new Circle(5));
shapes.push(new Rectangle(4, 6));
shapes.push(new Triangle(7, 3));
shapes.push(new Shape("Generic Shape")); // An instance of the base class

for (const shape of shapes) {
    shape.displayInfo(); // Inherited method, same behavior
    console.log(`Area: ${shape.calculateArea().toFixed(2)}\n`); // Polymorphic behavior!
}