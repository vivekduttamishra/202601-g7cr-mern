import {useState} from 'react';

/*
map={
    "/": ()=> <HomeScreen />,
    "/books" : ()=> <BookListScreen/>,
    "/book/details": ()=> <BookDetailsScreen/>

}
*/

const ScreenManager = ({selectedScreen, screens}) => {
    //component logic here

    console.log('screen manager selectedScreen',selectedScreen)

    let info=screens[selectedScreen];
    console.log('screen manager info',info)
    if(!info)
        return null;
    
    const Component=info.factory()
    console.log('screen component ',Component)
    
    return (
        <div className='ScreenManager '>
            {Component}
        </div>
    );
};

export default ScreenManager;