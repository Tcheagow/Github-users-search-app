import React from "react";
import Repos from './SubContainerTwoComponents/Repos'
import Followers from "./SubContainerTwoComponents/Followers";
import Following from "./SubContainerTwoComponents/Following";
import Location from "./SubContainerTwoComponents/Location";
import TwitterUsername from "./SubContainerTwoComponents/TwitterUsername";
import Blog from "./SubContainerTwoComponents/Blog";
import Company from "./SubContainerTwoComponents/Company";

export default function SubContainerOne(props){
    return(
        <div className="subContainerTwo">
            <div className="reposAndFollows">
                <Repos repositories={props.repositories}/>
                <Followers repositories={props.repositories}/>
                <Following repositories={props.repositories}/>
            </div>
            <div className="divIcons">
                <div className="subDivIcons"> 
                    <Location repositories={props.repositories}/>
                    <TwitterUsername repositories={props.repositories}/>
                </div>
                <div className="subDivIcons">
                    <Blog repositories={props.repositories}/>
                    <Company repositories={props.repositories}/>
                </div>
            </div>
        </div>
    );
}