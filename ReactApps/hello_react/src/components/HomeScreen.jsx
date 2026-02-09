import { Component } from 'react'
import Border from './utils/Border'

import Expandable from './utils/Expandable'
import FAQ from './utils/FAQ'
import withBorder from '../hoc/withBorder'




class HomeScreen extends Component {

    render() {
        console.log('this.props',this.props)
        return (
            <div className='HomeScreen screen'>

                <h2>FAQS</h2>

                <FAQ faqs={this.props.faqs} />

            </div>
        )
    }
}

export default withBorder(HomeScreen)