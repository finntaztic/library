
const myLibrary = [{
  title: "Babel",
  author: "RF Kuang",
}, {
  title: "Kafka",
  author: "Murakami",
}];


function Book (title, author) {
  this.title = title;
  this.author = author;
}


function addBookToLibrary(title, author) {
  const newBook = new Book (title, author); 
  myLibrary.push (newBook);
  console.log(newBook)
  }
  addBookToLibrary ();

// add the book title/author in the table
const table = document.querySelector('.table');
const tableBody = document.createElement ('tbody');
table.appendChild(tableBody);


myLibrary.forEach(book => {
  let row = document.createElement ('tr');

  Object.values(book).forEach(text => {
    let cell = document.createElement('td');
    let textNode = document.createTextNode(text); //inserts text to the td
    cell.appendChild(textNode); //appending the text to the td
    row.appendChild(cell); //append the td to the row
  })

  tableBody.appendChild(row); // appends row to table body
})


///unresolved yet

const button = document.createElement('button');
const body = document.querySelector


const dialog = document.querySelector('dialog');
const showBtn = document.querySelector('.newBook');
const closeBtn = document.querySelector('dialog button');


showBtn.addEventListener('click', () => {
  dialog.showModal();
})


