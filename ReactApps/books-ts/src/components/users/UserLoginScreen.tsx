import {useState, type ChangeEvent, type SubmitEvent} from 'react';
import LabeledInput from '../utils/Input';
import Spacer from '../utils/Spacer';
import userService from '../../services/UserService';
import {  useUserProvider } from '../../providers/UserProvider';
import Loading from '../utils/Loading';

export interface UserLoginScreenProps{
    
    
}

const UserLoginScreen = (props:UserLoginScreenProps) => {
    //component logic here
    
    const [loginInfo,setLoginInfo] = useState({
        email:'vivek@conceptarchitect.in',
        password:'p@ss1'
    })

    const{login,status,error} = useUserProvider();

    const handleChange=(value:string, id:string)=>{
        
        
        
        setLoginInfo({...loginInfo, [id]:value})
    }

    const handleLogin=async(e:SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await login(loginInfo.email, loginInfo.password);
        
    }

    return (
        <div className='UserLoginScreen '>
            <h2>UserLoginScreen</h2>
            <form onSubmit={handleLogin}>
                <LabeledInput id="email" value={loginInfo.email}
                    onChange={handleChange} />

                <LabeledInput id="password" value={loginInfo.password} 
                onChange={handleChange} type="password"/>
                <Spacer height={10}/>
                <button className="form-element btn btn-primary"  type="submit">Login</button>
                <span>
                    <Spacer height={10}/>
                    {status==='loading' && <Loading/> }
                    {status==='error' && <span className="text-danger">{error.message}</span>} 
                    {status==='done' && <span className="text-success">Login Successful</span>} 
                </span>
            </form>
        </div>
    );
};

export default UserLoginScreen;