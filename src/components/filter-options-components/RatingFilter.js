import React from 'react';
import ratingData from '../../data/rating.json';
import '../../style/shared-style.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ratingIcon from '../../filter-icons/star.svg';

class RatingFilter extends React.Component{
    constructor(){
        super();

        this.state = {
            ratingToggle: false
        }
        this.toggleRating = this.toggleRating.bind(this);
    }

    toggleRating(){
        this.setState(prevState =>({
            ratingToggle: !prevState.ratingToggle
        }));
    }

    render(){
        return(
            <>
            <div className="filter-element-style">
                <h3 className="h3-style" onClick={this.toggleRating}><img src={ratingIcon} className="img-filter-style" />Rating</h3>
                <ul className="list-style" ratingtoggle={this.state.ratingToggle}>
                    {
                        this.state.ratingToggle ?
                        ratingData.map((rating) =>{
                            return(
                                <li className="list-element-style" key={rating.id}>
                                    {
                                        [...Array(rating.number).keys()].map(()=><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>)
                                    }
                                    
                                    {rating.number}</li>
                            )
                        }) : null
                    }
                </ul>
            </div>
            </>
        )
    }
}

export default RatingFilter