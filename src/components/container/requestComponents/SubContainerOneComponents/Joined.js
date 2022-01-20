import React from "react";

export default function Joined(props){
    const joinedd = () => {
        if(props.repositories.created_at == null){
            return <p className="span">Not Available</p>
        }else{
            const formate = props.repositories.created_at.split("-");
            const formatetwo = formate[2].split("T");

            const date = "Joined " + formatetwo[0] + " " + formate[1] + " " + formate[0];
            return <p className="span">{date}</p>
        }
    }

    return <>{joinedd()}</>;
}