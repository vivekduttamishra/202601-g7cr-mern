import { useState } from 'react';
import { compareTo, email, oneOf, password, required } from '../../services/validation'
import { useForm, Form } from '../utils/Input'
import {useUserContext} from '../../context/UserContext'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import AsyncAction from '../utils/AsyncAction'

const strongPassword = password({
    minLength: 6,
})

const Register = ({ id }) => {
    //component logic here
    
    const {login,status,error:loginError}=useUserContext()
    const navigator=useNavigate()
    const location=useLocation()
    const [searchParams]= useSearchParams()
    const returnUrl=searchParams.get("returnUrl")
    console.log('returnUrl',returnUrl);
    
    

   
    

    const loginSchema={
        email:{label:"Email", validators:[required(), email()]},
        password:{label:"Password", type:"password",validators:[required(),password({minLength:6})]},
       // loginRole:{label:"Login As",validators:[oneOf("admin","librarian")]}
    }

    const loginData={
        email:"vivek@conceptarchitect.in",
        password:"P@ssw0rd"
    }

    const [loginInfo,error,handleChange]= useForm(loginSchema,loginData);

    const handleLogin=async()=>{
        //console.log('loginInfo',loginInfo);
        //console.log('error',error);
        if(!error){
            let info= await login(loginInfo)
            navigator(returnUrl??"/")
        }
        
    }
    
    let loginMessage=returnUrl?"Login to go to : "+returnUrl:""
    
    return (
        <div className='Login center-card'>
            <h2>Login</h2>
            {loginMessage}

            <div className="body">
                <Form
                    schema={loginSchema}
                    model={loginInfo}
                    errors={error?.errors}
                    onChange={handleChange}
                    submitLabel='Login'
                    onSubmit={handleLogin}
                    
                />
                <AsyncAction status={status} error={loginError} model={null}>
                   <p className="text text-success">Login Success</p> 
                </AsyncAction>
            </div>

        </div>
    );
};

export default Register;   