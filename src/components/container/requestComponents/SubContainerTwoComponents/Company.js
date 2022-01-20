import React from "react";

export default function Company(props){
    const company = () => {
        if(props.repositories.company == null){
            return <p className="">Not Available</p>
        }else{
            return <p className="">{props.repositories.company}</p>;
        }
    }

    return <>{company()}</>;
}