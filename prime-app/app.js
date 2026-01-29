

const app=(function(){

    let minBox= $("#min") //document.getElementById
    let maxBox= $("#max")
    let primeTasks=$("#prime-tasks tbody")
    let loadingIcon=$("#loading")
    let errorBox=$("#error")

    let {findPrimes}= PrimeUtils;

    primeTasks.empty();
    loadingIcon.hide()
    let lastId=0
    let tasks={}

    function generateRow(task){
        return `
            <tr id="${task.id}">
                <td>${task.id}</td>
                <td>${task.min}</td>
                <td>${task.max}</td>
                <td id="action-${task.id}">
                    <img src="loading.webp" width="50" />
                    <button class="btn btn-sm btn-danger"
                        onClick="app.onCancel(${task.id})"
                    >
                        cancel
                    </button>
                </td>
            <tr>        
        `
    }

    function onFindPrime(){
        let min= Number(minBox.val())
        let max= Number(maxBox.val())
        let task={
            id:++lastId,
            min,
            max,
            done:false
        }
        tasks[task.id]=task;
        let row = generateRow(task)
        primeTasks.append(row);
        let resultBox=$(`#action-${task.id}`)

        
        findPrimes(min,max, (error,primes)=>{
            if(error){
                resultBox.html(error.message)
            }else{
                task.primes=primes;
                task.done=true;
                resultBox.html(task.primes.length)                
            }
        })


        
        
    }
    
    function onCancel(id){

    }
    
    return{
        onFindPrime,
        onCancel
    }
})();