import React from 'react';
import ImgLight from '../images/light.png';

export default function light(){
    return(
        <div className='light'>
            <h2>LIGHT</h2>
            <img src= {ImgLight} className='imageLight'/>
        </div>
    )
}