let a:number=20; //a has explicit number type. value set to 20

let b = 30;   // b has implicit number type (because 30 is assigned to it)

let c: number;  //c has explict number type, but not initialized yet

a=1;
b=2;
c=3;

// a='hi';
// b=false;
// c=new Date()

//what if I need JS style variable that can hold anything

let d:any = 20 ; //d can hold anything. currently holding 20

d='Hi';
d=false;

let e;   //e will have implicit type any as it has not been intialized and type not given

e=20;
e='hi'
e=false;

