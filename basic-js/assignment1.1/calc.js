console.log('calculator loaded');

const numberTextBox  = document.getElementById('number');
const numbersList = document.getElementById('numbers');

function handleAdd(){
    let value  = numberTextBox.value;
    console.log('Adding number to the list', value);
    //numbersList.innerText= '<li>' + value + '</li>';
    
    //ES2015 string interpolation
    numbersList.innerHTML += `<li>${value}</li>`;
}

// document.getElementById("resetButton").addEventListener('click', function(){
//     console.log('Resetting the list');
//     numbersList.innerHTML = '';
// });


function handleReset(){
    console.log('Resetting the list');
    numbersList.innerHTML = '';
}