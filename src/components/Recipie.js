import React from 'react';
import reciepiesList from '../data/recipies.json';

function Recipie(){

    return(
        <>
             <div>
                  {
                      reciepiesList.map((recipie)=>{
                          return(
                              <div>
                                  <p>{recipie.title}</p>
                                  <p>{recipie.ingredients}</p>
                                  <p>{recipie.country}</p>
                              </div>
                          )
                      })
                  }
                  
             </div>
        </>
    )
}


export default Recipie