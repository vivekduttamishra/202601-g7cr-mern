

function BookUI(){
    const title=getInput('title')
    const author=getInput('author')
    const price=getInput('price')
    const books= document.getElementById('books');

    this.fromUI=function(){
        return new Book(
            title.getValue(),
            author.getValue(),
            price.getNumber()
        )
    }

    this.toTable=function(book){
       books.innerHTML+=`<tr id="${book.id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
            <td><button onclick="app.onDeleteBook(${book.id})">Delete</button></td>
       </tr>
       ` 
    }

    this.clearTable=function(){
        books.innerHTML="";
    }

    this.clearForm=function(){
        title.clear();
        author.clear();
        price.clear();
    }
}

function App(){

    const bookManager = new BookManager(new bookInMemoryStore())
    const bookUI=new BookUI();

    bookUI.clearTable();

    this.onAddBook=function(){
        const book=bookUI.fromUI();
        const error = bookManager.addBook(book);
        if(error){
            console.error('Error adding book:', error);
            return;
        }
        bookUI.clearForm();
        bookUI.toTable(book);
        
    }

    this.onDeleteBook=function(id){
        bookManager.deleteBook(id);
        const row=document.getElementById(id);
        row.remove();
    }
}

const app=new App();