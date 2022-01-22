import React from 'react';
import MoonDark from './MoonDark'; 
import SunLight from './SunLight';

export default function light(props){
    return(
        <div className='light'
            onClick={()=>props.setWhite(!props.white)}
        >
            <h2 className='titleLight'>{props.white?<>DARK</>:<>LIGHT</>}</h2>
            <>{props.white?<MoonDark/>:<SunLight/>}</>
        </div>
    )
}