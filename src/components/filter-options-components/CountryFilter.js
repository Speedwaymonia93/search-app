import React from 'react';
import countriesData from '../../data/countries.json';
import '../../style/shared-style.css'
import countryIcon from '../../filter-icons/world.svg';
import recipiesData from '../../data/recipies.json';
import Recipie from '../Recipie';
class CountryFilter extends React.Component{
    constructor(){
       super();

        this.state = {
            countryToggle: false,
            recipiesByCountry: '',
            arr: []
        }
        this.toggleCountry = this.toggleCountry.bind(this);
        this.searchByCountry = this.searchByCountry.bind(this);    
    }
    

    searchByCountry(e){
        this.setState({ recipiesByCountry:e.target.name})
        console.log(this.state.recipiesByCountry);
         let arr = recipiesData.filter(
            (element) => {
                return element.country.indexOf(this.state.recipiesByCountry.name)!==-1
            }
        );
        
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
                                     <li key={country.id} id={country.id} name={country.name} onClick={this.searchByCountry} 
                                     className="list-element-style">
                                    <img src={country.img} className="img-style"/>{country.name}</li>
                            )
                        }) : null
                    }
                </ul>
            </div>
           
           <div>
               {
                   arr.map((element) => {
                    return(
                        <Recipie title={element.title} key={element.id} 
                        rating={element.rating} 
                        ingredients={element.ingredients}
                        description={element.description}
                        url={element.url}
                        steps={element.steps}
                        id={element.id}
                        />
                    )
                   })
               }
           </div>
            </>
        )
    }
}

export default CountryFilter