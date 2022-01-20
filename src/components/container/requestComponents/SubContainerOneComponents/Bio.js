import React from "react";

export default function Bio(props){
    const bioo = () => {
        if(props.repositories.bio == null){
            return <p className="bioSpan">This profile has no bio</p>
        }else if(props.repositories.bio.length < 45){
            return <p className="bioSpan">{props.repositories.bio}</p>
        }else{
            return <p className="bioSpan">The bio is too big</p>
        }
    }

    return <>{bioo()}</>;
    
}