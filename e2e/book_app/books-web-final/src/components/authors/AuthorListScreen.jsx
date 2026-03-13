import { useEffect, useState } from 'react';
import Border from '../utils/Border';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';
import { Link } from 'react-router-dom';
import { useAuthorContext } from '../../context/AuthorContext';
import AsyncAction from '../utils/AsyncAction';
import AuthorList from './AuthorList';
import RouterLink from '../utils/RouterLink'
const AuthorListScreen = ({ id }) => {
    //component logic here

    const { authors, status, error, getAllAuthors } = useAuthorContext()

    useEffect(() => {
        getAllAuthors()
    }, [])

    console.log('authors', authors);


    return (

        <div className="AuthorListScreen">
            <h2>Our Authors</h2>
            
            <RouterLink className="btn btn-sm btn-primary" 
                    audience="authenticated"
                    forOthers='redirect'
                    to="/authors/add">Add Author</RouterLink>
            <AsyncAction status={status} model={authors} error={error}>
                <AuthorList authors={authors} />
            </AsyncAction>
        </div>

    );
};

export default withConditionalVisibility(AuthorListScreen);