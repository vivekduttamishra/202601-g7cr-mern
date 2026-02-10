import {Link} from 'react-router-dom'


const BookCard=({book, onBookSelect})=>{

    return (
        <Link className='bookCard' 
            to={`/books/${book.isbn}`}>
            <img src={book.cover}  alt={book.title} 
            title={book.title}/>
            <h4>{book.title}</h4>
        </Link>
    )
}

export default BookCard;