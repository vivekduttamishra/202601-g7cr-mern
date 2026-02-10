import {useState} from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import If from '../utils/If';
import BookDetails from './BookDetails';
import {useParams} from 'react-router-dom';
import NotFoundScreen from '../utils/NotFoundScreen';

import {useNavigate} from 'react-router-dom'


const BookDtailsScreen = ({id}) => {
    //component logic here
    //const isbn = window.location.pathname.split('/').pop();
    
    const {isbn} = useParams()    
    const selectedBook= bookService.getBookById(isbn);
    
    const navigate = useNavigate();
    
    


    const handleBookDelete= ()=>{
        bookService.deleteBook(isbn)
        //go back to /books
        navigate('/books')
    }

    if(!selectedBook)
        return <NotFoundScreen errorMessage={`Invalid ISBN ID: ${isbn}`} />

    return (
        <div className='BookDtailsScreen screen'>
           
            <If condition={selectedBook} >
                <BookDetails selectedBook={selectedBook} onBookDelete={handleBookDelete} />

            </If>

            
        </div>
    );
};

export default withConditionalVisibility( BookDtailsScreen );