import { useState } from 'react';
import RouterLink from './utils/RouterLink';
import Membership from './Membership';

const Navigator = ({ title='Site Title' }) => {
    //component logic here

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <RouterLink className="navbar-brand" to="/">{title}</RouterLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <RouterLink className="nav-link" to="/authors">Authors</RouterLink>
                        </li>
                        <li className="nav-item">
                            <RouterLink className="nav-link" to="/books">Books</RouterLink>
                        </li>
                        
                        
                    </ul>
                    <form className="d-flex mx-auto">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <Membership/>

                </div>
            </div>
        </nav>
    );
};

export default Navigator;   