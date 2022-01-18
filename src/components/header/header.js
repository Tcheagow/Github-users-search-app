import React from 'react';
import Light from './light'; 
import Title from './title';

export default function header() {
    return(
        <div className='header'>
            <Title/>
            <Light/>
        </div>
    )
}