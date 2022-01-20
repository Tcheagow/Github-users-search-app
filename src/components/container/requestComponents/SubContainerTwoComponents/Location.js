import React from "react";

export default function location(props){
    const location = () => {
        if(props.repositories.location == null){
            return <p className="">Not Available</p>
        }else{
            return <p className="">{props.repositories.location}</p>;
        }
    }

    return <>{location()}</>;
}