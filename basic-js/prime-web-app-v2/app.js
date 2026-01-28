

const app=(function () {

    let minBox = getInput('min');
    let maxBox = getInput('max');
    let resultBox =getInput('result');
    let status= getWriter('status','strong')

    let loadingIcon = document.getElementById('loading')
    
    status.set('')
    resultBox.setValue('')

    function onCountPrime() {
        
        status.set('waiting')
        loadingIcon.style.display='block'
        const min= minBox.getNumber()
        const max=maxBox.getNumber()


        const primeFinder= new PrimeUtils.PrimeFinder(min,max);
        resultBox.setValue('');

        let result = primeFinder.start((error,result)=>{

            console.log('error',error);
            
            if(error){
                status.set(error)

            }
            else{
                resultBox.setValue(result.length);               
                status.set('done')
            }

            loadingIcon.style.display='none'
              
            
        });
        
    }

    return {
        onCountPrime
    }
})();





