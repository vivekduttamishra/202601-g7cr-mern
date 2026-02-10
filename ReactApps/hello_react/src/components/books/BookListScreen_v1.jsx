import {useState} from 'react';
import withBorder from '../../hoc/withBorder';
import withConditionalVisibility from '../../hoc/withConditionalVisibility';

const BookListScreen = ({id,books,onBookSelect}) => {
    //component logic here
    
    return (
        <div className='BookListScreen screen'>
            <h2>Book List Screen</h2>

            {
                books.map(book=>(
                    <h3 key={book.isbn}
                    onClick={()=>onBookSelect(book)}
                    >{book.title}</h3>
                ))
            }

            <a href="/authors/add">Add Author</a>
        </div>
    );
};

export default withConditionalVisibility( 
                    withBorder( BookListScreen )
                );  