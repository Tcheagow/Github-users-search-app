import React, { useState } from 'react';
import SearchIcon from './SearchIcon';

export default function Search(){
    function nickNamer(e){
        //querySelectorById("#input").value = "";
        e.preventDefault();
        console.log(nick);
        setNick("");
    }

    const [nick, setNick] = useState("");

    return(
        <div className='search'>
            <form className='search' onSubmit={nickNamer}>
                <SearchIcon/>
                <input className='inputSearch' value={nick} type="text" placeholder='Search GitHub Username'
                    onChange={(e)=> setNick(e.target.value)}
                />
                <input className='buttonSearch' type='submit' value='Search'></input>
            </form>
        </div>
    );
}