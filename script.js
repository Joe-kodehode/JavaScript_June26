// Lesson 7: Loops

// A loop is a way to repeat code without writing it multiple times.

// Section 1: Why we use loops!

// D.R.Y. Don't repeat yourself!

const names = ["Tom", "Eric", "Jessica", "Billy", "Henry"];

// Without a loop (repeating ourselves)
console.log(`Hei ${names[0]}`);
console.log(`Hei ${names[1]}`);
console.log(`Hei ${names[2]}`);

// Section 2: The 'for loop'
// where does the loop start; when does the loop end; what changes between each loop

// With a loop (cleaner, dynamic, scaleable)
for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

for (let i = 1; i <= 10; i += 2) {
  console.log(`i is currently: ${i}`);
}

// reverse
for (let i = names.length - 1; i >= 0; i--) {
  console.log(`Hei ${names[i]}`);
}

// Section 3: Combining loops with Functions and Methods

// Create a function with a loop to greet names in a messy array

const people = ["alice", "    BOB    ", "chaRliE", "deBbY"];

// Methods to remove whitespace and make lower case: .toLowerCase(), .trim()

function greetAndClean(peopleArray) {
  for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].trim().toLowerCase());
  }
}

greetAndClean(people);

// Create a function with a loop to combine strings in an array to give us one string

function makeSentence(wordsArray) {
  let sentence = "";

  for (let i = 0; i < wordsArray.length; i++) {
    sentence += wordsArray[i];
    if (i < wordsArray.length - 1) {
      sentence += " ";
    }
  }
  return sentence;
}

console.log(makeSentence(["Loops", "are", "really", "useful"]));

// Some methods have inbuilt loops! We can recreate what we just did but use the join method instead.
function makeSentence2(wordsArray) {
  return wordsArray.join(" ");
}

console.log(makeSentence2(["Loops", "are", "really", "useful"]));

// Section 4: The 'for... of' loop

// The 'for of' loop, loops over an array from start to finish. It gives us access to a variable which represents a different element in the array each loop.

const colors = ["red", "green", "blue"];

// What should the variable be named? Color

for (let color of colors) {
  console.log(color);
}

// Section 5: The 'While Loop'
// Warning! We are now entering the infinitle loop danger zone!!

// While loops are useful for when you don't know how many loops you need. (when it's unknown to the coder when the loop will end)
let count = 1;

while (count <= 5) {
  console.log(`The current count is: ${count}`);
  count++;
}

// Guessing game with a while loop and randomness!

const secretNum = Math.floor(Math.random() * 10) + 1; // random num between 1-10

let guess = 0;

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing: ${guess}`);
  if (guess === secretNum) {
    console.log(`Congratulations, you win! The number was ${secretNum}`);
  }
}

// Section 6: Creating Arrays with Loops
// make a function that returns an array filled with random numbers.

function makeRandomArray(arrLength, range) {
  const result = [];

  for (let i = 0; i < arrLength; i++) {
    const randomNumber = Math.floor(Math.random() * range) + 1;
    result.push(randomNumber);
  }
  return result;
}

const bigRandomArray = makeRandomArray(100, 100);
console.log(bigRandomArray);
// console.log(makeRandomArray(20, 10));

// Decide how long the array will be (how many random numbers)✅
// Decide what range the numbers will be (1-20, 1-100 etc)✅

// Section 7: Finding the biggest number in an array.

const exampleNumArray = [5, 10, 3, 100, 34, 1];

function findHighest(array) {
  let biggestNum = 0;

  for (let num of array) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  return biggestNum;
}

console.log(findHighest(bigRandomArray));

// Section 8: Using break and continue

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

// continue; lets us skip to the next loop.
// Skip "Andy"

for (let name of moreNames) {
  if (name === "Andy") {
    continue;
  }
  console.log(`Hello, ${name}`);
}

// break; lets us break out of the loop completely.
for (let name of moreNames) {
  if (name === "Erin") {
    break;
  }
  console.log(`Hello, ${name}`);
}
