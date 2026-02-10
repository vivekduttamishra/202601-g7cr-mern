import {useState} from 'react';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';

const AuthorDetailsScreen = () => {
    //component logic here

    let id = window.location.pathname.split('/').pop();
    
    return (
        <div>
            <h2>About {id}</h2>
        </div>
    );
};

export default withConditionalVisibility( AuthorDetailsScreen);