async function loadBooks() {
  const response = await fetch("db.json");
  const data = await response.json();
  let template = "";

  for (let i = 0; i < data.books.length; i++) {
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

  const container = document.querySelector("#data-output");
  container.innerHTML = template;
}
loadBooks();
