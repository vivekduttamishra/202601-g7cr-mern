import {useState} from 'react';
import withConditionalVisibility from '../../hoc/withConditionalVisibility';

const AuthorAddScreen = ({id}) => {
    //component logic here
    
    return (
        <div>
            <h2>AuthorAddScreen</h2>
        </div>
    );
};

export default withConditionalVisibility( AuthorAddScreen );