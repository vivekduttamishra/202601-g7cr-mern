import {useState} from 'react';
import withBorder from '../../hoc/withBorder';

const BookListScreen = ({id}) => {
    //component logic here
    
    return (
        <div className='BookListScreen screen'>
            <h2>BookListScreen</h2>
            <a href="/authors/add">Add Author</a>
        </div>
    );
};

export default withBorder( BookListScreen );  