import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom'

import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import bookService from '../../services/BookService';
import BookCard from './BookCard';
import Loading from '../utils/Loading';
import ErrorView from '../utils/ErrorView';
import AsyncAction from '../utils/AsyncAction';



const BookListScreen = () => {

    return (<AsyncAction promise={bookService.getAllBooks()}>
        {
            books => (
                <div className='BookListScreen screen'>
                    <h2>Book List Screen</h2>
                    <Link className='btn btn-sm btn-primary' to='/books/add'>Add New Book</Link>
                    <div className="booksContainer">
                        {
                            books.map(book => (
                                <BookCard
                                    key={book.id}
                                    book={book}

                                />
                            ))
                        }
                    </div>

                    <a href="/authors/add">Add Author</a>
                </div>
            )
        }
    </AsyncAction>)

};

export default withConditionalVisibility(
    BookListScreen
);  