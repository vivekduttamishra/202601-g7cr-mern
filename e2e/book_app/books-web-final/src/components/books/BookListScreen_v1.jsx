import {useEffect, useState} from 'react';
import {useParams, useLocation, Link} from 'react-router-dom'

import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import BookCard from './BookCard';
import Loading from '../utils/Loading';
import ErrorView from '../utils/ErrorView';



const BookListScreen = () => {
    //component logic here

    let [books,setBooks]=useState(null);
    let [status,setStatus]=useState('loading')
    let [error,setError] = useState(null)

    useEffect(()=>{
       
            setStatus('loading')
            setError(null)
            bookService
            .getAllBooks()
            .then(books=>{
                setBooks(books);
                setStatus('done')
                setError(null)
            })
            .catch(error=>{
                setStatus('error')
                setError(error)
            })
        },[]);

    if(status==='loading')
        return <Loading/>
    else if (status==='error')
        return <ErrorView error={error}/>
    



    //Actual component rendering in case of success
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