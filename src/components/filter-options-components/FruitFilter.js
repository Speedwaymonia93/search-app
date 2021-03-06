import React from 'react';
import fruitData from '../../data/fruits.json';
import '../../style/shared-style.css';
import fruitIcon from  '../../filter-icons/fruits.svg'; 

class FruitFilter extends React.Component{
    constructor(){
        super();

        this.state = {
            fruitToggle: false,
        }

        this.toggleFruit = this.toggleFruit.bind(this);
    }

    toggleFruit(){
        this.setState(prevState =>({
            fruitToggle: !prevState.fruitToggle
        }));
    }

    render(){
        return(
            <>
            <div className="filter-element-style">
                <h3 className="h3-style" onClick={this.toggleFruit}><img src={fruitIcon} className="img-filter-style" />Fruit</h3>
                <ul className="list-style" fruittoggle={this.state.fruitToggle}>
                    {
                        this.state.fruitToggle ?
                        fruitData.map((fruit)=>{
                            return(
                                <li className="list-element-style" key={fruit.id}><img src={fruit.img} className="img-style"/>{fruit.name}</li>
                            )
                        }) : null
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default FruitFilter