import Title from './Title'
import Navigation from './Navigation'

function Heading(props) {

    //console.log('Heading Props', props )


    return <div className="heading">
        <Title size={45} color="maroon" >
            {props.title}
        </Title>
        <Navigation options={props.menu} />
    </div>
}

export default Heading;