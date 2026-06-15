// Lesson 6: Functions and Methods recap

// Section 1: Check if a list includes an item (functions, ternary, array)

const shoppingList = ["milk", "bread", "tuna", "cheese", "lime"];
const gamesList = [
  "MTG",
  "Baulder's Gate 3",
  "Expedition 33",
  "Mario Kart",
  "Flexbox Froggy",
];

function checkItem(item, array) {
  const doesOrDoesnt = array.includes(item) ? "does" : "doesn't";

  return `The list ${doesOrDoesnt} include ${item}`;
}

console.log(checkItem("milk", shoppingList));
console.log(checkItem("fries", shoppingList));
console.log(checkItem("MTG", gamesList));
console.log(checkItem("Gears of War", gamesList));

// Section 2: Convert a Sentence into Kebab Case (functions, methods)

function toKebabCase(string) {
  // return string.trim().toLowerCase().split(" ").join("-");
  return string.trim().toLowerCase().replaceAll(" ", "-");
}

console.log(toKebabCase("   Hello World From JavaScript   "));

// Section 3: Make a function to check if a word is a Palindrome(functions, methods)

function isPalindrome(word) {
  if (
    word.toLowerCase() === word.split("").toReversed().join("").toLowerCase()
  ) {
    return `The word ${word} is a palindrome`;
  } else {
    return `The word ${word} is not a palindrome`;
  }
}

console.log(isPalindrome("Racecar")); // racecar is a palindrom
console.log(isPalindrome("banana")); // banana is not a palindrome

// Section 4: Shorten a string (functions, methods)

function shortenString(string, maxLength) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  } else {
    return string;
  }
}

console.log(shortenString("This string is long and needs shortening", 10));

console.log(shortenString("This string short", 15));

// Section 5: Introduction to Math.random

// Math.random() is a built-in JavaScript method that gives you a random number betwwen 0 (inclusive) and 1 (exclusive)

// How to get a random number between 1-10

// const randomNumber = Math.random(); // 0.0000 - 0.9999

// const randomNumber = Math.random() * 10; // 0.0000 - 9.9999

// const randomNumber = Math.floor(Math.random() * 10); // 0-9

const randomNumber = Math.floor(Math.random() * 10) + 1; // 1-10

console.log(randomNumber);

// We can use Math.random() to get a random element from an Array!

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
  "bidoof",
  "incineroar",
  "jolteon",
  "arceus",
  "grovyle",
  "pluzzel",
  "jigglypuff",
  "fridgey",
  "ditto",
  "trubbish",
  "dialga",
  "palkia",
];

// random number between 0 - the legnth of the array
const ranNum = Math.floor(Math.random() * pokemon.length);
console.log(ranNum);
console.log(pokemon[ranNum]);

// Section 6: Rock, Paper, Scissors game (function, switch case, Math.random())

function rockPaperScissors(userAnswer, compAnswer) {
  switch (userAnswer + compAnswer) {
    case "rock" + "paper":
    case "paper" + "scissors":
    case "scissors" + "rock":
      return "computer wins!";
    case "paper" + "rock":
    case "scissors" + "paper":
    case "rock" + "scissors":
      return "user wins!";
    case "paper" + "paper":
    case "scissors" + "scissors":
    case "rock" + "rock":
      return "draw!";
    default:
      return "error!";
  }
}

const answerArray = ["rock", "paper", "scissors"];
// Get a random number between 0-2
const randomIndex = Math.floor(Math.random() * answerArray.length);
// Get a random string from the answerArray array
const computerAnswer = answerArray[randomIndex];
const usersAnswer = "paper";

console.log(usersAnswer);
console.log(computerAnswer);
console.log(rockPaperScissors(usersAnswer, computerAnswer));
