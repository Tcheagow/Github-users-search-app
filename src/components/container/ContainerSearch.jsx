import React from 'react';
import SubContainerOne from './requestComponents/SubContainerOne';
import SubContainerTwo from './requestComponents/SubContainerTwo';

export default function Container(props){
  /* const location = props.repositories.location;*/
    
    return(
        <div className='containerSearch'>
            <>
                <SubContainerOne repositories={props.repositories}/>
                <SubContainerTwo repositories={props.repositories}/>
            </>
        </div>
    );
}