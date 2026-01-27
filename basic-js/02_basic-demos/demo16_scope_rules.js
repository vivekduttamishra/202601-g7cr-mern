//JS variables have few different scope types
//ES5 function scope, block scope, global (explcit and implict)

//any variable declared outside all function is global
//it is accessible within all functions
var global = 'global'; 

function a(){
    console.log("a()")
    console.log('global',global)
    var aLocal='aLocal'  //explicit local
    console.log('aLocal',aLocal);
    
    //I can change global also
    global+=' a changed global';
    
}

function b(){
    console.log('b()')
    console.log('global',global);
    bLocal='bLocal'   //implicit global variable
    global+=" b changed global"
    
}

function c(){
    console.log('c()');
    console.log('global',global); //can 
    
    console.log('bLocal',bLocal); //can access
    
    console.log('aLocal',aLocal); //can't access
    
}

a()
b()
c()


