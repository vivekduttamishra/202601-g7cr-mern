console.log('Application module loaded')

function createApplication(){


    const calculator = createCalculator();
    const numberTextBox = document.getElementById("number");
    const console= document.getElementById("console");
    const numberList = document.getElementById("numbers");

    return {

        onAddNumber: function(){
            let number = numberTextBox.value;
            if(number)
                number=Number(number);
            if(!number || isNaN(number)){
                console.innerHTML+=`<p>Invalid Input</p>`;
                return;
            }
            calculator.addNumber(number);
            numberList.innerHTML+=`<li>${number}</li>`
        },

        onSum: function(){
            const sum = calculator.sum();
            console.innerHTML+=`<p>sum is ${sum}</p>`
        },

        //es 2015
        onAverage(){
            const avg=calculator.average();
            console.innerHTML+=`<p>Average is ${avg}</p>`
        },
        onMax(){
            const max=calculator.max();
            console.innerHTML+=`<p>Max is ${max}</p>`
        },
        onClear(){
          console.innerHTML="";
          numberList.innerHTML="";
          numberTextBox.value=""  
        },

        onReset(){
            this.onClear();
            calculator.clear();
        },

        onRefresh(){
            numberList.innerHTML="";
            for(let number of calculator.numbers)
                numberList.innerHTML+=`<li>${number}</li>`
        }


    }
}

const app=createApplication();