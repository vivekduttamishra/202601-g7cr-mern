

const app=(function(){

    let minBox= $("#min") //document.getElementById
    let maxBox= $("#max")
    let primeTasks=$("#prime-tasks tbody")
    let loadingIcon=$("#loading")
    let errorBox=$("#error")

    let {findPrimes}= PrimeUtils;

    primeTasks.empty();
    loadingIcon.hide()

    function onFindPrime(){
        let min= minBox.val()
        let max= maxBox.val()
        loadingIcon.show();
        try{
            let primes=findPrimes(min,max)
            $("#result").html(primes.length)
            errorBox.html('');
        }catch(err){
            errorBox.html(err.message)
        }finally{
            loadingIcon.hide()
        }
    }
    
    function onCancel(id){

    }
    
    return{
        onFindPrime,
        onCancel
    }
})();