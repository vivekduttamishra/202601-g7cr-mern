import {useState} from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import If from '../utils/If';
import BookDetails from './BookDetails';

const BookDtailsScreen = ({id,onBack}) => {
    //component logic here
    const selectedIsbn = window.location.pathname.split('/').pop();
    const selectedBook= bookService.getBookById(selectedIsbn);
    
    

    const handleBookDelete= ()=>{
        bookService.deleteBook(selectedIsbn)
        onBack();
    }

    return (
        <div className='BookDtailsScreen screen'>
            <If condition={!selectedBook} >
                <h2>Book Not Found</h2>
            </If>

            <If condition={selectedBook} >
                <BookDetails selectedBook={selectedBook} onBookDelete={handleBookDelete} />

            </If>

            <button onClick={onBack}>Back to Book List</button>
        </div>
    );
};

export default withConditionalVisibility( BookDtailsScreen );