
const myLibrary = [{
  title: "Babel",
  author: "RF Kuang",
  id: crypto.randomUUID()
  
}, {
  title: "Kafka",
  author: "Murakami",
  id: crypto.randomUUID()

}];


function Book (title, author, id = crypto.randomUUID()) {
  this.title = title;
  this.author = author;
  this.id = id;
}


function addBookToLibrary(title, author, id) {
  const newBook = new Book (title, author, id); 
  myLibrary.push (newBook);
  console.log(newBook)
  }

// add the book title/author in the table
const table = document.querySelector('.table');
const tableBody = document.createElement ('tbody');
table.appendChild(tableBody);

myLibrary.forEach(book => {
  let row = document.createElement ('tr');


  Object.values(book).forEach(text => {
    if (text === book.author || text === book.title ){ 
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text); //inserts text to the td

      cell.appendChild(textNode); //appending the text to the td
      row.appendChild(cell); //append the td to the row
    } else return {};
    
  })

  tableBody.appendChild(row); // appends row to table body

})


const newBtn = document.createElement('button');
const body = document.querySelector('body');
body.appendChild(newBtn);
newBtn.textContent = 'New Button'

//dialog part

const dialog = document.createElement('dialog')
const closeBtn = document.createElement ('button')
closeBtn.textContent = 'X';
const p = document.createElement('p')
p.textContent = "Add the book you read 😍";
body.appendChild(dialog)

dialog.appendChild(closeBtn)
dialog.appendChild(p)

const form = document.createElement ('form');
dialog.appendChild(form);

//title

const labelTitle = document.createElement('label');
labelTitle.setAttribute ('for', 'book_author');
labelTitle.innerHTML = 'Title';

const inputTitle = document.createElement('input');
inputTitle.setAttribute ('type', 'text', 'id', 'book_author');

const br1 = document.createElement('br');

form.appendChild(labelTitle);
form.appendChild(inputTitle);

form.appendChild(br1);


//author

const labelAuthor = document.createElement('label');
labelAuthor.setAttribute ('type', 'text','for', 'book_author');
labelAuthor.innerHTML = 'Author';

const inputAuthor = document.createElement('input');
inputAuthor.setAttribute ('type', 'text', 'id', 'book_author');

const br2 = document.createElement('br');

form.appendChild(labelAuthor);
form.appendChild(inputAuthor);

form.appendChild(br2);



const addBookBtn = document.createElement('input');
form.appendChild(addBookBtn);
addBookBtn.setAttribute ('type', 'submit','value', 'submit');
addBookBtn.innerHTML = 'Add Book';


newBtn.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeBtn.addEventListener("click", () => {
  dialog.close();
});




//first, i need to create the add book btn where the clg will give the title and the author



addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(inputTitle.value);
})