import {useState} from 'react';

const Loading = ({image="/loading.webp", size=80, message="loading...", showMessage=false}) => {
    //component logic here

    let style={
        width:size,
        margin:20
    }
    
    return (
        <div className='Loading '>
            <img src={image} style={style} alt={message} title={message} />
            {showMessage||message}
        </div>
    );
};

export default Loading;