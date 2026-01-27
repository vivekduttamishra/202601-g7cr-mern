

function search(items, isMatch){
    let result=[]
    for(let item of items){
        if( isMatch(item) )
            result.push(item)
    }

    return result;
}

//now we have a searchAll function in every array 
Array.prototype.searchAll=function(isMatch) {return search(this,isMatch);}