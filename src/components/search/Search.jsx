import React from 'react';
import SearchIcon from './SearchIcon';

export default function Search(props){
    function nickNamer(e){
        e.preventDefault();

        if(props.nick !== ""){
            props.setClick(true);    
        }
    }

    return(
        <div className='search'>
            <form className='searchForm' onSubmit={nickNamer}>
                <SearchIcon/>
                <input className='inputSearch' value={props.nick} type="text" placeholder='Search GitHub Username'
                    onChange={(e)=> props.setNick(e.target.value)}
                />
                <input className='buttonSearch' type='submit' value='Search'></input>
            </form>
        </div>
    );
}