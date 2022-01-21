import React from "react";

export default function Name(props){
    const width = window.screen.width;

    const name = () => {
        if(props.repositories.name == null){
            return <h1>Unnamed</h1>
        }else if(props.repositories.name.length < 20){
            if(width < 700 && props.repositories.name.includes(' ')){
                const compressed = props.repositories.name.split(" ");

                return <h1>{compressed[0]}</h1>
            }else{
                return <h1>{props.repositories.name}</h1>
            }
        }else{
            const initialsValues = props.repositories.name.split(" ");
            
            return <h1>{initialsValues[0]}</h1>
        }
    }

    return <>{name()}</>;
}