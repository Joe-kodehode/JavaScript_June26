// Lesson 9: Week 3 recap

// Section 1: Looping through arrays.

const fruitNames = ["Apple", "Banana", "Mango", "Grapes", "Kiwi"];

// a regular 'for loop' to loop over the array. We get access to change starting index, when we end the loop and how we increment the loop.

for (let i = 2; i < fruitNames.length; i++) {
  // console.log(fruitNames[i]);
}

// looping backwards
for (let i = fruitNames.length - 1; i >= 0; i--) {
  console.log(fruitNames[i]);
}

// If we're looping over an array and going from the start to the end, what type of loop could we use instead of a regular 'for loop?'

// for of
for (let fruit of fruitNames) {
  console.log(fruit);
}

// Section 2: Looping with Conditions

const numbers = [12, 5, 8, 44, 3, 22, 130, 15];

for (let num of numbers) {
  // if the number is less than 10, skip it
  if (num < 10) {
    continue;
  }
  // if the number is greater than 100, stop the loop
  if (num > 100) {
    break;
  }
  // otherwise console log the number
  console.log(num);
}

// Section 3: While loop guessing game

const ranNum = Math.floor(Math.random() * 10) + 1; // 1-10

let guess = 0;

while (guess !== ranNum) {
  guess++;
  console.log(`Currently guessing: ${guess}`);
  if (guess === ranNum) {
    console.log("Correct!");
  }
}

// Section 4: Object review

const book = {
  title: "The Hobbit",
  author: "Tolkien",
  pages: 310,
};

// alter an existing key's value
book.pages += 10;

// add a new key value pair to our object
// book.published = 1937;

// deleting a key value pair from our book object
// delete book.author;

console.log(book);

// targeting values using dot notation
console.log(book.pages);

// targeting values using bracket notation
console.log(book["title"]);

// Section 5: Looping through an object using 'for in' loop and dynamic keys

for (let key in book) {
  console.log(key); // logs the current key being looped over
  console.log(book[key]); // logs the current value being looped over
}

// Section 6: Array of Objects

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    country: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    country: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    country: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    country: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    country: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 0.8,
    country: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    country: "Costa Rica",
  },
];

// Describe each fruit by looping over our array of objects.

// Apple is a red fruit from USA
// Banana is a yellow fruit from Ecuador

// HINT: template string  `${}`

for (let fruit of fruits) {
  console.log(`${fruit.name} is a ${fruit.color} fruit from ${fruit.country}`);
}

// Section 7: Find the cheapest fruit

let lowestPrice = Infinity;
let cheapestName;

for (let fruit of fruits) {
  if (fruit.pricePerKg < lowestPrice) {
    lowestPrice = fruit.pricePerKg;
    cheapestName = fruit.name;
  }
}
console.log(
  `${cheapestName} is the cheapest fruit with a price of ${lowestPrice}`,
);

// Section 8: Adding and removing properties in a loop

for (let fruit of fruits) {
  fruit.good = true;
  delete fruit.good;
}

console.log(fruits);

// Section 9: Object in function

function describeFruit(fruit) {
  return `${fruit.name} contains ${fruit.calories} calories per 100g`;
}

console.log(describeFruit(fruits[3]));
