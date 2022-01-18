import React from 'react';
import Button from './Button';
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