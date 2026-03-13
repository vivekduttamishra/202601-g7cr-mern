import Loading from './Loading'
import ErrorView from './ErrorView'

const AsyncAction = ({model, error, status, children,onLoading, onError}) => {
    
    const fn=obj=>{
        if(typeof(obj)!=='function'){
            console.log('functionify ',obj)
            obj=()=><>{obj}</>
        }
        return obj;
    }
    status=status.toLowerCase()
   
    if(status==='idle')
        return ""

    if(status==='loading')
        return onLoading? fn(onLoading)() : <Loading/>

    if(status==='error')
       return onError? fn(onError)(error) : <ErrorView error={error} />

    if(status==='done')
        return <>{children}</>
    else 
        return "unexpected status: "+status
    
    
};

export default AsyncAction;