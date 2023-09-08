const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/13/640/480";
image.alt = "Nature";
console.log(image); // <img src="https://picsum.photos/id/13/640/480" alt="Nature" />