import React from 'react';
import fruitData from '../../data/fruits.json';
import '../../style/shared-style.css';
function FruitFilter(){

    return(
        <>
        <div>
            <h3 className="h3-style">Fruit</h3>
            <ul className="list-style">
                {
                    fruitData.map((fruit)=>{
                        return(
                            <li className="list-element-style" key={fruit.id}><img src={fruit.img} className="img-style"/>{fruit.name}</li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}
export default FruitFilter