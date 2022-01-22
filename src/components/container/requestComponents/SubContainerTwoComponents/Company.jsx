import React from "react";
import CompanySvg from "./Icons/CompanySvg";

export default function Company(props){
    const company = () => {
        if(props.repositories.company == null){
            return (
                <div className="iconAndP lengthCompanyAndTwitter">
                    <CompanySvg/>
                    <p>Not Available</p>
                </div>);
        }else{
            return (
                <div className="iconAndP lengthCompanyAndTwitter">
                    <CompanySvg/>
                    <p>{props.repositories.company}</p>
                </div>);
        }
    }

    return <>{company()}</>;
}