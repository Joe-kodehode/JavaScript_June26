// Fruit Catalog Project

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    origin: "USA",
    alt: "a red apple on a white background",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    origin: "Ecuador",
    alt: "A fresh banana on a white background",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    origin: "Spain",
    alt: "lots of orange slices",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    origin: "Mexico",
    alt: "a pile of cut up strawberries",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    origin: "India",
    alt: "a stack of mangos",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    origin: "Italy",
    alt: "a heap of grapes",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    origin: "Costa Rica",
    alt: "a pineapple cut in half",
  },
];

// 1 - Create a container to hold our fruit cards. ✅
// A - crate
// B - spice - textContent or add a class
// C - append to our page

const container = document.createElement("div");
container.classList.add("fruit-catalog");
document.body.append(container);
// get some images, put them in an images folder ✅

// 2 - Fill the fruit container with articles.

for (let fruit of fruits) {
  // create the article, add a class
  const card = document.createElement("article");
  card.classList.add("fruit-card");

  // create the h2, add text and class
  const title = document.createElement("h2");
  title.textContent = fruit.name;
  title.classList.add("fruit-name");

  // create the img, give it src, alt, class
  const image = document.createElement("img");
  image.src = `./images/${fruit.name}.jpg`;
  image.alt = fruit.alt;
  image.classList.add("fruit-image");

  // place the h2, img in the article
  card.append(title, image);

  // place the article in the continer div
  container.append(card);

  // C - create elements (h2, img, p, p, p)
  // D - spice up our h2, img, p, p,p by using template literals to get the info from the fruit objects (color, country, calories, price)
  // E - append our newly created h2, img, p, p, p to the article
  // F - append the article to the container
}

// Break until 13:10
