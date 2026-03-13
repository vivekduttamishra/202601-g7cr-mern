import { useUserContext } from "../context/UserContext";

const AuthContainer=({children, 
                      auth=any, 
                      roles=[]})=>{

    const {user} = useUserContext()
    const hasRoles = !roles || user?.roles?.some(r => roles.includes(r));
    const activate= (auth==='any') ||
                    ((auth==='anonymous'||auth==='guest') && !user) ||
                    ((auth==='authenticated' || auth==='authorized') && !!user) ||
                    ((auth==='authorized' && !!user && hasRoles)) 


    console.log('user',user);
    console.log('auth',auth);
    console.log('activgate',activate);
    

    if(activate)
        return children
    else
        return null

}

export const withAuth=Target=>(props)=>(
    <AuthContainer auth={props.auth} roles={props.roles} >
        <Target {...props}/>
    </AuthContainer>
)

export default AuthContainer;
