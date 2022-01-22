import React from 'react';

export default function Repos(props){
    const reposPublic = props.repositories.public_repos;
    
    return (
        <div className='followsAndReposFormate'>
            <h2>Repos</h2>
            <p>{reposPublic}</p>
        </div>    
    );
}