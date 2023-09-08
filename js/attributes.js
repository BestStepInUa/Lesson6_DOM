const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(`Image has attribute "src": ${image.hasAttribute("src")}`); // true
console.log(`Image has attribute "height": ${image.hasAttribute("height")}`);// false

console.log(`Image attribute "alt": ${image.getAttribute("alt")}`); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");

console.log(`Image attribute "alt": ${image.getAttribute("alt")}`); // Amazing nature

console.log(`Image CSS classes: ${image.attributes.class.nodeValue}`);
image.classList.add("picture");
console.log(`Image CSS classes: ${image.classList}`);
image.classList.replace("picture", "img");
console.log(`Image CSS classes: ${image.attributes.class.nodeValue}`);
image.classList.remove("img");
console.log(`Image CSS classes: ${image.classList}`);
image.classList.toggle("img");
console.log(`Image CSS classes: ${image.attributes.class.nodeValue}`);
image.classList.replace("img", "picture");
console.log(`Image CSS classes: ${image.classList}`);
image.classList.toggle("picture");
console.log(`Image CSS classes: ${image.classList}`);

const trueOrFalse = image.attributes.class.nodeValue === image.classList;
console.log(trueOrFalse);