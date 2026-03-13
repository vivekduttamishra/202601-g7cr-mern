import { Link } from "react-router-dom"
import RouterLink from "./utils/RouterLink"
import AuthContainer from "./AuthContainer"
import { useUserContext } from "../context/UserContext"


const Membership = ({defaultImage="/default-profile.png"}) => {

    const {user, logout}=useUserContext();

    let color= "black";
    if(user)
        if(user.roles?.includes("admin"))
            color="red"
        else
            color="green"


    let style={
        borderColor: color
    }
    

   
    return (
        <ul className="navbar-nav d-flex">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={user && user.photo?user.photo:defaultImage} className="nav-profile-image" style={style}/>
                    {user?user.name:'Guest'}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><RouterLink className="dropdown-item" audience="anonymous"  to="/user/login">Login</RouterLink></li>
                    <li><RouterLink className="dropdown-item" audience="anonymous" to="/user/register">Register</RouterLink></li>
                   
                    <li><RouterLink className="dropdown-item" audience="authenticated" to="/user/profile">Profile</RouterLink></li>
                    <li><RouterLink className="dropdown-item" audience="authenticated" to="/user/book-shelf">Book Shelf</RouterLink></li>
                    
                    
                    <li><RouterLink className="dropdown-item" audience="authorized" roles={['admin','librarian']} to="/manage/books">Manage Books</RouterLink></li>
                    <li><RouterLink className="dropdown-item" audience="authorized" roles={['admin','librarian']} to="/manage/authors">Manage Authors</RouterLink></li>
                    <li><RouterLink className="dropdown-item" audience="authorized" roles={['admin']} to="/admin/users">Manage Users</RouterLink></li>
                     
                     
                    <AuthContainer auth="authenticated">
                        <li><hr className="dropdown-divider" /></li>
                    </AuthContainer>
                    <li><RouterLink className="dropdown-item" audience="authenticated"  to={logout}>Logout</RouterLink></li>
                </ul>
            </li>
        </ul>
    )
}

export default Membership