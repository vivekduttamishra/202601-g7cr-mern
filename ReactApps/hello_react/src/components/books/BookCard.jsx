
const BookCard=({book, onBookSelect})=>{

    return (
        <div className='bookCard' onClick={onBookSelect}>
            <img src={book.cover}  alt={book.title} title={book.title}/>
            <h4>{book.title}</h4>
        </div>
    )
}

export default BookCard;