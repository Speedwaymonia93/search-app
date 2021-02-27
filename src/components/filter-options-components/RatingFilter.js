import React from 'react';
import ratingData from '../../data/rating.json';
import '../../style/shared-style.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RatingFilter(){

    return(
        <>
        <div>
            <h3 className="h3-style">Rating</h3>
            <ul className="list-style">
                {
                    ratingData.map((rating) =>{
                        return(
                            <li className="list-element-style" key={rating.id}>
                                {
                                    [...Array(rating.number).keys()].map(()=><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>)
                                }
                                
                                {rating.number}</li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}
export default RatingFilter