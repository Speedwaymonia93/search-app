import React from 'react';
import cuisineData from '../../data/cuisine.json';
import '../../style/shared-style.css';
import cuisineIcon from  '../../filter-icons/cuisine.svg'; 
class CuisineFilter extends React.Component{
    constructor(){
        super();

        this.state = {
            cuisineToggle: false
        }
        this.toggleCuisine = this.toggleCuisine.bind(this);
    }

    toggleCuisine(){
        this.setState(prevState =>({
            cuisineToggle: !prevState.cuisineToggle
        }));
    }

    render(){
        return(
            <>
            <div className="filter-element-style">
                <h3 className="h3-style" onClick={this.toggleCuisine}><img src={cuisineIcon} className="img-filter-style" />Cuisine</h3>
                <ul className="list-style" cuisinetoggle={this.state.cuisineToggle}>
                    {
                        this.state.cuisineToggle ?
                        cuisineData.map((cuisine)=>{
                            return(
                                <li className="list-element-style" key={cuisine.id}><img src={cuisine.img} className="img-style" />{cuisine.name}</li>
                            )
                        }) : null
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default CuisineFilter