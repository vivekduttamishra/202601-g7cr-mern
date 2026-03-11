import { Link, useNavigate, useLocation } from "react-router-dom";

/**
 * A conditional wrapper for React Router Links that handles 
 * authentication and authorization logic.
 */
const RouterLink = ({
    children,
    user,
    to,
    linkType = "any",
    roles,
    className = "nav-link",
    loginLink = '/login',
    altMode = "hidden"
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    // 1. Permission Logic
    // Checks if the user has at least one of the required roles
    const hasRoles = !roles || user?.roles?.some(r => roles.includes(r));
    
    const isAuthorized =
        (linkType === 'any') ||
        (linkType === 'loggedIn' && !!user) ||
        (linkType === 'anonymous' && !user) ||
        (linkType === 'roles' && !!user && hasRoles);

    // Debugging block for specific labels
    if (children === "Members") {
        console.log(children, linkType, user, isAuthorized);
    }

    // 2. Handle 'redirect' mode for non-authorized restricted links
    if (!isAuthorized && altMode === 'redirect' && linkType !== 'anonymous') {
        const returnUrl = encodeURIComponent(location.pathname + location.search);
        const loginPath = `${loginLink}?returnUrl=${returnUrl}`;

        return (
            <Link to={loginPath} className="btn btn-link p-0 border-0 align-baseline text-decoration-none">
                {children}
            </Link>
        );
    }

    // 3. Fallback visibility modes for unauthorized users
    if (!isAuthorized) {
        if (altMode === "hidden") return null;
        if (altMode === "disabled") {
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