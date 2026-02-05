

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
        try{
            task.primes=findPrimes(min,max)
            task.done=true;
            $(`#action-${task.id}`).html(task.primes.length)
        }catch(err){
            errorBox.html(err.message)
        }
        
    }
    
    function onCancel(id){

    }
    
    return{
        onFindPrime,
        onCancel
    }
})();