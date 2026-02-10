import { useState } from 'react';

const Navigator = ({ id }) => {
    //component logic here

    return (
        <div className='Navigator '>
            <h2>Navigator</h2>
            <div className="nav">
                <a href="/">Home</a>
                <a className='' href="/books">Books</a>
                <a className='' href="/bookmanager">Book Manager</a>
                <a href="/authors">Authors</a>
            </div>
        </div>
    );
};

export default Navigator;   