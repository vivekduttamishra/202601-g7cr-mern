function callMe() {
    console.log("Good! You called me!");
}

//not called until you call
callMe();


(
    function iWillCallMySelf() {
        console.log('I am called myself')
    }
)();


( function(name){
    console.log(`Hello ${name}, welcome to IIFE`)
})('JS');



