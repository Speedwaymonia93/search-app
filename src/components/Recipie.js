import React from 'react';

const Recipie = ({title, rating,ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{rating}</p>
            <ul>
            {
                ingredients.map((ingredient) => {
                    return(
                        <li>{ingredient}</li>
                    )
                })
            }
            </ul>
           
        </div>
    )
}


export default Recipie