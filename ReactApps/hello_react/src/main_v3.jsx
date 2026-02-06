
import ReactDOM from 'react-dom/client'
import React from 'react'
import './app.css'




//JSX
function Heading(props) {

    //console.log('Heading Props', props )


    return <div className="heading">
        <Title size={45} color="maroon" >
            {props.title}
        </Title>
        <Navigation options={props.menu} />
    </div>
}


class Navigation extends React.Component {

    // constructor(props){
    //     super(props);

    //     this.handleClick=this.handleClick.bind(this)
    // }

    //intial state
    
    state={activeButton:'Home'}

    handleClick(id){
       
        //console.log('clicked', id);
        // let option= this.props.options.find(o=>o.label===id)
        // //console.log('option',option)

        //this.activeButton=id;
        
        //this.state.activeButton=id

        this.setState({ activeButton:id })

        //console.log('state', this.state)
        
        
    }

    render() {
        const component=this;

        function getButtonClass(id){
            if(id===component.state.activeButton)
                return "active"
            else
                return ""
        }

        return (<div className='nav' >
            {
                this.props.options.map(option=>(
                    <button key={option.label} 
                        className={ getButtonClass(option.label) }
                        onClick={()=>this.handleClick(option.label)}
                        >
                        {option.label}
                    </button>)
                )
            }

        </div>)
    }
}


function Title(params) {
    const titleStyle = {
        fontSize: params.size,
        color: params.color
    }

    //console.log('title params', params)

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

let App = () => {

    let menu=[
        {label:'Home', target:'/'},
        {label:'Authors', target:'/auhors'},
        {label:'Add Author', target:'/auhors/add'},
        {label:'Books', target:'/books'},
        {label:'Add Book', target:'/books/add'},
    ]



    return <div>
        <Heading title="World Wide Books" menu={menu} />
        <hr />
        <Body />
        <Footer />
    </div>
}

//Get Access To Real DOM
let root = document.querySelector("#root")



//let app=React.createElement('div', null, heading,body,footer)





//html text not jsx
//root.innerHTML=`<h1>Hello Plain Text</h1>`

let reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);



