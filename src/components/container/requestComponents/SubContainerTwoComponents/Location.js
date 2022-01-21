import React from "react";
import LocationSvg from "./Icons/LocationSvg";

export default function location(props){
    const location = () => {
        if(props.repositories.location == null){
            return (
                <div className="iconAndP">
                    <LocationSvg/>
                    <p>Not Available</p>
                </div>);
        }else if(props.repositories.location.includes(',')){
            const compress = props.repositories.location.split(",");
            return (
                <div className="iconAndP lengthBlogAndLocation">
                    <LocationSvg/>
                    <p>{compress[0]}</p>
                </div>);
        }else{
            return (
                <div className="iconAndP lengthBlogAndLocation">
                    <LocationSvg/>
                    <p>{props.repositories.location}</p>
                </div>);
        }
    }

    return <>{location()}</>;
}