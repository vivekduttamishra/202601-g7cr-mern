import React from "react";
import type { NavParameter } from "../types/NavParameter";
import Nav from "./Nav";
import Clock from "./Clock";



export interface HeaderProps {
    title: string,
    nav:NavParameter[]
}



const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

    return (<div className="Header">
        <h1>{props.title}</h1>
        <Nav nav={props.nav} />
        <Clock prefix="IST" />
    </div>)
}

export default Header;

