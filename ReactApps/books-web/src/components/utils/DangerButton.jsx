import {useState} from 'react'



const DangerButton = ({children,onClick,className})=>{
    
    let [attempts,setAttempts] = useState(3);
   

    const handleClick=()=>{
        setAttempts( attempts -1 )
        if(attempts===1)
            onClick(); //call the actual onclick by user
    }

    

    return <button 
                onClick={handleClick}
                className={`danger-button ${className}`} 
            >
                
        {attempts>1?"Confirm ":""}
        {children}
        {attempts>1 ?` ${attempts} time(s)`:''}
    </button>
}

export default DangerButton;