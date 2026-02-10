import { useState } from 'react';
import {Link} from 'react-router-dom'

const Navigator = ({ id }) => {
    //component logic here

    return (
        <div className='Navigator '>
            <h2>Navigator</h2>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link className='' to="/books">Books</Link>
                <Link className='' to="/bookmanager">Book Manager</Link>
                <Link to="/authors">Authors</Link>
            </div>
        </div>
    );
};

export default Navigator;   