import React from 'react';

export default function Avatar(props){
    const avatarUrl = props.repositories.avatar_url;
    
    return <img className='avatar' src={avatarUrl}/>;
}