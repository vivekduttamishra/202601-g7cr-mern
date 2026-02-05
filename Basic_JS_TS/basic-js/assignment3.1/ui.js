console.log('ui module loaded')


const getUI= function(id, wrapperElement="p"){
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

const getInput= function(id){
    element= document.getElementById(id);

    return {
        setValue(value){
            element.value=value
        },
        getValue(){
            return element.value
        },
        getNumber(){
            let value = element.value;
            if(value.trim()==='')
                return NaN
            else
                return Number(value)
        },
        clear(){
            element.value=""
        }
    }
}