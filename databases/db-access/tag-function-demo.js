
const process=(texts,...params)=>{
    console.log('texts',texts);
    console.log('params',params);
}   

const a=50, b=15

process`Sum of ${a} and ${b} is ${a+b} `