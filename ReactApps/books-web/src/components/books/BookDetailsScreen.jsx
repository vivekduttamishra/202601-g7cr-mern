import { useEffect, useState } from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import If from '../utils/If';
import BookDetails from './BookDetails';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../utils/NotFoundScreen';

import { useNavigate } from 'react-router-dom'


const BookDtailsScreen = () => {
    //component logic here
    //const isbn = window.location.pathname.split('/').pop();

    const { id } = useParams()
    console.log('id', id);

    //const selectedBook= bookService.getBookById(id);


    const [selectedBook, selectBook] = useState(null);
    const [status, setStatus] = useState('loading');

    useEffect(() => {

        bookService
            .getBookById(id)
            .then(book=>{
                selectBook(book)
                setStatus("done")
            })
            .catch(error=>{
                if(error.status===404){
                    setStatus(`error: Invalid Book Id ${id}`)

                }else {
                    setStatus(`error: ${error.status} ${error.message}`)
                }
            })


    }, [id])


    const navigate = useNavigate();




    const handleBookDelete = () => {
        bookService.deleteBook(id)
        //go back to /books
        navigate('/books')
    }

    if (status === 'loading')
        return <h3>Loading...</h3>

    else if (status.includes('Invalid Book'))
        return <NotFoundScreen errorMessage={`Invalid ID: ${id}`} />
    else if(status.startsWith('error'))
        return <h3 className='text-danger'>{status.split(':').pop()}</h3>


    return (
        <div className='BookDtailsScreen screen'>

            <If condition={selectedBook} >
                <BookDetails selectedBook={selectedBook} onBookDelete={handleBookDelete} />

            </If>


        </div>
    );
};

export default withConditionalVisibility(BookDtailsScreen);