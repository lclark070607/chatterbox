//get request: get data,  give me information
//post request: give data, i want you to change something; user signing up for accoutn
//

window.addEventListener('load', function() {
    getBooks();
    //1. Add an event listener on the button
    let submitBtn = document.querySelector('#add-book');
    submitBtn.addEventListener('click', addBook);
    //2. When the button is clicked, send a POST to create a new book on the server

});

function getBooks() {
    let request = new HMLHttpRequest();
    request.open('GET', 'http://api.queencityiron.com/books');
    request.addEventListener('load', function() {
            let response = JSON.parse(request.responseText);
            console.log(response);

            //loop over all the books and create and <li> for each one.
            //any number of books, create loop because it provides infinite books(ie messages for our project)
            let parent = document.querySelector('#books'); //our <ul>
            for (let i = 0; i < response.books.lenth; i++) {}
                let el = document.createElement('li);')
                //replace text with text from api
                el.textContent = response.books[i].title + ', by' + response.books[i].author;
                parent.appendChild(el);

    });
    request.send(); //send the request 'what books do you have?'
}

//Difference between GET and POST:

//1. ope('POST', ...) instead of open('GET', ...)
//2. Usually don't care about the response
//3. Usualy need to send data in the 'request body'
// if mission is to get data, we care about what comes back;  GET
//POST don't set in loop we only send one post per click of the button'
//post requests purpose is to give data, we don't care what the answer is, don't care about response
function addBook() {
    let request = new XMLHttpREquest();
    request.open('POST', 'http://api.queencityiron.com/books');
    //Leave out the event listener because we on't need to do anything
    //on load, getBooks();
    //Add the body as a parameter to send()
    //JSON.strigify converts from JS to a string (opposite of JSON.parse)
    
    let body = JSON.stringify({ //converts from an object into a string or JSON, talking JSON to server
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value, 
    });
    //console.log('everythings good')- after establishing pull button function
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    
    request.send(body);
    //don't put getBooks here, you need to be clear to wait for load and then getBooks'
}