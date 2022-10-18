fetch("db.json")
  .then((res) => res.json())
  .then((books) => {
    let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let book of books) {
          out += `
    			<tr>
    				<td>${book.title}</td>
    				<td>${book.subtitle}</td>
    				<td>${book.author}</td>
    				<td>${book.pages}</td>
    				<td>${book.isbn}</td>
    			</tr>
    		`;
        }

        placeholder.innerHTML = out;
      });
