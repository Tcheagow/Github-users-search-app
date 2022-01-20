import React from 'react';

export default function Following(props){
    const following = props.repositories.following;
    
    return (
        <div className='followsAndReposFormate'>
            <h2>Following</h2>
            <p>{following}</p>
        </div>    
    );
}