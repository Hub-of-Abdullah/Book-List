/* DOM selection */
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const price = document.querySelector('#price');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');


/* Event Listner */
btn.addEventListener('click', function(e){
        e.preventDefault();

          // Basic Validation
          if (title.value == '' && author.value == '' && year.value == '') { 
            alert('Please input your information.');// If user not insert value then showing this message.
          }else {
            const newRow = document.createElement('tr');//Creating a table row

            //Creating new title 
            const newTitle =document.createElement('th');
            newTitle.innerHTML=title.value;
            newRow.appendChild(newTitle);

            //Creating new Author  
            const newAuthor =document.createElement('th');
            newAuthor.innerHTML=author.value;
            newRow.appendChild(newAuthor);

            //Creating new Year
            const newYear =document.createElement('th');
            newYear.innerHTML=year.value;
            newRow.appendChild(newYear);

            //Creating new Author  
            const newPrice =document.createElement('th');
            newPrice.innerHTML=price.value;
            newRow.appendChild(newPrice);

            bookList.appendChild(newRow);

          }
    })