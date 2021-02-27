import React from 'react';
import countriesData from '../../data/countries.json';
import '../../style/shared-style.css'
function CountryFilter(){

    return(
        <>
        <div>
            <h3 className="h3-style">Country</h3>
            <ul className="list-style" >
                {
                    countriesData.map((country)=>{
                        return(
                            <li className="list-element-style" key={country.id}><img src={country.img} className="img-style"/>{country.name}</li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}
export default CountryFilter