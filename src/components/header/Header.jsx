import React from 'react';
import Light from './Light'; 
import Title from './Title';

export default function header(props) {
    return(
        <div className='header'>
            <Title/>
            <Light white={props.white} setWhite={props.setWhite}/>
        </div>
    )
}