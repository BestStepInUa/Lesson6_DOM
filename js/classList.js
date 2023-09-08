const link = document.querySelector(".link");
console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
const hasDisctiveClass = link.classList.contains("special");
console.log(`hasActiveClass \"is-active\" - ${hasActiveClass}`);
console.log(`hasActiveClass \"special\" - ${hasDisctiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList);