

console.log('Hello React')


//Create Real DOM Element
//let element=document.createElement('h2')
//element.innerHTML="Not Yet React"


//1. A React Element. Not same as DOM element
let element = React.createElement(
    'h2', //the element name or type
    
    null,  //attributes to element
    
    //list of comma separated chidren
    'Now we React!',
    "Are you Ready"
    
)


//Add the elment to current DOM
//container.appendChild(element)

//2. The Real DOM element
let container = document.getElementById('container')


//3. Someone mot set React Element on Real Doc
let root = ReactDOM.createRoot(container); //define where we can place React

//4. render the React element on ReactDOM
root.render(element)


