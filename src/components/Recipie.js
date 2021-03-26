import React from 'react';
import '../style/recipie-style.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Recipie = ({title, rating,ingredients, description, url}) => {
    return(
        <div className="recipie-element">
            <h1 className="recipie-title">{title}</h1>
            <img className="recipie-img-style" src={url} />
            <p>
                {
                    [...Array(rating).keys()].map(()=><FontAwesomeIcon style={{color:"#ffcc00"}} icon={faStar}></FontAwesomeIcon>)
                }
            </p>
            <p className="recipie-description">{description}</p>
            <ul>
            {
                ingredients.map((ingredient) => {
                    return(
                        <li key={ingredient+'1'}>{ingredient}</li>
                    )
                })
            }
            </ul>
            <button className="search-button" type="submit">More details</button>
        </div>
    )
}


export default Recipie