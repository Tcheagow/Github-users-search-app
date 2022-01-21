import React from "react";
import GifDark from './GifDark.gif';
import GifLight from './GifWhite.gif';

export default function GifContainerNoSearch(props){
    const gif = () => {
        if(props.white === true){
            return <img className="gifSearch" src={GifLight} alt="gif search light"/>
        }else{
            return <img className="gifSearch" src={GifDark} alt="gif search dark"/>;
        }
    }

    return (
       <>{gif()}</>
    );
}