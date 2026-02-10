import {useState} from 'react';
import {useParams, useLocation} from 'react-router-dom'

import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import BookCard from './BookCard';



const BookListScreen = ({id,onBookSelect}) => {
    //component logic here
   
    let books = bookService.getAllBooks();
    return (
        <div className='BookListScreen screen'>
            <h2>Book List Screen</h2>
            <div className="booksContainer">
                {
                    books.map(book=>(
                        <BookCard 
                        key={book.isbn} 
                        book={book}
                        
                        />       
                    ))
                }
            </div>

            <a href="/authors/add">Add Author</a>
        </div>
    );
};

export default withConditionalVisibility( 
                    BookListScreen 
                );  