import React from "react";
import XSvg from "./containerErrorIcon/XSvg";

export default function ContainerError(){
    return(
        <div className="containerError">
            <h1>Invalid user name</h1>
            <XSvg/>
        </div>
    );
}