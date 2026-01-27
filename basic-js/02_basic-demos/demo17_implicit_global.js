

function inner(id, max){
    for(i=0;i<=max;i++)
        console.log(id,i)
}


function outer(oMax,iMax){

    for(i=0;i<=oMax;i++){
        inner(i, iMax)
    }

}


outer(2,3); //expected 0 0, 0 1, 0 2, 0 3,  1 0, 1 1, ... 2 3

outer(5,2) // expected 0 0, 0 1, 0 2, 0 3, 1 0, 1 1, ...  4 3