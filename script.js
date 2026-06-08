// Lesson 4: Functions

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// Section 1: Function declarations (aka function statements) and Hoisting
sayHello();

function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();

// Section 2: Arrow functions (introduced in ES6, great for short, inline functions)

const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// Section 3: Return and Scope

function functionOne() {
  console.log("This function logs a message but does not return any data");
}

functionOne();

function functionTwo() {
  const myMessage = "This function returns a string";
  return myMessage;
}

const dataReturned = functionTwo();

console.log(dataReturned);

// Return
// The return keyword in a function will return a piece of data.
// The data is returned to the function call.
// The return keyword will break us out of the function, any code in the function below "return" is inaccessable code.

// Scope
// Variables created inside a function are SCOPED to only exist inside that function
// Variables created on the global scope are accessable anywhere, even in multiple functions.

// Section 4: Functions with Parameters

// Example 1 - Hard Coding
function add() {
  return 3 + 4;
}
console.log(add());

// Example 2 - Soft Coding (dynamic)
function minus(num1, num2) {
  return num1 - num2;
}
console.log(minus(5, 7));
console.log(minus(100, 31));
console.log(minus(10000, 1));

// Parameters go inside the brackets of the function name. They are like variables that store data passed in.

// Arguments are the data we can pass into the parameters from the brackets of the function call.

// Example 3 - A greeter function that uses parameters and template strings.

const greeter = (time, name) => {
  return `Good ${time} ${name}`;
};

console.log(greeter("Evening", "Henry"));
console.log(greeter("Night", "Tom"));

// Section 5: Implicit return in Arrow Functions
// Implicit return means we can delete the return keyword and the curley brackets.
// Implicit return only works if the arrow function is instantly returning and we only have 1 line of code.

// const adder = (num1, num2) => {
//   return num1 + num2;
// };

const adder = (num1, num2) => num1 + num2;

console.log(adder(100, 450));

// Section 6: Calculator function using Switch Statement

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid Operator";
  }
}

console.log(calculator(100, 50, "*"));
console.log(calculator(5, 120, "+"));
console.log(calculator(10000, 20, "/"));

// Section 7: Updating a global variable using a function

let hp = 100;

const updateHp = (direction, amount) => {
  if (direction === "up") {
    hp += amount;
    if (hp > 200) {
      hp = 200;
    }
  } else if (direction === "down") {
    hp -= amount;
    if (hp <= 0) {
      console.log("You died, lmao");
      hp = 100;
    }
  } else {
    console.log("You've found a bug in our game!");
  }
};

console.log(hp);
updateHp("up", 500);
console.log(hp);
updateHp("down", 1000);
console.log(hp);

// function should be able to take in a number and a direction
// if the direction is "up", increase the hp by the number
// if the direction is "down", decrease the hp by the number

// HP can not increase above 200 ✅
// if hp reaches 0, console.log("You died") and reset hp to 100

// Section 8: Using template literals and ternary in a function

const fruits = ["Apple", "Banana", "Kiwi", "granateple", "pomegranite", "Pear"];

// Make a function that checks if the passed in fruit is in the array or not and gives us a different message if it is/isn't

// const checkItem = (fruit) => {
//   if (fruits.includes(fruit)) {
//     return `The array does include ${fruit}`;
//   } else {
//     return `The array doesn't include ${fruit}`;
//   }
// };

const checkItem = (fruit) =>
  `The array ${fruits.includes(fruit) ? "does" : "doesnt"} include ${fruit}`;

console.log(checkItem("Pear"));
console.log(checkItem("Steak"));
console.log(checkItem("granateple"));
