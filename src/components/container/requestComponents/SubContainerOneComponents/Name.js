import React from "react";

export default function Name(props){
    const name = () => {
        if(props.repositories.name == null){
            return <h1>Not Available</h1>
        }else if(props.repositories.name.length < 20){
            return <h1>{props.repositories.name}</h1>
        }else{
            const initialsValues = props.repositories.name.split(" ");
            return <h1>{initialsValues[0]}</h1>
        }
    }

    return <>{name()}</>;
}