import React from 'react';
import '../style/recipie-style.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cooking from "../filter-icons/cooking.svg";
import rec from "../filter-icons/image-rec-1.svg";
const Recipie = ({title, rating,ingredients, description, url, steps}) => {
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
            <h3 className="header-rec-style">
            <img style={{width:'50px', height:'50px', marginRight: '10px'}} src={rec} />
                Ingredients:</h3>
            <ul className="unordered-list-ingr-style">
            {
                ingredients.map((ingredient) => {
                    return(
                        <li key={ingredient+'1'}>{ingredient}</li>
                    )
                })
            }
            </ul>
            <h3 className="header-rec-style">
            <img style={{width:'50px', height:'50px', marginRight: '10px'}} src={cooking} />Steps:</h3>
            <ol className="ordered-list-ingr-style">
                {
                    steps.map((step) =>{
                        return(
                            <li key={step+'1'}>{step}</li>
                        )
                    })
                }
            </ol>
            {/*<button className="search-button" type="submit">More details</button>*/}
           
        </div>
    )
}


export default Recipie