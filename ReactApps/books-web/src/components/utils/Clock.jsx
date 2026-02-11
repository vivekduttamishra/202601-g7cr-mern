import { useState, Component } from 'react';

let timers=0;

class Clock extends Component {

    state={
        time:new Date(),
        
    }

    render() {
        const {time,timers}=this.state;

        return (
            <span className='Clock '>
                {time.toLocaleTimeString()}.{time.getMilliseconds()}
                <strong> ---- {timers}</strong>
            </span>
        );
    }

    componentDidMount(){
        timers++;
        console.log('interval set', timers)
        console.log('clock component  mounted')
        
       
       this.iid= setInterval(()=>{
           console.log(new Date().toLocaleTimeString())
            this.setState({
                
                time: new Date()
            })

        },1000)
    }

    componentWillUnmount(){
        timers--;
        console.log('component unmounted')
        clearInterval(this.iid)
    }
}



// const Clock = ({id}) => {
//     //component logic here

//     let [time,setTime]=useState(new Date())
//     let [timers, setTimers]=useState(0)

//     setInterval(()=>{
//         console.log('timer started')
//         setTime(new Date())
//         setTimers(t=>t+1);
//     },1000);

//     return (
//         <span className='Clock '>
//             {time.toLocaleTimeString()}.{time.getMilliseconds()}
//             <p>{timers}</p>
//         </span>
//     );
// };

export default Clock;   