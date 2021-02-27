import React from 'react';
import cuisineData from '../../data/cuisine.json';
import '../../style/shared-style.css';
function CuisineFilter(){

    return(
        <>
        <div>
            <h3 className="h3-style">Cuisine</h3>
            <ul className="list-style">
                {
                    cuisineData.map((cuisine)=>{
                        return(
                            <li className="list-element-style" key={cuisine.id}><img src={cuisine.img} className="img-style" />{cuisine.name}</li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}
export default CuisineFilter