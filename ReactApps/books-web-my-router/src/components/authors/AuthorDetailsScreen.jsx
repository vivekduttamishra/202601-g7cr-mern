import {useState} from 'react';
import withConditionalVisibility from '../../hoc/withConditionalVisibility';

const AuthorDetailsScreen = ({id}) => {
    //component logic here
    
    return (
        <div>
            <h2>AuthorDetailsScreen</h2>
        </div>
    );
};

export default withConditionalVisibility( AuthorDetailsScreen);