console.log('calculator module loaded');


const createCalculator=function(){
    
    var calculator=new Object();

    calculator.numbers=[];

    calculator.addNumber=function(number){
        if(number && !isNaN(number))
            this.numbers.push(number)
    };

    calculator.sum=function(){
        let result=0;
        for(let number of this.numbers)
            result+=number;

        return result;
    };
    calculator.average=function(){
        return this.sum()/this.numbers.length;
    };
    calculator.max=function(){
        if(this.numbers.length===0)
            return NaN;

        let max=this.numbers[0];
        for(let number of this.numbers)
            if(number>max)
                max=number;
        return max;
    };

    calculator.clear=function(){
        this.numbers=[];
    };
    


    return calculator;
}