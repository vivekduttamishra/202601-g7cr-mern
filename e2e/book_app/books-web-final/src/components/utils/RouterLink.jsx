import { Link, useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

/**
 * A conditional wrapper for React Router Links that handles 
 * authentication and authorization logic.
 */
const RouterLink = ({
    text,
    children=text,
    
    to,  //either a link or a function
    audience = "any", //any, anonymous, authenticated, authorized ---> roles
    roles=[],  //for authorized user

    //what to do if user is mismatch
    forOthers = "hidden",   //hidden, disabled, redirect ---> only for anonymous/authenticated audience
    loginLink = '/user/login',
    className = "nav-link",
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    // 1. Permission Logic
    // Checks if the user has at least one of the required roles
    const {user} = useUserContext()

    const hasRoles =  user?.roles?.some(r => roles.includes(r));
    
    const isAuthorized =
        (audience === 'any') ||
        ((audience === 'anonymous' || audience==='guest') && !user) ||
        ((audience === 'authenticated' ) && !!user) ||
        (audience === 'authorized' && !!user && hasRoles);

    className=className ?? "btn btn-link p-0 border-0 align-baseline text-decoration-none"
    console.log('className',className);
    

    // 2. Handle 'redirect' mode for non-authorized restricted links
    if (!isAuthorized && forOthers === 'redirect' && (typeof(to)==='string')  &&(audience === 'anonymous'||audience==='authenticated')) {
        const returnUrl = encodeURIComponent(to);
        const loginPath = `${loginLink}?returnUrl=${returnUrl}`;

        return (
            <Link to={loginPath} className={className} >
                {children}
            </Link>
        );
    } else if(forOthers==='redirect'){
        forOthers="disabled"
    }

    // 3. Fallback visibility modes for unauthorized users
    if (!isAuthorized) {
        if (forOthers === "hidden") return null;
        if (forOthers === "disabled") {
            return (
                <button className={className} disabled>
                    {children}
                </button>
            );
        }
    }

    // 4. Standard Render (Authorized)
    // If 'to' is a function, treat it as a button action rather than a navigation link
    if (typeof to === 'function') {
        return (
            <button type="button" className={className} onClick={() => to()}>
                {children}
            </button>
        );
    }

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
};

export default RouterLink;