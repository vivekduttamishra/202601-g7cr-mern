

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
    // let tasks={}
    let tasks = []

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
        let min= minBox.val()
        let max= maxBox.val()
        let task={
            id:++lastId,
            min,
            max,
            status:'idle',
            error:null,
            primes:[],
            cancellationRequested:false
        }
        tasks[task.id]=task;
        
        let row = generateRow(task)
        primeTasks.append(row);
        let resultBox=$(`#action-${task.id}`)

        
        // findPrimes(task, (error,task)=>{
        //     if(error){
        //         resultBox.html(`<span class="text-danger">${error.message}</span>`)
        //     }else{               
        //         // if(task.status==="done")
        //             resultBox.html(task.primes.length)
        //         // else 
        //         //     resultBox.html(task.status)                
        //     }
        // })

        let promise = findPrimes(task);
        //reaches here immediately. but task has not finished

        promise
            //when it completes successfully
            .then(task=> resultBox.html(`Total Primes:${task.primes.length}`))
            //if it fails
            .catch(error=> resultBox.html(`<span class='text-danger'>${error.message}</span>`))


        
        
    }
    
    function onCancel(id){
        const task= tasks[id]
        if(task){
            task.cancellationRequested=true;
        }
    }
    
    return{
        onFindPrime,
        onCancel
    }
})();