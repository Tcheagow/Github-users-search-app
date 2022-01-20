import React from 'react';
import SubContainerOne from './requestComponents/SubContainerOne';
import SubContainerTwo from './requestComponents/SubContainerTwo';

export default function Container(props){
  /* const location = props.repositories.location;
    const followers = props.repositories.followers;
    const following = props.repositories.following;
    const company = props.repositories.company;
    const twitterUsername = props.repositories.twitter_username;
    const blog = props.repositories.blog;*/
    
    return(
        <div className='containerSearch'>
            <>
                <SubContainerOne repositories={props.repositories}/>
                <SubContainerTwo repositories={props.repositories}/>
            </>
        </div>
    );
}