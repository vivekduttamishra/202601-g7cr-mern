
//PrimeUtils is mor like namespace grouper
//One name hdies two behind it
const PrimeUtils=(function (){

    function isPrime(number){
        if(number<2)
            return false
        for(let i=2;i<number;i++)
            if(number%i===0)
                return false;

        return true;
    }

    class PrimeFinder{
        constructor(min,max){
            this.min=min
            this.max=max;
            this.primes=[];
            this.done=false;
        }

        start(){
            for(let i=this.min;i<this.max;i++){
                if(isPrime(i))
                    this.primes.push(i)
            }
            return this.primes;
        }
    }


    return {
        isPrime,
        PrimeFinder
    }
})();