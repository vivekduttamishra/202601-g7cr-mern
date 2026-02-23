

const getArgs=(_,__,...args)=>args

const average=(values)=> values.reduce((a,v)=>a+v,0)/values.length;

let args = getArgs(...process.argv);
let numbers = args.map(a=>Number(a)).filter(a=>!isNaN(a))



if(args.length===0){
    process.stderr.write(`No input.
        Correct Usage: node avg 1 2 3 4\n`)

    process.exit(1)
}

//console.log('numbers',numbers);

if(args.length!==numbers.length){
    process.stderr.write(`Some invalid values supplied
        Correct Usage: node avg 1 2  3  4\n`)

    process.exit(2)
}


let result = average(numbers)
process.stdout.write(`avg(${numbers})=>${result}\n`)

//process.exit(0)





