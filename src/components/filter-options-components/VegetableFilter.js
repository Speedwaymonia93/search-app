import React from 'react';
import vegetablesData from '../../data/vegetables.json';
import '../../style/shared-style.css';
function VegetableFilter(){

    return(
        <>
        <div>
            <h3 className="h3-style">Vegetable</h3>
            <ul className="list-style">
                {
                    vegetablesData.map((vegetable) =>{
                        return(
                            <li className="list-element-style" key={vegetable.id}><img src={vegetable.img} className="img-style"/>{vegetable.name}</li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}
export default VegetableFilter