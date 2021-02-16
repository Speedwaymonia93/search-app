import React from 'react';

function SearchBar(){
return(
    <>
        <form>
            <input className="search-bar" type="text"></input>
            <button className="search-button" type="submit">Show recipie</button>
        </form>
    </>
)
}

export default SearchBar