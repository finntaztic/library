
const myLibrary = [{
  title: "Babel",
  author: "RF Kuang",
  
}, {
  title: "Kafka",
  author: "Murakami",
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
  addBookToLibrary ();

// add the book title/author in the table
const table = document.querySelector('.table');
const tableBody = document.createElement ('tbody');
table.appendChild(tableBody);


let {title, author, ...bookProperty} = myLibrary;
console.log(myLibrary);




myLibrary.forEach(bookRows => { //will show book rows
  console.log(bookRows)
  let row = document.createElement ('tr');
  
    let cell = document.createElement('td');
    let textNode = document.createTextNode(JSON.stringify(bookProperty.value)); //inserts text to the td

  cell.appendChild(textNode); //appending the text to the td
  row.appendChild(cell); //append the td to the ro
  tableBody.appendChild(row); // appends row to table body
})


///unresolved yet

const button = document.createElement('button');
const body = document.querySelector ('body');
body.appendChild(button);
button.textContent = "New Book";



// const dialog = document.querySelector('dialog');
// const closeBtn = document.querySelector('dialog button');


// showBtn.addEventListener('click', () => {
//   dialog.showModal();
// })


