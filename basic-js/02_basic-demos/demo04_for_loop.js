//JS supports 3 variants of for loop


//standard C like for loop
for(let i=0;i<5;i++)
    console.log(i);

//for..in loop used for array and objects (to be discussed later)
//not really  much useful for arrays.
console.log('for..in loop');
let arr=['A','B','C','D'];
for(let index in arr)
    console.log(index, arr[index]);


//ES2015 for..of loop
//use only for array to loop all its value (Readonly)
console.log('for..of loop');
for(let value of arr)
    console.log(value);


