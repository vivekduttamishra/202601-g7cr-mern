import React from "react";
import type { NavParameter } from "../types/NavParameter";
import Nav from "./Nav";
import Clock from "./Clock";
import { useUserProvider } from "../providers/UserProvider";




export interface HeaderProps {
    title: string,
    nav:NavParameter[]
}



const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    let {user} = useUserProvider();
    
    return (<div className="Header">
        <h1>{props.title}</h1>
        <Nav nav={props.nav} />
        <span>
            {user ? `Welcome ${user.name}` : "Welcome Guest"}    
        </span>
    </div>)
}

export default Header;

