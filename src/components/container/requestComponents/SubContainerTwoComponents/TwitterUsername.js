import React from "react";
import TwitterSvg from "./Icons/TwitterSvg";

export default function twitterUsername(props){
    const twitter_username = () => {
        if(props.repositories.twitter_username == null){
            return (
                <div className="iconAndP lengthCompanyAndTwitter">
                    <TwitterSvg/>
                    <p>Not Available</p>
                </div>);
        }else{
            return (
                <div className="iconAndP lengthCompanyAndTwitter">
                    <TwitterSvg/>
                    <p>{props.repositories.twitter_username}</p>
                </div>);
        }
    }

    return <>{twitter_username()}</>;
}