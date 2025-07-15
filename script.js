const myLibrary = [];

class Book {
  #title;
  #author;
  #id;

  constructor(title, author, id = crypto.randomUUID()){
    this.#title = title;
    this.#author = author;
    this.#id = id;
  }

  getBook (){
    const newBtn = document.querySelector('.newBookBtn')
    const dialog = document.querySelector('dialog')

    newBtn.addEventListener("click", () => {
      dialog.showModal();
  });
  }

  addBook (){
      const dialog = document.querySelector('dialog');
      const addBookBtn = document.querySelector('.addBookBtn');

      addBookBtn.addEventListener('click', (e) => {
        const inputTitle = document.querySelector('#title')
        const inputAuthor = document.querySelector('#author')

        if (inputTitle.value === ''){
          return;
        } else {this.#title = inputTitle.value;}

        if (inputAuthor.value === ''){
          return;
        } else {this.#author = inputAuthor.value;}

        //pushes the book to the library
        myBook = new Book (this.#title, this.#author, this.#id); 
        myLibrary.push (myBook);


        //add the book to the webpage
        const tbody = document.querySelector('tbody')
        const tr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        tbody.appendChild(tr);
        tr.appendChild(tdTitle);

        const titleNode = document.createTextNode(this.#title);
        tdTitle.appendChild(titleNode);
        tdTitle.appendChild(titleNode)

        const tdAuthor = document.createElement('td');
        tbody.appendChild(tr);
        tr.appendChild(tdAuthor);

        const authorNode = document.createTextNode(this.#author);
        tdAuthor.appendChild(authorNode);
        tdAuthor.appendChild(authorNode);

        //adds read button in the webpage
        const readBtn = document.createElement ('button');
        tr.appendChild (readBtn);
        readBtn.innerHTML = 'Unread';

        readBtn.addEventListener('click', function(e){
          let target = e.target;
          if (target.innerHTML == 'Unread'){
            target.innerHTML = 'Read'
          } else if (target.innerHTML == 'Read'){
            target.innerHTML = 'Unread'
          }
        })

        //adds delete button 
        const deleteBtn = document.createElement ('button');
        tr.appendChild (deleteBtn);
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.setAttribute("class", `del ${this.#id}`);

        deleteBtn.addEventListener('click', function (e){
          console.log(e.target.parentNode);
          e.target.parentNode.remove();
        })

        e.preventDefault();
        dialog.close();
      })
  }
};


const inputText = document.getElementById('title');
const authorText = document.getElementById('author');

inputText.addEventListener('input', () => {
  inputText.reportValidity();

  if (inputText.validity.valid){
    log('input ok');
  } else if (inputText.validity.valueMissing){
    log ('required field cannot be empty')
  }
})

authorText.addEventListener('input', () => {
  authorText.reportValidity();

  if (authorText.validity.valid){
    log('input ok');
  } else if (authorText.validity.valueMissing){
    log ('required field cannot be empty')
  }
})

myBook = new Book ()
myBook.getBook()
myBook.addBook()

//you can make this code cleaner, just add all event listeners into one place