
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

const labelTitle = document.createElement('label');
labelTitle.setAttribute ('for', 'book_title');
labelTitle.textContent = 'Title';

const inputTitle = document.createElement('input');
inputTitle.setAttribute('type', 'text', 'id', 'book_title')

const labelAuthor = document.createElement('label');

const bookTitle = document.createElement('input');
const bookAuthor = document.createElement('input');
bookTitle.setAttribute ('type', 'text');
bookAuthor.setAttribute ('type', 'text');


const pTitle = document.createElement('p');
pTitle.setAttribute = 'Title'

pTitle.textContent = 'Title'
const pAuthor = document.createElement('p');
pAuthor.textContent = 'Author'


labelTitle.appendChild(pTitle);
labelTitle.appendChild(bookTitle);


labelAuthor.appendChild(pAuthor);
labelAuthor.appendChild(bookAuthor);

form.appendChild(labelTitle);
form.appendChild(labelAuthor);

const addBookBtn = document.createElement('button');
form.appendChild(addBookBtn);
addBookBtn.textContent = 'Add book'


newBtn.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeBtn.addEventListener("click", () => {
  dialog.close();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});


let titleInput = '';
let authorInput = '';

addBookBtn.addEventListener("click", addBookToLibrary)