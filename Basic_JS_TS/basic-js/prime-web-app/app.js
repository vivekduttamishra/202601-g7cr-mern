

const app=(function () {

    let minBox = getInput('min');
    let maxBox = getInput('max');
    let resultBox =getInput('result');
    let status= getWriter('status','strong')

    let loadingIcon = document.getElementById('loading')
    
    status.set('')
    

    function onCountPrime() {
        let min = minBox.getNumber()
        if(isNaN(min)){
            return status.set('Invalid Min')
        }

        let max = maxBox.getNumber()
        if(isNaN(max)){
            return status.set('Invalid Max')
        }

        if(min>=max)
            return status.set('Invalid Range')

        status.set('waiting')
        loadingIcon.style.display='block'

        const primeFinder = new PrimeUtils.PrimeFinder(min,max);
        let result = primeFinder.start();
        
        status.set('done')
        loadingIcon.style.display='none'

        resultBox.setValue(result.length);
        
    }

    return {
        onCountPrime
    }
})();





