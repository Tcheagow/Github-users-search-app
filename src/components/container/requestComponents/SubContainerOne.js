import React from "react";
import Avatar from './SubContainerOneComponents/Avatar'
import Name from './SubContainerOneComponents/Name';
import Login from './SubContainerOneComponents/Login';
import Bio from './SubContainerOneComponents/Bio';
import Joined from "./SubContainerOneComponents/Joined";

export default function SubContainerOne(props){
    return(
        <div className="subContainerOne">
            <div className="nameLoginAndAvatar">
                <Avatar repositories={props.repositories}/>
                <div className="nameLogin">
                    <Name repositories={props.repositories}/>
                    <Login repositories={props.repositories}/>
                    <Bio repositories={props.repositories}/>
                </div>
                <Joined repositories={props.repositories}/>
            </div>
        </div>
    );
}