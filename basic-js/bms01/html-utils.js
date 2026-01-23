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