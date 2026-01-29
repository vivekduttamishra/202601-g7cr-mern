


class LuckError extends Error{
    constructor(message, luckyNumber){
        super(message)
        this.luckyNumber=luckyNumber
    }

    toString(){
        return `${this.message}: ${this.luckyNumber}`
    }
}

class NoLuckError extends LuckError{
    constructor(message="No Luck"){
        super(message,0)
    }
}

class TooMuchNegativityError extends LuckError{
    constructor(message="Too much negativity around you", luckyNumber){super(message,luckyNumber)}
}




//data 
function fetchPredictionFromDb(luckyNumber){
    let predictions=[null, 'You have a great day ahead', 
                           'Be careful success is around the corner',
                           'Challenges will make you brave',
                           'Relax. You deserve it',
                           'Except unexpected',                        
                        ]

    if(isNaN(luckyNumber))
        throw "Invalid Number"

    if(luckyNumber===0)
        throw new NoLuckError()

    if(luckyNumber<0)
        throw "Too Much Negativity"

    if(luckyNumber>=predictions.length)
        throw "Too Ambitious: choose between 1 and 5"

    return predictions[luckyNumber]
}



//business logic
function getPrediction(luckyNumber){
    let prediction= fetchPredictionFromDb(luckyNumber);
    return prediction;
}



//presentation tier
function fortuneTeller(luckyNumber){

    let fortune= getPrediction(luckyNumber)
    console.log(`Your fortune: ${fortune}`)
}

fortuneTeller(3) //no throw

fortuneTeller(-2) //throws error. terminates app

//we never reach here
fortuneTeller(1)