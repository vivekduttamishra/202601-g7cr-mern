

type int=number //we just created an alias for number


let x:int = 20;

console.log('x',x);

type Id = number|string; //either number or string

let id1: Id = 20; //ok
let id2: Id = 'x391'; //ok

// let id3: Id = [2,11,4]; //not valid

// let id4: Id = null;  //not valid. id must be either string or number


type Dice=1|2|3|4|5|6

let n1:Dice = 5; //ok
let n2:Dice = 6; //ok
// let n3:Dice = 0; //no valid
// let n4:Dice =10; //not valid

enum Switch{
    On,
    Off
}

let s1:Switch=Switch.On;

let s2:Switch=Switch.Off;


enum DiceValue{
    _1,
    _2,
    _3,
    _4,
    _5,
    _6
}

let dv1:DiceValue=DiceValue._1

let dv2=DiceValue._2

