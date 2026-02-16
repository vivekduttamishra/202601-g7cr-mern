import React from "react";
import type { NavParameter } from "../types/NavParameter";



export interface HeaderProps {
    title: string,
    nav:NavParameter[]
}



const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    return (<div className="Header">
        <h1>{props.title}</h1>
    </div>)
}

export default Header;

