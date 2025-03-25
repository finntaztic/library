
const myLibrary = [
  {
  title: "Babel",
  author: "RF Kuang",
  id: crypto.randomUUID()
}, {
  title: "Kafka",
  author: "Murakami",
  id: crypto.randomUUID()
}
];



//form and dialog

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






//adding book to library

function Book (title, author, id = crypto.randomUUID()) {
  this.title = title;
  this.author = author;
  this.id = id;
}



    function addBookToLibrary() {

      let title = inputTitle.value;
      let author = inputAuthor.value;
      let id = crypto.randomUUID(); 
      
      let newBook = new Book (title, author, id); 

      myLibrary.push (newBook);


      const table = document.querySelector('.table');
      const tableBody = document.createElement ('tbody');
      table.appendChild(tableBody);


      const last = myLibrary.at(-1);

      console.log(last);

      myLibrary.forEach(book => {
      let row = document.createElement ('tr');

      

      if (book === last){

        Object.values(book).forEach(text => {
          if (text === book.author || text === book.title ){
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text); //inserts text to the td
      
            cell.appendChild(textNode); //appending the text to the td
            row.appendChild(cell); //append the td to the row

            

          } else return {};
          
        });
          } else return {};

          tableBody.appendChild(row);
          const btn = document.createElement ('button');
          row.appendChild(btn);
          btn.innerHTML = "Delete";


          //the button should be connected to the uuid of the array 
    
    });
        }




        addBookBtn.addEventListener("click", (e) => {
          e.preventDefault();
          addBookToLibrary ();
        });
        


 