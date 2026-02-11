import {Link} from 'react-router-dom'


const BookCard=({book, onBookSelect})=>{
    console.log('book',book);
    
    return (
        <Link className='bookCard' 
            to={`/books/${book.id}`}>
            <img src={book.cover}  alt={book.title} 
            title={book.title}/>
            <h4>{book.title}</h4>
        </Link>
    )
}

export default BookCard;