console.log('Application module loaded')

function createApplication(){


    const calculator = createCalculator();
    // const numberTextBox = document.getElementById("number");
    // const console= document.getElementById("console");
    // const numberList = document.getElementById("numbers");

    const numberTextBox = getInput('number');
    const console= getUI('console')
    const numberList= getUI('numbers','li');


    return {

        onAddNumber: function(){
            let number = numberTextBox.getNumber();
            
            if(isNaN(number)){
                //console.innerHTML+=`<p>Invalid Input</p>`;
                console.append('Invalid Value');
                return;
            }
            calculator.addNumber(number);
            //numberList.innerHTML+=`<li>${number}</li>`
            numberList.append(number);
        },

        onSum: function(){
            const sum = calculator.sum();
            console.append(`sum is ${sum}`)
        },

        //es 2015
        onAverage(){
            const avg=calculator.average();
            console.append(`Average is ${avg}`)
        },
        onMax(){
            const max=calculator.max();
            console.append(`<p>Max is ${max}</p>`)
        },
        onClear(){
          console.clear()
          numberList.clear()
          numberTextBox.clear()
        },

        onReset(){
            calculator.clear();
            this.onClear();
        },

        onRefresh(){
            numberList.clear();
            for(let number of calculator.numbers)
                numberList.append(number);
        }


    }
}

const app=createApplication();