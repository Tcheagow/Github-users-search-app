import React from "react";

export default function Login(props){
    const width = window.screen.width;

    const login = () => {
        if(props.repositories.login == null){

            return <a href={props.repositories.html_url} target="_blank"><p className="loginMargin">Not Available</p></a>;
        }else if(props.repositories.login.length < 20){
            
            if(width < 700 && props.repositories.login.includes(' ')){
                const compressed = props.repositories.login.split(" ");

                return <a href={props.repositories.html_url} target="_blank"><p className="loginMargin">{compressed[0]}</p></a>;
            }else if(width < 700 && props.repositories.login.includes('-')){
                const compressed = props.repositories.login.split("-");

                return <a href={props.repositories.html_url} target="_blank"><p className="loginMargin">{compressed[0]}</p></a>;
            }else{
                return <a href={props.repositories.html_url} target="_blank"><p className="loginMargin">{props.repositories.login}</p></a>;
            }

        }else{
            const initialsValues = props.repositories.login.split(" ");

            return <a href={props.repositories.html_url} target="_blank"><p className="loginMargin">{initialsValues[0]}</p></a>;
        }
    }

    return <>{login()}</>;   
}