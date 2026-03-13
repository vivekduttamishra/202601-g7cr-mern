import {useState} from 'react';
import Navigator from './Navigator';

const Header = ({title}) => {

    return (
        <div className='Header '>
            <Navigator title={title}/>
            
        </div>
    );
};

export default Header;