import {useState} from 'react';
import type { Book } from '../../types/Book';
import Spacer from '../utils/Spacer';
import type { Status } from '../../types/Status';

interface IdSelectorFunction<T>{
    (id:T):void
}

interface BookDetailsProps{
    book:Book|null,
    onDelete: IdSelectorFunction<string>,
    status:Status,
    error:Error|null
}

const BookDetails = ({book,onDelete,status,error}:BookDetailsProps) => {
    //component logic here
    if(status==='loading')
        return <h3>loading...</h3>
    
    if(status==='idle')
        return <h3>Please select a book</h3>

    if(status==='error')
        return <h3>{error?.message}</h3>

    if(!book)
        return "";

    return (
        <div className='BookDetails '>
            <h2>BookDetails</h2>
            <div className="row">
                <div className="col md-col-3">
                    <button onClick={()=>onDelete(book.id)} className='btn btn-danger form-control'>Delete</button>
                    <Spacer height="10px"/>
                    <img src={book.cover} className='book-cover'title={book.title} />
                </div>
                <div className="col md-col-9">
                    <h2>{book.title}</h2>
                    <ul>
                        <li>Price: ₹ {book.price}</li>
                        <li>Rating: {book.rating} / 5</li>
                    </ul>
                    <h2>Description</h2>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails; 