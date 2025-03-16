
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
  addBookToLibrary ();


  
// add the book title/author in the table
const table = document.querySelector('.table');
const tableBody = document.createElement ('tbody');
table.appendChild(tableBody);


let {title, author, ...book} = myLibrary;
console.log(myLibrary);

// myLibrary.forEach(book => {
//   let row = document.createElement ('tr');


//   Object.values(book).forEach(text => {  
//     let cell = document.createElement('td');
//     let textNode = document.createTextNode(text); //inserts text to the td

//       cell.appendChild(textNode); //appending the text to the td
//       row.appendChild(cell); //append the td to the row
    
//   })

//   tableBody.appendChild(row); // appends row to table body
// })


myLibrary.forEach(book => {
  let row = document.createElement ('tr');


  Object.values(book).forEach(text => {
    if (text === "RF Kuang"){
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text); //inserts text to the td

      cell.appendChild(textNode); //appending the text to the td
      row.appendChild(cell); //append the td to the row
    } else return {};
    
  })

  tableBody.appendChild(row); // appends row to table body

})
