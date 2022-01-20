import React from "react";

export default function Blog(props){
    const blog = () => {
        if(props.repositories.blog == null){
            return <p className="">Not Available</p>
        }else{
            return <p className="">{props.repositories.blog}</p>;
        }
    }

    return <>{blog()}</>;
}