import React from 'react';
import '../style/search-bar-style.css';
function SearchBar(){
return(
    <>
    <div>
        <form className="form-style"> 
            <input className="search-bar" type="text"></input>
            <button className="search-button" type="submit">Show recipie</button>
        </form>
    </div>
    </>
)
}

export default SearchBar