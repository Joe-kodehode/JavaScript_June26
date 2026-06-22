// DOM Manipulation - Document Object Model

// Section 1: What is the DOM?

// The DOM is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// Section 2: Targeting existing elements in our HTML from JS.

const heading = document.getElementById("my-heading");
console.log(heading);

const list = document.querySelector("ul");
console.log(list);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const button = document.querySelector("#my-button");
console.log(button);

// Section 3: Changing text or HTML content

// textContent sets or gets the plain text inside and element (can't include html tags)
heading.textContent = "Welcome to the DOM Lesson!";

// innerHTML sets or gets the HTML inside an element (can include html tags)
heading.innerHTML = "<span style='color: red'>DOM Manipulation</span>";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags inside already existing tags.

// Section 4: Changing Styles from JS

heading.style.fontSize = "60px";
heading.style.textTransform = "uppercase";
heading.style.color = "blue";
heading.style.textAlign = "center";

// Section 5: Creating and Adding new elements

// Step 1 - create the element
// Create a new <p> element
const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

// Step 2 - add some personality! (text, classes etc)
// Set the textContent
newParagraph.textContent = "I was created in the JS";
newParagraph2.textContent = "I was created in the JS also";

// Add a class
newParagraph.classList.add("custom-paragraph");
newParagraph2.classList.add("custom-paragraph");

// Step 3 - Put it on the page!
// Place the element on our page using append (goes to the bottom)
document.body.append(newParagraph, newParagraph2);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Create a new image element
const newImage = document.createElement("img");

newImage.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=768&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

// We can add an attribute using setAttribute
newImage.setAttribute("alt", "A castle on a mountain in the fog");

// Or we can do it by assigning a value to the key
newImage.alt = "A castle on a mountain in the fog";

newImage.classList.add("castlePic");

document.body.append(newImage);

// 📌 setAttribute vs classList.add:
// setAttribute("class", "one two") → sets or replaces all classes
// classList.add("extra") → adds a class without removing others

// Adding a new element to the top of the page using prepend
const firstParagraph = document.createElement("p");
firstParagraph.textContent = "I live at the top of the page!";
document.body.prepend(firstParagraph);

// Insert an element into the middle (before a specific element)

const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";

// Targeting the element you want the new element to go before
const target = document.querySelector("p:nth-of-type(2)");

// Inserting the element onto the page, infront of the target
document.body.insertBefore(midParagraph, target);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new li to our existing ul

// Step 1 - Create the new element
const newLi = document.createElement("li");

// Step 2 - Add some flavor (textContent, class)
newLi.textContent = "Item 3";

// Step 3 - Append
list.append(newLi);

// Section 6: Removing Elements using JS

const firstListIem = document.querySelector("li");
list.removeChild(firstListIem);

// Section 7: Parent and Child relationships in JS

console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// Section 8: classList Methods

const box = document.querySelector(".box");

// Add a class
box.classList.add("active");

// Remove a class
box.classList.remove("hidden");

// Toggle a class (adds the class if missing, removes the class if present)

box.classList.toggle("Highlight");

// Check if an element has a class

console.log(box.classList.contains("Highlight"));

// Section 9: Create a list using a loop.

// List of favorite beer

const favoriteBeer = [
  "Cisk Excel",
  "Tsingtao",
  "Mango ipa",
  "Pils",
  "Corona",
  "Guiness",
  "Efes",
  "Utenos",
  "Rinkuskiu",
  "Bilk",
];

// Make a heading H2 for our new list
const beerHeading = document.createElement("h2");
beerHeading.textContent = "My fav beers!";
beerHeading.classList.add("beer-heading");
document.body.append(beerHeading);

// Make the ul
const beerUl = document.createElement("ul");
beerUl.classList.add("beer-ul");
document.body.append(beerUl);

// Create the Li's
for (let beer of favoriteBeer) {
  const beerLi = document.createElement("li");
  beerLi.textContent = beer;
  beerLi.classList.add("beerLi");
  beerUl.append(beerLi);
}

// function that runs when the button is clicked

function toggleMode() {
  document.body.classList.toggle("darkmode");
}

button.addEventListener("click", toggleMode);
