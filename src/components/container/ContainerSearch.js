import React from 'react';
import Avatar from './Avatar';

export default function Container(props){
    const login = props.repositories.login;
    //const avatarUrl = props.repositories.avatarUrl;
    const resposPublic = props.repositories.public_repos;
    const location = props.repositories.location;
    const followers = props.repositories.followers;
    const following = props.repositories.following;
    const company = props.repositories.company;
    const bio = props.repositories.bio;
    const twitterUsername = props.repositories.twitter_username;
    const blog = props.repositories.blog;
    const error = props.repositories.message;
    
    return(
        <div className='containerSearch'>
            <>
                <Avatar repositories={props.repositories}/>
            </>
        </div>
    );
}