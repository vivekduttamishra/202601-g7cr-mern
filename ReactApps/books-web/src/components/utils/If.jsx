const If=({condition,children,element})=>{

    if(!condition)
        return null; //no UI

    if(element)
        return element;
    else
        return children;
}


export default If;