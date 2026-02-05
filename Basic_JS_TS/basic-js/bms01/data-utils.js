



//now we have a searchAll function in every array 
Array.prototype.searchAll=function ( isMatch, ...params){
    let result=[]
    for(let item of this){
        if( isMatch(item,...params) )
            result.push(item)
    }

    return result;
}

//filter helpers

const includes=(propertyName, text) => {
    text=text.toLowerCase()
    return item=>{
        let itemValue = item[propertyName]
        if(!itemValue)
            return false;
        return itemValue.toLowerCase().trim().includes(text);
    }
}

const range=(propertyName, min,max)=>{
    return item=>{
        let itemValue= item[propertyName]
        if(!itemValue)
            return false
        itemValue = Number(itemValue)
        if(isNaN(itemValue))
            return false;

        return itemValue>=min && itemValue<max;
    }
}