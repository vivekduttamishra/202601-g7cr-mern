

function outer(oParam){

    function inner(iParam){
        console.log(`oParam=${oParam}\tiParam=${iParam}`)
    }

    return inner;
}


let x = outer(20); //x ---> inner function

let y = outer(25); // y---> another inner function


x(10); 

y(10);