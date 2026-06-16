// Lesson 8: JavaScript Objects

// Section 1: What is an Object?

// An object is a data type that stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

console.log(person); // log the entire object
console.log(person.age); // log only the age using dot notation
console.log(person["age"]); // log only the age using bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

// Section 2: Creating, Modifying and Deleting keys.

person.country = "Norway"; // create a new key-value pair
person.job = "CEO"; // modifying an existing key's value
delete person.age; // deletes a key-value pair

console.log(person);

// Section 3: Looping over an object using 'for in' loop

// we use the 'for in' loop to loop over objects. It gives us access to they keys in our object, each loop a new key is stored in the "key" variable.

const user = {
  name: "Joe",
  age: 38,
  location: "Stavanger",
  hobbies: "gaming",
};

for (let key in user) {
  console.log(key); // logs the current loops key
  console.log(user[key]); // logs the current keys value
}

// Dynamic key access is useful when you don’t know the property name in advance, like when looping through an object or handling user input.

// Section 4: Nested Objects and Arrays

const userData = {
  firstName: "Bob",
  lastName: "Dickens",
  age: 39,
  job: "Builder",
  hasLicense: true,
  hobbies: ["handy-work", "drinking beer", "bird-watching"],
  address: {
    streetName: "Frontstreet",
    streetNumber: 1,
    postcode: 6969,
  },
};

console.log(userData.hobbies[2]);
console.log(userData.address.streetName);

for (let key in userData) {
  console.log(key);
  console.log(userData[key]);
}

// Section 5: Array of Objects (Object array)

const products = [
  { productName: "Shirt", productId: 1, stock: 32 },
  { productName: "Pants", productId: 2, stock: 5 },
  { productName: "Socks", productId: 3, stock: 22 },
];

console.log(products[2].productName);
console.log(products[1].stock);

// Using a 'for of' loop, loop over the products array.
// In the loop, create a message for each product.
// In the console it should show:
// "Shirt has a product ID of 1 and has 32 left in stock"
// "Pants has a product ID of 2 and has 5 left in stock"
// "Socks has a product ID of 3 and has 22 left in stock"

for (let product of products) {
  console.log(
    `${product.productName} has a productID of ${product.productId} and has ${product.stock} left in stock`,
  );
}

// Section 6: Descriptive senteces with Object

const people = [
  {
    name: "Thomas",
    isMale: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMale: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMale: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMale: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMale: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    isMale: true,
    age: 36,
    hobbies: ["movies"],
  },
  {
    name: "Annabelle",
    isMale: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    isMale: false,
    age: 18,
    hobbies: [
      "design",
      "drawing",
      "css",
      "eating at reasturants",
      "cinema",
      "card games",
    ],
  },
];

// for of loop

// "Thomas is 23 years old, a man who enjoys cycling"

// if person.isMale comes back true "man"
// if person.isMale comes back false "woman"

for (let person of people) {
  // let gender;

  // if (person.isMale) {
  //   gender = "man";
  // } else {
  //   gender = "woman";
  // }

  const gender = person.isMale ? "man" : "woman";

  // a random number between 0-2 to be our random index for person.hobbies
  const randomIndex = Math.floor(Math.random() * person.hobbies.length);

  console.log(
    `${person.name} is ${person.age} years old, a ${gender} who enjoys ${person.hobbies[randomIndex]}`,
  );
}

// Section 7: Working with object data

// calculate the total age of everyone added together

let totalAge = 0;
for (let person of people) {
  totalAge += person.age;
}
console.log(totalAge);
