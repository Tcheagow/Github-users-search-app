import React from "react";

export default function Bio(props){
    const bioo = () => {
        if(props.repositories.bio == null){
            return <p className="span bioMargin">This profile has no bio</p>
        }else if(props.repositories.bio.length < 45){
            return <p className="span bioMargin">{props.repositories.bio}</p>
        }else{
            return <p className="span bioMargin">The bio is too big</p>
        }
    }

    return <>{bioo()}</>;
    
}