import {useState} from 'react';
import withConditionalVisibility from '../../hoc/withConditionalVisibility';

const BookDtailsScreen = ({id,onBack, selectedBook}) => {
    //component logic here

    return (
        <div className='BookDtailsScreen screen'>
            <h2>{selectedBook?.title}</h2>
            <button onClick={onBack}>Back to Book List</button>
        </div>
    );
};

export default withConditionalVisibility( BookDtailsScreen );