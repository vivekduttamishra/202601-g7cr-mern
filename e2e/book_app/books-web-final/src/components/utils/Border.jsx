
const Border=({classes="",style={}, thickness=1,color='gray', borderStyle='solid', children})=>{

    style={
        border: `${thickness}px ${borderStyle} ${color}`,
        margin:5,
        padding:5,
        ...style
    }

    classes='border '+classes;

    return <div  style={style} className={classes} >
        {children}
    </div>

}

export default Border;