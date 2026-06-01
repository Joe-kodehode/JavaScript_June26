// Lesson 1: JS baics

// Section 1: Linking our JS to our HTML ✅

// Section 2: Using console.log
// The console.log() function prints messages to the console. It's an essential tool for debugging and seeing what your code is doing.

console.log("Hello World");

// Section 3: Variables and Data Types

// camelCase
// we use camelCase when naming variables and function in JavaScript. This is when the first word is all lowercase and subsequent words have a capital letter at the start.

// String (text in JS)
const exampleString =
  "This is a string stored inside the exampleString variable";
console.log(exampleString);

// Integer (whole numbers in JS)
const exampleInt = 50;
console.log(exampleInt);

// Boolean (True or False)
const exampleTrue = true;
const exampleFalse = false;

console.log(exampleTrue);
console.log(exampleFalse);

// Array (a list of values / collection of data. Arrays have indexes which represent where elements are in the array. Indexes start from 0!)
const exampleArray = [10, 20, 30, 40];
console.log(exampleArray);
console.log(exampleArray[0]);
console.log(exampleArray[1]);
console.log(exampleArray[2]);
console.log(exampleArray[3]);

// Object (Key value pairs)
const person = {
  name: "Joe",
  location: "Stavanger",
  age: 38,
};

console.log(person);
console.log(person.location);

// Undefined (declared but not assigned a value)
let exampleUndefined;
console.log(exampleUndefined);

// Null (an intentional absence of value)
let exampleNull = null;
console.log(exampleNull);

// Section 4: Let and Const
// Any time we create a variable, we declare them with either let or const!
// If you can use const, use const! We only use let if the variable is going to be reassigned!
let number1 = 100;
console.log(number1);

// reassigning the value inside number1 variable
number1 = 50;
console.log(number1);

// Section 5: Operators
// Operators perform calculations or comparisons.

// Arithmetic operators:
let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multiplication
console.log(num1 / num2); // division
console.log(num1 % num2); // modulo modulus (remainder)

// Use the + operator with strings to concatenate them:
console.log("hello" + " " + "world");

const firstName = "Jane";
const lastName = "Doe";
console.log(firstName + " " + lastName);

// Increment operator ++
let counter = 0;
console.log(counter);
counter++;
counter++;
console.log(counter);

// Decrement operator --
counter--;
console.log(counter);

// Compound assignments (for when we need to go up or down by more than 1)

// Both examples below do the same thing, add 10 to coutner.
counter = counter + 10;
// Use this one (addition assignment)
counter += 10;
console.log(counter);

counter = counter - 5;
counter -= 5;
console.log(counter);

counter /= 2;
console.log(counter);

counter *= 4;
console.log(counter);

counter %= 3;
console.log(counter);

// Comparison operators
// Comparison operators return true or false

// greater than
console.log(15 > 20);
// less than
console.log(15 < 20);
// greater than or equal to
console.log(15 >= 15);
// less than or equal to
console.log(15 <= 15);
// equal to (does not care about data type)
console.log(15 == "15");
// strictly equal to (does care about the data type)
console.log(15 === "15");

// adding a number data type to a string data type will give us a string
console.log(15 + "15");

// NOT equal to
console.log(15 != "15");

// strictly NOT equal to
console.log(15 !== "15");
