//JS supports 3 variants of for loop
let arr=['A','B','C','D'];
arr[4]=undefined; //index 4 is explicitly undefined
arr[7]='H'; //index 5 and 6 are missing (assumed undefined)

//for loop
console.log('traditional for loop');
for(let i=0;i<arr.length;i++)
    console.log(i, arr[i]);


//for..in loop used for array and objects (to be discussed later)
//not really  much useful for arrays.
console.log('for..in loop');



for(let index in arr)
    console.log(index, arr[index]);


//ES2015 for..of loop
//use only for array to loop all its value (Readonly)
console.log('for..of loop');
for(let value of arr)
    console.log(value);


