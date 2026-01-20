

let values=[2,3,4,5];

console.log('values.length',values.length);

for(let i=0;i<values.length;i++)
    console.log(i,values[i]);


//arrays are dynamic
values.push(7);
values.push(9);
console.log('values.length',values.length);
console.log('values',values);

//unlike other languages, JS arrays will not throw error for out of bound access
//it returns undefined.
console.log('values[20]',values[20]);


//we can even add a value at any index
values[20]=100;
console.log('values.length',values.length);
for(let i=0;i<values.length;i++)
    console.log(i,values[i]);



//JavaScript list is a list of values that can be of any type.
values=[1,'Hello',true,new Date(),null,undefined,[1,2,3]];
console.log('values.length',values.length);
console.log('values',values);