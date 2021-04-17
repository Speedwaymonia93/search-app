import React from 'react';
import countriesData from '../../data/countries.json';
import '../../style/shared-style.css'
import countryIcon from '../../filter-icons/world.svg';

class CountryFilter extends React.Component{
    constructor(){
       super();

        this.state = {
            countryToggle: false,
            recipiesByCountry: ''
        }
        this.toggleCountry = this.toggleCountry.bind(this);
        this.searchByCountry = this.searchByCountry.bind(this);

        let filteredList = data.filter(
            (element)=> {
                return element.title.indexOf(search) !== -1;
            }
        );
    }

    searchByCountry(e){
        this.setState({ recipiesByCountry:e.target.id})
        console.log(this.state.recipiesByCountry);
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
                                     <li key={country.id} id={country.id} onClick={this.searchByCountry} 
                                     className="list-element-style">
                                    <img src={country.img} className="img-style"/>{country.name}</li>
                            )
                        }) : null
                    }
                </ul>
            </div>
            <Recipie />
            </>
        )
    }
}

export default CountryFilter