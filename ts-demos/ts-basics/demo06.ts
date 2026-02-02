function printList(list:any[], caption:string=''){
    console.log(`---- caption ----`);
    for(let item of list){
        let str=''
        for(let key in item){
            if(typeof item[key]==='function') continue;
            str+=key+':'+item[key]+'	';
        }
        console.log(str)
    }
    console.log(`----x----`);
}

let books=[
    {title: 'The Accursed God', author:'Vivek'},
    {title: 'Rashmirathi', author:'Dinkar'},
    {title: 'Manas', author:'Vivek'},
]



