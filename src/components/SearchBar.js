import React, { useEffect, useState } from 'react';
import '../style/search-bar-style.css';
import Recipie from './Recipie';
const SearchBar = ({data}) => {

    const [search, setSearch] = useState('');
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    
    let filteredList = data.filter(
        (element)=> {
            return element.title.indexOf(search) !== -1;
        }
    );
    
    return(
        <>
        <div>
            
            <form className="form-style"> 
                <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
                {/* <button className="search-button" type="submit" onClick={getTest}>Show recipie</button> */}
            </form>
            <div className="recipie-container">
            {
                filteredList.map((element) => {
                    return(
                            <Recipie title={element.title} key={element.id} 
                            rating={element.rating} 
                            ingredients={element.ingredients}
                            description={element.description}
                            url={element.url}/>
                        )
                })
            }
            </div>
            
        </div>
        </>
    )
}

export default SearchBar