import React from "react";
import BlogSvg from "./Icons/BlogSvg";


export default function Blog(props){
    const blog = () => {
        if(props.repositories.blog === ""){
            return (
                <div className="iconAndP lengthBlogAndLocation">
                    <BlogSvg/>
                    <p>Not Available</p>
                </div>);
        }else{
            return (
                <div className="iconAndP lengthBlogAndLocation">
                    <BlogSvg/>
                    <p>{props.repositories.blog}</p>
                </div>);
        }
    }

    return <>{blog()}</>;
}