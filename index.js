const container = document.querySelector("#data-output");

async function loadBooks() {
  const response = await fetch("db.json");
  const data = await response.json();

  console.log(data);
  let template = "";
  for (let i = 0; i < data.books.length; i++) {
    console.log(data.books[i].title);
    template += `
      			<tr>
      				<td>${data.books[i].title}</td>
      				<td>${data.books[i].subtitle}</td>
      				<td>${data.books[i].author}</td>
      				<td>${data.books[i].pages}</td>
      				<td>${data.books[i].isbn}</td>
      			</tr>
      		`;
  }
}
loadBooks();

container.innerHTML = template;

// // const renderPosts = async (term) => {
// //   console.log(term);
// //   let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";
// //   if (term) {
// //     uri += `&q=${term}`;
// //   }

// const res = await fetch("db.json");
// const posts = await res.json();
// console.log(posts);

// let template = "";
// posts.forEach((post) => {
//   template += `
//     			<tr>
//     				<td>${book.title}</td>
//     				<td>${book.subtitle}</td>
//     				<td>${book.author}</td>
//     				<td>${book.pages}</td>
//     				<td>${book.isbn}</td>
//     			</tr>
//     		`;
// });

// container.innerHTML = template;

// window.addEventListener("DOMContentLoaded", () => renderPosts());
