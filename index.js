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


// POST request
const data = {
  "books": [
    {
      "id": 9,
      "title": "TEST123"
    }
  ]
};

async function requestPOST() {
  const response = await fetch("db.json", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
};

requestPOST();



// const data = {
//   "books": [
//     { "id": 1,
//       "title": "TEST123"
//     }
//   ]
// };

// fetch("db.json", {
//   method: 'PUT', // 'POST' or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: data,
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
