
import ReactDOM from 'react-dom/client'
import React from 'react'





//JSX
function Heading() {

    return <div className="heading">
        <Title size={45} color="maroon" >
            Book's Web
        </Title>
        <Navigation options="Basic Navigation" />
    </div>  
}


class Navigation extends React.Component{
    render(){
        return <h2>{this.props.options}</h2>
    }
}


function Title(params){
    const titleStyle={
        fontSize: params.size,
        color:params.color
    }

    console.log('title params',params)

    return <h1 style={titleStyle}>{params.children}</h1>
}


class Body extends React.Component {
    render() {
        return <div>
            
            <h2>Welcome To Home Page</h2>
            <a href='https://react.dev' target='_blank'>
                Learn More!
            </a>
        </div>

    }
}


let Footer = () => <div>&copy; https://dev.vnc.in </div>

let App = () => <div>
    <Heading />
    <hr />
    <Body />
    <Footer />
</div>

//Get Access To Real DOM
let root = document.querySelector("#root")



//let app=React.createElement('div', null, heading,body,footer)





//html text not jsx
//root.innerHTML=`<h1>Hello Plain Text</h1>`

let reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);



