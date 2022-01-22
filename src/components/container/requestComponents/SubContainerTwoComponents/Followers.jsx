import React from 'react';

export default function Followers(props){
    const followers = props.repositories.followers;
    
    return (
        <div className='followsAndReposFormate'>
            <h2>Followers</h2>
            <p>{followers}</p>
        </div>    
    );
}