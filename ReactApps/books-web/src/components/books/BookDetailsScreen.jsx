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


    const [selectedBook, selectBook] = useState(null);
    const [status, setStatus] = useState('loading');
    const [error,setError]=useState(null);

    useEffect(() => {
        setStatus('loading')
        setError(null);
        bookService
            .getBookById(id)
            .then(book=>{
                selectBook(book)
                setStatus("done")
                setError(null)
            })
            .catch(error=>{
                setStatus('error')
                setError(error)
            })
                


    }, [id])
   
    if (status === 'loading')
        return <Loading/>

    else if (status==='error')
        return <ErrorView error={error}/>

    //Actual component rendering in case of success
    return (
        <div className='BookDtailsScreen screen'>

            <If condition={selectedBook} >
                <BookDetails selectedBook={selectedBook} onBookDelete={handleBookDelete} />

            </If>


        </div>
    );
};

export default withConditionalVisibility(BookDtailsScreen);