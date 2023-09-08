// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// console.log(technologies);
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// // ----------------------------------- //
// const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// const weekList = document.querySelector(".week-list");

// const days = week.map((day, idx) => `<li class="week-item">${idx+1} day of the week is ${day}</li>`).join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(days);

// // Adding all the markup in one operation
// weekList.innerHTML = days;

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;