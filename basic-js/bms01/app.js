

function BookUI() {
    const id = getInput('id')
    const title = getInput('title')
    const author = getInput('author')
    const price = getInput('price')
    const books = document.getElementById('books');

    this.fromEditor = function () {
        return new Book(
            id.getValue(),
            title.getValue(),
            author.getValue(),
            price.getNumber()
        )
    };

    this.toEditor = function (book) {
        id.setValue(book.id);
        title.setValue(book.title);
        price.setValue(book.price);
        author.setValue(book.author);
    };

    const createBookRow = book => `<tr id="${book.id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
            <td>
            <button class="primary" onclick="app.onSelectBook(${book.id})">Select</button>
            <button class="danger" onclick="app.onDeleteBook(${book.id})">Delete</button>
            </td>
       </tr>
       `;

    this.addBook = function (book) {
        books.innerHTML += createBookRow(book)
    }

    this.addBooks = function (bookList) {
        // this.clearTable();
        // for (const book of bookList) {
        //     this.addBook(book);
        // }
    
        tableBuilder('book-table', bookList, createBookRow)
    }

    this.updateBook = function (book) {
        // let row = document.getElementById(book.id);
        // if (row)
        //     row.innerHTML = createBookRow(book);

        tableRowUpdater(book.id, book, createBookRow)
    };

    this.clearTable = function () {
        books.innerHTML = "";
    }

    this.clearForm = function () {
        id.clear();
        title.clear();
        author.clear();
        price.clear();
    }
}

function App() {

    const bookManager = new BookManager(new BookInMemoryStore())
    addSampleBooks(bookManager);
    const bookUI = new BookUI();
    //bookUI.clearTable();
    bookUI.addBooks(bookManager.getAllBooks());

    let errorWriter= getWriter('error','strong')
    errorWriter.clear();

    this.onSave = function () {
        const book = bookUI.fromEditor();
        let error;
        console.log('book', book);
        let isNew;
        if (book.id) {
            error = bookManager.updateBook(book);
            isNew = false;
        }
        else {
            isNew = true;
            error = bookManager.addBook(book);
        }
        if (error) {
            console.error('Error adding book:', error);
            errorWriter.set(error);
            return;
        }else{
            errorWriter.clear();
        }

        if (isNew)
            bookUI.addBook(book);
        else
            bookUI.updateBook(book);
        bookUI.clearForm();

    }

    this.onClear = function () {
        bookUI.clearForm();
    }

    this.onDeleteBook = function (id) {
        bookManager.deleteBook(id);
        const row = document.getElementById(id);
        row.remove();
    }

    this.onSelectBook = function (id) {
        const book = bookManager.getBookById(id);
        bookUI.toEditor(book);
    }
}

const app = new App();


//test for search
function testSearch(){
    let bookManager=new BookManager(new BookInMemoryStore())
    addSampleBooks(bookManager);

    function showAllBooks(books, heading){
        console.log(heading)
        for(let book of books){
            console.log(book.id,book.title,book.price, book.author)
        }
        console.log('-----')
    }

    let books=bookManager.getAllBooks();

    showAllBooks(books,'Original List')

    showAllBooks(bookManager.search('author','dinkar'),'Books by Vivek')

    let result=search(books,b=>b.price>100 && b.price<300)
    showAllBooks(result,'Books between 100-300')

    let kBooks=search(books, b=> b.title.indexOf('K')===0)
    showAllBooks(kBooks,"Book starting with K")

    let numbers=[2,3,9,11,8,7,4]

    let evens = search(numbers, n=>n%2===0)
    console.log('evens',evens);
    
    let odds = numbers.searchAll(n=>n%2!==0)
    console.log('odds',odds);

    let titleSearch = bookManager.getAllBooks().searchAll(b=> b.title.toLowerCase().includes('of'))
    showAllBooks(titleSearch, 'Title with "of"')


};

testSearch();