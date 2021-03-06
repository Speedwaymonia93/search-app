import React from 'react';
import vegetablesData from '../../data/vegetables.json';
import '../../style/shared-style.css';
import vegetableIcon from '../../filter-icons/harvest.svg'
class VegetableFilter extends React.Component{
    constructor(){
        super();

        this.state = {
            vegetableToggle: false
        }
        this.toggleVegetable = this.toggleVegetable.bind(this);
    }

    toggleVegetable(){
        this.setState(prevState =>({
            vegetableToggle: !prevState.vegetableToggle
        }));
    }

    render(){
        return(
            <>
            <div className="filter-element-style">
                <h3 className="h3-style" onClick={this.toggleVegetable}><img src={vegetableIcon} className="img-filter-style" />Vegetable</h3>
                <ul className="list-style" togglevegetable={this.state.vegetableToggle}>
                    {
                        this.state.vegetableToggle ?
                        vegetablesData.map((vegetable) =>{
                            return(
                                <li className="list-element-style" key={vegetable.id}><img src={vegetable.img} className="img-style"/>{vegetable.name}</li>
                            )
                        }) : null
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default VegetableFilter