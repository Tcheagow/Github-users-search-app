import React from 'react';
import Button from './button';
import SearchIcon from './SearchIcon';

export default function search(){
    return(
        <div className='search'>
            <SearchIcon/>
            <input className='inputSearch' type="text" placeholder='Search GitHub Username'/>
            <Button/>
        </div>
    )
}