import React from 'react';
import GifContainerNoSearch from './GifContainerNoSearch/GifContainerNoSearch';

export default function ContainerNoSearch(props){
    return(
        <div className='containerNoSearch'>
            <h1>Search a name</h1>
            <GifContainerNoSearch white={props.white}/>
        </div>
    );
}
