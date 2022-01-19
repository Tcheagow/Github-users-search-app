import React from 'react';

export default function Avatar(props){
    const avatarUrl = props.repositories.avatar_url;

    return(
        <div className='avatar'>
            <img className='avatarUrl' src={avatarUrl}/>
        </div>
    );
}