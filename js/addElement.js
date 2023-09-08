const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly  - додано в JavaScript";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax  - додано в JavaScript";
list.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES  - додано в JavaScript";
list.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);

//--------------------------------------------------- //

const orderedList = document.querySelector(".list");

// Adds an item to the end of the ordered list
const lastOlItem = document.createElement("li");
lastOlItem.textContent = "Last item - додано в JavaScript";
orderedList.append(lastOlItem);

// Adds an item to the beginning of the ordered list
const firstOlItem = document.createElement("li");
firstOlItem.textContent = "First item - додано в JavaScript";
orderedList.prepend(firstOlItem);

// Adds a title before the ordered ordered list
const olTitle = document.createElement('h2');
olTitle.textContent = "Ordered List - додано в JavaScript"
orderedList.before(olTitle)

// Adds a image after the ordered list
const image = document.createElement("img");
image.src = "https://picsum.photos/id/15/320/240";
image.alt = "Rocks and waterfall";
orderedList.after(image);

// Move a image abefor the list
list.before(image);

// Remove last list element
const lastListElement = list.lastElementChild;
lastListElement.remove();