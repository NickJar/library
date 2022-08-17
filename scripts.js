const tableBody = document.querySelector('.libraryBody');
const addBtn = document.querySelector('#addBtn');
let form = document.getElementById("form");
let formPopup = document.querySelector('.formPopup');
addBtn.addEventListener('click', addBookToLibrary);


let myLibrary = [];

//book constructor
function book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function(){
        return title+ " by " +author+ ", " +pages+ " pages, " +read
    }
}

//Create a book object push it to the myLibrary array and create the table elements
//to display the book information
function addBookToLibrary(){
    formPopup.style.display = "none";

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    
    let nBook = new book(title, author, pages);

    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = title;

    let td2 = document.createElement('td');
    td2.innerHTML = author;

    let td3 = document.createElement('td');
    td3.innerHTML = pages;

    let td4Cont = document.createElement('td')
    let td4 = document.createElement('button');
    td4.classList.add("notRead");
    td4.textContent = "not read";
    td4.onclick = function(){
        if(td4.textContent == "not read"){
            td4.textContent = "read";
        }
        else{
            td4.textContent = "not read"
        }
        }

    let td5Cont = document.createElement('td')
    let td5 = document.createElement('button');
    td5.classList.add("remove");
    td5.textContent = "X";
    td5.onclick = function(){
        var row = td5.parentNode.parentNode;
        row.parentNode.removeChild(row);
        }

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td4Cont.appendChild(td4);
    tr.appendChild(td4Cont);
    td5Cont.appendChild(td5);
    tr.appendChild(td5Cont);
    tableBody.appendChild(tr);

    document.getElementById('form').reset();

}

function addBookToLibraryInternal(book){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = book.title;

    let td2 = document.createElement('td');
    td2.innerHTML = book.author;

    let td3 = document.createElement('td');
    td3.innerHTML = book.pages;

    let td4Cont = document.createElement('td')
    let td4 = document.createElement('button');
    td4.textContent = "not read";
    td4.onclick = function(){
        if(td4.textContent == "not read"){
            td4.textContent = "read";
        }
        else{
            td4.textContent = "not read"
        }
        }

    let td5Cont = document.createElement('td')
    let td5 = document.createElement('button');
    td5.textContent = "X";
    td5.onclick = function(){
        var row = td5.parentNode.parentNode;
        row.parentNode.removeChild(row);
        }

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td4Cont.appendChild(td4);
    tr.appendChild(td4Cont);
    td5Cont.appendChild(td5);
    tr.appendChild(td5Cont);
    tableBody.appendChild(tr);

    document.getElementById('form1').reset();
}

function popupForm(){
    formPopup.style.display = '';

}

function closeForm(){
    formPopup.style.display = 'none';
    document.getElementById('form').reset();

}

function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

let theWindUpBird = new book("The Wind Up Bird Chronicles", "Haruki Murakami", 601);
addBookToLibraryInternal(theWindUpBird);
