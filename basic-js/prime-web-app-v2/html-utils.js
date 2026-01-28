console.log('ui module loaded')


const getWriter= function(id, wrapperElement="p"){
    const element= document.getElementById(id);
    const start =`<${wrapperElement}>` //<p>  or <li>
    const end = `</${wrapperElement}>` //</p> or </li>
    return {
        append( value ){
            element.innerHTML+=`${start}${value}${end}`;
        },
        clear(){
            element.innerHTML=""
        },
        set(value){
            this.clear();
            this.append(value);
        },      

    }
}

function tableBuilder(tableId, items, rowBuilder){
    let body = document.querySelector(`#${tableId} tbody`);
    body.innerHTML=''
    for(let item of items){
        body.innerHTML+=rowBuilder(item)
    }
}

function tableRowUpdater(rowId, item, rowBuilder){
    var row = document.getElementById(rowId)
    row.innerHTML=rowBuilder(item)
}

const getInput= function(id){
    
    return {
        element: document.getElementById(id),
        setValue(value){
            this.element.value=value
        },
        getValue(){
            return this.element.value.trim();
        },
       
        getNumber(){
            let value = this.element.value;
            if(value.trim()==='')
                return NaN
            else
                return Number(value)
        },
        clear(){
            this.element.value=""
        }
    }
}