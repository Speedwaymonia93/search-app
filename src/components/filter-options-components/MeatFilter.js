import React from 'react';
import meatData from '../../data/meat.json';
import '../../style/shared-style.css';
function MeatFilter(){

    return(
        <>
        <div>
            <h3 className="h3-style">Meat</h3>
            <ul className="list-style">
               {
                meatData.map((meat) => {
                    return(
                        <li className="list-element-style" key={meat.id}><img className="img-style" src={meat.img}/>{meat.name}</li>
                    )
                })
               }
            </ul>
        </div>
        </>
    )
}
export default MeatFilter