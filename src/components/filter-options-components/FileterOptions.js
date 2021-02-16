import React from 'react';
import FruitFilter from './FruitFilter';
import MeatFilter from './MeatFilter';
import VegetableFilter from './VegetableFilter';
import CountryFilter from './CountryFilter';
import RatingFilter from './RatingFilter';
import CuisineFilter from './Cuisine';
function FilterOptions(){
return(
    <>
    <div className="filter-container">
        <MeatFilter />
        <VegetableFilter />
        <FruitFilter />
        <CountryFilter />
        <RatingFilter />
        <CuisineFilter />

    </div>
   
    </>
)
}

export default FilterOptions