import { useState } from 'react';
import type { Book } from '../../types/Book';

interface BookSelectorFunction {
    (id:string): void
}

export interface BookListProps {
    books: Book[],
    onBookSelect?: BookSelectorFunction
}


const BookList = ({ books, onBookSelect }: BookListProps) => {
    //component logic here

    const handleBookSelect=(book:Book)=>{
        if(onBookSelect)
            onBookSelect(book.id)
    }

    return (
        <div className='BookList '>
            <h2>BookList</h2>
            <div className="list-group">
                {
                    books.map((book) => (
                    <button onClick={() => handleBookSelect(book)} key={book.id} 
                        className="list-group-item list-group-item-action " aria-current="true">
                        {book.title}
                    </button>))
                }
            </div>
        </div>
    );
};

export default BookList;