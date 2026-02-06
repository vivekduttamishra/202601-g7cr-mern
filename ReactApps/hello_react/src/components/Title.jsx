function Title(params) {
    const titleStyle = {
        fontSize: params.size,
        color: params.color
    }

    //console.log('title params', params)

    return <h1 style={titleStyle}>{params.children}</h1>
}

export default Title;