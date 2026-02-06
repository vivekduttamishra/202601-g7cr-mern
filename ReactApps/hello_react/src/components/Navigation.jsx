import React from 'react'

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

export default Navigation