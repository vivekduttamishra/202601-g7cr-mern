
/*
     VERY VERY IMPORTANT
     This is NOT a component
     It is a function that creates a component
     It is a component creator/ component factory
     It will take:
         * The component with want to enhance
     It returns
         * An Enhanced version of the component

*/

import HomeScreen from "../components/HomeScreen"
import Border from "../components/utils/Border"

const withBorder = TargetComponent => {


    const NewComponent = (props) => {

        return (
            <Border>
                <TargetComponent {...props} />
            </Border>
        )
    }

  

    return NewComponent


}

export default withBorder