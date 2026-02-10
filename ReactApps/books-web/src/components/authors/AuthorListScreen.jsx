import { useState } from 'react';
import Border from '../utils/Border';
import withConditionalVisibility from '../../hocs/withConditionalVisibility';

const AuthorListScreen = ({ id }) => {
    //component logic here

    return (
        <Border >

            <div>
                <h2>AuthorListScreen</h2>                
            </div>
        
        </Border>
    );
};

export default withConditionalVisibility( AuthorListScreen );