import React from "react";
import Avatar from './SubContainerOneComponents/Avatar'
import Name from './SubContainerOneComponents/Name';
import Login from './SubContainerOneComponents/Login';
import Bio from './SubContainerOneComponents/Bio';
import Joined from "./SubContainerOneComponents/Joined";
//<Bio repositories={props.repositories}/>
export default function SubContainerOne(props){
    return(
        <>
            <div className="subContainerOne">
                <Avatar repositories={props.repositories}/>
                <div className="nameLoginAndJoined">
                    <div className="nameLogin">
                        <Name repositories={props.repositories}/>
                        <Login repositories={props.repositories}/>
                    </div>
                        <Joined repositories={props.repositories}/>
                </div>
            </div>
            <div className="bio">
                <Bio repositories={props.repositories}/>
            </div>
        </>
    );
}