import React from 'react';
import SubContainerOne from './requestComponents/SubContainerOne';

export default function Container(props){
  /*  const resposPublic = props.repositories.public_repos;
    const location = props.repositories.location;
    const followers = props.repositories.followers;
    const following = props.repositories.following;
    const company = props.repositories.company;
    const twitterUsername = props.repositories.twitter_username;
    const blog = props.repositories.blog;*/
    
    return(
        <div className='containerSearch'>
            <>
                <SubContainerOne repositories={props.repositories}/>
            </>
        </div>
    );
}