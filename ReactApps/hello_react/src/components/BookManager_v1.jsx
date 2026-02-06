
import books from '../data/books.json'




function BookManager(props) {

    let bookList = []

    const onBookSelect = isbn => {
        console.log(`seleced isbn: ${isbn}`)
    }

    for (let book of books)
        bookList.push(<div
            className="book-nav-item"
            key={book.isbn}
            onClick={() => onBookSelect(book.isbn)}
        >{book.title}
        </div>)

    return (<div className='book-manager'>
        <h2>Book Manager</h2>
        <div className='book-list'>
            {...bookList}
        </div>

    </div>)
}

export default BookManager