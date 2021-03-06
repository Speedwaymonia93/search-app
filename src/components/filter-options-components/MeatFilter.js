import React from 'react';
import meatData from '../../data/meat.json';
import '../../style/shared-style.css';
import meatIcon from '../../filter-icons/meat.svg'

class MeatFilter extends React.Component{
    constructor(){
        super();

        this.state = {
            meatToggle: false
        }
        this.toggleMeat = this.toggleMeat.bind(this);
    }

    toggleMeat(){
        this.setState(prevState =>({
            meatToggle: !prevState.meatToggle
        }));
    }

    render(){
        return(
            <>
            <div className="filter-element-style">
                <h3 className="h3-style" onClick={this.toggleMeat}><img src={meatIcon} className="img-filter-style"/>Meat</h3>
                <ul className="list-style" meattoggle={this.state.meatToggle}>
                   {
                       this.state.meatToggle ?
                    meatData.map((meat) => {
                        return(
                            <li className="list-element-style" key={meat.id}><img className="img-style" src={meat.img}/>{meat.name}</li>
                        )
                    }) : null
                   }
                </ul>
            </div>
            </>
        )
    }
}

export default MeatFilter