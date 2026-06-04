// Lesson 3: Week 1 recap

// Section 1: Variables, Data Types and Operators

// Scenario: An online store managing product details.

const storeName = "Tech Haven"; // Variable storing a string data type
const productName = "Wireless Earbuds"; // string
let productPrice = 90; // Integer (whole number)
let productQuantity = 4; // Integer
let isInStock = true;
const productTags = ["audio", "Wireless", "Accessory"]; // array
let discount; // undefined

console.log(productName);
console.log(productPrice);
console.log(productQuantity);
console.log(isInStock);
console.log(productTags);
console.log(discount);

// We sell one pair of earbuds
productQuantity--;
// productQuantity++;

// Increase the price by 10
productPrice = productPrice + 10;
productPrice += 10;

// Calculate the total cost for the available quantity.
const totalValue = productPrice * productQuantity;
console.log(totalValue);

// Find the remainder when total value is divided by 50
const remainder = totalValue % 50;
console.log(remainder);

// Section 2: Conditionals and Logical Operators

// Give a different console.log() based on basket size
// if greater than 300 = You get free delivery!
// if greater than 250 = You're close to free delivery!
// if less than 250 = Spend 300 to get free delivery.

let basketSize = 249;

if (basketSize >= 300) {
  console.log("You get free delivery!");
} else if (basketSize >= 250) {
  console.log("You're close to get Free Delivery!");
} else {
  console.log("Spend 300 to get Free delivery!");
}

// Logical AND (&&) Logical OR (||)

// give the user a console.log message of "You get a 15% discount!" IF:

// isInStock is true and either disount is set to true or productQuantity is less than 10

// otherwise give them a message of "No discount applied"

productQuantity = 15;
isInStock = true;
discount = true;

// prettier-ignore
if (isInStock && discount || productQuantity < 10) {
  console.log(" You get 15% Discount");
} else {
  console.log("You do not get a discount!");
}

// Ternary Operator

basketSize = 200;

// if (basketSize >= 250) {
//   console.log("Free shipping");
// } else {
//   console.log("$15 shipping");
// }

let shippingCost = basketSize >= 250 ? "Free Shipping" : "$15 shipping";

console.log(shippingCost);

// Switch Statement

let category = "accessory";

switch (category) {
  case "audio":
    console.log("This product is part of our Audio department");
    break;
  case "accessory":
    console.log("This is in our Accessory section");
    break;
  case "gadget":
    console.log("This product is in our gadget collection");
    break;
  default:
    console.log("Unknown item detected");
}

// Section 3: typeof Operator and Truthy/Falsey values

// Using the typeof operator to check data types:
console.log(typeof storeName); // "string"
console.log(typeof productPrice); // "number"
console.log(typeof isInStock); // "boolean"
console.log(typeof productTags); // "object" (arrays are objects in JavaScript)

// Demonstrating Truthy and Falsey values:

// Example with an empty string (falsey)
// Example with a non-empty string (truthy)
const greeting = "Welcome!";
if (greeting) {
  console.log("Greeting detected");
} else {
  console.log("No greeting detected");
}

// Example with the number 0 (falsey)
// Example with any other number (truthy)
const testNumber = 0;
if (testNumber) {
  console.log("this number is truthy.");
} else {
  console.log("this number is falsey.");
}

// Section 4: Template Literal / Template String recap
const firstName = "James";
const lastName = "Bond";
const city = "London";
const country = "England";

// prettier-ignore
const welcomeMessage = "Welcome" + " " + firstName + " " + lastName + " " + "from" + " " + city + " " + country;

console.log(welcomeMessage);

const betterWelcomeMessage = `Welcome ${firstName} ${lastName} from ${city} ${country}`;

console.log(betterWelcomeMessage);

// Section 5: Template Literal + Ternary

basketSize = 200;

// let freeDelivery;

// if (basketSize >= 250) {
//   freeDelivery = "are";
// } else {
//   freeDelivery = "aren't";
// }

// const deliveryCost = `You ${freeDelivery} eligible for free delivery`;

const freeDelivery = basketSize >= 250 ? "are" : "aren't";

const deliveryCost = `You ${freeDelivery} eligible for free delivery`;

console.log(deliveryCost);
