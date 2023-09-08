const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
listWithId.style.listStyleType = 'none'
listWithId.style.backgroundColor = 'green';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);

const blogItemById = document.querySelector('#blog');
blogItemById.style.color = '#B5A5F5'

const listItemByTeg = document.querySelector('ul');
listItemByTeg.style.backgroundColor = 'red';
console.log(listItemByTeg);