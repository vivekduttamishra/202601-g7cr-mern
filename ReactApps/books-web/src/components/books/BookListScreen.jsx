import {useEffect, useState} from 'react';
import {useParams, useLocation, Link} from 'react-router-dom'

import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import BookCard from './BookCard';



const BookListScreen = () => {
    //component logic here
    let [books,setBooks]=useState(null);

    useEffect(()=>{
       
        async function getAllBooks(){
            let books=await bookService.getAllBooks()
            setBooks(books);
        }

        getAllBooks();


    },[]);

    if(!books)
        return <h3>loading...</h3>
    

    //let books = bookService.getAllBooks();
    return (
        <div className='BookListScreen screen'>
            <h2>Book List Screen</h2>
            <Link className='btn btn-sm btn-primary' to='/books/add'>Add New Book</Link>
            <div className="booksContainer">
                {
                    books.map(book=>(
                        <BookCard 
                        key={book.id} 
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