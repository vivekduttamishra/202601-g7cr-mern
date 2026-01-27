



//now we have a searchAll function in every array 
Array.prototype.searchAll=function ( isMatch, ...params){
    let result=[]
    for(let item of this){
        if( isMatch(item,...params) )
            result.push(item)
    }

    return result;
}