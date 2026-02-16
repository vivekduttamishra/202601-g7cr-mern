import type React from "react";
import type { NavParameter } from "../types/NavParameter";

interface NavProps{
    nav:NavParameter[]
}



const Nav:React.FC<NavProps> = ({nav}:NavProps)=>{

    const renderItem=(item:NavParameter)=>{
        if(typeof item.onClick==='string'){
            return <a className='btn btn-default' key={item.text} href={item.onClick}>{item.text}</a>
        } else {
            let fn = item.onClick as Function;
            return <button className='btn btn-default' key={item.text} onClick={()=>fn()}>{item.text}</button>
        }  
    }

    return (<div className=''>
        {
            nav.map(item=> renderItem(item))           
        }
    </div>)

}

export default Nav;