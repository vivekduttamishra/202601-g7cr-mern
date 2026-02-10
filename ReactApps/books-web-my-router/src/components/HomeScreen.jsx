import { useState } from 'react'
import Border from './utils/Border'

import FAQ from './utils/FAQ.jsx'
import withConditionalVisibility from '../hocs/withConditionalVisibility'
import faqs from '../data/faq.js'




const HomeScreen = (props) => {
   
   
    return (
        <div className='HomeScreen screen'>
            
            <h2>FAQS</h2>

            <FAQ faqs={faqs} />

        </div>
    )

}

export default withConditionalVisibility(HomeScreen)