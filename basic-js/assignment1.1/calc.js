
const numberTextBox  = document.getElementById('number');
const numbersList = document.getElementById('numbers');
let console= document.getElementById('console');
let numbers=[];

function testSetup(){
    numbers.push(20);
    numbers.push(30);
    numbers.push(40);
    numbers.push(10);
    handleRefresh();
}

testSetup();


function handleAdd(){
    let value  = numberTextBox.value;
    //numbersList.innerText= '<li>' + value + '</li>';
    
    if(value===''){
        return;
    }

    value = parseFloat(value);
    if(isNaN(value)){
        console.innerHTML+="<p>Invalid Number</p>";
        return;
    }

    //ES2015 string interpolation
    numbersList.innerHTML += `<li>${value}</li>`;
    numbers.push(value);
}

// document.getElementById("resetButton").addEventListener('click', function(){
//     console.log('Resetting the list');
//     numbersList.innerHTML = '';
// });

//Business logic
function sum(){

    let total=0;
    for(let n of numbers){
        total+=n;
    }
    return total;
}

function average(){
    return sum()/numbers.length;
}


//UI logic
function handleSum(){
    let total = sum();
    console.innerHTML+=`<p>Sum is ${total}</p>`;

}

function handleAverage(){
    let avg= average();
    console.innerHTML+=`<p>Average is ${avg}</p>`;
}

function handleMax(){
    let max= numbers[0];
    for(let n of numbers){
        if(n>max){
            max=n;
        }
    }
    console.innerHTML+=`<p>Max is ${max}</p>`;
}

function handleClear(){
    numbersList.innerHTML = '';
    console.innerHTML = '';
    numberTextBox.value = '';
}

function handleReset(){
    //console.log('trying to call clear')
    handleClear();
    numbers=[];   
}

function handleRefresh(){
    numbersList.innerHTML = '';
    for(let n of numbers){
        numbersList.innerHTML += `<li>${n}</li>`;
    }
}