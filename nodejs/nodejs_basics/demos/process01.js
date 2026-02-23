

const getArgs=(_,__,...args)=>args

const average=(values)=> values.reduce((a,v)=>a+v,0)/values.length;

let numbers = getArgs(...process.argv);

console.log('numbers',numbers);



