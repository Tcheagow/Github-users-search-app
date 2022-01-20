import React from "react";
import Repos from './SubContainerTwoComponents/Repos'
import Followers from "./SubContainerTwoComponents/Followers";
import Following from "./SubContainerTwoComponents/Following";

export default function SubContainerOne(props){
    return(
        <div className="subContainerTwo">
            <div className="reposAndFollows">
                <Repos repositories={props.repositories}/>
                <Followers repositories={props.repositories}/>
                <Following repositories={props.repositories}/>
            </div>
            <div className="icons">

            </div>
        </div>
    );
}