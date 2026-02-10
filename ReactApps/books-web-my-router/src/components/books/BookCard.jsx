
const BookCard=({book, onBookSelect})=>{

    return (
        <a className='bookCard' 
            href={`/bookdetails/${book.isbn}`}>
            <img src={book.cover}  alt={book.title} title={book.title}/>
            <h4>{book.title}</h4>
        </a>
    )
}

export default BookCard;