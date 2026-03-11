import { useEffect, useState } from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import If from '../utils/If';
import BookDetails from './BookDetails';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../utils/NotFoundScreen';

import { useNavigate } from 'react-router-dom'
import Loading from '../utils/Loading';
import ErrorView from '../utils/ErrorView';
import AsyncAction from '../utils/AsyncAction';


const BookDtailsScreen = () => {
    //component logic here
    //const isbn = window.location.pathname.split('/').pop();

    const { id } = useParams()
    console.log('id', id);
     const navigate = useNavigate();

    //const selectedBook= bookService.getBookById(id);
     const handleBookDelete = () => {
        bookService.deleteBook(id)
        //go back to /books
        navigate('/books')
    }
    
    return ( 
        <AsyncAction promise={bookService.getBookById(id)}  >
            {
                selectedBook=> <BookDetails selectedBook={selectedBook} onBookDelete={handleBookDelete} />            
            }
        </AsyncAction>
        
    );
};

export default withConditionalVisibility(BookDtailsScreen);