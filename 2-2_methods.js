// Lesson 5: Methods (built-in functions)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it. Some methods alter the original piece of data, others don't alter the original!

// Section 1: String Methods
const text = "     Hello, JavaScript World World!     ";
console.log(text);
console.log(text.trim()); // removes whitespace from both ends of the string, does not alter the original.
console.log(text.toUpperCase()); // converts the string to all uppercase
console.log(text.toLowerCase()); // converts the string to all lowercase
console.log(text.indexOf("JavaScript")); // returns the starting index of the passed in text
console.log(text.slice(5, 10)); // extracts characters from index 5-10. The starting index is included, the end index is not included. Does not alter the original.
console.log(text.replace("World", "Universe")); // replaces the first instance of the word "World" with "Universe"
console.log(text.replaceAll("World", "Universe")); // replaces ALL instances of the word "World" with "Universe"
console.log(text.charCodeAt(5)); // Returns the Unicode number of the character at index 5
console.log(text.length); // returns the amount of characters in the given string. Starts at 1, not 0!! we're not checking index!
console.log(text.repeat(3));

// Section 1.1: Converting a String into an Array
console.log(text.trim().split(" "));

// Section 1.2: Converting a String into a Number
let numberString = "123.45xyz";

console.log(Number(numberString)); // Returns the string turn into a number, returns NaN if any part is invalid.
console.log(parseInt(numberString)); // Returns an integer, ignores deciamals and invalid characters
console.log(parseFloat(numberString)); // Returns a float, ignores invalid characters

// Section 2: Array Methods
const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns the number of elements in the array (does not start at 0! has nothing to do with index!)

colors.push("Yellow"); // adds "Yellow" to the end of the array
console.log(colors);
colors.pop(); // removes the last element in the array
console.log(colors);
// const poppedColor = colors.pop(); // You can store the removed element in a new variable (still removes it from the original!)
colors.unshift("Purple"); // adds "Purple" to the beginning of the array
console.log(colors);
colors.shift(); // removes the first element in the array
console.log(colors);
colors.splice(0, 2, "Orange", "Pink"); // replaces elements in the array.  Syntax: splice(starting index, amount of elements to remove, elements to replace with)
console.log(colors);
const splicedColors = colors.toSpliced(1, 1, "Brown"); // Same as .splice() but does not alter the array, we can store the result in a new variable.
console.log(colors);
console.log(splicedColors);
const unsortedArray = [3, 1, 4, 1, 5, 9, 5];
console.log(unsortedArray.sort()); // sorts the array by numeric or alphabetical value
const sortedArray = unsortedArray.toSorted(); // sorts the array, does not affect the original array but can be stored in a new variable.
console.log(sortedArray);
console.log(sortedArray[6]); // returns the element at index 6
console.log(sortedArray.at(6)); // returns the element at index 6
console.log(sortedArray.at(-2)); // returns the second last element
const reversedArray = sortedArray.toReversed(); // reverses the array, does not affect the original, can be stored in a new variable
console.log(reversedArray);
console.log(sortedArray);
sortedArray.reverse(); // reverse the original array.
console.log(sortedArray);

// Section 2.1: Converting an Array into a String
console.log(colors);
console.log(colors.join(" ")); // converts an array into a string with a space between each word

// Section 3: Number Methods
const myNum = 3.239472394;
console.log(myNum.toFixed(2)); // rounds the decimals to 2 places and turns it into a string.
console.log(myNum.toExponential()); // returns a string with myNum in exponential notation.
console.log(myNum.toString()); // returns our number turned into a string.

// Section 4: Chaining Methods Together
// Example 1:
const rawString = "    JavaScript is fun!    ";
const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();
console.log(processedString);

// Example 2:
const words = ["HeLLo", "woRLd"];
const fixedWords = words.join(" ").toLowerCase();
console.log(fixedWords);

// Example 3:
// Take a number and round it to 2 decimals, convert it into a string, repeat the string twice.
const numberExample = myNum.toFixed(2).repeat(2);
console.log(numberExample);

// Sidequest: Rounding numbers
console.log(Math.round(123.45)); // rounds a number to closest
console.log(Math.ceil(123.45)); // rounds up
console.log(Math.floor(123.45)); // rounds down
