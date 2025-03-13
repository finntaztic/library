
const myLibrary = [];


function Book (title, author, id = crypto.randomUUID() ) {
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


  // were trying to loop through the property and content of the array
  //supposedly, the properties are from the Book
  //the content is from the addbooktolibrary


  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }

// add the book title/author under the table
const table = document.querySelector('.table');
const tableBody = document.createElement ('tbody');
table.appendChild(tableBody);

myLibrary.forEach(function (addBookToLibrary){
  const tableRow = document.createElement ('tr');
  tableBody.appendChild(tableRow);

  myLibrary.forEach(function (bookList) {
    const tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = addBookToLibrary[bookList];
  })




  // const tableData = document.createElement('td');
  // tableRow.appendChild(tableData);
  // tableData.textContent = JSON.stringify(addBookToLibrary);
});


// const table = document.querySelector('.table');
// const tableBody = document.createElement ('tbody');
// const tableRow = document.createElement ('tr');
// tableBody.appendChild(tableRow);
// table.appendChild(tableBody);
// myLibrary.forEach(function (addBookToLibrary){
//   const tableData = document.createElement('td');
//   tableRow.appendChild(tableData);
//   tableData.textContent = JSON.stringify(addBookToLibrary);
// });




// items.forEach(function(foodItem) {
//   var foodRow = document.createElement("tr");
//   tableBody.appendChild(foodRow);
//   propertyList.forEach(function(propertyName) {
//     var foodProperty = document.createElement("td");
//     foodRow.appendChild(foodProperty);
//     if (propertyName === "imageSrc") {
//       var image = document.createElement("img");
//       foodProperty.appendChild(image);
//       image.src = foodItem[propertyName];
//       image.alt = foodItem[propertyName];
//     } else {
//       foodProperty.textContent = foodItem[propertyName];
//     }
//   });
// });


///unresolved yet

// const dialog = document.querySelector('dialog');
// const showBtn = document.querySelector('.newBook');
// const closeBtn = document.querySelector('dialog button');

// showBtn.addEventListener('click', () => {
//   dialog.showModal();
// })


