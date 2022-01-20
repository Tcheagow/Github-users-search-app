import React from "react";

export default function Login(props){
    const login = () => {
        if(props.repositories.login == null){
            return <a href={props.repositories.html_url} target="_blank"><p className="loginMargin">Not Available</p></a>;
        }else{
            return <a href={props.repositories.html_url} target="_blank"><p className="loginMargin">{props.repositories.login}</p></a>;
        }
    }

    return <>{login()}</>;   
}