// Lesson 2: Conditionals

// Section 1: The typeof operator

let myVariable = "42";
console.log(typeof myVariable);

// Section 2: If / else if / else

// basic if statement
let temperature = 1;

if (temperature > 25) {
  console.log("It's a hot day!");
} else if (temperature > 15) {
  console.log("it's a warm day");
} else if (temperature > 0) {
  console.log("It's a chilly day");
} else {
  console.log("It's freezing!");
}

// Section 3: Logical Operators: AND (&&) and OR (||)

let age = 20;
let hasLicence = true;

if (age >= 18 && hasLicence === true) {
  console.log("You can drive!");
} else {
  console.log("You can't drive!");
}

let day = "Hamburger";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend! Yipee!");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday :(");
} else {
  console.log("Enter a real day...");
}

// D.R.Y. - Don't repeat yourself!

// Using both && and || in the same check

// Give a discount if the user has a referal AND it's their first shop.  OR if they are a premium member.

let referal = true;
let firstShop = true;
let premiumMember = false;

if ((referal && firstShop) || premiumMember) {
  console.log("You get a discount!");
} else {
  console.log("No discount for you! Consider buying premium!");
}

// Section 4: Ternary Operator

// Ternary is useful for simple if / else checks

let isMember = false;
// if (isMember) {
//   console.log("Your fee is $5");
// } else {
//   console.log("Your fee is $10");
// }

let fee = isMember ? "$5" : "$10";

console.log("Your fee is:", fee);

// Section 5: Switch Statement

// A switch statement checks a value against multiple cases

let fruit = "hamburger";

switch (fruit) {
  case "orange":
    console.log("Oranges are full of vitamin C!");
    break;
  case "apple":
    console.log("Apples are delicious!");
    break;
  case "banana":
    console.log("Bananas are a source of potassium!");
    break;
  default:
    console.log("unknown fruit detected");
}

// Use if / else if → for complex or varied conditions
// Use switch → for one variable with many fixed values

// Section 6: Truthy and Falsey values

let value = NaN;

if (value) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// Truthy values
// A string with content
// A positive number
// A negative number'
// An array of values
// An empty array
// An object with values
// An empty object
// true boolean

// Falsey values
// An empty string
// 0
// null
// undefined
// false boolean
// NaN (not a number)

// Section 7: Template Literal // Template String

const firstName = "Dora";
const lastName = "Explora";
const fullName = firstName + " " + lastName;

const betterFullName = `${firstName} ${lastName} is the persons name`;

console.log(betterFullName);
