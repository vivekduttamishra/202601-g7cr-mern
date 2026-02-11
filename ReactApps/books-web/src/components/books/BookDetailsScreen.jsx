import {useState} from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import If from '../utils/If';
import BookDetails from './BookDetails';
import {useParams} from 'react-router-dom';
import NotFoundScreen from '../utils/NotFoundScreen';

import {useNavigate} from 'react-router-dom'


const BookDtailsScreen = () => {
    //component logic here
    //const isbn = window.location.pathname.split('/').pop();
    
    const {id} = useParams()  
    console.log('id',id);
      
    const selectedBook= bookService.getBookById(id);
    
    const navigate = useNavigate();
    
    


    const handleBookDelete= ()=>{
        bookService.deleteBook(id)
        //go back to /books
        navigate('/books')
    }

    if(!selectedBook)
        return <NotFoundScreen errorMessage={`Invalid ID: ${id}`} />

    return (
        <div className='BookDtailsScreen screen'>
           
            <If condition={selectedBook} >
                <BookDetails selectedBook={selectedBook} onBookDelete={handleBookDelete} />

            </If>

            
        </div>
    );
};

export default withConditionalVisibility( BookDtailsScreen );