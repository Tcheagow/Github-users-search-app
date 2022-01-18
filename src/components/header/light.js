import React from 'react';
import SunWhite from './SunWhite'; 
import SunDark from './SunDark';

export default function light(){
    return(
        <div className='light'>
            <h2 className='titleLight'>LIGHT</h2>
            <SunWhite/>
        </div>
    )
}