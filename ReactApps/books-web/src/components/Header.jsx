import {useState} from 'react';
import Navigator from './Navigator';

const Header = ({id}) => {
    //component logic here
     const [count, setCount] = useState(0)
    let style={
        width:120,
        margin:10,
        height:40
    }
    return (
        <div className='Header '>
            <Navigator />
            <button style={style} onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    );
};

export default Header;