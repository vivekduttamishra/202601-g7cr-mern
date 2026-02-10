

const withConditionalVisibility=(TargetComponent, defaultVisibility=true)=>{


    return (props)=>{
        let condition= props.visible===undefined ? defaultVisibility : props.visible;
        if(!condition)
            return null

        return <TargetComponent {...props} />
    }
}

export default withConditionalVisibility;