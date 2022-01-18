import React from 'react';
import SunWhite from './SunWhite'; 
import SunDark from './SunDark';

export default function light(props){
    return(
        <div className='light'
            onClick={()=>props.setWhite(!props.white)}
        >
            <h2 className='titleLight'>{props.white?<>LIGHT</>:<>DARK</>}</h2>
            <>{props.white?<SunDark/>:<SunWhite/>}</>
        </div>
    )
}