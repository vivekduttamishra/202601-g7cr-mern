import { useState } from 'react';
import { validate } from '../../services/validation';



export const LabeledInput = ({
    id,
    value = '',
    onChange,  //most import required elements
    type = 'text',
    label = id,
    placeholder = label, //ui structure  
    errorMessage = "", //error display
    inputClassName = "",
    labelClassName = "",
    groupClassName = "", //optional styling
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

    if (!inputBuilder)
        inputBuilder = param => (<input {...param} />)

    return (
        <div className={`form-group ${groupClassName}`}>
            <label className={labelClassName} htmlFor={id}>{label}</label>

            {inputBuilder({ id, value: innerValue, onChange: handleChange, className: `form-control ${inputClassName}`, type, placeholder })}



            < small id="infoSection" className="form-text  text-danger">{errorMessage}</small>

        </div >
    )
}

export const textAreaBuilder = (params) => <textarea {...params} />


export const Input = (props) => <input {...props} />
export const TextArea = (props) => <textarea {...props} />
export const DropDown = (props) => {
    const { options = [], ...rest } = props
    return (
        <select {...rest} className={`form-control ${props.className || ''}`}>
            {options.map((opt, idx) => (
                <option key={idx} value={opt.value}>{opt.label ?? opt.value}</option>
            ))}
        </select>
    )
}

/*
    const schema=[
        {id: "name", validators:[] },
        {id: "email", value:"", validators:[], placeholder:"", label:"", inputBuilder:(params)=>{}},
        {id: "password", type:"password", value:"", validators:[], placeholder:"", label:"", inputBuilder:(params)=>{}},
        {id: "profilePhoto",  value:"", validators:[], placeholder:"", label:"", inputBuilder:(params)=>{}
            errorMessage:"", inputClassName:"",  labelClasName:"", groupClassName:""
        },
    ]
*/


/*
    //new schema
    {
        id:{value:"", type:"password", validators:[]},
        photo:"",  //no validation
        biography:[required(),minLength(25)] //only validator    
    }
*/

const normalizeSchema = (schema, model = {}) => {
    
    
    Object.keys(schema).forEach((key, i) => {
        let v = schema[key]
        if (v instanceof Array) { //array of validators
            v = { validators: v }
        } else if (typeof (v) === 'function') //single validator
            v = { validators: [v] }
        else if (typeof (v) !== 'object') //default value
            v = { value: v }

        v = {
            id: key,
            index: i,
            value: '',
            validators: [],
            inputBuilder: null,
            groupClassName: '',
            inputClassName: '',
            labelClassName: '',
            ...v
        }

        if (!v.label)
            v.lable = v.id
        if (!v.placeholder)
            v.placeholder = v.label
        v.value = model[key] ?? v.value ?? ""
        schema[key] = v;




    })

   // console.log('schema',schema);
    
    return schema

}

export const Form = ({ 
    schema, 
    model, 
    errors, 
    onChange, 
    onSubmit, 
    
    submitOnError = false, 
    inputClassName = "form-control", 
    groupClassName = "", 
    labelClassName = "", 
    submitClass = "form-control btn-primary btn", 
    submitLabel = "Submit" }) => {

    schema = normalizeSchema(schema)
    
    
    const formFieldOrder = Object.keys(schema).map(k => schema[k]).sort((a, b) => a.index - b.index).map(s => s.id)



    const handleSubmit = (form) => {
        form.preventDefault()
        if(!errors || submitOnError)
            onSubmit()
    }

    const handleChange = (value, id) => {
        //const { id, value } = element.target        
        onChange(value, id)
    }

    return (
        <form onSubmit={handleSubmit} >
            {
                formFieldOrder.map(id => {
                    const item= schema[id]
                   
                    
                    return <LabeledInput
                        key={id}
                        id={id}
                        value={model[id]}
                        label={item.label }
                        type={item.type??"text"}
                        placeholder={item.placeholder }
                        errorMessage={errors ? errors[id] : ""}
                        onChange={handleChange}
                        inputClassName={item.inputClassName ?? inputClassName}
                        labelClassName={item.labelClassName ?? labelClassName}
                        groupClassName={item.groupClassName ?? groupClassName}
                        inputBuilder={item.inputBuilder}
                    />
                })

            }
            <p />
            <button
                type="submit"
                className={submitClass}
                disabled={errors && !submitOnError}
            >
                {submitLabel}
            </button>
        </form>
    )

}

export const useForm = (schema, model = {},  onChange = null) => {
    //let _model = {}

    schema = normalizeSchema(schema,model)

    // schema.forEach(item => {
    //     _model[item.id] = model[item.id] ?? item[item.id] ?? ""
    // })

    Object.keys(schema).forEach(k=>{
        model[k]=schema[k].value;
    })

   
    

    let [modelState, setModelState] = useState(model)
    let [error, setError] = useState(undefined)
    const handleChange = async (value, id) => {
        //const { id, value } = event.target
        let model= {...modelState,[id]:value}
        setModelState(model)
        let _e=undefined
        try {
            await validate(model, schema)
            setError(undefined)
        } catch (e) {
            _e=e.info;
            setError(_e)
        }
        if (onChange)
            onChange(value, id,model,_e)
    }

   

    return [modelState, error, handleChange]

}





export default LabeledInput;