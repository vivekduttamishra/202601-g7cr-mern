import type React from "react";
import type { NavParameter } from "../types/NavParameter";
import {Link} from 'react-router-dom'
import AuthenticatedLink from "./utils/AuthenticatedLink";

interface NavProps{
    nav:NavParameter[]
}



const Nav:React.FC<NavProps> = ({nav}:NavProps)=>{

    const renderItem=(item:NavParameter)=>{
        if(typeof item.onClick==='string'){
            return <AuthenticatedLink linkVisibility={item.linkVisibility} className='btn btn-default' key={item.text} to={item.onClick}>{item.text}</AuthenticatedLink>
        } else {
            let fn = item.onClick as Function;
            return <AuthenticatedLink linkVisibility={item.linkVisibility} className='btn btn-default' key={item.text} onClick={()=>fn()}>{item.text}</AuthenticatedLink>
        }  
    }

    return (<div className=''>
        {
            nav.map(item=> renderItem(item))           
        }
    </div>)

}

export default Nav;