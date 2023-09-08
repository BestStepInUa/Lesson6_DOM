console.log(document);

const body = document.body;
console.log(body);
body.style.backgroundColor = 'red'

const list = document.querySelector(".list");
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);