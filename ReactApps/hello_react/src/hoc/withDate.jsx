
export const withDate = (TargetComponent,   )=>{
    //TODO: some closure level logic/elements

    const Hoc = (props) =>{
        //TODO: some component level programming logic
        const date = new Date();

        return (<div>
            
            <TargetComponent {...props} date={date} />
            
        </div>)
    }
    
    //TODO: ANY ADDITIONAL LOGIC HERE
    
    return Hoc;
}   