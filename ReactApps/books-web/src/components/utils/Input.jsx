import { useState } from 'react';


 const LabeledInputV1 = ({ id, value = '', onChange,  //most import required elements
    type = 'text', label = id, placeHolder = label, //ui structure  
    errorMessage = "", //error display
    inputClassName = "", labelClassName = "", groupClassName = "", //optional styling
    //input control
    InputElement, HtmlTag = "input"
}) => {

    const [innerValue, setInnerValue] = useState(value)
    const handleChange = (event) => {
        const { id, value } = event.target
        setInnerValue(value)
        if (onChange)
            onChange(value, id, event.target)
    }

    return (
        <div className={`form-group ${groupClassName}`}>
            <label className={labelClassName} htmlFor={id}>{label}</label>

            {InputElement ? (
                <InputElement className={`form-control ${inputClassName}`} type={type} id={id}
                    value={innerValue} onChange={handleChange} placeholder={placeHolder} />
            )
                :
                (
                    <HtmlTag className={`form-control ${inputClassName}`} type={type} id={id}
                        value={innerValue} onChange={handleChange} placeholder={placeHolder} />

                )

            }



            < small id="infoSection" className="form-text  text-danger">{errorMessage}</small>

        </div >
    )
}

export const LabeledInput = ({ id, value = '', onChange,  //most import required elements
    type = 'text', label = id, placeholder = label, //ui structure  
    errorMessage = "", //error display
    inputClassName = "", labelClassName = "", groupClassName = "", //optional styling
    //input control
    inputBuilder
}) => {

    const [innerValue, setInnerValue] = useState(value)
    const handleChange = (event) => {
        const { id, value } = event.target
        setInnerValue(value)
        if (onChange)
            onChange(value, id, event.target)
    }

    if(!inputBuilder)
        inputBuilder = param=>(<input {...param} />)

    return (
        <div className={`form-group ${groupClassName}`}>
            <label className={labelClassName} htmlFor={id}>{label}</label>

            {inputBuilder({id,value:innerValue,onChange:handleChange,className:`form-control ${inputClassName}`,type,placeholder})}



            < small id="infoSection" className="form-text  text-danger">{errorMessage}</small>

        </div >
    )
}

export const textAreaBuilder=(params)=> <textarea {...params} />


export const Input = (props) => <input {...props} />
export const TextArea = (props) => <textarea {...props} />





// export const LabeledTextArea = ({id, value='', onChange,  //most import required elements
//                              type='text', label=id, placeHolder=label, //ui structure  
//                             errorMessage="", //error display
//                             inputClassName="", labelClassName="", groupClassName="" //optional styling
//                         }) => {

//     const [innerValue, setInnerValue]=useState(value)
//     const handleChange=(event)=>{
//         const {id,value}=event.target
//         setInnerValue(value)
//         if(onChange)
//             onChange(value,id,event.target)
//     }

//     return (
//         <div className={`form-group ${groupClassName}`}>
//             <label className={labelClassName} htmlFor='{id}'>{label}</label>
//             <textarea className={`form-control ${inputClassName}`}  id={id} value={innerValue} 
//             onChange={handleChange}  placeholder={placeHolder} />
//             <small id="infoSection" className="form-text  text-danger">{errorMessage}</small>

//         </div>
//         )
// }

export default LabeledInput;