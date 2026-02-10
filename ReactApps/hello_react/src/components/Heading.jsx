import { withDate } from '../hoc/withDate';
import Title from './Title'
import Navigation from './utils/Navigation'

function Heading(props) {

    //console.log('Heading Props', props )


    return <div className="heading">
        <Title size={45} color="maroon" >
            {props.title}
        </Title>
        <span>{props.date.toLocaleDateString()}</span>
        <Navigation options={props.menu} onNavigate={props.onNavigate} />
    </div>
}

export default withDate(Heading);