import React from 'react'

interface ClockState{
    time: Date
}

interface ClockProps{
    prefix?:string;
}

// class Clock extends React.Component<ClockProps,ClockState>{
//     id: null|number=null;
//     state={
//         time:new Date()
//     }

//     componentDidMount(): void {
//         this.id=setInterval(()=>{
//             this.setState(state=> ({time: new Date()}))
//         },1000)
//     }

//     componentWillUnmount(): void {
//         if(this.id){
//             clearInterval(this.id)
//             this.id=null;
//         }
//     }

//     render(){

//         return <span className="clock">{this.props.prefix } {this.state.time.toLocaleTimeString()}</span>
//     }
// }


const Clock=({prefix} : ClockProps)=>{

    let [time,setTime]=React.useState(new Date())

    React.useEffect(()=>{
        const id = setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>clearInterval(id);
    })

    return  <span className="clock">{prefix } {time.toLocaleTimeString()}</span>


}

export default Clock;