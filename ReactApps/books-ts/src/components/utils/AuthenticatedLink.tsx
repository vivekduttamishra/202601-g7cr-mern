import {Link} from 'react-router-dom'
import { useUserProvider } from '../../providers/UserProvider';

export type LinkVisibility="authenticated"|"unauthenticated"|"always"

export interface AuthenticatedLinkProps{
    to?:string,
    children:React.ReactNode,
    linkVisibility?:LinkVisibility,
    className?:string,
    onClick?:()=>void
}

const AuthenticatedLink= ({to, children, linkVisibility = "always", className, onClick}:AuthenticatedLinkProps)=>{

    const {user} = useUserProvider();
    if(linkVisibility === "authenticated" && !user){
        return null;
    }

    if(linkVisibility === "unauthenticated" && user){
        return null;
    }
    const handleClick=(e:any)=>{
        e.preventDefault();
        if(onClick){
            onClick();
        }
    }

    return <Link to={to} className={className} onClick={handleClick}>
        {children}
    </Link>
}


export default AuthenticatedLink;