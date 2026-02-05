

//1. header element

let header = React.createElement(
    'h1',
    null,
    'React App'
)

let hr = React.createElement('hr')

let linkProps = {
    href: 'https://react.dev',
    target:'_blank'
}

let link=React.createElement(
        'a',
        linkProps, //null,
        'React Official Page'
    
)
/*
    <div>
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    </div>
*/

let body= React.createElement(
    'div',
    null,
    'Welcome to React:',
    
    React.createElement("div",null,
        React.createElement("ul",null,
        
            React.createElement("li",null,"one"),
            React.createElement("li",null,"two"),
            React.createElement("li",null,"three"),

        
        )
    )

)



let app = React.createElement(
    'div',
    null,
    header,
    hr,
    body
)


//------- This will remain unchanged in all React App

//2. The Real DOM element
let container = document.getElementById('container')


//3. Someone mot set React Element on Real Doc
let root = ReactDOM.createRoot(container); //define where we can place React

//4. render the React element on ReactDOM
root.render(app)


