import {useState} from 'react';
import NotFoundScreen from './NotFoundScreen';

const Error400 =({error})=>{
    return <ValidationSummary error={error} />
}

const Error401 = ({error})=>{
    return <h2 >Authentication Failed</h2>
}

const Error403 = ({error})=>{
    return <h2 >Authorization Failed</h2>
}

const DefaultError=({error})=>{
    return <h2>{error.message}</h2>
}

const Error404=({error})=>{
    return <NotFoundScreen errorMessage={error.message} />
}

const NetworkError=({error})=>{
    return <h2>Sorry! Server is unreachable. Retry.</h2>
}


const ErrorView = ({error, errorMap}) => {
    //component logic here
    const defaultErrorMap={
        400: Error400,
        401: Error401,
        403: Error403,
        404: Error404,
        "Network Error": NetworkError
        
    }

    if(errorMap){
        errorMap={
            ...defaultErrorMap,
            ...errorMap
        }
    } else
        errorMap=defaultErrorMap

    let ErrorView=DefaultError

    if(errorMap[error.status])
        ErrorView=errorMap[error.status]
    else if(errorMap[error.message])
        ErrorView=errorMap[error.message]

    
    return (
        <div className='ErrorView text-danger'>
            <ErrorView error={error} />
        </div>
    );
};

export default ErrorView;