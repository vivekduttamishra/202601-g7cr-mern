import {useState} from 'react';
import withConditionalVisibility from '../../hoc/withConditionalVisibility';

const BookAddScreen = ({id}) => {
    //component logic here
    
    return (
        <div className='BookAddScreen screen'>
            <h2>BookAddScreen</h2>
        </div>
    );
};

export default withConditionalVisibility(BookAddScreen);