import React from "react";

export default function twitterUsername(props){
    const twitter_username = () => {
        if(props.repositories.twitter_username == null){
            return <p className="">Not Available</p>
        }else{
            return <p className="">{props.repositories.twitter_username}</p>;
        }
    }

    return <>{twitter_username()}</>;
}