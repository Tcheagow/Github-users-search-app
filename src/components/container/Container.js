import React from "react";
import ContainerError from './ContainerError';
import ContainerNoSearch from './ContainerNoSearch';
import ContainerSearch from './ContainerSearch';

export default function Container(props){
    function req(){
        if(props.repositories.login !== undefined){
            return <ContainerSearch repositories={props.repositories}/>
        }else if(props.repositories.message === "Not Found"){
            return <ContainerError/>;
        }else{
            return <ContainerNoSearch/>;
        }
    }
    return(
        <>{req()}</>
    );
}

