import { useEffect, useState } from 'react';
import Border from '../utils/Border';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import { Link } from 'react-router-dom';
import { useAuthorContext } from '../../context/AuthorContext';

const AuthorListScreen = ({ id }) => {
    //component logic here

    const { authors, status, error, getAllAuthors } = useAuthorContext()

    useEffect(() => {
        getAllAuthors()
    }, [])

    console.log('authors',authors);
    

    return (

        <div className="AuthorListScreen">
            <p>
                Status: {status}
            </p>
            <p>

                Error: {error?.message}
            </p>
            <h2>Authors</h2>
            <Link to="/authors/add">Add Author</Link>
            <div className="Cards">
                {
                    authors.map(a => (
                        <div className='AuthorCard' key={a.id}>
                            <Link to={`/authors/${a.id}`}>{a.name}</Link>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default withConditionalVisibility(AuthorListScreen);