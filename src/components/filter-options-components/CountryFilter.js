import React from 'react';
import countriesData from '../../data/countries.json';
import '../../style/shared-style.css'
import countryIcon from '../../filter-icons/world.svg';

class CountryFilter extends React.Component{
    constructor(){
        super();

        this.state = {
            countryToggle: false,
        }
        this.toggleCountry = this.toggleCountry.bind(this);
    }

    toggleCountry(){
        this.setState(prevState =>({
            countryToggle: !prevState.countryToggle
        }));
    }

    render(){
        return(
            <>
            <div className="filter-element-style">
                <h3 className="h3-style" onClick={this.toggleCountry}><img src={countryIcon} className="img-filter-style" />Country</h3>
                <ul className="list-style" countrytoggle={this.state.countryToggle}>
                    {
                        this.state.countryToggle ?
                        countriesData.map((country)=>{
                            return(
                                <li className="list-element-style" key={country.id}><img src={country.img} className="img-style"/>{country.name}</li>
                            )
                        }) : null
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default CountryFilter