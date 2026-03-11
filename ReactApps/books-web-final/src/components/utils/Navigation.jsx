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
        let keys=Object.keys(this.props.options);
        let option= keys.find(key=>key===id)
        console.log('selected option',option)
        this.props.onNavigate(option);

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
        let keys=Object.keys(this.props.options);
        //console.log('navigation.props',keys)
        return (<div className='nav' >
            {
                keys.map(key=>(
                    <button key={key} 
                        className={ getButtonClass(key) }
                        onClick={()=>this.handleClick(key)}
                        >
                        {this.props.options[key].label}
                    </button>)
                )
            }

        </div>)
    }
}

export default Navigation