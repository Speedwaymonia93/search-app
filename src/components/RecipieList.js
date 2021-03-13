import React from 'react';
import Recipie from '../components/Recipie';
import recipiesData from '../data/recipies.json';

class RecipieList extends React.Component{
    constructor(){
        super();
this.state = {
    recipiesList: recipiesData
}
    }

    render(){
//console.log(this.state.recipiesList)
        return(
            <>
                 <div>
                     { 
                         recipiesData.map((recipie)=>{
                            return  <Recipie recipie={this.state.recipiesList} key={recipie.id}/>
                         })
                     }
                    
                 </div>
            </>
        )
    }
}

export default RecipieList