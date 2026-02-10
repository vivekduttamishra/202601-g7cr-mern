import { useState } from 'react'
import If from './If'

const Expandable = ({ initialCondition = false, title, children }) => {

    let [condition, setCondition] = useState(initialCondition)

    const style={
        cursor:'pointer'
    }

    return (
        <div className='expandable'>
            <h2 className='controller' style={style}
                onClick={() => setCondition(!condition)}
            >{title}</h2>
            <If condition={condition}>
                {children}
            </If>
        </div>
    )
}


export default Expandable;